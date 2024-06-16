"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <p className="text-black font-bold mb-4 text-4xl sm:text-5xl  ">
            <span className=" text-transparent font-bold bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">
              Hi, I&apos;m Ashwin {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Software  ",
                1000,
                "Backend ",
                1000,
                "Frontend ",
                1000,
                "Mobile ",
                1000,
                "Graphic ",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            Developer
          </p>
          <p className="text-[#000000] text-base sm:text-lg mb-6 lg:text-xl">
          Delivering Innovative Software Solutions with Precision.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-slate-200 text-white"
            >
             Contact Me
            </Link>
            <Link
               href="/assets/ashwin nyamainashe resume.pdf" download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative image shape">
            <img
              src={"./images/hero.jpg"}
              alt="hero image"
              className="absolute transform  image-shape "
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
