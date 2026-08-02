"use client";
import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CodeBracketIcon, EyeIcon,
  SparklesIcon, SwatchIcon, TruckIcon, DevicePhoneMobileIcon, WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

/* ─── Data ─────────────────────────────────────────────────── */
const projectsData = [
  {
    id: 14, title: "Tareeqk Portal", description: "Order & dispatch portal for Tareeqk, a Dubai-based car recovery and roadside assistance platform, with live service requests, provider tracking and job management.",
    icon: TruckIcon, tag: ["All", "Web"],
  },
  {
    id: 15, title: "Tessera Beauty", description: "Full-stack skincare & beauty commerce platform: Next.js storefront with cart, loyalty program and reviews, backed by a FastAPI system handling M-Pesa payments, invoicing, stock and commissions.",
    icon: SparklesIcon, tag: ["All", "Web"],
  },
  {
    id: 8, title: "Prevail Shipping", description: "Full shipping & logistics company website with service listings, tracking info and contact flows.",
    image: "./images/projects/prevailshipping.png", tag: ["All", "Web"], previewUrl: "https://prevailshipping.com",
  },
  {
    id: 9, title: "Talk & Pay", description: "Fintech payment platform: clean marketing site for a modern payment solution.",
    image: "./images/projects/tap.png", tag: ["All", "Web"], previewUrl: "https://talkandpay.com",
  },
  {
    id: 12, title: "Haleefa Elite Homes", description: "Luxury real estate React profile site showcasing premium properties.",
    image: "./images/projects/haleefa.png", tag: ["All", "Web"], previewUrl: "https://www.haleefaelitehomes.com/",
  },
  {
    id: 10, title: "Capital Stay UAE", description: "Real estate listings and property discovery platform for UAE market.",
    image: "./images/projects/capitalstay.png", tag: ["All", "Web"], previewUrl: "https://capitalstayuae.com",
  },
  {
    id: 13, title: "Dilex Freight", description: "International freight forwarding and logistics services site.",
    image: "./images/projects/dilex.png", tag: ["All", "Web"], previewUrl: "https://dilexfreight.com/",
  },
  {
    id: 11, title: "Breathtakingkeeps", description: "Vacation and travel experiences booking site with immersive design.",
    image: "./images/projects/breathtakingkeeps.png", tag: ["All", "Web"], previewUrl: "https://breathtakingkeeps.site/",
  },
  {
    id: 5, title: "Kiosk App", description: "Self-service kiosk web application for Talk & Pay.",
    image: "./images/projects/kiosk.png", tag: ["All", "Web"], previewUrl: "https://kiosk.talkandpay.com/",
  },
  {
    id: 16, title: "My Design Studio", description: "Agency-style site for a design studio, with an animated hero, services, portfolio showcase and journal, built with Next.js, GSAP and Framer Motion.",
    icon: SwatchIcon, tag: ["All", "Web"],
  },
  {
    id: 4, title: "Hymn Book App", description: "Cross-platform Flutter mobile application for browsing and reading hymns.",
    image: "./images/projects/mobile1.jpg", tag: ["All", "Mobile"], gitUrl: "https://github.com/Ashwin2926/hymn-book",
  },
  {
    id: 17, title: "Tareeqk Roadside Assistance", description: "Customer mobile app for Tareeqk: request instant car recovery, track provider ETA in real time, and pay securely in-app.",
    icon: DevicePhoneMobileIcon, tag: ["All", "Mobile"],
  },
  {
    id: 18, title: "Tareeqk Driver", description: "Provider-side mobile app for Tareeqk's recovery network: job dispatch, acceptance and real-time navigation for drivers.",
    icon: WrenchScrewdriverIcon, tag: ["All", "Mobile"],
  },
  {
    id: 1, title: "Management System", description: "Laravel-powered enterprise management system with full CRUD and auth.",
    image: "./images/projects/1.png", tag: ["All", "Web"],
  },
  {
    id: 2, title: "Lodge Website", description: "Hospitality website built with React frontend and Laravel backend.",
    image: "./images/projects/2.png", tag: ["All", "Web"],
  },
  {
    id: 3, title: "Church Website", description: "Community church platform built with React.",
    image: "./images/projects/3.png", tag: ["All", "Web"],
  },
  {
    id: 6, title: "Management System II", description: "Second-generation Laravel enterprise management portal.",
    image: "./images/projects/6.png", tag: ["All", "Web"],
  },
  {
    id: 7, title: "Shoe Shop E-Commerce", description: "E-commerce store with authentication and product browsing (PHP, HTML, CSS).",
    image: "./images/projects/7.png", tag: ["All", "Web"],
  },
];

