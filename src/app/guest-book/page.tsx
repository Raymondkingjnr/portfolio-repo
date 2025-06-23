"use client";
import DarkModeToggle from "@/components/toggle";
import { Button } from "@/components/ui/button";
// import GiscusComments from "@/components/guest-book";

import dynamic from "next/dynamic";
import Link from "next/link";
const GiscusComments = dynamic(() => import("@/components/guest-book"), {
  ssr: false, // Prevents server-side rendering issues
});
const GuestBook: React.FC = () => {
  return (
    <div className=" max-w-[1600px] mx-auto px-[1.5rem] pt-[0.7rem]">
      <div>
        <Link href={"/"} className="mb-6 ">
          <Button className=" w-[180px] bg-slate-800  dark:bg-slate-50 h-[40px]">
            Home
          </Button>
        </Link>
        <div className=" fixed right-[1rem]  md:right-[5rem] top-[1rem] z-50">
          <DarkModeToggle />
        </div>
      </div>
      <h1 className=" text-lg md:text-3xl font-bold mb-4 mt-5 darkThemeText">
        GuestBook
      </h1>
      <p className="mb-6 darkThemeText">Leave a message :{" ) "}</p>
      <div className=" max-w-[900px] mx-auto">
        <GiscusComments />
      </div>
    </div>
  );
};

export default GuestBook;
