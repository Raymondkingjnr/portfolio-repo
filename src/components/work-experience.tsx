"use client";
import React from "react";
import PopInSection from "./pop-in-section";
const WorkExperience = () => {
  return (
    <div className="">
      <div className="max-w-[1600px] mx-auto py-[5rem] px-[1.5rem]">
        <div className="w-fit">
          <h3 className="text-lg md:text-xl font-semibold">Work Experience</h3>
          <div className="h-[2px] w-full mt-1 bg-[#B0BEC5]" />
        </div>
        <div className="mt-[2rem] flex gap-y-[3rem] gap-x-[8rem] flex-col md:flex-row justify-between">
          <PopInSection>
            <aside className="flex justify-between items-center">
              <h1 className="text-base capitalize md:text-lg font-semibold pb-4">
                IBX EXCHANGE{" "}
              </h1>
            </aside>
            <p className="pb-1 text-sm font-bold">Role: Frontend Developer</p>

            <ul className="flex flex-col gap-[1rem] mt-[1.8rem]">
              <li className="text-sm leading-[1.6rem] font-medium">
                * Worked with the wider development team
              </li>
              <li className="text-sm leading-[1.6rem] font-medium">
                * Managed website design and content
              </li>
              <li className="text-sm leading-[1.6rem] font-medium">
                * Worked closely with backend developers to ensure smooth API
                integration
              </li>
            </ul>
          </PopInSection>

          <PopInSection>
            <aside className="flex justify-between items-center">
              <h1 className="uppercase text-base md:text-lg font-semibold pb-4">
                OneWay
              </h1>
            </aside>
            <p className="pb-1 text-sm font-bold">Role: Frontend Developer</p>

            <ul className="flex flex-col gap-[1rem] mt-[1.8rem]">
              <li className="text-sm leading-[1.6rem] font-medium">
                * Tasked with turning the Figma web app design into React code
                and handling API integration for both the admin and user sides
              </li>
              <li className="text-sm leading-[1.6rem] font-medium">
                * Worked closely with backend developers to ensure smooth API
                integration
              </li>
            </ul>
          </PopInSection>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
