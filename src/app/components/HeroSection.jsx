"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060B14]">
      
      {/* Background texture / grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow top-left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#F59E0B] opacity-[0.06] blur-[120px] pointer-events-none" />
      {/* Radial glow bottom-right */}
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#3B82F6] opacity-[0.07] blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Text Column ── */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-[#F59E0B] text-xs tracking-[0.2em] font-semibold uppercase">
                Available for Projects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black leading-[1.05] mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white">
                Hi, I&apos;m
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #EC4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ashwin
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#94A3B8] font-light mt-2 tracking-wide">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    2000,
                    "Full-Stack Developer",
                    2000,
                    "Flutter Specialist",
                    2000,
                    "UI Craftsman",
                    2000,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#64748B] text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Delivering innovative software solutions — from polished web apps to
              cross-platform mobile experiences — with precision and craft.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[#060B14] bg-[#F59E0B] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:scale-[1.03]"
              >
                <span className="relative z-10 tracking-wide">Let&apos;s Talk</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>

              <Link
                href="/assets/ashwin_nyamainashe_resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-[#CBD5E1] border border-[#1E293B] bg-[#0F172A] hover:border-[#F59E0B]/50 hover:text-white hover:bg-[#1E293B] transition-all duration-300 tracking-wide"
              >
                Download CV
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
            </motion.div>

            {/* Social / stat strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "5+", label: "Years Exp." },
                { value: "100+", label: "Projects" },
                { value: "7", label: "Awards" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-2xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{value}</p>
                  <p className="text-xs text-[#475569] tracking-widest uppercase">{label}</p>
                </div>
              ))}
              <div className="w-px h-10 bg-[#1E293B] hidden sm:block" />
              <a href="https://github.com/Ashwin2926" target="_blank" rel="noopener noreferrer"
                className="text-[#475569] hover:text-[#F59E0B] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-[#F59E0B]/20 scale-[1.12] animate-[spin_20s_linear_infinite]"
                style={{ borderStyle: "dashed" }} />
              <div className="absolute inset-0 rounded-full border border-[#3B82F6]/15 scale-[1.22] animate-[spin_30s_linear_infinite_reverse]"
                style={{ borderStyle: "dashed" }} />

              {/* Amber glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444] blur-2xl opacity-20 scale-90" />

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-2 border-[#1E293B] shadow-2xl">
                <Image
                  src="./images/hero.jpg"
                  alt="Ashwin — Software Engineer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 360px"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-[#0F172A] border border-[#1E293B] rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Full-Stack</p>
                  <p className="text-[#475569] text-xs">React · Laravel · Flutter</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;