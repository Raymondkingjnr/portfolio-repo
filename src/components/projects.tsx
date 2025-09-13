"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { GithubIcon, Link2Icon } from "lucide-react";
import Image from "next/image";
import PopInSection from "./pop-in-section";
import { defineQuery } from "groq";
import { Mobileprojects, Project } from "../../sanity.types";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/lib/image";

const projectQuery = defineQuery(`*[_type == "project"] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  img,
  gitLink,
  url,
  stacks,
  des
}`);

const mobileProjectsQuery = defineQuery(`*[_type == "mobileprojects"] {
   _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  img,
  gitLink,
  url,
  stacks,
  des
  }`);

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [mobileProject, setMobileProject] = useState<Mobileprojects[]>([]);
  const [active, setActive] = React.useState<"Websites" | "Mobile Apps">(
    "Websites"
  );

  const fetchExercises = async () => {
    try {
      const webProject = await client.fetch(projectQuery);
      // Map title: null to undefined for type compatibility
      setProjects(
        webProject.map((project: any) => ({
          ...project,
          title: project.title === null ? undefined : project.title,
        }))
      );
    } catch (error) {
      console.error("Error fetching exercies", error);
    }
  };
  const fetchMobile = async () => {
    try {
      const mobile = await client.fetch(mobileProjectsQuery);
      setMobileProject(
        mobile.map((project: any) => ({
          ...project,
          title: project.title === null ? undefined : project.title,
        }))
      );
    } catch (error) {
      console.error("Error fetching exercies", error);
    }
  };

  useEffect(() => {
    fetchExercises();
    fetchMobile();
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-x-[5rem] gap-y-[2rem]">
          {projects.map((projects) => (
            <PopInSection
              className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden w-full"
              key={projects._id}
            >
              {/* Image */}
              <div className="relative w-full h-[170px] md:h-[260px]">
                <Image
                  src={
                    projects?.img?.asset?._ref ?
                      urlFor(projects.img).url()
                    : "/placeholder.png"
                  }
                  alt={projects.title ?? ""}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-semibold flex items-center gap-2 darkThemeText">
                  {projects.title}
                </h2>

                <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                  {projects.des}
                </p>

                {/* Stacks */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {projects.stacks?.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full darkThemeText"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">
                  <a
                    href={projects.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-neutral-900 text-white dark:bg-white dark:text-black py-2 rounded-xl text-center font-medium hover:opacity-90"
                  >
                    Open Live Link
                  </a>
                  <a
                    href={projects.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-xl grid place-content-center"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </PopInSection>
          ))}
        </div>
      )}

      {active === "Mobile Apps" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[5rem] gap-y-[2rem]">
            {mobileProject.map((projects) => (
              <PopInSection
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden w-full"
                key={projects._id}
              >
                {/* Image */}
                <div className="relative w-full h-[170px] md:h-[260px]">
                  <Image
                    src={
                      projects?.img?.asset?._ref ?
                        urlFor(projects.img).url()
                      : "/placeholder.png"
                    }
                    alt={projects.title ?? ""}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold flex items-center gap-2 darkThemeText">
                    {projects.title}
                  </h2>

                  <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                    {projects.des}
                  </p>

                  {/* Stacks */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {projects.stacks?.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full darkThemeText"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-5">
                    <a
                      href={projects.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-neutral-900 text-white dark:bg-white dark:text-black py-2 rounded-xl text-center font-medium hover:opacity-90"
                    >
                      Get In Touch
                    </a>
                    <a
                      href={projects.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-xl grid place-content-center"
                    >
                      <Link2Icon size={18} />
                    </a>
                  </div>
                </div>
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
          <Button className="flex-1 bg-neutral-900 text-white dark:bg-white dark:text-black py-2 rounded-xl text-center font-medium hover:opacity-90">
            More
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
