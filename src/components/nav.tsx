"use client"
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Nav =()=> {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setScrolled(window.scrollY > 30);
            setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
        };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!mobileOpen) return;

        const onResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [mobileOpen]);

    return (
        <>
            <div
                style={{ transform: `scaleX(${scrollProgress})` }}
                className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent transition-transform duration-100"
            />
            <header
                className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 motion-safe:animate-fade-up ${
                    scrolled ? "w-[min(920px,92%)]" : "w-[min(1080px,94%)]"
                }`}
            >
                <div className="glass flex items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
                    <a href="#top" className="flex items-center gap-2 text-sm font-medium">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gold)] font-mono text-xs text-[var(--primary-foreground)]">
              N
            </span>
                        <span className="hidden sm:inline">Nnaji.R</span>
                    </a>
                    <nav className="hidden items-center gap-1 md:flex">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="#contact"
                        className="hidden rounded-full bg-[var(--gold)] px-4 py-1.5 text-xs font-medium text-[var(--primary-foreground)] transition-transform hover:scale-[1.03] sm:inline-flex"
                    >
                        Get in touch
                    </a>
                    <button
                        type="button"
                        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((open) => !open)}
                        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10 md:hidden"
                    >
                        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
                    {mobileOpen && (
                        <nav
                            className="glass mt-3 overflow-hidden rounded-2xl p-2 motion-safe:animate-fade-up md:hidden"
                        >
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 flex items-center justify-center rounded-xl bg-[var(--gold)] px-4 py-3 text-sm font-medium text-[var(--primary-foreground)] transition-transform hover:scale-[1.01]"
                            >
                                Get in touch
                            </a>
                        </nav>
                    )}
            </header>
        </>
    );
}
