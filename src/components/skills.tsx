"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import PopInSection from "./pop-in-section";
import { defineQuery } from "groq";
import { Icon } from "../../sanity.types";
import { client } from "@/sanity/client";

const SkillsIconQuery = defineQuery(`*[_type == "icon"]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  svg
}`);

const Skills = () => {
  const tickerRef = React.useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  const [icons, setIcons] = useState<Icon[]>([]);

  const fetchWorks = async () => {
    try {
      const icon = await client.fetch(SkillsIconQuery);
      setIcons(
        icon.map((i: any) => ({
          ...i,
          title: i.title ?? undefined,
          svg: i.svg ?? undefined,
        }))
      );
    } catch (error) {
      console.error("error getting jobs", error);
    }
  };

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    fetchWorks();

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
        {icons.map((skill, index) => (
          <div
            key={index}
            className=" ml-[2rem]"
            dangerouslySetInnerHTML={{ __html: skill?.svg ?? "" }}
          ></div>
        ))}
      </Marquee>
    </PopInSection>
  );
};

export default Skills;
