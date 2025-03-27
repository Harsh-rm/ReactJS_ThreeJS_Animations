"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import FireEffect from "./FireComponent";
import Image from "next/image";

const HeroContent = () => {
  return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-25 mt-60 w-full z-[20]"
      >

      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      
        <div className="flex flex-row items-center gap-5">
        
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center"
          >
          <div className="fire-aura"></div>

          <motion.img
            src="/GitHub_Profile.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
            className="rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[1] flex items-center mt-[123px] ml-[23px]"
          >
             <FireEffect />
             
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 relative top-[1px]" />
            <h1 className="Welcome-text text-[16px]">
              Creative Software Developer - AI/ML
            </h1>
          </motion.div>

        </div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-5 text-6xl font-bold text-white w-[700px] max-w-auto h-auto"
        >
          <span>
            <span className="mr-4">
            Harshith
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &quot;Harsh RM&quot; 
            </span>
            <span className="block">
            Roopa Manjunath
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] flex items-center"
        >
          Hello there, Welcome to my space! Built with 

          <Image src="/next.png" alt="Next.js Logo" className="inline-block ml-2 mr-2" width={64} height={64} />
          and
          <Image src="/tailwind.png" alt="Tailwind CSS Logo" className="inline-block ml-2" width={64} height={64} />

        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Read more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="w-full h-full flex justify-center items-center ml-[360px]"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={600}
          width={600}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;