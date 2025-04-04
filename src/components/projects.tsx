"use client";

import React from "react";
import { Button } from "./ui/button";
import { mobileApps, projectsData } from "@/constant/data";
import { GithubIcon, LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [active, setActive] = React.useState<"Websites" | "Mobile Apps">(
    "Mobile Apps"
  );
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-[1600px] px-[1.5rem] mx-auto pb-[3rem]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="w-fit">
        <h3 className="text-lg md:text-xl font-semibold">Projects</h3>
        <div className="h-[2px] w-full mt-1 bg-[#B0BEC5]" />
      </div>

      <div className=" flex items-center gap-5 mt-6 mb-5">
        <div
          className="flex items-center gap-1.5"
          onClick={() => setActive("Websites")}
        >
          {active === "Websites" && (
            <div className=" h-2 w-2 bg-orange-500 rounded-3xl" />
          )}
          <h3 className=" font-medium cursor-pointer text-base"> Websites</h3>
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
          <h3 className=" font-medium cursor-pointer text-base">Mobile Apps</h3>
        </div>
      </div>
      {active === "Websites" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[5rem] gap-y-[2rem]">
          {projectsData.map((projects, index) => (
            <motion.div
              key={index}
              className="mt-[1rem] md:min-w-[340px] lg:min-w-[400px]"
              variants={itemVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.5 }}
            >
              <h2 className="font-medium text-xl capitalize">
                {projects.title}
              </h2>
              <div className="w-full h-[200px] md:h-[300px] lg:h-[350px] mt-3 rounded overflow-hidden relative">
                <Image
                  src={projects.img}
                  width={300}
                  height={300}
                  alt={projects.title}
                  className="w-full h-full object-cover"
                />
              </div>
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
                  <LinkIcon size={15} />
                </a>
                {/*  */}
              </span>
              <div className="flex flex-wrap  gap-[0.76rem] font-semibold">
                {projects.stacks?.map((items, index) => (
                  <p key={index}>{items}</p>
                ))}
              </div>
              <p className="pt-3 text-sm font-normal leading-[2rem]">
                {projects.des}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {active === "Mobile Apps" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[5rem] gap-y-[2rem]">
            {mobileApps.map((projects, index) => (
              <motion.div
                key={index}
                className="mt-[1rem] md:min-w-[340px] lg:min-w-[400px]"
                variants={itemVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.5 }}
              >
                <h2 className="font-medium text-xl capitalize">
                  {projects.title}
                </h2>
                <div className="w-full h-[200px] md:h-[300px] lg:h-[350px] mt-3 rounded overflow-hidden relative">
                  <Image
                    src={projects.img}
                    width={300}
                    height={300}
                    alt={projects.title}
                    className="w-full h-full object-cover"
                  />
                </div>
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
                <div className="flex flex-wrap  gap-[0.76rem] font-semibold">
                  {projects.stacks?.map((items, index) => (
                    <p key={index}>{items}</p>
                  ))}
                </div>
                <p className="pt-3 text-sm font-normal leading-[2rem]">
                  {projects.des}
                </p>
              </motion.div>
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
          <Button className="bg-[#FF7F50] w-[200px] h-[50px] cursor-pointer">
            More
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
