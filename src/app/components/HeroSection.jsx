"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={`${styles.heroSectionEnhanced} lg:py-16 py-12 px-4 sm:px-6 md:px-8`}>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`col-span-12 sm:col-span-8 place-self-center sm:place-self-auto text-center sm:text-left ${styles.heroTextContainer} p-6 md:p-0`}
        >
          <h1 className="font-bold mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className={styles.animatedTextGradient}>
              Hi, I&apos;m Ashwin
            </span>
            <br />
            <TypeAnimation
              sequence={["Software", 1500, "", 500]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="inline-block"
            />
            <br />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#0EA5E9] mt-2 inline-block"
            >
              Engineer
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg mb-8 lg:text-xl"
          >
            Delivering Innovative Software Solutions with Precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/#contact"
              aria-label="Contact Ashwin"
              className={`px-8 py-3.5 w-full sm:w-fit rounded-full mr-0 sm:mr-4 mb-3 sm:mb-0 font-semibold transition-all duration-300 ease-in-out inline-block ${styles.heroButton}`}
            >
              Contact Me
            </Link>
            <Link
              href="/assets/ashwin_nyamainashe_resume.pdf"
              download
              aria-label="Download Ashwin's Resume"
              className={`px-1 inline-block py-1 w-full sm:w-fit rounded-full mt-3 sm:mt-0 transition-all duration-300 ease-in-out ${styles.heroButtonOutline}`}
            >
              <span className={`block rounded-full px-6 py-3 text-sm sm:text-base ${styles.heroButtonOutlineSpan}`}>
                Download CV
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-12 sm:col-span-4 place-self-center mt-8 sm:mt-4 lg:mt-0"
        >
          <div className={`${styles.heroImageWrapper} w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] relative mx-auto sm:mx-0`}>
            <Image
              src="/images/hero.jpg"
              alt="Ashwin - Developer"
              fill
              className={`object-cover rounded-full ${styles.heroImageEnhanced}`}
              sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 350px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
