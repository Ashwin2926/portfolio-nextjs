import React from "react";
import Link from "next/link";
import { scrollToHash } from "./NavLink";
import { whatsappHref } from "./icons";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <div className="fixed inset-0 z-30 flex flex-col bg-canvas pt-[72px]">
      <nav className="flex flex-col flex-1 justify-center px-8 border-t border-line">
        {links.map((link, index) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={(e) => {
              scrollToHash(e, link.path);
              closeMenu?.();
            }}
            className="group flex items-baseline gap-5 py-5 border-b border-line"
          >
            <span className="text-muted text-xs tabular-nums">0{index + 1}</span>
            <span className="font-display text-5xl text-ink group-hover:text-accent transition-colors duration-300">
              {link.title}
            </span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-8 px-8 pb-10 text-sm">
        <a href="https://github.com/Ashwin2926" target="_blank" rel="noopener noreferrer"
          className="text-body hover:text-ink transition-colors duration-300">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ashwin-nyamainashe/" target="_blank" rel="noopener noreferrer"
          className="text-body hover:text-ink transition-colors duration-300">
          LinkedIn
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
          className="text-body hover:text-ink transition-colors duration-300">
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MenuOverlay;
