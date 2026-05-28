import Link from "next/link";

const NavLink = ({ href, title, isScrolled }) => {
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative group py-2 px-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
        isScrolled ? "text-[#64748B] hover:text-white" : "text-[#64748B] hover:text-white"
      }`}
    >
      {title}
      {/* Animated amber underline */}
      <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#F59E0B] group-hover:w-full transition-all duration-300 ease-out rounded-full" />
    </Link>
  );
};

export default NavLink;