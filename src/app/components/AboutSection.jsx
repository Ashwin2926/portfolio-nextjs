"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { asset } from "../../lib/asset";

const TAB_CONTENT = {
  skills: {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {["Laravel", "React", "Flutter", "MySQL", "Python", "Java", "C#", "Node.js", "JavaScript", "HTML5 / CSS3"].map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0A1628] border border-[#1E293B] hover:border-[#D4AF6E]/40 hover:bg-[#D4AF6E]/5 transition-all duration-200 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF6E] group-hover:scale-125 transition-transform duration-200 flex-shrink-0" />
            <span className="text-[#94A3B8] text-sm group-hover:text-white transition-colors duration-200">{skill}</span>
          </div>
        ))}
      </div>
    ),
  },
  education: {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="relative pl-6 border-l-2 border-[#D4AF6E]/40">
          <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#D4AF6E]" />
          <p className="text-white font-semibold text-base">Chinhoyi University of Technology</p>
          <p className="text-[#D4AF6E] text-sm font-medium mt-0.5">BSc (Hons) Software Engineering</p>
          <p className="text-[#475569] text-xs mt-1">Zimbabwe</p>
        </div>
      </div>
    ),
  },
  certifications: {
    title: "Certs",
    id: "certifications",
    content: (
      <div className="space-y-3">
        {[
          "OPSWAT Data Transfer Security Associate (ODSA)",
          "OPSWAT File Security Associate (OFSA)",
        ].map((cert) => (
          <div key={cert} className="flex items-start gap-3 p-3 rounded-lg bg-[#0A1628] border border-[#1E293B]">
            <div className="w-5 h-5 rounded-full bg-[#D4AF6E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-[#D4AF6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[#94A3B8] text-sm leading-relaxed">{cert}</span>
          </div>
        ))}
        <a
          href="https://github.com/Ashwin2926"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 text-[#D4AF6E] text-sm font-medium hover:underline"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View GitHub Profile →
        </a>
      </div>
    ),
  },
};

const TABS_ORDER = ["skills", "education", "certifications"];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setActiveTab(id));
  };

  return (
    <section className="relative bg-[#060B14] py-24 md:py-36 overflow-hidden" id="about">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D4AF6E] opacity-[0.03] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <Reveal>
          <SectionHeading eyebrow="About" title={<>Design-minded <em className="text-[#D4AF6E]">engineering</em></>} className="mb-16" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">

          {/* Image column */}
          <Reveal className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative frame offset */}
              <div className="absolute top-5 left-5 w-full h-full rounded-xl border border-[#D4AF6E]/25" />
              <div className="relative w-64 h-80 sm:w-72 sm:h-[380px] rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] bg-[#0F172A]">
                <Image
                  src={asset("/images/hero.jpg")}
                  alt="Ashwin Nyamainashe, Software Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, 288px"
                />
                {/* Bottom name badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/80 to-transparent p-5">
                  <p className="font-display text-[#F4EFE6] text-2xl">Ashwin Nyamainashe</p>
                  <p className="text-[#D4AF6E] text-[10px] tracking-[0.3em] uppercase mt-1">Software Engineer</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content column */}
          <Reveal delay={0.15} className="lg:col-span-7 flex flex-col">
            <p className="text-[#94A3B8] text-base lg:text-lg font-light leading-relaxed mb-10">
              I&apos;m a passionate full-stack developer dedicated to crafting interactive,
              responsive, and visually engaging applications. With expertise spanning{" "}
              <span className="text-[#94A3B8] font-medium">Flutter, React, Laravel, Power BI, C#, MySQL</span>{" "}
              and modern frontend technologies, I bring a versatile skill set to every project.
              My background in graphic design complements my technical abilities, building solutions
              that are both highly functional and aesthetically pleasing.
            </p>

            {/* Tabs */}
            <div className="flex gap-1 p-1 rounded-xl bg-[#0A1628] border border-[#1E293B] mb-6 w-fit">
              {TABS_ORDER.map((tabId) => (
                <button
                  key={tabId}
                  onClick={() => handleTabChange(tabId)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === tabId
                      ? "bg-[#D4AF6E] text-[#060B14]"
                      : "text-[#475569] hover:text-[#94A3B8]"
                  }`}
                >
                  {TAB_CONTENT[tabId].title}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#0A1628]/60 border border-[#F4EFE6]/[0.06] min-h-[200px] transition-all duration-300">
              {TAB_CONTENT[activeTab]?.content}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;