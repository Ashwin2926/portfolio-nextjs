import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const hasLinks = (gitUrl && gitUrl !== "#") || (previewUrl && previewUrl !== "#");

  return (
    <div className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-[#0A1628] border border-[#1E293B] hover:border-[#F59E0B]/40 transition-all duration-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] hover:-translate-y-1">

      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        {/* Gradient overlay always present */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60" />

        {/* Hover action overlay */}
        {hasLinks && (
          <div className="absolute inset-0 bg-[#060B14]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            {gitUrl && gitUrl !== "#" && (
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Code"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#F59E0B]/50 bg-[#F59E0B]/10 text-[#F59E0B] text-sm font-semibold hover:bg-[#F59E0B] hover:text-[#060B14] transition-all duration-200"
              >
                <CodeBracketIcon className="w-4 h-4" />
                Code
              </Link>
            )}
            {previewUrl && previewUrl !== "#" && previewUrl.trim() !== "" && (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Preview"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-semibold hover:bg-white hover:text-[#060B14] transition-all duration-200"
              >
                <EyeIcon className="w-4 h-4" />
                Preview
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <h5 className="text-white font-bold text-base mb-1.5 group-hover:text-[#F59E0B] transition-colors duration-200" style={{ fontFamily: "'Syne', sans-serif" }}>
          {title}
        </h5>
        {description && (
          <p className="text-[#475569] text-sm leading-relaxed flex-grow">{description}</p>
        )}

        {/* Footer with external link indicator */}
        {(previewUrl && previewUrl !== "#" && previewUrl.trim() !== "") && (
          <div className="mt-4 pt-4 border-t border-[#1E293B] flex items-center justify-between">
            <span className="text-[#334155] text-xs tracking-widest uppercase">Live Project</span>
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F59E0B]/60 hover:text-[#F59E0B] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;