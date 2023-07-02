import Rings from "../Rings";
import Menu from "../menu";
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
          <h2 className='flex text-[--text-primary] text-[.5rem] md:text-[.8rem] opacity-90  tracking-[7px] uppercase'>
            Frontend Web Developer
          </h2>
          <h1 className=' text-white font-semibold flex '>
            <span className='text-[--secondary] text-xl opacity-90 tracking-wider'>
              Hi, my name is Luis.
            </span>
          </h1>
          <Menu />
        </section>
      </section>
    </div>
  );
}
