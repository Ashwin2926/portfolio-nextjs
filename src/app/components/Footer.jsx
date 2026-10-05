import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas border-t border-line">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/" className="font-display text-xl text-ink">
          Ashwin <span className="italic text-accent">Nyamainashe</span>
        </Link>

        <nav className="flex items-center gap-8">
          {[["About", "/#about"], ["Work", "/#projects"], ["Contact", "/#contact"]].map(([label, href]) => (
            <Link key={href} href={href} className="text-body hover:text-ink text-sm transition-colors duration-300">
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-muted text-sm">© {year} Ashwin Munashe Nyamainashe</p>
      </div>
    </footer>
  );
};

export default Footer;
