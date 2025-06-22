"use client";
import React, { useEffect, useState } from "react";
import { skillsData } from "@/constant/data";

import Marquee from "react-fast-marquee";
import PopInSection from "./pop-in-section";

const Skills = () => {
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <PopInSection className=" mt-[4rem] px-[0]">
      <Marquee
        pauseOnHover={true}
        autoFill={true}
        ref={tickerRef}
        speed={30}
        style={{
          height: "60px",
        }}
        gradient={true}
        gradientColor={isDark ? "#060505" : "#fff"}
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
