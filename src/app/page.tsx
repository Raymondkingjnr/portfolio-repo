import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import {client} from "@/sanity/client";
import {workExperienceQuery} from "@/api/work-experience-api";
import {projectQuery} from "@/api/projects-api";
import {SkillsIconQuery} from "@/api/skills-api";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/projects").then(mod => mod.Projects));
const Skills = dynamic(() => import("@/components/skills").then(mod => mod.Skills));
const WorkExperience = dynamic(() => import("@/components/work-experience").then(mod => mod.WorkExperience));
const Philosophy = dynamic(() => import("@/components/philosophy").then(mod => mod.Philosophy));
const Workflow = dynamic(() => import("@/components/work-flow").then(mod => mod.Workflow));
const GitHubActivity = dynamic(() => import("@/components/github-activity").then(mod => mod.GitHubActivity));
const Contact = dynamic(() => import("@/components/contact").then(mod => mod.Contact));

export const revalidate = 3600;
const resumeQuery = `*[_type == "resume"][0]{
  title,
  "url": file.asset->url
}`;

export default async function Home() {

    const [resumeData, worksData, projectData, stacks] = await Promise.all([
        client.fetch(resumeQuery),
        client.fetch(workExperienceQuery),
        client.fetch(projectQuery),
        client.fetch(SkillsIconQuery),
    ]);
    return (
    <div className="relative">
        <Nav />
        <Hero resume={resumeData}/>
        <About />
        <Skills Stacks={stacks || []}/>
        <Projects projects={projectData || []}/>
        <WorkExperience works={worksData || []}/>
        <Philosophy/>
        <Workflow/>
        <GitHubActivity />
        <Contact/>
        {/*<Footer/>*/}
    </div>
  );
}
