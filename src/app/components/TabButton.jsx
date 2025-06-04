// ./components/TabButton.jsx (Example)
import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const activeClasses = active
    ? "text-[#64FFDA] border-b-2 border-[#64FFDA]" // Active tab has teal text and underline
    : "text-[#8892B0] hover:text-[#CCD6F6]"; // Inactive tab is dimmer, brightens on hover

  return (
    <button
      onClick={selectTab}
      className={`pb-2 px-1 font-medium text-lg focus:outline-none transition-colors duration-200 ease-in-out ${activeClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;