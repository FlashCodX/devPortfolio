"use client";
type Props = {};
import Link from "next/link";
import { motion } from "framer-motion";

import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Navbar(props: Props) {
  return (
    <nav className='fixed w-full top-0 min-h-[80px] flex items-center justify-between  z-20 xl:items-center px-12 overflow-hidden'>
      <span className='flex justify-between max-w-screen-xl m-auto w-full overflow-hidden'>
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
          className='flex flex-row items-center gap-3  '
        >
          <AiFillLinkedin fontSize={36} />
          <AiFillGithub fontSize={36} />
        </motion.div>
        <Link href={"#contactme"}>
          <motion.div
            initial={{
              x: 500,
              opacity: 0.7,
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
            className='flex flex-row items-center gap-3 text-white  cursor-pointer'
          >
            <AiFillMail fontSize={36} />

            <p className='uppercase hidden md:inline-flex text-sm text-white  '>
              Get In Touch
            </p>
          </motion.div>
        </Link>
      </span>
    </nav>
  );
}
