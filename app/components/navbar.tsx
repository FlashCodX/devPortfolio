"use client";
type Props = {};
import Link from "next/link";
import { motion } from "framer-motion";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Navbar(props: Props) {
  return (
    <nav className='fixed w-full top-0 min-h-[80px] flex items-center justify-between  z-20 xl:items-center px-12 overflow-hidden'>
      <span className='flex justify-between max-w-screen-xl m-auto w-full'>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex flex-row items-center  '
        >
          <AiFillLinkedin fontSize={36} />
          <AiFillGithub fontSize={36} />
        </motion.div>
        <Link href={"#contact"}>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className='flex flex-row items-center text-white  cursor-pointer'
          >
            <AiFillGithub fontSize={36} />

            <p className='uppercase hidden md:inline-flex text-sm text-white opacity-75 hover:opacity-100'>
              Get In Touch
            </p>
          </motion.div>
        </Link>
      </span>
    </nav>
  );
}
