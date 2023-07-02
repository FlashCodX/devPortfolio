import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import hackertyper from "../assets/projects/hackertyper/desktop.png";

type Props = {};

export const Project = ({}: Props) => {
  return (
    <article className='w-full h-full '>
      <Image
        src={hackertyper}
        className='object-cover
        
    h-full
        w-full '
        alt='hero'
      />
    </article>
  );
};
