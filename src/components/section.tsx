import type { ReactNode } from "react";
import PopInSection from "@/components/pop-in-section";

interface Props {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: Props) => {
  return (
    <section
      id={id}
      className={`relative mx-auto px-5 py-24 sm:px-8 sm:py-32 ${className}`}
    >
      <PopInSection className="mb-14 max-w-3xl">
        {eyebrow && (
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-(--gold)/60" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-xl font-medium md:font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </PopInSection>
      {children}
    </section>
  );
};
