export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      className="flex min-h-screen w-full flex-col items-center justify-center px-5 text-center sm:px-8"
    >
      <div className="relative mb-6 h-12 w-12" aria-hidden="true">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[var(--gold)]" />
      </div>

      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        Loading
      </p>

      <span className="sr-only">Page is loading, please wait.</span>
    </main>
  );
}
