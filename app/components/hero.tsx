import Image from "next/image";
import Rings from "./Rings";
import avatar from "../../public/avatar.webp";
import Menu from "./menu";
type Props = {};

export default function HeroSection(props: Props) {
  return (
    <div
      className='relative min-h-screen 
      overflow-hidden
    flex  space-y-8 items-center justify-center text-center 
    
    '
    >
      <Rings />
      <section className='absolute pt-72'>
        <section className='flex flex-col gap-3 items-center '>
          <h2 className='flex text-[--text-primary] text-[.5rem] opacity-40 md:text-[.8rem]  tracking-[7px] uppercase'>
            Frontend Web Developer
          </h2>
          <h1 className=' text-white font-semibold flex '>
            <span className='text-[--secondary] text-xl opacity-70 tracking-wider'>
              Hi, my name is Luis.
            </span>
          </h1>
          <Menu />
        </section>
      </section>
    </div>
  );
}