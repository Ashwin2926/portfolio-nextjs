import Link from "next/link";

// On the home page, smooth-scroll to "/#section" targets; elsewhere let the link navigate home.
export const scrollToHash = (e, href) => {
  const hash = href.slice(href.indexOf("#"));
  const target = hash.startsWith("#") ? document.querySelector(hash) : null;
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  }
};

const NavLink = ({ href, title }) => (
  <Link
    href={href}
    onClick={(e) => scrollToHash(e, href)}
    className="relative group py-2 px-1 text-xs tracking-[0.2em] uppercase text-[#94A3B8] hover:text-[#F4EFE6] transition-colors duration-500"
  >
    {title}
    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4AF6E] group-hover:w-full transition-all duration-500 ease-out" />
  </Link>
);

export default NavLink;
