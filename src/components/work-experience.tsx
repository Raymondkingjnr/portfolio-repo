import React from "react";
import {Section} from "@/components/section";
import { WorkExperienceQueryResult } from "../../sanity.types";
import PopInSection from "@/components/pop-in-section";

interface WorkExperienceProps {
    works: WorkExperienceQueryResult;
}

export const WorkExperience = ({ works }: WorkExperienceProps) => {

  return (
      <Section
          id="experience"
          eyebrow="Experience"
          title={
            <>
              Where I&#39;ve been <em className="text-gradient-gold not-italic">shipping code</em>.
            </>
          }
      >
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-linear-to-b from-transparent via-[color-mix(in_oklab,var(--gold)_35%,transparent)] to-transparent sm:left-6" />
          <div className="space-y-10">
            {works?.map((r) => (
                <PopInSection
                    key={r._id}
                    className="relative pl-12 sm:pl-16"
                >
                  <div className="absolute left-2.25 top-3 grid h-4 w-4 place-items-center rounded-full bg-gold gold-glow sm:left-4.25">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="glass rounded-md p-3 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className=" font-semibold text-lg tracking-tight sm:text-3xl">
                        {r.role} <span className="text-gold-soft">· {r.company}</span>
                      </h3>
                      {/*<span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{r.period}</span>*/}
                    </div>
                    <ul className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground sm:text-base">
                      {r?.responsibilities?.map((h) => (
                          <li key={h} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full font-medium text-xs bg-gold" />
                            {h}
                          </li>
                      ))}
                    </ul>
                  </div>
                </PopInSection>
            ))}
          </div>
        </div>
      </Section>  );
};
