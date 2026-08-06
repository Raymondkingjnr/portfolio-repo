"use client";
import { Section } from "@/components";
import { GitBranch, Star, GitFork } from "lucide-react";
import PopInSection from "@/components/pop-in-section";
import { m } from "framer-motion";
import { useGithubData } from "@/api/github-repo";
import { GITHUB_USERNAME } from "@/lib/constant";

export const GitHubActivity = () => {
  const { repos, languages, stats, isLoading, error } =
    useGithubData(GITHUB_USERNAME);

  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title={
        <>
          Consistent{" "}
          <em className="text-gradient-gold not-italic">daily practice</em>.
        </>
      }
      description="Public work, open-source contributions, and a lot of small learning experiments."
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Heatmap */}
        <PopInSection className="glass hidden md:block rounded-md p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              {/* Contributions require GitHub's GraphQL API + an auth
                                token, which can't run client-side. Keeping this
                                static until that's wired up via a server route. */}
              <div className="font-display text-2xl">1,284 contributions</div>
              <div className="text-xs text-muted-foreground">
                in the last year
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>Less</span>
              {[0.1, 0.3, 0.55, 0.8, 1].map((o) => (
                <span
                  key={o}
                  className="h-3 w-3 rounded-sm"
                  style={{
                    background: `color-mix(in oklab, var(--gold) ${o * 100}%, transparent)`,
                  }}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { l: "Longest streak", v: "48 days" }, // static — needs GraphQL
              { l: "Best day", v: "37 commits" }, // static — needs GraphQL
              { l: "Repos", v: isLoading ? "…" : (stats?.publicRepos ?? "—") },
              {
                l: "Followers",
                v: isLoading ? "…" : (stats?.followers ?? "—"),
              },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-white/5 bg-white/2 p-3"
              >
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
                <div className="mt-1 font-display text-lg">{s.v}</div>
              </div>
            ))}
          </div>
        </PopInSection>

        {/* Languages */}
        <PopInSection className="glass rounded-md p-6">
          <div className="font-display text-2xl">Languages</div>
          {isLoading ?
            <div className="mt-4 h-3 animate-pulse rounded-full bg-white/5" />
          : <div className="mt-4 flex h-3 overflow-hidden rounded-full">
              {languages.map((l) => (
                <m.div
                  key={l.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ background: l.color }}
                />
              ))}
            </div>
          }
          <ul className="mt-5 space-y-2 text-sm">
            {(isLoading ? [] : languages).map((l) => (
              <li key={l.name} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: l.color }}
                  />
                  {l.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {l.pct}%
                </span>
              </li>
            ))}
          </ul>
        </PopInSection>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {(isLoading ? [1, 2, 3] : repos).map((r, i) =>
          isLoading ?
            <div
              key={i}
              className="glass rounded-md p-5 h-[140px] animate-pulse"
            />
          : <a
              key={(r as any).name}
              href={(r as any).url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PopInSection className="glass group block rounded-md p-5 transition-all hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)]">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <GitBranch className="h-4 w-4 text-[var(--gold)]" />
                  <span className="group-hover:text-gold-soft">
                    {(r as any).name}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {(r as any).desc}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{(r as any).lang}</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {(r as any).stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" /> {(r as any).forks}
                  </span>
                </div>
              </PopInSection>
            </a>,
        )}
      </div>

      {error && (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Couldn&apos;t load live GitHub data — showing cached or fallback
          content.
        </p>
      )}
    </Section>
  );
};
