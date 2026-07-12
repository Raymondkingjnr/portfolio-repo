import {Section} from "@/components/section";
import PopInSection from "@/components/pop-in-section";

const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "15+", label: "Projects Built" },
    { value: "1000+", label: "Git Commits" },
    { value: "∞", label: "Production Apps" },
];

export const About =() => {
    return (
        <Section
            id="about"
            eyebrow="About"
            title={
                <>
                    Engineering polished frontends <em className="text-gradient-gold not-italic">since 2021</em>.
                </>
            }
        >
            <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
                <div className="space-y-6 text-xs leading-relaxed text-muted-foreground sm:text-lg">
                    <p>
                        Over the last four years I&#39;ve built production-grade frontend applications with a
                        singular focus on <span className="text-foreground">performance, accessibility, and reusable architecture</span>.
                        I care about the seams of software — the design tokens, the loading states, the empty screens,
                        the type boundaries — because that&#39;s where great products are made or unmade.
                    </p>
                    <p>
                        I&#39;ve shipped AI-powered mobile apps, real-time travel booking platforms, marketplaces, and
                        dashboards used every day. I enjoy solving the hard problems: integrating complex APIs,
                        taming state, hitting Lighthouse scores in the high 90s, and shaping component systems that
                        teams can move fast on without breaking things.
                    </p>
                    <p className="text-foreground">
                        Code should be inevitable, not clever. Interfaces should feel obvious, not decorated.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {stats.map((s, i) => (
                        <PopInSection
                            key={i}
                            className="glass group relative overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 -z-10 bg-linear-to-br from-[color-mix(in_oklab,var(--gold)_10%,transparent)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="font-display text-4xl text-gradient-gold sm:text-5xl">{s.value}</div>
                            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                        </PopInSection>
                    ))}
                </div>
            </div>
        </Section>
    )
}
