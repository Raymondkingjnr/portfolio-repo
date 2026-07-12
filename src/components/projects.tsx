import React from "react";
import { Section } from "@/components/section";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { ProjectQueryResult } from "../../sanity.types";
import PopInSection from "@/components/pop-in-section";


interface IProjectsProps {
    projects: ProjectQueryResult
}

export const Projects = ({projects}:IProjectsProps ) => {

  return (
      <Section
          id="work"
          eyebrow="Selected Work"
          title={
            <>
              Products I&#39;ve <em className="text-gradient-gold not-italic">designed and shipped</em>.
            </>
          }
          description="A handful of the projects I'm most proud of. Each shipped to real users with real KPIs behind them."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {projects?.map((p) => (
              <PopInSection
                  key={p._id}
                  className="glass group relative flex h-full flex-col overflow-hidden rounded-md transition-all hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)]"
              >
                  <a
                      href={p.url || "#"}
                      aria-disabled={!p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                <div className="relative flex h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[color-mix(in_oklab,var(--gold)_8%,var(--card))] to-[color-mix(in_oklab,var(--gold-deep)_5%,var(--card))] h-40 md:h-50">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    {p.img ? (
                        <Image
                            src={urlFor(p.img).url()}
                            alt={p.title ? `${p.title} project preview` : "Project preview"}
                            fill
                            loading="lazy"
                            sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          Project Preview
                        </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-3 sm:p-4">
                    <div>
                      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {p.title ?? null}
                      </div>
                      <h3 className=" text-xl font-bold leading-tight tracking-tight sm:text-xl">{p.title ?? null}</h3>
                      {p.des?.length ? (
                          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                            {p.des.join(" ")}
                          </p>
                      ) : null}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p?.stacks?.map((s) => (
                            <span key={s} className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                        {s}
                      </span>
                        ))}
                      </div>
                    </div>
                    {/*<div className="mt-6 flex items-center gap-2">*/}
                    {/*  <a href={p.gitLink || "#"}*/}
                    {/*     target="_blank"*/}
                    {/*     rel="noopener noreferrer"*/}
                    {/*     aria-disabled={!p.gitLink}*/}
                    {/*     className="inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] px-3.5 py-2 text-xs font-medium transition-colors hover:bg-[color-mix(in_oklab,var(--gold)_10%,transparent)]">*/}
                    {/*    <Github className="h-3.5 w-3.5" /> GitHub*/}
                    {/*  </a>*/}
                    {/*  <a href={p.url || "#"}*/}
                    {/*     aria-disabled={!p.url}*/}
                    {/*     target="_blank"*/}
                    {/*     rel="noopener noreferrer"*/}
                    {/*     className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gold)] px-3.5 py-2 text-xs font-medium text-[var(--primary-foreground)] transition-transform hover:scale-[1.03]">*/}
                    {/*    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />*/}
                    {/*  </a>*/}
                    {/*</div>*/}
                  </div>
                </div>
                  </a>
              </PopInSection>
          ))}
        </div>
      </Section>
  );
};
