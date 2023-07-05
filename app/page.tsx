import getProjects from "./lib/server/get-projects";
import { Projects } from "./components/sections/projects";
import HeroSection from "./components/sections/hero";

export default function Home() {
  const projects = getProjects();
  return (
    <main
      className='h-screen snap-y snap-mandatory overflow-x-auto scroll-smooth
  '
    >
      <HeroSection />
      <Projects projects={projects} />
    </main>
  );
}
