import Hero from "@/components/hero";
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 min-h-screen w-full bg-[#000000] 
    bg-[linear-gradient(to_right,#0e0e0e_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] 
    bg-[size:6rem_4rem] animate-[movePattern_8s_linear_infinite]"
      />
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
    </div>
  );
}
