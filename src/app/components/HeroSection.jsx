"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { asset } from "../../lib/asset";

const ease = [0.22, 1, 0.36, 1];
const CV_PATH = encodeURI("/assets/ashwin munashe nyamainashe resume.pdf");

const GitHubMark = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInMark = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM3.558 20.452h3.554V9H3.558v11.452z" />
  </svg>
);

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease },
});

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#060B14]">

      {/* Soft champagne glow */}
      <div className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full bg-[#D4AF6E] opacity-[0.05] blur-[160px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* ── Text Column ── */}
          <div className="lg:col-span-7 text-center lg:text-left">

            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-3 mb-10">
              <span className="w-10 h-px bg-[#D4AF6E]" />
              <span className="text-[#D4AF6E] text-[11px] tracking-[0.35em] uppercase">
                Available for select projects
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.15)} className="font-display font-medium leading-[0.95] mb-8">
              <span className="block text-6xl sm:text-7xl xl:text-8xl text-[#F4EFE6]">Ashwin</span>
              <span className="block text-6xl sm:text-7xl xl:text-8xl italic text-[#D4AF6E]">Nyamainashe</span>
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="text-[#F4EFE6]/80 text-sm sm:text-base tracking-[0.3em] uppercase mb-6">
              Software Engineer
            </motion.p>

            <motion.p {...fadeUp(0.4)} className="text-[#94A3B8] text-base lg:text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              I design and build premium web platforms and mobile apps for brands across the
              UAE and Africa, crafted with precision from first sketch to launch.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-[0.15em] uppercase text-[#060B14] bg-[#D4AF6E] hover:bg-[#F4EFE6] transition-colors duration-500"
              >
                Start a project
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-500">→</span>
              </Link>
              <a
                href={asset(CV_PATH)}
                download
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase text-[#F4EFE6] border border-[#F4EFE6]/20 hover:border-[#D4AF6E] hover:text-[#D4AF6E] transition-colors duration-500"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.65)} className="flex flex-wrap items-center gap-8 mt-14 justify-center lg:justify-start">
              {[["5+", "Years"], ["100K+", "Users reached"]].map(([value, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="font-display text-3xl text-[#F4EFE6]">{value}</p>
                  <p className="text-[10px] text-[#64748B] tracking-[0.3em] uppercase">{label}</p>
                </div>
              ))}
              <span className="w-px h-10 bg-[#F4EFE6]/10" />
              <div className="flex items-center gap-5">
                <a href="https://github.com/Ashwin2926" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="text-[#64748B] hover:text-[#D4AF6E] transition-colors duration-500">
                  <GitHubMark className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/ashwin-nyamainashe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="text-[#64748B] hover:text-[#D4AF6E] transition-colors duration-500">
                  <LinkedInMark className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Fine gold ring */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF6E]/30 scale-[1.08]" />
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src={asset("/images/profile.png")}
                  alt="Ashwin Nyamainashe, Software Engineer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#060B14] border border-[#D4AF6E]/30 rounded-full px-5 py-2">
                <p className="text-[#D4AF6E] text-[10px] tracking-[0.3em] uppercase">Web · Mobile · Full-Stack</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
