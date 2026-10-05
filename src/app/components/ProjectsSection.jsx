"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { projectsData } from "../data/projects";
import { asset } from "../../lib/asset";
import SectionHeading from "./SectionHeading";

const ext = { target: "_blank", rel: "noopener noreferrer" };

/* ─── Generated visual for projects without screenshots ─────── */
const VisualPanel = ({ project }) => (
  <div className="absolute inset-0 bg-ink text-canvas overflow-hidden">
    <div aria-hidden="true" className="absolute inset-0 opacity-[0.07]"
      style={{ backgroundImage: "linear-gradient(#F6F3EE 1px, transparent 1px), linear-gradient(90deg, #F6F3EE 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
    <div aria-hidden="true" className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-accent opacity-60 blur-[70px] transition-transform duration-700 group-hover:scale-110" />
    <div aria-hidden="true" className="absolute right-6 top-6 w-24 h-24 rounded-full border border-canvas/15" />
    <div aria-hidden="true" className="absolute right-12 top-12 w-12 h-12 rounded-full border border-accent-light/40" />
    <div className="relative h-full flex flex-col justify-between p-5 sm:p-6">
      <span className="inline-flex items-center gap-2 text-accent-light text-[11px] font-medium tracking-[0.25em] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
        {project.tag.find((t) => t !== "All")}
      </span>
      <div>
        <p className="font-display italic text-4xl lg:text-5xl leading-none mb-4">{project.visual.label}</p>
        <ul className="flex flex-wrap gap-1.5">
          {project.visual.stack.map((item) => (
            <li key={item} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-canvas/15 bg-canvas/5 text-canvas/80 text-[10px] sm:text-[11px]">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

/* ─── Card media ─────────────────────────────────────────────── */
const Media = ({ project }) => (
  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-sand border border-line">
    {project.visual ? (
      <VisualPanel project={project} />
    ) : project.screens ? (
      <div className="absolute inset-0 flex items-start justify-center gap-4 pt-8 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        {project.screens.map((src, i) => (
          <img
            key={src}
            src={asset(src)}
            alt={`${project.title} screenshot ${i + 1}`}
            loading="lazy"
            className={`h-[88%] w-auto rounded-xl shadow-[0_20px_40px_-15px_rgba(18,18,18,0.35)] ${i % 2 ? "translate-y-6" : ""}`}
          />
        ))}
      </div>
    ) : (
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        <img src={asset(project.image)} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top" />
        {project.hoverImage && (
          <img src={asset(project.hoverImage)} alt="" aria-hidden="true" loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        )}
      </div>
    )}
  </div>
);

/* ─── Card ───────────────────────────────────────────────────── */
const ProjectCard = ({ project }) => {
  const primaryHref = project.caseStudy ? `/projects/${project.caseStudy}` : project.previewUrl || project.gitUrl;
  const primaryExternal = !project.caseStudy && Boolean(primaryHref);

  const links = [
    project.previewUrl && { label: "Visit site", href: project.previewUrl },
    project.appStoreUrl && { label: "App Store", href: project.appStoreUrl },
    project.playStoreUrl && { label: "Google Play", href: project.playStoreUrl },
    project.gitUrl && { label: "Code", href: project.gitUrl },
  ].filter(Boolean);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col w-[82%] sm:w-[60%] flex-shrink-0 snap-start md:w-auto"
    >
      {primaryHref ? (
        <Link href={primaryHref} {...(primaryExternal ? ext : {})} aria-label={project.title}>
          <Media project={project} />
        </Link>
      ) : (
        <Media project={project} />
      )}

      <div className="pt-5 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="font-display text-[1.75rem] leading-tight text-ink">{project.title}</h3>
          <span className="text-muted text-xs flex-shrink-0">{project.tag.find((t) => t !== "All")}</span>
        </div>
        <p className="text-body text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</p>

        {(project.caseStudy || links.length > 0) && (
          <div className="md:mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {project.caseStudy && (
              <Link href={`/projects/${project.caseStudy}`}
                className="inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent-dark">
                Case study <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            )}
            {links.map(({ label, href }) => (
              <a key={label} href={href} {...ext}
                className="inline-flex items-center gap-1 text-body hover:text-ink transition-colors duration-300">
                {label} <ArrowUpRightIcon className="w-3 h-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

/* ─── Filter pill ────────────────────────────────────────────── */
const FilterPill = ({ name, isSelected, count, onClick }) => (
  <button
    onClick={() => onClick(name)}
    aria-pressed={isSelected}
    className={`flex flex-shrink-0 items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors duration-300 ${
      isSelected ? "bg-ink text-canvas" : "border border-line text-body hover:border-ink hover:text-ink"
    }`}
  >
    {name}
    <span className={`text-xs ${isSelected ? "text-canvas/60" : "text-muted"}`}>{count}</span>
  </button>
);

/* ─── Main section ───────────────────────────────────────────── */
const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [position, setPosition] = useState(1);
  const rowRef = useRef(null);

  // On phones the cards form a swipe row; restart it when the filter changes.
  useEffect(() => {
    rowRef.current?.scrollTo({ left: 0 });
    setPosition(1);
  }, [activeTag]);

  const handleScroll = () => {
    const row = rowRef.current;
    const card = row?.firstElementChild;
    if (!card) return;
    const step = card.getBoundingClientRect().width + 20;
    setPosition(Math.min(Math.round(row.scrollLeft / step) + 1, row.childElementCount));
  };

  const filtered = useMemo(
    () => projectsData.filter((p) => p.tag.includes(activeTag)),
    [activeTag]
  );

  const counts = {
    All: projectsData.length,
    Web: projectsData.filter((p) => p.tag.includes("Web")).length,
    Mobile: projectsData.filter((p) => p.tag.includes("Mobile")).length,
    "AI & Automation": projectsData.filter((p) => p.tag.includes("AI & Automation")).length,
  };

  return (
    <section id="projects" className="relative bg-paper border-y border-line py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8">
          <SectionHeading eyebrow="Selected work" title={<>Projects, crafted <em className="text-accent">with care</em></>} className="flex-1" />
          <div className="no-scrollbar flex gap-2 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap">
            {["All", "Web", "Mobile", "AI & Automation"].map((tag) => (
              <FilterPill key={tag} name={tag} isSelected={activeTag === tag} count={counts[tag]} onClick={setActiveTag} />
            ))}
          </div>
        </div>

        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-6 sm:scroll-px-10 -mx-6 sm:-mx-10 px-6 sm:px-10 pb-2 md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {/* Swipe progress, phones only */}
        <div className="md:hidden mt-8 flex items-center gap-4">
          <span className="font-display text-2xl text-ink tabular-nums">{String(position).padStart(2, "0")}</span>
          <div className="relative flex-1 h-px bg-line">
            <span
              className="absolute left-0 top-0 h-px bg-ink transition-all duration-300"
              style={{ width: `${(position / filtered.length) * 100}%` }}
            />
          </div>
          <span className="text-muted text-sm tabular-nums">{String(filtered.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
