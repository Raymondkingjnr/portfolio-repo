"use client";

import React from "react";
import PopInSection from "./pop-in-section";
import { useWorkExperience } from "@/hooks/get-work-experience";
import { WorkExperienceSkeleton } from "./loading-sections";

const WorkExperience = () => {
  const { data: works, isLoading } = useWorkExperience();

  if (isLoading) {
    return <WorkExperienceSkeleton />;
  }

  return (
    <div className="">
      <div className="max-w-[1600px] mx-auto py-20 px-6">
        <div className="w-fit">
          <h3 className="text-lg md:text-xl darkThemeText font-semibold">
            Work Experience
          </h3>
          <div className="h-0.5 w-full mt-1 bg-[#B0BEC5]" />
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-32 justify-between">
          {works?.map((experience) => (
            <PopInSection key={experience._id}>
              {/* Company */}
              <aside className="flex justify-between items-center">
                <h1 className="text-base capitalize md:text-lg font-semibold pb-4 darkThemeText">
                  {experience.company}
                </h1>
              </aside>

              {/* Role */}
              <p className="pb-1 text-sm font-bold darkThemeText">
                Role: {experience.role}
              </p>

              {/* Responsibilities */}
              <section className="flex w-full backdrop-blur-md bg-white/10 dark:bg-black/30 mt-5 flex-col rounded-md justify-center">
                {experience.responsibilities?.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Circle + line */}
                    <div className="flex flex-col items-center">
                      {/* Circle */}
                      <div className="border-2 h-4 w-4 rounded-full flex justify-center items-center border-orange-400">
                        <div className="w-2 h-2 rounded-full bg-[#fbe3ce]" />
                      </div>
                      {/* Line (hide for last item) */}
                      {experience.responsibilities &&
                        index !== experience.responsibilities.length - 1 && (
                          <div className="h-15 w-px bg-orange-500" />
                        )}
                    </div>

                    {/* Text */}
                    <aside>
                      <h2 className="font-semibold pb-2.5 text-[11px] md:text-[13px] leading-5  darkThemeText">
                        {item}
                      </h2>
                    </aside>
                  </div>
                ))}
              </section>
            </PopInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
