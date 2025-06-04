"use client";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/logo.png";
import MenuOverlay from "./MenuOverlay"; // Assuming this component uses its props for styling

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (navbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navbarOpen]);


  return (
    <nav className={`fixed mx-auto top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#0A192F]/90 backdrop-blur-md shadow-xl border-b border-[#64FFDA]/20' // Scrolled: semi-transparent dark, blur, stronger shadow, subtle accent border
          : 'bg-white/5 backdrop-blur-md border-b border-neutral-300/30' // Initial: very subtle transparent white bg for blur, blur, lighter semi-transparent border
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
      <Link
  href="/"
  className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-[#64FFDA] rounded-md"
>
  <Image
    src={logo}
    alt="Site Logo"
    width={60}
    height={20}
    className="object-contain"
    priority
  />
  <span
    className={`text-base font-medium transition-colors duration-300 ${
      isScrolled ? 'text-[#CCD6F6]' : 'text-black'
    }`}
  >
    <span className="text-[#64FFDA] text-xl mr-1">.</span>Nyamainashe
  </span>
</Link>


        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              aria-label="Open menu"
              className={`flex items-center px-3 py-2 border rounded hover:text-[#64FFDA] hover:border-[#64FFDA] transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] ${
                isScrolled
                  ? 'border-[#8892B0] text-[#CCD6F6]'
                  : 'border-black text-black'
              }`}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close menu"
              className={`flex items-center px-3 py-2 border rounded hover:text-[#64FFDA] hover:border-[#64FFDA] transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#64FFDA] ${
                isScrolled
                  ? 'border-[#8892B0] text-[#CCD6F6]'
                  : 'border-black text-black'
              }`}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar" >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} isScrolled={isScrolled} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* For MenuOverlay decorative styles:
        - Consider adding entry/exit animations within MenuOverlay.jsx (e.g., fade in, slide in).
        - Style individual links with icons, different font weights, or hover background colors.
        - Use the provided baseColor, accentColor, textColor props to theme it.
        - Example: Animate links staggering in, or a subtle gradient on the baseColor.
      */}
      {navbarOpen ? <MenuOverlay links={navLinks} baseColor="#0A192F" accentColor="#64FFDA" textColor="#CCD6F6" closeMenu={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;