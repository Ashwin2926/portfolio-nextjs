import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060B14] border-t border-[#0F172A] overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF6E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-display italic text-[#D4AF6E] text-2xl">AN</span>
            <span className="w-px h-4 bg-[#1E293B]" />
            <span className="text-[#64748B] text-sm">Ashwin Munashe Nyamainashe</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {["/#about", "/#projects", "/#contact"].map((href) => (
              <Link
                key={href}
                href={href}
                className="text-[#64748B] hover:text-[#D4AF6E] text-[10px] tracking-[0.3em] uppercase transition-colors duration-200"
              >
                {href.replace("/#", "")}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#475569] text-xs tracking-wide">
            © {year} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;