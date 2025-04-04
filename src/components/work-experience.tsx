"use client";
import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
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
    <motion.section
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[1600px] mx-auto py-[5rem] px-[1.5rem]">
        <div className="w-fit">
          <h3 className="text-lg md:text-xl font-semibold">Work Experience</h3>
          <div className="h-[2px] w-full mt-1 bg-[#B0BEC5]" />
        </div>
        <div className="mt-[2rem] flex gap-y-[3rem] gap-x-[8rem] flex-col md:flex-row justify-between">
          <motion.main
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }} // Delay for the first item
          >
            <aside className="flex justify-between items-center">
              <h1 className="text-base capitalize md:text-lg font-semibold pb-4">
                IBX EXCHANGE{" "}
                <span className="text-sm pl-2 pb-1.5 italic">
                  (Fait currency Exchange)
                </span>
              </h1>
            </aside>
            <p className="pb-1 text-sm italic font-semibold">
              Role: Frontend Intern
            </p>
            <p className="text-sm italic font-semibold">
              Jan, 2024 - Jan, 2025
            </p>
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
          </motion.main>

          <motion.main
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4 }} // Delay for the second item
          >
            <aside className="flex justify-between items-center">
              <h1 className="uppercase text-base md:text-lg font-semibold pb-4">
                OneWay
              </h1>
            </aside>
            <p className="pb-1 text-sm italic font-semibold">
              Role: Frontend (Contract)
            </p>
            <p className="text-sm italic font-semibold">
              Mar, 2024 - Dec, 2024
            </p>
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
          </motion.main>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
