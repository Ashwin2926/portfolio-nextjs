"use client";
import React, { useTransition, useState } from "react";
import Image from 'next/image';
import TabButton from "./TabButton"; // Assuming TabButton.jsx is in the same directory

// --- Data Constants ---
const TAB_CONTENT = {
  skills: {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3 list-disc pl-5 text-[#ffffff]">
        <li>Laravel</li>
        <li>React</li>
        <li>Flutter</li>
        <li>MySQL</li>
        <li>Python</li>
        <li>Java</li>
        <li>C#</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>HTML5/CSS3</li>
      </ul>
    ),
  },
  education: {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#8892B0]">
        <li>
          <span className="font-semibold text-[#CCD6F6]">Chinhoyi University of Technology</span>
          <br />
          <span className="text-sm">BSc (Hons) Software Engineering (Cut), Zimbabwe</span>
        </li>
        {/* Add more education details if applicable */}
      </ul>
    ),
  },
  certifications: {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-[#8892B0]">
        <li>
          <span className="font-semibold text-[#CCD6F6]">OPSWAT Data Transfer Security Associate (ODSA)</span>
        </li>
        <li>
          <span className="font-semibold text-[#CCD6F6]">OPSWAT File Security Associate (OFSA)</span>
        </li>
        <li>
          <a
            href="https://github.com/Ashwin2926" // Replace with your actual GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64FFDA] hover:underline font-medium"
          >
            View My GitHub Profile
          </a>
        </li>
      </ul>
    ),
  },
};

const TABS_ORDER = ["skills", "education", "certifications"];

// --- Image Asset ---
// Ensure this path is correct. If your image is in `public/images/circle2.png`, use "/images/circle2.png".
// If it's directly in `public/circle2.png`, use "/circle2.png".
const PROFILE_IMAGE_PATH = "./images/circle2.png"; // ADJUST if your image is named differently or in a subfolder of public/images

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setActiveTab(id);
    });
  };

  const currentTabContent = TAB_CONTENT[activeTab]?.content;

  return (
    <section className="bg-[#fff] text-[#CCD6F6] py-16 md:py-24" id="about">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* --- Image Column --- */}
          {/* Centering the image within its column, especially if the column is wider now */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] xl:w-[420px] lg:h-[380px] xl:h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#64FFDA] to-[#1E3A8A] rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 opacity-30 group-hover:opacity-50"></div>
              <Image
                src={PROFILE_IMAGE_PATH}
                alt="Ashwin Nyamainashe - Software Developer"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-2xl border-2 border-[#223C5C] relative z-10"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = `https://ui-avatars.com/api/?name=Ashwin+Nyamainashe&background=0A192F&color=64FFDA&size=420&font-size=0.33&bold=true`;
                }}
              />
            </div>
          </div>

          {/* --- Text Content & Tabs Column --- */}
          <div className="text-left flex flex-col h-full mt-8 md:mt-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-24 h-1.5 bg-[#64FFDA] rounded-full"></span>
            </h2>
            <p className="text-base md:text-lg text-[#8892B0] leading-relaxed mb-8">
              I&apos;m a passionate full-stack developer dedicated to crafting interactive,
              responsive, and visually engaging web applications. With expertise spanning
              Flutter, React, Laravel, Power BI, C#, MySQL, and modern frontend technologies,
              I bring a versatile skill set to every project. My background in graphic design
              complements my technical abilities, allowing me to build solutions that are both
              highly functional and aesthetically pleasing. I&apos;m a quick learner, always
              eager to explore new technologies, and thrive in collaborative environments
              to deliver exceptional applications.
            </p>
            
            <div className="flex flex-row space-x-3 border-b border-[#223C5C] mb-5">
              {TABS_ORDER.map((tabId) => (
                <TabButton
                  key={tabId}
                  selectTab={() => handleTabChange(tabId)}
                  active={activeTab === tabId}
                >
                  {TAB_CONTENT[tabId].title}
                </TabButton>
              ))}
            </div>

            <div className="mt-1 p-5 bg-[#172A45] rounded-lg shadow-lg min-h-[180px] sm:min-h-[200px] transition-opacity duration-300">
              {currentTabContent || <p className="text-center text-[#8892B0]">Select a tab to view details.</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
