"use client";
import { useEffect, useState } from "react";

interface Repo {
  name: string;
  desc: string;
  lang: string;
  stars: number;
  forks: number;
  url: string;
}

interface Language {
  name: string;
  pct: number;
  color: string;
}

interface GithubStats {
  publicRepos: number;
  followers: number;
}

interface UseGithubDataResult {
  repos: Repo[];
  languages: Language[];
  stats: GithubStats | null;
  isLoading: boolean;
  error: string | null;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "oklch(0.7 0.15 240)",
  JavaScript: "oklch(0.82 0.13 85)",
  SCSS: "oklch(0.7 0.15 340)",
  CSS: "oklch(0.7 0.15 340)",
  HTML: "oklch(0.75 0.12 30)",
  Python: "oklch(0.75 0.13 145)",
  Shell: "oklch(0.6 0.05 260)",
};
const FALLBACK_COLOR = "oklch(0.6 0.02 260)";

const CACHE_KEY = "github-data-cache";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export function useGithubData(username: string): UseGithubDataResult {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchAll() {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL) {
            if (isMounted) {
              setRepos(parsed.repos);
              setLanguages(parsed.languages);
              setStats(parsed.stats);
              setIsLoading(false);
            }
            return;
          }
        }

        // 1. User profile (followers, public repo count)
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("Failed to fetch GitHub user");
        const userJson = await userRes.json();

        // 2. All repos, most recently updated first, excluding forks
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        );
        if (!reposRes.ok) throw new Error("Failed to fetch GitHub repos");
        const allRepos = (await reposRes.json()).filter((r: any) => !r.fork);

        // 3. Top 3 repos by stars for the repo cards
        const topRepos: Repo[] = [...allRepos]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 3)
          .map((r) => ({
            name: r.name,
            desc: r.description ?? "No description provided.",
            lang: r.language ?? "Unknown",
            stars: r.stargazers_count,
            forks: r.forks_count,
            url: r.html_url,
          }));

        // 4. Language breakdown — aggregate actual byte counts across
        // the 10 most recently updated repos (capped to protect the
        // unauthenticated 60 req/hr rate limit; per-repo /languages
        // is a separate call each).
        const sampleRepos = allRepos.slice(0, 10);
        const langTotals: Record<string, number> = {};

        await Promise.all(
          sampleRepos.map(async (r: any) => {
            const res = await fetch(
              `https://api.github.com/repos/${username}/${r.name}/languages`,
            );
            if (!res.ok) return;
            const data: Record<string, number> = await res.json();
            for (const [lang, bytes] of Object.entries(data)) {
              langTotals[lang] = (langTotals[lang] ?? 0) + bytes;
            }
          }),
        );

        const totalBytes = Object.values(langTotals).reduce((a, b) => a + b, 0);
        const sortedLangs = Object.entries(langTotals).sort(
          (a, b) => b[1] - a[1],
        );

        // Keep top 3 languages individually, bucket the rest into "Other"
        const topLangs = sortedLangs.slice(0, 3);
        const otherBytes = sortedLangs
          .slice(3)
          .reduce((sum, [, bytes]) => sum + bytes, 0);

        const languageBreakdown: Language[] = topLangs.map(([name, bytes]) => ({
          name,
          pct: totalBytes ? Math.round((bytes / totalBytes) * 100) : 0,
          color: LANG_COLORS[name] ?? FALLBACK_COLOR,
        }));

        if (otherBytes > 0 && totalBytes) {
          languageBreakdown.push({
            name: "Other",
            pct: Math.round((otherBytes / totalBytes) * 100),
            color: FALLBACK_COLOR,
          });
        }

        const statsResult: GithubStats = {
          publicRepos: userJson.public_repos,
          followers: userJson.followers,
        };

        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            repos: topRepos,
            languages: languageBreakdown,
            stats: statsResult,
            timestamp: Date.now(),
          }),
        );

        if (isMounted) {
          setRepos(topRepos);
          setLanguages(languageBreakdown);
          setStats(statsResult);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Something went wrong");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchAll();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { repos, languages, stats, isLoading, error };
}
