"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
            <Image
              alt="profile"
              src="https://images.unsplash.com/photo-1714579329402-7afd9040eaac?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-full h-24 w-24 border-[0.35rem] object-cover shadow-xl"
              width="200"
              height="200"
              quality="100"
              priority={true}
            />
          </motion.div>

          <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }} className="text-4xl absolute right-0 bottom-0">
            👋
          </motion.span>
        </div>
      </div>

      <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I'm Pradeep.</span> I'm a <span className="font-bold">full-stack developer</span> with <span className="font-bold">9 yrs</span> of experience. I enjoy building <span className="italic"> web apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>{" "}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ deplay: 0.1 }} className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 focus:scale-110 transition ">
          Contact me here
          <BsArrowRight className="opactity-70 group-hover: translate-x-1 transition" />
        </Link>

        <a className="group bg-white border border-black/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-white active:scale-105 focus:scale-110 transition cursor-pointer" download={true}>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a href="https://www.linkedin.com/in/pradeep-kumar-37b67a247/" target="blank" className="bg-white border border-black/10 py-4 px-4 text-gray-700 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-white active:scale-105 focus:scale-110 transition cursor-pointer">
          <BsLinkedin />
        </a>

        <a href="https://github.com/pr4dp" target="blank" className="bg-white border border-black/10 py-4 px-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none hover:scale-110 hover:bg-white active:scale-105 focus:scale-110 transition cursor-pointer">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
