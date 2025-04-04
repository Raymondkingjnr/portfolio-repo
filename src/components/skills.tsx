"use client";
import React from "react";
import { skillsData } from "@/constant/data";
import { motion, useAnimation } from "framer-motion";

const Skills = () => {
  const duplicatedSkills = [...skillsData, ...skillsData];
  const controls = useAnimation();
  const tickerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const animateTicker = async () => {
      if (!tickerRef.current) return;

      const tickerWidth = tickerRef.current.scrollWidth;
      // const viewportWidth = tickerRef.current.clientWidth;
      const travelDistance = tickerWidth / 2; // Travel full length before restart
      const duration = travelDistance / 20; // Adjust speed

      await controls.set({ x: 0 });
      await controls.start({
        x: -travelDistance,
        transition: { duration, ease: "linear" },
      });

      animateTicker(); // Restart animation after it completes
    };

    animateTicker();
  }, [controls]);

  return (
    <div className="max-w-[1600px] mx-auto mt-[3rem] px-[1.5rem]">
      <div className="w-fit">
        <h3 className="text-lg md:text-xl font-semibold">Tech Skills</h3>
        <div className="h-[2px] w-full mt-1 bg-[#B0BEC5]" />
      </div>
      <motion.div className="overflow-hidden mt-[1.5rem] w-full">
        <motion.div
          className="flex gap-[2.7rem] items-center justify-between"
          ref={tickerRef}
          animate={controls}
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={index}>{skill.img}</div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
