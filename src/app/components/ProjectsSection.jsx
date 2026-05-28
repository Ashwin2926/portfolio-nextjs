"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

/* ─── Data ─────────────────────────────────────────────────── */
const projectsData = [
  {
    id: 8,  title: "Prevail Shipping",       description: "Full shipping & logistics company website with service listings, tracking info and contact flows.",
    image: "./images/projects/prevailshipping.png", tag: ["All", "Web"],  previewUrl: "https://prevailshipping.com",        featured: true,
  },
  {
    id: 9,  title: "Talk & Pay",             description: "Fintech payment platform — clean marketing site for a modern payment solution.",
    image: "./images/projects/tap.png",              tag: ["All", "Web"],  previewUrl: "https://talkandpay.com",             featured: true,
  },
  {
    id: 12, title: "Haleefa Elite Homes",    description: "Luxury real estate React profile site showcasing premium properties.",
    image: "./images/projects/haleefa.png",          tag: ["All", "Web"],  previewUrl: "https://www.haleefaelitehomes.com/",
  },
  {
    id: 10, title: "Capital Stay UAE",       description: "Real estate listings and property discovery platform for UAE market.",
    image: "./images/projects/capitalstay.png",      tag: ["All", "Web"],  previewUrl: "https://capitalstayuae.com",
  },
  {
    id: 13, title: "Dilex Freight",          description: "International freight forwarding and logistics services site.",
    image: "./images/projects/dilex.png",            tag: ["All", "Web"],  previewUrl: "https://dilexfreight.com/",
  },
  {
    id: 11, title: "Breathtakingkeeps",      description: "Vacation and travel experiences booking site with immersive design.",
    image: "./images/projects/breathtakingkeeps.png",tag: ["All", "Web"],  previewUrl: "https://breathtakingkeeps.site/",
  },
  {
    id: 5,  title: "Kiosk App",              description: "Self-service kiosk web application for Talk & Pay.",
    image: "./images/projects/kiosk.png",            tag: ["All", "Web"],  previewUrl: "https://kiosk.talkandpay.com/",
  },
  {
    id: 4,  title: "Hymn Book App",          description: "Cross-platform Flutter mobile application for browsing and reading hymns.",
    image: "./images/projects/mobile1.jpg",          tag: ["All", "Mobile"], gitUrl: "https://github.com/Ashwin2926/hymn-book",
  },
  {
    id: 1,  title: "Management System",      description: "Laravel-powered enterprise management system with full CRUD and auth.",
    image: "./images/projects/1.png",                tag: ["All", "Web"],
  },
  {
    id: 2,  title: "Lodge Website",          description: "Hospitality website built with React frontend and Laravel backend.",
    image: "./images/projects/2.png",                tag: ["All", "Web"],
  },
  {
    id: 3,  title: "Church Website",         description: "Community church platform built with React.",
    image: "./images/projects/3.png",                tag: ["All", "Web"],
  },
  {
    id: 6,  title: "Management System II",   description: "Second-generation Laravel enterprise management portal.",
    image: "./images/projects/6.png",                tag: ["All", "Web"],
  },
  {
    id: 7,  title: "Shoe Shop E-Commerce",   description: "E-commerce store with authentication and product browsing (PHP, HTML, CSS).",
    image: "./images/projects/7.png",                tag: ["All", "Web"],
  },
];

/* ─── Tilt Card ─────────────────────────────────────────────── */
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

