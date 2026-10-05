"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo.png";
import MenuOverlay from "./MenuOverlay";
import { scrollToHash } from "./NavLink";

const navLinks = [
  { title: "About",    path: "/#about" },
  { title: "Work",     path: "/#projects" },
  { title: "Contact",  path: "/#contact" },
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
            ? "bg-[#060B14]/85 backdrop-blur-xl border-b border-[#F4EFE6]/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-[#D4AF6E]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              <span className="font-display text-[#F4EFE6] text-xl font-medium">
                Ashwin<span className="text-[#D4AF6E]">.</span>
              </span>
              <span className="text-[#64748B] text-[10px] tracking-[0.25em] uppercase">Portfolio</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            {/* CTA button */}
            <li>
              <Link
                href="/#contact"
                onClick={(e) => scrollToHash(e, "/#contact")}
                className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#060B14] bg-[#D4AF6E] hover:bg-[#F4EFE6] transition-colors duration-500"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>

          {/* Mobile burger */}
          <button
            onClick={() => setNavbarOpen((o) => !o)}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-[#1E293B] bg-[#0A1628] text-[#64748B] hover:text-[#D4AF6E] hover:border-[#D4AF6E]/30 transition-all duration-200 z-50"
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