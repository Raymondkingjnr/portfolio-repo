import React from "react";
import Image from "next/image";
import { devImg } from "@/assets/images";
import { Button } from "./ui/button";
import { GitBranchIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import PopInSection from "./pop-in-section";
const Hero = () => {
  return (
    <PopInSection className=" max-w-[1600px] mx-auto  pt-[3rem] px-[1.5rem]">
      <div className="flex justify-between mb-4">
        <Link href="/guest-book" className=" hidden md:block">
          <Button className=" w-[180px] h-[40px] bg-slate-800">
            GuestBook
          </Button>
        </Link>
      </div>
      <div className=" grid place-content-center text-center">
        <main>
          <div className="grid place-content-center ">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
              <Image
                src={devImg}
                alt=""
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <h3 className=" text-2xl md:text-5xl font-bold py-2.5">
            hi I&apos;m Raymond
          </h3>
          <p className="font-normal text-sm md:text-base w-full md:w-1/2 mx-auto">
            Am a software developer (Frontend) with a passion for building
            beautiful and functional web applications. I&apos;m a quick learner
            and I&apos;m always looking for new challenges.
          </p>
          <Link href="/guest-book" className="block md:hidden mt-3">
            <Button className=" w-[180px] h-[40px] bg-slate-800">
              GuestBook
            </Button>
          </Link>
          <div className=" flex justify-center gap-5 mt-5">
            <a
              href="https://twitter.com/_ray_raymond"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className=" cursor-pointer" />
            </a>
            <a
              href="https://github.com/Raymondkingjnr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranchIcon className=" cursor-pointer" />
            </a>
            <a
              href="https://linkedin.com/in/raymond001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className=" cursor-pointer" />
            </a>
          </div>
          <div className="flex my-5 gap-[10px] justify-center items-center ">
            <a
              href="mailto:nnajiarinze001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#FF7F50] w-[150px] md:w-[180px] h-[40px] cursor-pointer">
                Contact Me
              </Button>
            </a>
            <a
              href="/Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-[150px] md:w-[180px] h-[40px] bg-blue-600">
                Download CV
              </Button>
            </a>
          </div>
        </main>
      </div>
    </PopInSection>
  );
};

export default Hero;
