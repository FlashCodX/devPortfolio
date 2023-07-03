import { Project as tProject } from "@/app/types";
import { Project } from "../project";

type Props = {
  projects: tProject[];
};

export const Projects = ({ projects }: Props) => {
  return (
    <section className='min-h-screen w-full flex flex-col  mt-[80px] pt-36 relative  gap-12 px-12 '>
      <h1 className='relative font-bold uppercase tracking-[10px] lg:tracking-[6px] text-center text-[--secondary] text-3xl lg:text-4xl'>
        Projects
      </h1>
      <section
        className='
      grid
      grid-cols-1
      lg:grid-cols-2
      xl:grid-cols-3
      
      2xl:grid-cols-4
      gap-7

      '
      >
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </section>
    </section>
  );
};
