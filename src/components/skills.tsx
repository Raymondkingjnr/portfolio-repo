"use client";
import React from "react";
import { skillsData } from "@/constant/data";

import Marquee from "react-fast-marquee";
import PopInSection from "./pop-in-section";

const Skills = () => {
  const tickerRef = React.useRef<HTMLDivElement>(null);
  return (
    <PopInSection className=" mt-[4rem] px-[0]">
      <Marquee
        pauseOnHover={true}
        autoFill={true}
        ref={tickerRef}
        style={{
          height: "60px",
        }}
        gradient={true}
        gradientColor="#5f5f5f"
        gradientWidth={50}
        className="flex gap-[3rem] items-center justify-between"
      >
        {skillsData.map((skill, index) => (
          <div key={index} className=" ml-[2rem]">
            {skill.img}
          </div>
        ))}
      </Marquee>
    </PopInSection>
  );
};

export default Skills;
