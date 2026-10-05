"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { asset } from "../../lib/asset";
import { projectsData } from "../data/projects";

const ease = [0.22, 1, 0.36, 1];
const CV_PATH = encodeURI("/assets/ashwin munashe nyamainashe resume.pdf");

export const GitHubMark = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const LinkedInMark = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM3.558 20.452h3.554V9H3.558v11.452z" />
  </svg>
);

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease },
});

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "100K+", label: "Users reached" },
  { value: `${projectsData.length}`, label: "Projects built" },
];

const HeroSection = () => {
  return (
    <section className="relative bg-canvas pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-end">

          {/* ── Text ── */}
          <div className="lg:col-span-7 lg:pb-6">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 mb-10 px-3.5 py-1.5 rounded-full border border-line bg-paper">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent opacity-40 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="text-body text-xs">Available for select projects</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="font-display text-ink leading-[0.92] tracking-[-0.02em] mb-10">
              <span className="block text-[17vw] sm:text-8xl xl:text-[8.5rem]">Ashwin</span>
              <span className="block text-[17vw] sm:text-8xl xl:text-[8.5rem] italic text-accent">Nyamainashe</span>
            </motion.h1>

            <motion.p {...fadeUp(0.25)} className="text-body text-lg lg:text-xl leading-relaxed max-w-lg mb-10">
              Software engineer crafting premium web platforms and mobile apps,
              from first sketch to launch.
            </motion.p>

            <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-medium text-canvas bg-ink hover:bg-accent transition-colors duration-300"
              >
                Start a project
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href={asset(CV_PATH)}
                download
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-1 transition-colors duration-300"
              >
                Download CV
                <ArrowDownTrayIcon className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-4 text-muted">
                <a href="https://github.com/Ashwin2926" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="hover:text-ink transition-colors duration-300">
                  <GitHubMark className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/ashwin-nyamainashe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="hover:text-ink transition-colors duration-300">
                  <LinkedInMark className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Portrait in an arch ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px]">
              <div className="relative aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden bg-sand">
                <Image
                  src={asset("/images/profile.png")}
                  alt="Ashwin Nyamainashe, Software Engineer"
                  fill
                  className="object-cover object-[50%_20%]"
                  sizes="(max-width: 1024px) 380px, 380px"
                  priority
                />
              </div>
              <div className="absolute -left-4 sm:-left-8 bottom-10 bg-paper border border-line rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(18,18,18,0.25)]">
                <p className="font-display text-2xl text-ink leading-none">Full-stack</p>
                <p className="text-muted text-xs mt-1.5">Web · Mobile · Product</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div {...fadeUp(0.5)} className="grid grid-cols-3 mt-20 lg:mt-24 border-t border-line">
          {stats.map(({ value, label }, i) => (
            <div key={label} className={`pt-6 ${i > 0 ? "pl-4 sm:pl-8 border-l border-line" : ""}`}>
              <p className="font-display text-4xl sm:text-5xl text-ink leading-none">{value}</p>
              <p className="text-muted text-xs sm:text-sm mt-2">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
