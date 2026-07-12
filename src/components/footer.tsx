import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer =()=> {
    return (
        <footer className="relative mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8">
            <div className="glass flex flex-col items-center justify-between gap-4 rounded-3xl p-6 sm:flex-row sm:p-8">
                <div>
                    <div className="font-display text-xl">Nnaji Arinzechukwu Raymond</div>
                    <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} · Crafted with care.</div>
                </div>
                <div className="flex items-center gap-2">
                    {[
                        { icon: Github, href: "https://github.com", label: "GitHub" },
                        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:hello@nnaji.dev", label: "Email" },
                    ].map((l) => (
                        <a
                            key={l.label}
                            aria-label={l.label}
                            href={l.href}
                            className="grid h-9 w-9 place-items-center rounded-full border border-white/5 text-muted-foreground transition-colors hover:border-[var(--gold)]/40 hover:text-[var(--gold)]"
                        >
                            <l.icon className="h-4 w-4" />
                        </a>
                    ))}
                    <a
                        href="#top"
                        aria-label="Back to top"
                        className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)] px-3.5 py-2 text-xs font-medium text-[var(--primary-foreground)] transition-transform hover:-translate-y-0.5"
                    >
                        <ArrowUp className="h-3.5 w-3.5" /> Back to top
                    </a>
                </div>
            </div>
        </footer>
    );
}
