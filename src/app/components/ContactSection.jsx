"use client";
import React from "react";
import { EnvelopeIcon, CalendarDaysIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { LinkedInMark, WhatsAppMark, WHATSAPP_NUMBER, whatsappHref } from "./icons";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "ashwinnyamainashe@gmail.com";
// Scheduling link such as a Calendly URL. When empty, "Book a call" opens a pre-filled email instead.
const BOOKING_URL = "";

const bookingHref = BOOKING_URL || `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Booking a call")}`;

const channels = [
  { label: "Email", value: CONTACT_EMAIL, short: "Email me", href: `mailto:${CONTACT_EMAIL}`, Icon: EnvelopeIcon },
  WHATSAPP_NUMBER && {
    label: "WhatsApp", value: "+971 50 495 7434", short: "Chat now",
    href: whatsappHref,
    Icon: WhatsAppMark,
  },
  { label: "LinkedIn", value: "ashwin-nyamainashe", short: "Connect", href: "https://www.linkedin.com/in/ashwin-nyamainashe/", Icon: LinkedInMark },
].filter(Boolean);

const external = (href) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-canvas py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] bg-ink text-canvas px-6 sm:px-12 lg:px-16 py-20 md:py-28 overflow-hidden relative">
          <div className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full bg-accent opacity-40 blur-[120px] pointer-events-none" />

          <Reveal className="relative max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-accent-light" />
              <span className="text-accent-light text-[11px] font-medium tracking-[0.3em] uppercase">Contact</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em] mb-8">
              Let&apos;s build something <em className="text-accent-light">exceptional.</em>
            </h2>
            <p className="text-canvas/70 text-lg leading-relaxed max-w-xl mb-12">
              Open to select web and mobile projects, full-time roles and thoughtful
              collaborations. Tell me about yours.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-4">
              <a href={bookingHref} {...external(bookingHref)}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-7 py-4 rounded-full text-sm font-medium text-ink bg-canvas hover:bg-accent-light transition-colors duration-300">
                <CalendarDaysIcon className="w-4 h-4" /> Book a call
              </a>
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("New project enquiry")}`}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-7 py-4 rounded-full text-sm font-medium text-canvas border border-canvas/25 hover:border-canvas transition-colors duration-300">
                <EnvelopeIcon className="w-4 h-4" /> Send a brief
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-20 pt-10 border-t border-canvas/15">
            <div className={`grid gap-x-4 sm:gap-x-6 gap-y-8 ${channels.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
              {channels.map(({ label, value, short, href, Icon }) => (
                <a key={label} href={href} {...external(href)} className="group flex items-start gap-4">
                  <Icon className="hidden sm:block w-5 h-5 mt-0.5 text-accent-light flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-canvas/50 text-xs mb-1">{label}</p>
                    <p className="flex items-start gap-1.5 text-canvas text-sm sm:text-base">
                      <span className="border-b border-transparent group-hover:border-canvas/60 transition-colors duration-300">
                        {/* Phones show a short call to action; the full address doesn't fit a half-width column */}
                        <span className="sm:hidden">{short}</span>
                        <span className="hidden sm:inline">{value}</span>
                      </span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-canvas/40 group-hover:text-canvas transition-colors duration-300" />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
