"use client";
import { m } from "framer-motion";
import { Activity, TrendingUp, Code2, GitBranch } from "lucide-react";

export const HeroDashboard = ()=> {
    return (
        <div className="relative mx-auto aspect-4/5 w-full max-w-md lg:max-w-none">
            {/* glow */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_60%)] blur-2xl" />

            {/* Code snippet card */}
            <m.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute left-0 top-4 w-[78%] rounded-2xl p-4 shadow-2xl"
                style={{ transform: "rotate(-3deg)" }}
            >
                <div className="mb-3 flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    <span className="ml-2 font-mono text-[10px] text-muted-foreground">use-portfolio.ts</span>
                </div>
                <pre className="font-mono text-[11px] leading-relaxed text-muted-foreground">
{`export const `}<span className="text-gold-soft">useShip</span>{` = () => {
  const [state, setState] = `}<span className="text-gold-soft">useState</span>{`();
  return `}<span className="text-gold-soft">{`{ ship, state }`}</span>{`;
}`}
        </pre>
            </m.div>
            <m.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="glass absolute right-0 top-24 w-[62%] rounded-2xl p-4 shadow-2xl"
                style={{ transform: "rotate(4deg)" }}
            >
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Performance</span>
                    <TrendingUp className="h-3.5 w-3.5 text-gold" />
                </div>
                <div className="mb-1 font-display text-3xl text-gradient-gold">98.4</div>
                <div className="text-[10px] text-muted-foreground">Lighthouse · +12% MoM</div>
                <div className="mt-3 flex h-10 items-end gap-1">
                    {[40, 65, 45, 78, 55, 88, 72, 95, 82, 100].map((h, i) => (
                        <m.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.8 + i * 0.05, duration: 0.6 }}
                            className="flex-1 rounded-t bg-linear-to-t from-gold-deep to-gold"
                        />
                    ))}
                </div>
            </m.div>

            {/* Contribution heatmap */}
            <m.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="glass absolute bottom-16 left-4 w-[72%] rounded-2xl p-4 shadow-2xl"
                style={{ transform: "rotate(2deg)" }}
            >
                <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            <GitBranch className="h-3 w-3" /> 1,284 commits
          </span>
                    <span className="text-[10px] text-[var(--gold)]">this year</span>
                </div>
                <div className="grid grid-cols-[repeat(20,1fr)] gap-[3px]">
                    {Array.from({ length: 100 }).map((_, i) => {
                        const lvl = Math.floor(Math.random() * 5);
                        const opacities = [0.08, 0.22, 0.45, 0.7, 1];
                        return (
                            <m.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: opacities[lvl] }}
                                transition={{ delay: 0.5 + i * 0.01 }}
                                className="aspect-square rounded-[2px] bg-[var(--gold)]"
                            />
                        );
                    })}
                </div>
            </m.div>

            {/* Small stat pills */}
            <m.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="glass absolute bottom-2 right-2 flex items-center gap-2 rounded-full px-3 py-2 shadow-xl"
            >
                <Activity className="h-3.5 w-3.5 text-[var(--gold)]" />
                <span className="font-mono text-[11px]">99.9% uptime</span>
            </m.div>

            <m.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute right-6 top-2 flex items-center gap-2 rounded-full px-3 py-2 shadow-xl"
            >
                <Code2 className="h-3.5 w-3.5 text-[var(--gold)]" />
                <span className="font-mono text-[11px]">TS · React 19</span>
            </m.div>
        </div>
    );
}
