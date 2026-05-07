"use client";

import PopInSection from "./pop-in-section";
import { Skeleton } from "./ui/skeleton";

export const SkillsSkeleton = () => {
  return (
    <PopInSection className="mt-18 px-6">
      <div className="flex gap-8 overflow-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="h-14 w-14 rounded-xl shrink-0" />
        ))}
      </div>
    </PopInSection>
  );
};

export const WorkExperienceSkeleton = () => {
  return (
    <div className="max-w-[1600px] mx-auto py-20 px-6">
      <div className="w-fit">
        <h3 className="text-lg md:text-xl darkThemeText font-semibold">
          Work Experience
        </h3>
        <div className="h-0.5 w-full mt-1 bg-[#B0BEC5]" />
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-32 justify-between">
        {Array.from({ length: 3 }).map((_, index) => (
          <PopInSection key={index}>
            <Skeleton className="h-6 w-40 mb-4" />
            <Skeleton className="h-4 w-32 mb-5" />
            <section className="flex w-full backdrop-blur-md bg-white/10 dark:bg-black/30 mt-5 flex-col rounded-md justify-center p-4 gap-4">
              {Array.from({ length: 3 }).map((__, itemIndex) => (
                <div key={itemIndex} className="flex gap-4 items-start">
                  <Skeleton className="h-4 w-4 rounded-full shrink-0 mt-1" />
                  <div className="w-full space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                  </div>
                </div>
              ))}
            </section>
          </PopInSection>
        ))}
      </div>
    </div>
  );
};

export const ResumeButtonSkeleton = () => {
  return <Skeleton className="h-10 w-32 rounded-xl" />;
};

export const ProjectCardsSkeleton = ({
  withImage = true,
  withFeatures = false,
}: {
  withImage?: boolean;
  withFeatures?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-x-20 gap-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <PopInSection
          className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden w-full"
          key={index}
        >
          {withImage && <Skeleton className="h-[270px] md:h-[330px] w-full rounded-none" />}
          <div className="p-5">
            <Skeleton className="h-6 w-2/3" />
            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <Skeleton className="h-4 w-20 mt-3" />
            <div className="flex flex-wrap gap-2 mt-4">
              {Array.from({ length: 4 }).map((__, tagIndex) => (
                <Skeleton key={tagIndex} className="h-7 w-20 rounded-full" />
              ))}
            </div>
            {withFeatures && (
              <section className="flex w-full backdrop-blur-md p-3 bg-white/10 dark:bg-black/30 mt-5 flex-col rounded-md justify-center gap-3">
                {Array.from({ length: 3 }).map((__, featureIndex) => (
                  <div key={featureIndex} className="flex gap-4 items-start">
                    <Skeleton className="h-4 w-4 rounded-full shrink-0 mt-1" />
                    <div className="w-full space-y-2">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-4/5" />
                    </div>
                  </div>
                ))}
              </section>
            )}
            <div className="flex gap-3 mt-5">
              <Skeleton className="h-10 flex-1 rounded-xl" />
              <Skeleton className="h-10 w-14 rounded-xl" />
            </div>
          </div>
        </PopInSection>
      ))}
    </div>
  );
};
