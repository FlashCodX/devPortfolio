"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "../../public/avatar.webp";
export default function Rings() {
  return (
    <div
      className='max-h-[650px] max-w-[650px]  
      w-full h-full
      relative'
    >
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
        className='absolute 
        top-0 right-0 m- bottom-0 left-0
        auto
        flex justify-center items-center
        
        '
      >
        <div className='s4Ring' />
        <div className='s3Ring' />
        <div className='s2Ring' />
        <div className='s1Ring' />
        <div className='pingRing' />
      </motion.div>
      <Image
        width={150}
        className='rounded-full object-cover
          absolute top-0 right-0 left-0 bottom-0 m-auto
          '
        src={avatar}
        alt='hero'
      />
    </div>
  );
}
