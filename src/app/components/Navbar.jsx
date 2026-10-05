"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink, { scrollToHash } from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuOverlay from "./MenuOverlay";

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
    handleScroll();
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || navbarOpen ? "bg-canvas/90 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-[72px] flex items-center justify-between">

          {/* Wordmark */}
          <Link href="/" className="font-display text-2xl text-ink leading-none">
            Ashwin <span className="italic text-accent">N.</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                onClick={(e) => scrollToHash(e, "/#contact")}
                className="inline-flex items-center px-5 py-2.5 rounded-full text-[13px] font-medium text-canvas bg-ink hover:bg-accent transition-colors duration-300"
              >
                Let&apos;s talk
              </Link>
            </li>
          </ul>

          {/* Mobile burger */}
          <button
            onClick={() => setNavbarOpen((o) => !o)}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-line text-ink hover:border-ink transition-colors duration-300"
          >
            {navbarOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {navbarOpen && (
        <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
