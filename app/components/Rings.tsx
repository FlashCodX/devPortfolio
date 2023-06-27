"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "../../public/avatar.webp";
export default function Rings() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className='relative flex justify-center items-center max-w-[650px] w-full h-[60px] '
      >
        <div className='absolute border border-[--default-ring] rounded-full h-[200px] w-[200px] animate-ping' />
        <div className=' rounded-full border   border-[--default-ring] w-[250px] h-[250px]  md:h-[300px] md:w-[300px] absolute  ' />
        <div className='invisible md:visible rounded-full border   border-[--default-ring]  h-[500px] w-[500px] absolute ' />

        <div className=' rounded-full border  border-[--highlight-ring] opacity-20  h-[350px] w-[350px] md:h-[650px] md:w-[650px] absolute  animate-pulse ' />
        <div
          className='rounded-full border invisible md:visible  border-[--default-ring]  h-[400px] w-[400px]  first-letter:
      
      absolute  '
        />
      </motion.div>
      {/* <section className='absolute top-[100px]  h-screen   flex items-center  '>
        <Image
          width={150}
          className='rounded-full object-cover '
          src={avatar}
          alt='hero'
        />
      </section> */}
    </>
  );
}
