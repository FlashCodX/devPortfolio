import { Skill as tSkill } from "@/app/types";
import { Project } from "../project";
import { Skill } from "../skill";

type Props = {
  skills: tSkill[];
};

export const Skills = ({ skills }: Props) => {
  return (
    <section
      id='skills'
      className='min-h-screen max-w-screen-xl mx-auto w-full flex flex-col  mt-[80px] pt-32 relative  gap-12  snap-center '
    >
      <h1 className='relative font-bold uppercase tracking-[10px] lg:tracking-[6px] text-center text-[--secondary] text-3xl lg:text-4xl'>
        Skills
      </h1>
      <section
        className='
        px-12
        xl:px-4
        relative
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-7
        gap-12
        justify-center
        max-h-[70vh]
        overflow-scroll
      '
      >
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </section>
    </section>
  );
};
