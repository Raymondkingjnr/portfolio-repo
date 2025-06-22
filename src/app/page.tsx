import Hero from "@/components/hero";
import WorkExperience from "@/components/work-experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 min-h-screen w-full 
    bg-[linear-gradient(to_right,#f2f2f2_1px,transparent_1px),linear-gradient(to_bottom,#f2f2f2_1px,transparent_1px)]
    dark:bg-[linear-gradient(to_right,#131313_1px,transparent_1px),linear-gradient(to_bottom,#131313_1px,transparent_1px)]
    bg-[size:6rem_4rem] animate-[movePattern_8s_linear_infinite]"
      />
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
    </div>
  );
}
