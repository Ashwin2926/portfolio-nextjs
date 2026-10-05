import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-line">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-y-6 gap-x-6">
        <Link href="/" className="font-display text-xl text-ink self-center">
          Ashwin <span className="italic text-accent"><span className="sm:hidden">N.</span><span className="hidden sm:inline">Nyamainashe</span></span>
        </Link>

        <nav className="flex items-center justify-end gap-5 sm:gap-8 sm:order-none">
          {[["About", "/#about"], ["Work", "/#projects"], ["Contact", "/#contact"]].map(([label, href]) => (
            <Link key={href} href={href} className="text-body hover:text-ink text-sm transition-colors duration-300">
              {label}
            </Link>
          ))}
        </nav>

        <p className="col-span-2 sm:col-span-1 text-muted text-xs sm:text-sm pt-6 sm:pt-0 border-t border-line sm:border-0">
          © {year} Ashwin Munashe Nyamainashe
        </p>
      </div>
    </footer>
  );
};

export default Footer;
