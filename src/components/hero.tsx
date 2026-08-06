"use client";
import React from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Globe,
  Sparkles,
} from "lucide-react";
import { MagneticButton } from "@/components/magic-btn";
import Image from "next/image";
import { profileImag } from "@/assets/images";
import { useGithubProfile } from "@/api/github-api";
import { GITHUB_USERNAME } from "@/lib/constant";

type ResumeQueryResult = {
  title?: string;
  url?: string;
};

export const Hero = ({ resume }: { resume: ResumeQueryResult | null }) => {
  const { data: githubUser, isLoading } = useGithubProfile(GITHUB_USERNAME);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden px-5 md:px-8"
    >
      {/* Full-bleed portrait */}
      <div className="absolute inset-0 md:block hidden">
        <Image
          src={profileImag}
          fill
          priority
          alt="raymond profile"
          sizes="100vw"
          className="object-cover object-top grayscale-[15%] contrast-[1.05]"
        />

        {/* Base scrim so white/gold text stays legible everywhere */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />

        {/* Gold tint to keep it on-brand instead of pure B&W */}
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--gold)_8%,transparent)] mix-blend-overlay" />

        {/* Extra darkening behind the headline block at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/85 to-transparent" />

        {/* Left-edge scrim — sits behind the headline/tagline */}
        <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/70 to-transparent" />

        {/* Right-edge scrim — sits behind the description/CTA column */}
        <div className="absolute inset-y-0 right-0 w-[60%] bg-gradient-to-l from-black/60 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between pt-24 md:pt-32 pb-10">
        {/* Top: availability tag */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-[color-mix(in_oklab,var(--gold)_6%,transparent)] px-3 py-1 text-xs font-medium text-[var(--gold-soft)] backdrop-blur-sm animate-fade-up">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          Available for new projects
        </div>

        {/* Bottom: headline (left) + copy/CTA (right), stacked on mobile */}
        <div className="flex flex-col pt-18 md:pt-0 gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase font-semibold tracking-[0.25em] text-white/70 animate-fade-up delay-1">
              Nnaji Arinzechukwu Raymond — Frontend Engineer
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-[5.5rem]  font-medium leading-[0.95] tracking-tight text-white animate-fade-up">
              Building interfaces that{" "}
              <em className="text-gradient-gold not-italic">users love</em> and
              engineers{" "}
              <em className="text-gradient-gold not-italic">
                enjoy maintaining
              </em>
              .
            </h1>
          </div>

          <div className="flex max-w-sm flex-col items-start gap-6 lg:items-end lg:text-right">
            <p className="text-sm leading-relaxed text-white/75 sm:text-base animate-fade-up delay-3">
              I build scalable, high-performance web applications with React,
              Next.js, TypeScript, and modern frontend architecture. From
              AI-powered mobile apps to travel booking platforms and real-time
              dashboards — I turn complex ideas into polished digital products.
            </p>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end animate-fade-up delay-4">
              <MagneticButton href="#work">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <a
                href={resume?.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 px-2 py-2 text-xs font-semibold text-white transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>

            <div className="flex items-center gap-1 animate-fade-up delay-5">
              {[
                {
                  icon: Github,
                  href: "https://github.com/raymondkingjnr",
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
                { icon: Globe, href: "#", label: "Portfolio" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid h-10 w-10 place-items-center rounded-full border border-transparent text-white/70 transition-all hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)] hover:text-[var(--gold)]"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
              <div className="ml-2 flex items-center gap-2 text-xs text-white/60">
                <Sparkles className="h-3 w-3 text-[var(--gold)]" />
                {isLoading ?
                  "4+ years crafting production frontends"
                : githubUser ?
                  `${githubUser.public_repos} repos · ${githubUser.followers} followers on GitHub`
                : "4+ years crafting production frontends"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
