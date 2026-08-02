"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo.png";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About",    path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact",  path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled]  = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [navbarOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#060B14]/90 backdrop-blur-xl border-b border-[#0F172A] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-[#F59E0B]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={logo}
                alt="Ashwin logo"
                width={40}
                height={40}
                className="object-contain relative z-10"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-white text-sm font-bold tracking-tight">
                Ashwin<span className="text-[#F59E0B]">.</span>
              </span>
              <span className="text-[#334155] text-[10px] tracking-[0.15em] uppercase">Portfolio</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} isScrolled={isScrolled} />
              </li>
            ))}
            {/* CTA button */}
            <li>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-2 rounded-full text-sm font-semibold text-[#060B14] bg-[#F59E0B] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-200 tracking-wide"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>

          {/* Mobile burger */}
          <button
            onClick={() => setNavbarOpen((o) => !o)}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-[#1E293B] bg-[#0A1628] text-[#64748B] hover:text-[#F59E0B] hover:border-[#F59E0B]/30 transition-all duration-200 z-50"
          >
            {navbarOpen
              ? <XMarkIcon className="w-5 h-5" />
              : <Bars3Icon className="w-5 h-5" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {navbarOpen && (
        <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />
      )}
    </>
  );
};

export default Navbar;