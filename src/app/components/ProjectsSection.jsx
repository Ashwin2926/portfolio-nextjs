"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { projectsData } from "../data/projects";
import { asset } from "../../lib/asset";
import SectionHeading from "./SectionHeading";

const ext = { target: "_blank", rel: "noopener noreferrer" };

/* ─── Card media ─────────────────────────────────────────────── */
const Media = ({ project }) => (
  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-sand border border-line">
    {project.screens ? (
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
      className="group flex flex-col"
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
          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
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
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
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
    <section id="projects" className="relative bg-paper border-y border-line py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="mb-16 flex flex-col lg:flex-row lg:items-end gap-8">
          <SectionHeading eyebrow="Selected work" title={<>Projects, crafted <em className="text-accent">with care</em></>} className="flex-1" />
          <div className="flex gap-2 flex-wrap">
            {["All", "Web", "Mobile"].map((tag) => (
              <FilterPill key={tag} name={tag} isSelected={activeTag === tag} count={counts[tag]} onClick={setActiveTag} />
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
