import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-[#060B14]/98 backdrop-blur-xl pt-20">
      {/* Top amber accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />

      {/* Nav items */}
      <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            onClick={(e) => {
              if (link.path.startsWith("#")) {
                e.preventDefault();
                document.querySelector(link.path)?.scrollIntoView({ behavior: "smooth" });
              }
              closeMenu?.();
            }}
            className="group w-full max-w-xs flex items-center justify-between px-6 py-5 rounded-2xl border border-[#1E293B] bg-[#0A1628] hover:border-[#F59E0B]/40 hover:bg-[#F59E0B]/5 transition-all duration-200"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-center gap-4">
              <span className="text-[#F59E0B]/40 text-xs font-bold tracking-widest">0{index + 1}</span>
              <span className="font-display text-white text-xl font-bold group-hover:text-[#F59E0B] transition-colors duration-200">
                {link.title}
              </span>
            </div>
            <svg className="w-4 h-4 text-[#334155] group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </nav>

      {/* Bottom social strip */}
      <div className="flex items-center justify-center gap-6 pb-10">
        <a href="https://github.com/Ashwin2926" target="_blank" rel="noopener noreferrer"
          className="text-[#334155] hover:text-white transition-colors duration-200 text-xs tracking-widest uppercase">
          GitHub
        </a>
        <span className="w-1 h-1 rounded-full bg-[#1E293B]" />
        <a href="https://www.linkedin.com/in/ashwin-nyamainashe/" target="_blank" rel="noopener noreferrer"
          className="text-[#334155] hover:text-[#F59E0B] transition-colors duration-200 text-xs tracking-widest uppercase">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default MenuOverlay;