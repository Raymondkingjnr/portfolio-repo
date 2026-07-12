import React from "react";
import {Section} from "@/components/section";
import { SkillsIconQueryResult } from "../../sanity.types";
import PopInSection from "@/components/pop-in-section";


interface ISkillProp {
    Stacks:  SkillsIconQueryResult
}

export  const Skills = ({Stacks}: ISkillProp) => {

  return (
      <Section
          id="stack"
          eyebrow="Toolkit"
          title={
            <>
              The stack behind <em className="text-gradient-gold not-italic">shipped work</em>.
            </>
          }
          description="Opinions held loosely. These are the tools I reach for most when the goal is fast, maintainable, and delightful."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Stacks?.map((t) => (
            <PopInSection key={t._id}>
              <div
                  key={t._id}
                  className="glass group relative flex items-center justify-center overflow-hidden rounded-2xl px-4 py-3 text-sm font-medium transition-all hover:border-[color-mix(in_oklab,var(--gold)_35%,transparent)]"
              >
                <div className="absolute inset-0 bg-linear-to-br from-[color-mix(in_oklab,var(--gold)_14%,transparent)] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">{t.title}</span>
                  <span className="absolute -bottom-8 h-16 w-16 rounded-full bg-(--gold)/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </PopInSection>
          ))}
        </div>
      </Section>
  );
};
