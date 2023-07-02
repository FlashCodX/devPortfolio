import Image from "next/image";
import HeroSection from "./components/sections/hero";
import ProjectsSection from "./components/sections/projects-section";
import getProjects from "./lib/server/get-projects";

export default function Home() {
  const projects = getProjects();
  return (
    <main
      className='h-screen snap-y snap-mandatory 
      overflow-x-auto
  '
    >
      {/* <HeroSection /> */}
      <ProjectsSection projects={projects} />
    </main>
  );
}
