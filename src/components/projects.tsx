"use client";

import React from "react";
import { Button } from "./ui/button";
import { mobileApps, projectsData } from "@/constant/data";
import { GithubIcon, Link2Icon, LinkIcon } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import PopInSection from "./pop-in-section";

const Projects = () => {
  const [active, setActive] = React.useState<"Websites" | "Mobile Apps">(
    "Websites"
  );

  return (
    <div className="max-w-[1600px] px-[1.5rem] mx-auto pb-[3rem]">
      <PopInSection className="w-fit">
        <h3 className="text-lg md:text-xl font-semibold capitalize darkThemeText">
          projects
        </h3>
        <div className="h-[2px] w-full mt-1 bg-[#B0BEC5]" />
      </PopInSection>
      <PopInSection className=" flex items-center gap-5 mt-6 mb-5">
        <div
          className="flex items-center gap-1.5"
          onClick={() => setActive("Websites")}
        >
          {active === "Websites" && (
            <div className=" h-2 w-2 bg-orange-500 rounded-3xl" />
          )}
          <h3 className="font-semibold cursor-pointer text-base darkThemeText">
            {" "}
            Websites
          </h3>
        </div>
        {/*  */}
        <div className=" h-7 w-[2px] bg-white" />
        {/*  */}
        <div
          className="flex items-center gap-1.5"
          onClick={() => setActive("Mobile Apps")}
        >
          {active === "Mobile Apps" && (
            <div className=" h-2 w-2 bg-orange-500 rounded-3xl" />
          )}
          <h3 className="font-semibold cursor-pointer text-base darkThemeText">
            Mobile Apps
          </h3>
        </div>
      </PopInSection>
      {active === "Websites" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[5rem] gap-y-[2rem]">
          {projectsData.map((projects, index) => (
            <PopInSection
              key={index}
              className="mt-[1rem] md:min-w-[340px] lg:min-w-[400px]"
            >
              <h2 className="font-semibold text-lg capitalize darkThemeText">
                {projects.title}
              </h2>
              {/* <div className="w-full h-[200px] md:h-[300px] lg:h-[350px] mt-3 rounded overflow-hidden relative">
                <Image
                  src={projects.img}
                  width={300}
                  height={300}
                  alt={projects.title}
                  className="w-full h-full object-cover"
                />
              </div> */}
              <span className="flex gap-[1rem] py-3">
                <a
                  href={projects.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[27px] w-[37px] bg-orange-500 rounded grid place-content-around"
                >
                  {" "}
                  <GithubIcon size={15} />
                </a>
                {/* */}
                <a
                  href={projects.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[27px] w-[37px] bg-orange-500 rounded grid place-content-around"
                >
                  <Link2Icon size={15} />
                </a>
                {/*  */}
              </span>

              <div className="flex flex-wrap  gap-[0.76rem] font-semibold mt-4">
                {projects.stacks?.map((items, index) => (
                  <p key={index} className="darkThemeText leading-[1rem] ">
                    {items}
                  </p>
                ))}
              </div>
              <p className=" text-sm font-normal leading-[1.5rem] pt-3.5 darkThemeText">
                {projects.des}
              </p>
            </PopInSection>
          ))}
        </div>
      )}

      {active === "Mobile Apps" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[5rem] gap-y-[2rem]">
            {mobileApps.map((projects, index) => (
              <PopInSection
                key={index}
                className="mt-[1rem] md:min-w-[340px] lg:min-w-[400px]"
              >
                <h2 className="font-medium md:font-semibold text-xl capitalize darkThemeText">
                  {projects.title}
                </h2>
                {/* <div className="w-full h-[200px] md:h-[300px] lg:h-[350px] mt-3 rounded overflow-hidden relative">
                  <Image
                    src={projects.img}
                    width={300}
                    height={300}
                    alt={projects.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <span className="flex gap-[1rem] py-3">
                  <a
                    href={projects.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[27px] w-[37px] bg-orange-500 rounded grid place-content-around"
                  >
                    {" "}
                    <GithubIcon size={15} />
                  </a>
                  {/* */}
                  <Link
                    href={projects.url}
                    className="h-[27px] w-[37px] bg-orange-500 rounded grid place-content-around"
                  >
                    <LinkIcon size={15} />
                  </Link>
                  {/*  */}
                </span>
                <div className="flex flex-wrap  gap-[0.76rem] mt-3 font-semibold">
                  {projects.stacks?.map((items, index) => (
                    <p key={index} className="darkThemeText">
                      {items}
                    </p>
                  ))}
                </div>
                <p className=" darkThemeText text-sm font-normal leading-[1.3rem]">
                  {projects.des}
                </p>
              </PopInSection>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center mt-[2rem]">
        <a
          href="https://github.com/Raymondkingjnr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-orange-500 w-[200px] h-[50px] cursor-pointer">
            More
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
