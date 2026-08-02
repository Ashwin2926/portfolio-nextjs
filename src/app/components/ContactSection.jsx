"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { EnvelopeIcon, CodeBracketIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

const CONTACT_EMAIL = "ashwinnyamainashe@gmail.com";

const contactLinks = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: EnvelopeIcon,
  },
  {
    label: "GitHub",
    value: "github.com/Ashwin2926",
    href: "https://github.com/Ashwin2926",
    icon: CodeBracketIcon,
  },
  {
    label: "LinkedIn",
    value: "ashwin-nyamainashe",
    href: "https://www.linkedin.com/in/ashwin-nyamainashe/",
    icon: null,
  },
];

const LinkedInMark = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM3.558 20.452h3.554V9H3.558v11.452z" />
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-[#060B14] py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-[#1E293B] bg-gradient-to-br from-[#0A1628] to-[#0A1628]/60 p-6 sm:p-10 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Statement + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-[1.1] mb-4">
                Have a project in mind?
                <br />
                Let&apos;s build it.
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-6 max-w-md">
                Open to freelance work, full-time roles, and interesting collaborations
                across web and mobile.
              </p>
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="group relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-[#060B14] bg-[#F59E0B] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:scale-[1.03]"
              >
                <span className="relative z-10 tracking-wide">Let&apos;s Talk</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowUpRightIcon className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 flex flex-col gap-3"
            >
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#060B14] border border-[#1E293B] hover:border-[#F59E0B]/40 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                    {Icon ? (
                      <Icon className="w-5 h-5 text-[#F59E0B]" strokeWidth={1.5} />
                    ) : (
                      <LinkedInMark className="w-4 h-4 text-[#F59E0B]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#475569] text-xs tracking-widest uppercase">{label}</p>
                    <p className="text-white text-sm font-medium truncate group-hover:text-[#F59E0B] transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="w-4 h-4 text-[#334155] group-hover:text-[#F59E0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0" />
                </Link>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
