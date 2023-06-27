import Image from "next/image";
import Rings from "./Rings";
import avatar from "../../public/avatar.webp";
import Menu from "./menu";
type Props = {};

export default function HeroSection(props: Props) {
  return (
    <div className='relative  flex items-center justify-center  min-h-screen mt-[-160px]'>
      <Rings />

      {/* <section className='absolute  w-full flex flex-col gap-4 flex-1 min-h-[600px] m-auto text-center '>
        <Image
          width={150}
          className='rounded-full object-cover m-auto'
          src={avatar}
          alt='hero'
        />
        <h2 className='text-[--text-primary] text-[.5rem] opacity-40 md:text-[.8rem] tracking-[7px] uppercase'>
          Frontend Web Developer
        </h2>
        <h1 className=' text-white font-semibold '>
          <span className=' text-[--secondary]'>Hi, my name is Luis.</span>
        </h1>
        <Menu />
      </section> */}
    </div>
  );
}
