"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CodeBracketIcon, EyeIcon, ArrowDownTrayIcon, ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { projectsData } from "../data/projects";
import { asset } from "../../lib/asset";
import SectionHeading from "./SectionHeading";

/* ─── Bento tile ──────────────────────────────────────────────── */
const spanClass = (i) => {
  const m = i % 7;
  if (m === 0) return "sm:col-span-2 sm:row-span-2";
  if (m === 4) return "sm:col-span-2 sm:row-span-1";
  return "sm:col-span-1 sm:row-span-1";
};

const solidBtn = "flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF6E] text-[#060B14] text-xs font-semibold tracking-wide hover:bg-[#F4EFE6] transition-colors duration-300";
const ghostBtn = "flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#F4EFE6]/30 text-[#F4EFE6] text-xs font-medium tracking-wide hover:bg-[#F4EFE6] hover:text-[#060B14] transition-colors duration-300";

const BentoCard = ({ project, index }) => {
  const big = index % 7 === 0;
  const hasLinks = Boolean(project.caseStudy || project.previewUrl || project.gitUrl || project.appStoreUrl || project.playStoreUrl);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${spanClass(index)} aspect-[4/3] sm:aspect-auto`}
    >
      <div className="group relative h-full min-h-[240px] rounded-xl overflow-hidden border border-[#F4EFE6]/[0.06] hover:border-[#D4AF6E]/40 transition-colors duration-700 bg-[#0A1628]">

        {/* Media */}
        {project.screens ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#16233C]">
            <div className="absolute inset-x-0 top-8 bottom-0 flex items-start justify-center gap-3 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]">
              {project.screens.map((src, i) => (
                <img
                  key={src}
                  src={asset(src)}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  className={`h-[85%] w-auto rounded-xl border border-[#F4EFE6]/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${i % 2 ? "rotate-2 translate-y-4" : "-rotate-2"}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${asset(project.image)})` }} />
            {project.hoverImage && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{ backgroundImage: `url(${asset(project.hoverImage)})` }}
              />
            )}
          </div>
        )}

        {/* Base gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/45 to-transparent" />

        {/* Category tag */}
        <span className="absolute top-4 left-4 text-[10px] px-2.5 py-1 rounded-full bg-[#060B14]/70 border border-[#F4EFE6]/10 backdrop-blur-sm text-[#D4AF6E] tracking-[0.25em] uppercase">
          {project.tag.find((t) => t !== "All")}
        </span>

        {/* Hover action overlay */}
        {hasLinks && (
          <div className="absolute inset-0 bg-[#060B14]/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-wrap items-center justify-center content-center gap-2.5 p-6">
            {project.caseStudy && (
              <Link href={`/projects/${project.caseStudy}`} className={solidBtn}>
                Case study <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            )}
            {project.previewUrl && (
              <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer"
                className={project.caseStudy ? ghostBtn : solidBtn}>
                <EyeIcon className="w-3.5 h-3.5" /> Preview
              </Link>
            )}
            {project.gitUrl && (
              <Link href={project.gitUrl} target="_blank" rel="noopener noreferrer" className={ghostBtn}>
                <CodeBracketIcon className="w-3.5 h-3.5" /> Code
              </Link>
            )}
            {project.appStoreUrl && (
              <Link href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className={ghostBtn}>
                <ArrowDownTrayIcon className="w-3.5 h-3.5" /> App Store
              </Link>
            )}
            {project.playStoreUrl && (
              <Link href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className={ghostBtn}>
                <ArrowDownTrayIcon className="w-3.5 h-3.5" /> Google Play
              </Link>
            )}
          </div>
        )}

        {/* Title + description */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 pointer-events-none">
          <h3 className={`font-display text-[#F4EFE6] font-medium mb-1 group-hover:text-[#D4AF6E] transition-colors duration-500 ${big ? "text-3xl" : "text-xl"}`}>
            {project.title}
          </h3>
          <p className={`text-[#94A3B8] leading-snug ${big ? "text-sm line-clamp-2 max-w-md" : "text-xs line-clamp-1"}`}>
            {project.description}
          </p>
          {/* Touch screens have no hover overlay, so surface the case study link directly */}
          {project.caseStudy && (
            <Link href={`/projects/${project.caseStudy}`}
              className="pointer-events-auto relative z-10 mt-2 inline-flex items-center gap-1 text-[#D4AF6E] text-xs tracking-[0.2em] uppercase [@media(hover:hover)]:hidden">
              Case study <ArrowRightIcon className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Filter pill ────────────────────────────────────────────── */
const FilterPill = ({ name, isSelected, count, onClick }) => (
  <button
    onClick={() => onClick(name)}
    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
      isSelected
        ? "bg-[#D4AF6E] text-[#060B14]"
        : "border border-[#F4EFE6]/10 text-[#64748B] hover:text-[#F4EFE6]"
    }`}
  >
    {name}
    <span className={`text-[10px] ${isSelected ? "text-[#060B14]/60" : "text-[#334155]"}`}>{count}</span>
  </button>
);

/* ─── Main section ───────────────────────────────────────────── */
const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(
    () => projectsData.filter((p) => p.tag.includes(activeTag)),
    [activeTag]
  );

  const counts = {
    All: projectsData.length,
    Web: projectsData.filter((p) => p.tag.includes("Web")).length,
    Mobile: projectsData.filter((p) => p.tag.includes("Mobile")).length,
  };

  return (
    <section id="projects" className="relative bg-[#060B14] py-24 md:py-36 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="mb-14 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-6">
          <SectionHeading eyebrow="Selected Work" title={<>Projects, crafted <em className="text-[#D4AF6E]">with care</em></>} className="flex-1" />
          <div className="flex gap-2 flex-wrap">
            {["All", "Web", "Mobile"].map((tag) => (
              <FilterPill key={tag} name={tag} isSelected={activeTag === tag} count={counts[tag]} onClick={setActiveTag} />
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-4 gap-5 sm:auto-rows-[240px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <BentoCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
