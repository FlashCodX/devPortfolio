import Image from "next/image";
import { Skill as tSkill } from "../types";
type Props = {
  skill: tSkill;
};

export const Skill = ({ skill }: Props) => {
  const { id, asset, name } = skill;

  return (
    <article className='flex flex-col gap-3 items-center'>
      <Image
        width={100}
        height={100}
        src={require(`../assets/tech/${asset}`).default}
        className='object-cover
        h-full
        rounded-full overflow-hidden
        '
        alt='hero'
      />
      <p className='font-semibold'>{name}</p>
    </article>
  );
};