/* ─── Featured spotlight card ───────────────────────────────── */
const SpotlightCard = ({ project, index }) => (
  <TiltCard className="h-full">
    <div className="group relative h-full min-h-[360px] rounded-2xl overflow-hidden border border-[#1E293B] hover:border-[#F59E0B]/40 transition-colors duration-300 bg-[#0A1628] cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/60 to-[#060B14]/10" />
      <div className="absolute top-5 right-5 text-6xl font-black text-white/5 select-none pointer-events-none"
        style={{ fontFamily: "'Syne', sans-serif" }}>
        {String(index + 1).padStart(2, "0")}
      </div>
      {project.previewUrl && (
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#060B14]/80 border border-[#1E293B] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-semibold">Live</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="text-[#F59E0B] text-xs font-semibold tracking-widest uppercase mb-2 block">Featured</span>
            <h3 className="text-white text-xl font-black mb-2 group-hover:text-[#F59E0B] transition-colors duration-200"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              {project.title}
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2">{project.description}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {project.previewUrl && (
            <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F59E0B] text-[#060B14] text-xs font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-200">
              <EyeIcon className="w-3.5 h-3.5" /> Preview
            </Link>
          )}
          {project.gitUrl && (
            <Link href={project.gitUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1E293B] text-[#94A3B8] text-xs font-semibold hover:text-white transition-all duration-200">
              <CodeBracketIcon className="w-3.5 h-3.5" /> Code
            </Link>
          )}
        </div>
      </div>
    </div>
  </TiltCard>
);

/* ─── Compact card ───────────────────────────────────────────── */
const CompactCard = ({ project }) => (
  <div className="group flex gap-4 p-4 rounded-xl bg-[#0A1628] border border-[#1E293B] hover:border-[#F59E0B]/30 transition-all duration-200 cursor-pointer">
    <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute inset-0 bg-[#0A1628]/40" />
    </div>
    <div className="flex-1 min-w-0 flex flex-col justify-center">
      <div className="flex items-center justify-between gap-2 mb-1">
        <h4 className="text-white text-sm font-bold truncate group-hover:text-[#F59E0B] transition-colors duration-200"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          {project.title}
        </h4>
        {(project.previewUrl || project.gitUrl) && (
          <Link
            href={project.previewUrl || project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#334155] hover:text-[#F59E0B] transition-colors duration-200 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
      <p className="text-[#475569] text-xs leading-relaxed line-clamp-2">{project.description}</p>
      <div className="flex gap-1.5 mt-2">
        {project.tag.filter(t => t !== "All").map(t => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#060B14] border border-[#1E293B] text-[#475569]">{t}</span>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Filter pill ────────────────────────────────────────────── */
const FilterPill = ({ name, isSelected, count, onClick }) => (
  <button
    onClick={() => onClick(name)}
    className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
      isSelected
        ? "bg-[#F59E0B] text-[#060B14] shadow-[0_0_24px_rgba(245,158,11,0.35)]"
        : "bg-[#0A1628] text-[#475569] border border-[#1E293B] hover:border-[#F59E0B]/30 hover:text-[#94A3B8]"
    }`}
  >
    {name}
    <span className={`text-xs px-1.5 py-0.5 rounded-full ${isSelected ? "bg-[#060B14]/20" : "bg-[#060B14] text-[#334155]"}`}>
      {count}
    </span>
  </button>
);

/* ─── Main section ───────────────────────────────────────────── */
const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const filtered  = projectsData.filter((p) => p.tag.includes(activeTag));
  const featured  = filtered.filter((p) => p.featured);
  const rest      = filtered.filter((p) => !p.featured);
  const visibleRest = showAll ? rest : rest.slice(0, 6);

  const counts = {
    All:    projectsData.length,
    Web:    projectsData.filter(p => p.tag.includes("Web")).length,
    Mobile: projectsData.filter(p => p.tag.includes("Mobile")).length,
  };

  useEffect(() => { setShowAll(false); }, [activeTag]);

  return (
    <section id="projects" className="relative bg-[#060B14] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#F59E0B] opacity-[0.025] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="mb-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4 flex-1">
            <span className="text-[#F59E0B] text-xs tracking-[0.3em] uppercase font-semibold flex-shrink-0">03 —</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              My Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1E293B] to-transparent hidden sm:block" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["All", "Web", "Mobile"].map((tag) => (
              <FilterPill key={tag} name={tag} isSelected={activeTag === tag} count={counts[tag]} onClick={setActiveTag} />
            ))}
          </div>
        </div>

        <div ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {featured.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {featured.map((project, i) => (
                    <motion.div key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <SpotlightCard project={project} index={i} />
                    </motion.div>
                  ))}
                </div>
              )}

              {featured.length > 0 && rest.length > 0 && (
                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-px bg-[#1E293B]" />
                  <span className="text-[#334155] text-xs tracking-widest uppercase">More Projects</span>
                  <div className="flex-1 h-px bg-[#1E293B]" />
                </div>
              )}

              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <AnimatePresence>
                    {visibleRest.map((project, i) => (
                      <motion.div key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.35, delay: i * 0.06 }}
                      >
                        <CompactCard project={project} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}

              {!showAll && rest.length > 6 && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setShowAll(true)}
                    className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#1E293B] bg-[#0A1628] text-[#64748B] text-sm font-semibold hover:border-[#F59E0B]/40 hover:text-white transition-all duration-200"
                  >
                    Show {rest.length - 6} more projects
                    <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}

              {filtered.length === 0 && (
                <div className="text-center py-20 text-[#334155]">
                  <p className="text-4xl mb-3">🔍</p>
                  <p className="font-medium">No projects match this filter.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;