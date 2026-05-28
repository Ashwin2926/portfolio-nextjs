import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`pb-2.5 px-1 text-sm font-semibold transition-all duration-200 focus:outline-none relative ${
        active
          ? "text-[#F59E0B]"
          : "text-[#475569] hover:text-[#94A3B8]"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#F59E0B] transition-all duration-300 ${
          active ? "w-full" : "w-0"
        }`}
      />
    </button>
  );
};

export default TabButton;