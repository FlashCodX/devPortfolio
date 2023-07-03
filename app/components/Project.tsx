import Image from "next/image";
import Link from "next/link";
import { Project as tProject } from "../types";
import { getTechAsset } from "../lib/server/get-tech";

type Props = {
  project: tProject;
};

export const Project = ({ project }: Props) => {
  const { name, link, description, image, tech } = project;

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
          <h1>{name}</h1>
          <Link target='_blank' referrerPolicy='no-referrer' href={link}>
            Open App
          </Link>
        </header>
        <section className='w-full flex gap-3 overflow-y-auto'>
          {tech.map((t) => {
            const asset = getTechAsset(t);
            return (
              <article key={t}>
                <Image
                  width={15}
                  height={15}
                  src={require(`../assets/tech/${asset}`)?.default}
                  alt='hero'
                />
              </article>
            );
          })}
        </section>
        <p className='opacity-40 text-xs tracking-wider font-light'>
          {description}
        </p>
      </section>
    </article>
  );
};
