import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { asset } from "../../lib/asset";

const skills = ["Laravel", "React", "Next.js", "Flutter", "MySQL", "Python", "Java", "C#", "Node.js", "JavaScript", "HTML5 / CSS3", "Power BI"];
const certifications = [
  "OPSWAT Data Transfer Security Associate (ODSA)",
  "OPSWAT File Security Associate (OFSA)",
];

const ColumnTitle = ({ children }) => (
  <p className="text-muted text-xs mb-5 pb-3 border-b border-line">{children}</p>
);

const AboutSection = () => {
  return (
    <section className="relative bg-canvas py-24 md:py-36" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <Reveal>
          <SectionHeading eyebrow="About" title={<>Design-minded <em className="text-accent">engineering</em></>} className="mb-12 lg:mb-20" />
        </Reveal>

        <div className="grid grid-cols-12 gap-x-5 sm:gap-x-8 lg:gap-x-16">

          {/* Portrait: beside the opening line on phones, its own column on desktop */}
          <Reveal className="col-span-5 lg:row-start-1 lg:row-span-2">
            <div className="relative aspect-[4/5] max-w-[440px] rounded-xl lg:rounded-2xl overflow-hidden bg-sand">
              <Image
                src={asset("/images/hero.jpg")}
                alt="Ashwin Nyamainashe, Software Engineer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 40vw, 440px"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-7 lg:row-start-1 self-center lg:self-start">
            <p className="font-display text-[1.6rem] sm:text-4xl text-ink leading-[1.15] lg:leading-[1.2]">
              I build software that looks as good as it works, with clean architecture
              underneath and <em className="text-accent">considered design</em> on top.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 lg:col-span-7 lg:col-start-6 lg:row-start-2 mt-10 lg:mt-8">
            <p className="text-body text-base lg:text-lg leading-relaxed mb-12 lg:mb-14 max-w-2xl">
              I&apos;m a full-stack developer crafting interactive, responsive applications across web
              and mobile. My work spans Flutter, React, Laravel, Power BI, C# and MySQL, and a
              background in graphic design shapes how I approach every interface: functional first,
              and never without polish.
            </p>

            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-10">
              <div className="col-span-2 sm:col-span-1 sm:row-span-2">
                <ColumnTitle>Skills</ColumnTitle>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill} className="px-3 py-1.5 rounded-full border border-line bg-paper text-ink text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ColumnTitle>Education</ColumnTitle>
                <p className="font-display text-xl sm:text-2xl text-ink leading-tight">Chinhoyi University of Technology</p>
                <p className="text-body text-sm mt-2">BSc (Hons) Software Engineering · Zimbabwe</p>
              </div>

              <div>
                <ColumnTitle>Certifications</ColumnTitle>
                <ul className="space-y-3">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-2.5 text-ink text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
