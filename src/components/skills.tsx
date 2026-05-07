"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import PopInSection from "./pop-in-section";
import { useSkills } from "@/hooks/get-skills";
import { SkillsSkeleton } from "./loading-sections";

const Skills = () => {
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  const { data: icons, isLoading } = useSkills();

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

  if (isLoading) {
    return <SkillsSkeleton />;
  }

  return (
    <PopInSection className=" mt-18 px-0">
      <Marquee
        pauseOnHover={true}
        autoFill={true}
        ref={tickerRef}
        speed={30}
        style={{
          height: "90px",
        }}
        gradient={true}
        gradientColor={isDark ? "#060505" : "#fff"}
        gradientWidth={50}
        className="flex gap-12 items-center justify-between"
      >
        {icons?.map((skill, index) => (
          <div
            key={skill._id ?? index}
            className=" ml-8"
            dangerouslySetInnerHTML={{ __html: skill?.svg ?? "" }}
          ></div>
        ))}
      </Marquee>
      {/* {icons?.map((skill) => (
        <div key={skill._id}>
          <p className="text-xl font-semibold flex items-center gap-2 darkThemeText">
            {" "}
            {skill.title}
          </p>
        </div>
      ))} */}
    </PopInSection>
  );
};

export default Skills;
