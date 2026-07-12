import React from "react";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Globe, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/magic-btn";
import Image from 'next/image'
import {profileImag} from "@/assets/images";

type ResumeQueryResult = {
  title?: string;
  url?: string;
};



export const Hero = ({ resume }: { resume: ResumeQueryResult | null }) => {



  return (
      <section id="top" className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            {/* Tagline: Triggers instantly */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-[color-mix(in_oklab,var(--gold)_6%,transparent)] px-3 py-1 text-xs font-medium text-[var(--gold-soft)] animate-fade-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--gold)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            </span>
              Available for new projects · Q3 2026
            </div>

            {/* Name/Title: [delay-1 = 80ms] */}
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground animate-fade-up delay-1">
              Nnaji Arinzechukwu Raymond — Frontend Engineer
            </p>

            {/* Heading: [delay-2 = 160ms] - Removed delay for LCP element */}
            <h1 className="text-3xl md:text-[5rem] font-normal leading-[1.02] tracking-tight animate-fade-up">
              Building interfaces that <em className="text-gradient-gold not-italic">users love</em> and engineers <em className="text-gradient-gold not-italic">enjoy maintaining</em>.
            </h1>

            {/* FIXES YOUR LCP: [delay-3 = 240ms] */}
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base animate-fade-up delay-3">
              I build scalable, high-performance web applications with React, Next.js, TypeScript,
              and modern frontend architecture. From AI-powered mobile apps to travel booking platforms and
              real-time dashboards — I turn complex ideas into polished digital products.
            </p>

            {/* Buttons: [delay-4 = 320ms] */}
            <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-up delay-4">
              <MagneticButton href="#work">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
                  <a href={resume?.url} download target="_blank" rel="noopener noreferrer" className={"flex items-center font-semibold text-sm gap-2 border rounded-xl px-2 py-3"}>
                      <Download className="h-4 w-4" /> Download Resume
                  </a>
            </div>

            {/* Socials: [delay-5 = 400ms] */}
            <div className="mt-10 flex items-center gap-1 animate-fade-up delay-5">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:nnajiarinze001@gmail.com", label: "Email" },
                { icon: Globe, href: "#", label: "Portfolio" },
              ].map(({ icon: Icon, href, label }) => (
                  <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative grid h-10 w-10 place-items-center rounded-full border border-transparent text-muted-foreground transition-all hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)] hover:text-[var(--gold)]"
                  >
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
              ))}
              <div className="ml-3 hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
                <Sparkles className="h-3 w-3 text-gold" />
                4+ years crafting production frontends
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-100 lg:max-w-none aspect-[3/4] overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--gold)_20%,transparent)]">
            <Image
              src={profileImag}
              fill
              alt="raymond profile"
              loading="lazy"
              sizes="(max-width: 508px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>
  );
};
