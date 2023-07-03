import Image from "next/image";
import Link from "next/link";
import { Project as tProject } from "../types";
import { getTechAsset } from "../lib/server/get-tech";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
type Props = {
  project: tProject;
};

export const Project = ({ project }: Props) => {
  const { name, link, description, image, tech, code } = project;

  return (
    <article className='w-full  flex flex-col gap-2 rounded-lg overflow-hidden border-white/50 border-2 '>
      <section className='w-full min-h-[250px] max-h-[340px]'>
        <Image
          src={require(`../assets/projects/${project.id}/${image}`).default}
          className='object-cover
          h-full
          '
          alt='hero'
        />
      </section>

      <section className='w-full flex flex-col gap-3 px-2 py-1'>
        <header
          className='
    
      max-h-[70px]
      flex
      justify-between
      '
        >
          <h1 className='text-2xl font-normal'>{name}</h1>
          <Link
            target='_blank'
            referrerPolicy='no-referrer'
            href={link}
            className='font-light tracking-wider text-sm text-[--secondary] opacity-75 hover:opacity-100 border rounded-full px-3 py-[.3rem] border-[--secondary]  transition-all flex items-center gap-2 justify-center'
          >
            Open App
            <BiLinkExternal fontSize={16} />
          </Link>
        </header>
        <section className='w-full flex gap-3 overflow-y-auto'>
          {tech.map((t) => {
            const asset = getTechAsset(t);
            return (
              <article key={t}>
                <Image
                  width={25}
                  height={25}
                  src={require(`../assets/tech/${asset}`)?.default}
                  alt='hero'
                />
              </article>
            );
          })}
        </section>
        <p className='text-sm tracking-widest font-extralight'>{description}</p>
        <Link
          target='_blank'
          referrerPolicy='no-referrer'
          href={code}
          className='flex items-center gap-2'
        >
          <AiFillGithub fontSize={28} />
          <span>code</span>
        </Link>
      </section>
    </article>
  );
};
