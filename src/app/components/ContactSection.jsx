"use client";
import React from "react";
import { EnvelopeIcon, CalendarDaysIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "ashwinnyamainashe@gmail.com";
// International format, digits only (e.g. "971501234567"). Leave empty to hide the WhatsApp button.
const WHATSAPP_NUMBER = "";
// Scheduling link such as a Calendly URL. When empty, "Book a call" opens a pre-filled email instead.
const BOOKING_URL = "";

const bookingHref = BOOKING_URL || `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Booking a call")}`;

const WhatsAppMark = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const LinkedInMark = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM3.558 20.452h3.554V9H3.558v11.452z" />
  </svg>
);

const channels = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, Icon: EnvelopeIcon },
  WHATSAPP_NUMBER && {
    label: "WhatsApp", value: `+${WHATSAPP_NUMBER}`,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Ashwin, I'd like to discuss a project.")}`,
    Icon: WhatsAppMark,
  },
  { label: "LinkedIn", value: "ashwin-nyamainashe", href: "https://www.linkedin.com/in/ashwin-nyamainashe/", Icon: LinkedInMark },
].filter(Boolean);

const external = (href) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-[#060B14] py-24 md:py-40 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-[#D4AF6E] opacity-[0.05] blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-10 h-px bg-[#D4AF6E]" />
            <span className="text-[#D4AF6E] text-[11px] tracking-[0.35em] uppercase">Contact</span>
            <span className="w-10 h-px bg-[#D4AF6E]" />
          </div>
          <h2 className="font-display font-medium text-5xl sm:text-6xl lg:text-7xl text-[#F4EFE6] leading-[1.02] mb-8">
            Let&apos;s build something
            <br />
            <em className="text-[#D4AF6E]">exceptional.</em>
          </h2>
          <p className="text-[#94A3B8] text-base lg:text-lg font-light leading-relaxed max-w-xl mx-auto mb-12">
            Open to select web and mobile projects, full-time roles and thoughtful
            collaborations. Tell me about yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href={bookingHref} {...external(bookingHref)}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-[0.15em] uppercase text-[#060B14] bg-[#D4AF6E] hover:bg-[#F4EFE6] transition-colors duration-500">
              <CalendarDaysIcon className="w-4 h-4" /> Book a call
            </a>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("New project enquiry")}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase text-[#F4EFE6] border border-[#F4EFE6]/20 hover:border-[#D4AF6E] hover:text-[#D4AF6E] transition-colors duration-500">
              <EnvelopeIcon className="w-4 h-4" /> Send a brief
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`grid gap-px bg-[#F4EFE6]/[0.06] border border-[#F4EFE6]/[0.06] rounded-xl overflow-hidden text-left ${channels.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            {channels.map(({ label, value, href, Icon }) => (
              <a key={label} href={href} {...external(href)}
                className="group bg-[#060B14] hover:bg-[#0A1628] px-6 py-6 flex items-center gap-4 transition-colors duration-500">
                <Icon className="w-5 h-5 text-[#D4AF6E] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[#64748B] text-[10px] tracking-[0.3em] uppercase">{label}</p>
                  <p className="text-[#F4EFE6] text-sm truncate group-hover:text-[#D4AF6E] transition-colors duration-500">{value}</p>
                </div>
                <ArrowUpRightIcon className="w-4 h-4 text-[#334155] group-hover:text-[#D4AF6E] transition-colors duration-500 flex-shrink-0" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
