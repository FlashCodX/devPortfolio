"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper";
import Image from "next/image";
import hackertyper from "../../assets/projects/hackertyper/desktop.jpeg";
import { Project } from "../Project";

type Props = {
  projects: any[];
};

export default function ProjectsSection({ projects }: Props) {
  return (
    <section className='w-full pt-[80px] relative h-[400px]'>
      <section
        className='
      w-full h-full
      px-6
      
      '
      >
        <h1
          className='relative 
        mt-24
        mb-12
        font-bold uppercase tracking-[10px] lg:tracking-[6px] text-center text-[--secondary] text-3xl lg:text-4xl'
        >
          Projects
        </h1>
        <Swiper
          onActiveIndexChange={(e) => console.log(e)}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            968: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
        >
          {projects.map((project: any) => {
            return (
              <SwiperSlide
                key={project.id}
                className='
            rounded-3xl
            overflow-hidden
            opacity-25 border border-gray-400/70'
              >
                <Project />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <h1
          className='
          mt-10
        font-bold uppercase tracking-[10px] lg:tracking-[2px] text-center  text-3xl lg:text-4xl
        
        '
        >
          HackerTyper
        </h1>
      </section>
    </section>
  );
}
