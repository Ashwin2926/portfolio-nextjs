"use client";
import React from "react";
import dynamic from "next/dynamic";
import { UsersIcon, BoltIcon } from "@heroicons/react/24/outline";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  { metric: "Users Reached",       value: "100000", prefix: "~", icon: UsersIcon, display: "100K+" },
  { metric: "Years Experience",    value: "5",   postfix: "+", icon: BoltIcon },
];

const AchievementsSection = () => {
  return (
    <section className="relative bg-[#060B14] py-10 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-px bg-[#1E293B] rounded-2xl overflow-hidden border border-[#1E293B]">
          {achievementsList.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#060B14] px-6 py-7 flex flex-col items-center text-center hover:bg-[#0A1628] transition-colors duration-300"
            >
              {/* Hover top border accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent transition-all duration-500" />

              <item.icon className="w-6 h-6 text-[#F59E0B] mb-2" strokeWidth={1.5} />

              <h3
                className="font-display text-2xl sm:text-3xl font-bold text-white mb-1 flex items-baseline gap-0.5"
              >
                {item.prefix && <span className="text-[#F59E0B]">{item.prefix}</span>}
                {item.display ? (
                  <span>{item.display}</span>
                ) : (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(item.value)}
                    locale="en-US"
                    className="text-2xl sm:text-3xl font-bold text-white"
                    configs={(_, i) => ({
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (i + 1),
                    })}
                  />
                )}
                {item.postfix && <span className="text-[#F59E0B]">{item.postfix}</span>}
              </h3>

              <p className="text-[#475569] text-xs tracking-widest uppercase font-medium">
                {item.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;