import { Section } from "@/components/section";
import { Layers, Gauge, Sparkles, Accessibility, Rocket, Code2 } from "lucide-react";
import PopInSection from "@/components/pop-in-section";

const pillars = [
    { icon: Layers, title: "Clean architecture", body: "Boundaries that survive team growth. Components that compose, don't collide." },
    { icon: Gauge, title: "Performance first", body: "Frame budgets, bundle audits, and Core Web Vitals treated as product requirements." },
    { icon: Sparkles, title: "Developer experience", body: "Type-safe APIs, generators, and design tokens that make the right thing easy." },
    { icon: Code2, title: "Component-driven", body: "Small primitives, deliberate composition. Storybook when it earns its keep." },
    { icon: Accessibility, title: "Accessible by default", body: "Keyboard, screen reader, motion-safe. Accessibility as a design constraint, not a checklist." },
    { icon: Rocket, title: "Ship, then polish", body: "Real users beat perfect code. Instrument, learn, iterate — then refactor with confidence." },
];

export const  Philosophy =()=> {
    return (
        <Section
            id="philosophy"
            eyebrow="Engineering Philosophy"
            title={
                <>
                    Software people <em className="text-gradient-gold not-italic">actually use</em>.
                </>
            }
            description="The principles I keep coming back to after four years of shipping product. Held loosely, revised often."
        >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.map((p, i) => (
                    <PopInSection
                        key={i}
                        className="glass group relative overflow-hidden rounded-md p-4 transition-transform hover:-translate-y-1"
                    >
                        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-(--gold)/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--gold)_15%,transparent)] text-gold">
                            <p.icon className="h-5 w-5" />
                        </div>
                        <h3 className=" font-semibold text-base mdtext-xl tracking-tight">{p.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                    </PopInSection>
                ))}
            </div>
        </Section>
    );
}
