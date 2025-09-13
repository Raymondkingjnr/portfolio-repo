"use client";
import React from "react";
import Giscus from "@giscus/react";

const GiscusComments = () => {
  return (
    <Giscus
      repo="Raymondkingjnr/portfolio-repo"
      repoId="R_kgDOOT830g"
      category="Announcements"
      categoryId="DIC_kwDOOT830s4CvZ4B"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme="dark_tritanopia"
      inputPosition="top"
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;
