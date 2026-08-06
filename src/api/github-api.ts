"use client";
import { useEffect, useState } from "react";

interface GithubUser {
  login: string;
  name: string;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

interface UseGithubProfileResult {
  data: GithubUser | null;
  isLoading: boolean;
  error: string | null;
}

const CACHE_KEY = "github-profile-cache";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

export function useGithubProfile(username: string): UseGithubProfileResult {
  const [data, setData] = useState<GithubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProfile() {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data: cachedData, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TTL) {
            if (isMounted) {
              setData(cachedData);
              setIsLoading(false);
            }
            return;
          }
        }

        const res = await fetch(`https://api.github.com/users/${username}`);

        if (!res.ok) {
          throw new Error(
            res.status === 403 ?
              "GitHub rate limit reached"
            : "Failed to fetch GitHub profile",
          );
        }

        const json: GithubUser = await res.json();

        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: json, timestamp: Date.now() }),
        );

        if (isMounted) {
          setData(json);
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

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { data, isLoading, error };
}
