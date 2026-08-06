import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import PopInSection from "@/components/pop-in-section";

export const Contact = () => {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let&#39;s build something{" "}
          <em className="text-gradient-gold not-italic">exceptional</em>.
        </>
      }
      description="Full-time roles, contract work, or a hard problem you want a second opinion on — my inbox is open."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-3">
          {[
            {
              icon: Github,
              href: "https://github.com/Raymondkingjnr",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/raymond001",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:nnajiarinze001@gmail.com",
              label: "Email",
            },
            // {
            //   icon: Download,
            //   label: "Resume",
            //   value: "Download PDF",
            //   href: "#top",
            // },
          ].map((l, i) => (
            <PopInSection key={i}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-between rounded-md p-5 transition-all hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)]"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--gold)_15%,transparent)] text-[var(--gold)]">
                    <l.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {l.label}
                    </div>
                    {/* <div className="text-sm font-medium">{l.value}</div> */}
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--gold)]" />
              </a>
            </PopInSection>
          ))}
          {/*<div className="pt-3">*/}
          {/*    <MagneticButton href="#">*/}
          {/*        <Calendar className="h-4 w-4" /> Schedule a call on Calendly*/}
          {/*    </MagneticButton>*/}
          {/*</div>*/}
        </div>

        <form className="glass space-y-4 rounded-md p-3 sm:p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                Name
              </span>
              <input
                className="w-full rounded-xl border border-white/5 bg-white/2 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                placeholder="Ada Umeh"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </span>
              <input
                type="email"
                className="w-full rounded-xl border border-white/5 bg-white/2 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
              Company (optional)
            </span>
            <input
              className="w-full rounded-xl border border-white/5 bg-white/2 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              placeholder="Acme Inc."
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
              Project details
            </span>
            <textarea
              rows={5}
              className="w-full resize-none rounded-xl border border-white/5 bg-white/2 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              placeholder="Tell me about what you're building…"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] gold-glow"
          >
            Send message <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
};
