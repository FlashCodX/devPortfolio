import Image from "next/image";
import Rings from "./Rings";
import avatar from "../../public/avatar.webp";
import Menu from "./menu";
type Props = {};

export default function HeroSection(props: Props) {
  return (
    <div className='relative  bg-red-300/10  w-[650px] h-[650px] m-auto  mt-[160px] flex items-center justify-center'>
      <Rings />
      <section className='relative  w-full flex flex-col gap-4 justify-center content-center   text-center '>
        <section className='flex flex-col gap-3 items-center justify-end'>
          <h2 className='flex text-[--text-primary] text-[.5rem] opacity-40 md:text-[.8rem]  tracking-[7px] uppercase'>
            Frontend Web Developer
          </h2>
          <h1 className=' text-white font-semibold flex '>
            <span className='text-[--secondary]'>Hi, my name is Luis.</span>
          </h1>
          <Menu />
        </section>
      </section>
    </div>
  );
}
