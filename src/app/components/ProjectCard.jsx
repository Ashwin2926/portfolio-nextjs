import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl shadow-xl overflow-hidden bg-[#223C5C] flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      
      {/* Image container with responsive aspect ratio */}
      <div
        className="relative group aspect-[16/9] sm:aspect-[16/9] xs:aspect-[4/3] w-full"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hover overlay */}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#0A192F] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 backdrop-blur-sm items-center justify-center transition-all duration-500">
          {gitUrl && gitUrl !== "#" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Code"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#8892B0] hover:border-[#64FFDA] group/link transition-colors duration-200"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#8892B0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#64FFDA] transition-colors duration-200" />
            </Link>
          )}
          {previewUrl && previewUrl !== "#" && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Preview"
              className="h-14 w-14 border-2 relative rounded-full border-[#8892B0] hover:border-[#64FFDA] group/link transition-colors duration-200"
            >
              <EyeIcon className="h-10 w-10 text-[#8892B0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#64FFDA] transition-colors duration-200" />
            </Link>
          )}
        </div>
      </div>

      {/* Text content */}
      <div className="text-white p-6 flex-grow">
        <h5 className="text-xl font-semibold mb-2 text-[#CCD6F6]">{title}</h5>
        <p className="text-[#8892B0] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
