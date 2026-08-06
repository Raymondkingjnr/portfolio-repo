import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-5 text-center sm:px-8">
      <div
        aria-hidden="true"
        className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-[color-mix(in_oklab,var(--gold)_6%,transparent)]"
      >
        <Compass className="h-7 w-7 text-[var(--gold)]" />
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        404
      </p>

      <h1 className="mt-4 text-3xl font-normal leading-tight tracking-tight sm:text-5xl">
        This page{" "}
        <em className="text-gradient-gold not-italic">wandered off</em>.
      </h1>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        The page you&apo;sre looking for doesn&apo;st exist, may have been
        moved, or the link might be outdated.
      </p>

      <Link
        href="/"
        className="mt-8 flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to home
      </Link>
    </main>
  );
}
