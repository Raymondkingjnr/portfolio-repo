import { Section } from "@/components/section";
import PopInSection from "@/components/pop-in-section";

const steps = [
    { n: "01", t: "Research", d: "Understand users, constraints, and metrics that matter." },
    { n: "02", t: "Architecture", d: "Map data flow, boundaries, and technical unknowns early." },
    { n: "03", t: "Design", d: "Prototype interactions in code; validate with real content." },
    { n: "04", t: "Development", d: "Type-safe, tested, componentized — one PR at a time." },
    { n: "05", t: "Testing", d: "Unit, integration, and accessibility checks in CI." },
    { n: "06", t: "Deployment", d: "Preview per branch, progressive rollout, feature flags." },
    { n: "07", t: "Optimization", d: "Ship, measure Web Vitals, tighten the hot path." },
    { n: "08", t: "Monitoring", d: "Sentry, analytics, real user metrics — always on." },
    { n: "09", t: "Iteration", d: "Learn from usage, retire what doesn't earn its keep." },
];

export const Workflow =()=> {
    return (
        <Section
            id="workflow"
            eyebrow="How I Work"
            title={
                <>
                    From spec to <em className="text-gradient-gold not-italic">production</em>.
                </>
            }
        >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {steps.map((s) => (
                    <PopInSection
                        key={s.n}
                        className="glass group relative overflow-hidden rounded-md p-3 transition-all hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)]"
                    >
                        <div className="flex items-baseline justify-between">
                            <span className="text-xs text-muted-foreground">{s.n}</span>
                            <div className="h-px w-8 bg-(--gold)/40 transition-all group-hover:w-16" />
                        </div>
                        <div className="mt-3 font-semibold  text-lg md:text-xl tracking-tight">{s.t}</div>
                        <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                    </PopInSection>
                ))}
            </div>
        </Section>
    );
}
