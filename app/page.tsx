import getProjects from "./lib/server/get-projects";
import { Projects } from "./components/sections/projects";
import HeroSection from "./components/sections/hero";
import { Skills } from "./components/sections/skills";
import { getSkills } from "./lib/server/get-tech";

export default function Home() {
  const projects = getProjects();
  const skills = getSkills();

  return (
    <main
      className='h-screen snap-y snap-mandatory overflow-x-auto scroll-smooth
  '
    >
      <HeroSection />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </main>
  );
}