/* ─── Tilt wrapper (direct DOM mutation, no re-render) ───────── */
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale3d(1.015,1.015,1.015)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`h-full transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

/* ─── Bento tile ──────────────────────────────────────────────── */
const spanClass = (i) => {
  const m = i % 7;
  if (m === 0) return "sm:col-span-2 sm:row-span-2";
  if (m === 4) return "sm:col-span-2 sm:row-span-1";
  return "sm:col-span-1 sm:row-span-1";
};

const BentoCard = ({ project, index }) => {
  const big = index % 7 === 0;
  const hasLinks = Boolean(project.previewUrl || project.gitUrl);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className={`${spanClass(index)} aspect-[4/3] sm:aspect-auto`}
    >
      <TiltCard className="h-full">
        <div className="group relative h-full min-h-[220px] rounded-2xl overflow-hidden border border-[#1E293B] hover:border-[#F59E0B]/40 transition-colors duration-300 bg-[#0A1628] shadow-[0_8px_30px_rgba(0,0,0,0.35)]">

          {/* Media */}
          {project.image ? (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
              style={{ backgroundImage: `url(${project.image})` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#16233C] transition-transform duration-700 group-hover:scale-[1.06]">
              <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle, #F59E0B 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                {project.icon && (
                  <project.icon className={`text-[#F59E0B]/15 ${big ? "w-32 h-32" : "w-16 h-16"}`} strokeWidth={1} />
                )}
              </div>
            </div>
          )}

          {/* Base gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-[#060B14]/50 to-transparent" />

          {/* Category tag */}
          <span className="absolute top-4 left-4 text-[10px] px-2 py-1 rounded-full bg-[#060B14]/70 border border-[#1E293B] backdrop-blur-sm text-[#94A3B8] tracking-widest uppercase">
            {project.tag.find((t) => t !== "All")}
          </span>

          {/* Hover action overlay */}
          {hasLinks && (
            <div className="absolute inset-0 bg-[#060B14]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
              {project.previewUrl && (
                <Link href={project.previewUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F59E0B] text-[#060B14] text-xs font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-200">
                  <EyeIcon className="w-3.5 h-3.5" /> Preview
                </Link>
              )}
              {project.gitUrl && (
                <Link href={project.gitUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white hover:text-[#060B14] transition-all duration-200">
                  <CodeBracketIcon className="w-3.5 h-3.5" /> Code
                </Link>
              )}
            </div>
          )}

          {/* Title + description */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className={`font-display text-white font-bold mb-1 group-hover:text-[#F59E0B] transition-colors duration-200 ${big ? "text-2xl" : "text-base"}`}>
              {project.title}
            </h3>
            <p className={`text-[#94A3B8] leading-snug ${big ? "text-sm line-clamp-2 max-w-md" : "text-xs line-clamp-1"}`}>
              {project.description}
            </p>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

/* ─── Filter pill ────────────────────────────────────────────── */
const FilterPill = ({ name, isSelected, count, onClick }) => (
  <button
    onClick={() => onClick(name)}
    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
      isSelected
        ? "bg-[#F59E0B] text-[#060B14] shadow-[0_0_20px_rgba(245,158,11,0.3)]"
        : "bg-[#0A1628] text-[#475569] border border-[#1E293B] hover:text-[#94A3B8]"
    }`}
  >
    {name}
    <span className={`text-xs px-1.5 rounded-full ${isSelected ? "bg-[#060B14]/20" : "bg-[#060B14] text-[#334155]"}`}>
      {count}
    </span>
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
    <section id="projects" className="relative bg-[#060B14] py-16 md:py-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#F59E0B] opacity-[0.03] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3 flex-1">
            <span className="w-6 h-1 rounded-full bg-[#F59E0B] flex-shrink-0" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">My Projects</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["All", "Web", "Mobile"].map((tag) => (
              <FilterPill key={tag} name={tag} isSelected={activeTag === tag} count={counts[tag]} onClick={setActiveTag} />
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:auto-rows-[220px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <BentoCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#334155]">
            <p className="font-medium">No projects match this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
