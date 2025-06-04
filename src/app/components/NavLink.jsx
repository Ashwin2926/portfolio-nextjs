import Link from "next/link";

const NavLink = ({ href, title, isScrolled }) => {
  // Basic click handler for smooth scroll and closing mobile menu if applicable
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      // If this NavLink is used inside MenuOverlay, you might want to call closeMenu() here.
      // This can be done by passing closeMenu prop down to NavLink if needed for mobile context.
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 transition-colors duration-200 relative group ${
        isScrolled ? 'text-[#CCD6F6] hover:text-[#64FFDA]' : 'text-black hover:text-[#64FFDA]'
      }`}
    >
      {title}
      {/* Animated underline effect */}
      <span
        className={`absolute bottom-[calc(50%-1.25rem)] left-1/2 transform -translate-x-1/2 md:bottom-0 block h-[2px] w-0 group-hover:w-3/4 transition-all duration-300 ease-in-out bg-[#64FFDA]`}
      ></span>
    </Link>
  );
};

export default NavLink;