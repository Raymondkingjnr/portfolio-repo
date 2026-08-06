"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to your monitoring service (Sentry, etc.) instead of console
    // in production — left as console.error as a visible placeholder.
    console.error(error);
  }, [error]);

  return (
    <main
      role="alert"
      aria-live="assertive"
      className="flex min-h-screen w-full flex-col items-center justify-center px-5 text-center sm:px-8"
    >
      <div
        aria-hidden="true"
        className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-[color-mix(in_oklab,var(--gold)_6%,transparent)]"
      >
        <AlertTriangle className="h-7 w-7 text-[var(--gold)]" />
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Something broke
      </p>

      <h1 className="mt-4 text-3xl font-normal leading-tight tracking-tight sm:text-5xl">
        An unexpected <em className="text-gradient-gold not-italic">error</em>{" "}
        occurred.
      </h1>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        Something went wrong while loading this page. You can try again, or head
        back to the homepage.
      </p>

      {/* Only useful in development — remove or gate behind an env
          check before shipping to production if you don't want raw
          error messages visible to visitors. */}
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-4 max-w-lg overflow-x-auto rounded-lg border border-white/10 bg-white/5 p-3 text-left text-xs text-muted-foreground">
          {error.message}
        </pre>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-xl bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <RefreshCcw className="h-4 w-4" aria-hidden="true" />
          Try again
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Go home
        </Link>
      </div>
    </main>
  );
}
