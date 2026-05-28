import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
        isSelected
          ? "bg-[#F59E0B] text-[#060B14] shadow-[0_0_24px_rgba(245,158,11,0.35)]"
          : "bg-[#0A1628] text-[#475569] border border-[#1E293B] hover:border-[#F59E0B]/30 hover:text-[#94A3B8]"
      }`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;