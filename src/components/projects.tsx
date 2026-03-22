"use client";

import React, {  useState } from "react";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import PopInSection from "./pop-in-section";
import { urlFor } from "@/sanity/lib/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {useProjects, useMobileProjects} from "@/hooks/get-projects";



const Projects = () => {
  const [active, setActive] = React.useState<"Websites" | "Mobile Apps">(
    "Websites"
  );
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const {data: projects}= useProjects();
  const {data: mobile}= useMobileProjects();


  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-[1600px] px-6 mx-auto pb-12">
      <div className=" w-fit">
        <h3 className="text-lg md:text-xl font-semibold capitalize darkThemeText">
          projects
        </h3>
        <div className="h-0.5 w-full mt-1 bg-[#B0BEC5]" />
      </div>
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
        <div className=" h-7 w-0.5 bg-white" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-x-20 gap-y-8">
          {projects?.map((projects) => (
            <PopInSection
              className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden w-full"
              key={projects._id}
            >
              {/* Image */}
              <div className="relative">
                <Carousel
                    className="relative h-[270px] md:h-[330px] w-full"
                    opts={{}}
                >
                  <CarouselContent>
                    {projects.images?.map((item, index) => (
                        <CarouselItem
                            key={item._key ?? item.asset?._ref ?? index}
                            className="relative w-full h-full"
                        >
                          {item?.asset?._ref ?
                              <Image
                                  src={urlFor(item).url()}
                                  alt={`${projects.title ?? ""} - Image ${index + 1}`}
                                  className="object-cover w-full h-full"
                                  width={1000}
                                  height={1000}
                              />
                              : <Image
                                  src="/placeholder.png"
                                  alt={`${projects.title ?? ""} - placeholder`}
                                  className="object-cover w-full h-full"
                                  width={1000}
                                  height={1000}
                              />
                          }
                        </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 darkThemeText" />

                  <CarouselNext className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 darkThemeText" />

                </Carousel>
              </div>
              {/* Content */}
              <div className="p-5">
                <h2 className="text-xl font-semibold flex items-center gap-2 darkThemeText">
                  {projects.title}
                </h2>

                <p
                  className={`text-sm text-neutral-500 mt-2 ${
                    expanded[projects._id] ? "" : "line-clamp-2"
                  }`}
                >
                  {projects.des}
                </p>
                <button
                  onClick={() => toggleExpand(projects._id)}
                  className="text-blue-100 italic text-sm mt-1"
                >
                  {expanded[projects._id] ? "Show less" : "Read more"}
                </button>

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
                    open live link
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8">
            {mobile?.map((projects) => (
              <PopInSection
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden w-full"
                key={projects._id}
              >
                {/* Image */}
                <div className="relative">
                  <Carousel
                    className="relative h-[270px] md:h-[330px] w-full"
                    opts={{}}
                  >
                    <CarouselContent>
                      {projects.images?.map((item, index) => (
                        <CarouselItem
                          key={item._key ?? item.asset?._ref ?? index}
                          className="relative w-full h-full"
                        >
                          {item?.asset?._ref ?
                            <Image
                              src={urlFor(item).url()}
                              alt={`${projects.title ?? ""} - Image ${index + 1}`}
                              className="object-cover w-full h-full"
                              width={1000}
                              height={1000}
                            />
                          : <Image
                              src="/placeholder.png"
                              alt={`${projects.title ?? ""} - placeholder`}
                              className="object-cover w-full h-full"
                              width={1000}
                              height={1000}
                            />
                          }
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Left arrow (previous) - vertically centered, horizontally near left edge */}
                    <CarouselPrevious className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 darkThemeText" />

                    {/* Right arrow (next) - vertically centered, horizontally near right edge */}
                    <CarouselNext className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 darkThemeText" />

                  </Carousel>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold flex items-center gap-2 darkThemeText">
                    {projects.title}
                  </h2>

                  <p
                    className={`text-sm text-neutral-500 mt-2 ${
                      expanded[projects._id] ? "" : "line-clamp-2"
                    }`}
                  >
                    {projects.des}
                  </p>
                  <button
                    onClick={() => toggleExpand(projects._id)}
                    className="text-blue-100 italic text-sm mt-1"
                  >
                    {expanded[projects._id] ? "Show less" : "Read more"}
                  </button>

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
                      open live link
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
