"use client";
import React from "react";
import { EnvelopeIcon, CalendarDaysIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { LinkedInMark } from "./HeroSection";
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
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={bookingHref} {...external(bookingHref)}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-sm font-medium text-ink bg-canvas hover:bg-accent-light transition-colors duration-300">
                <CalendarDaysIcon className="w-4 h-4" /> Book a call
              </a>
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("New project enquiry")}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-sm font-medium text-canvas border border-canvas/25 hover:border-canvas transition-colors duration-300">
                <EnvelopeIcon className="w-4 h-4" /> Send a brief
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mt-20 pt-10 border-t border-canvas/15">
            <div className={`grid gap-8 ${channels.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              {channels.map(({ label, value, href, Icon }) => (
                <a key={label} href={href} {...external(href)} className="group flex items-start gap-4">
                  <Icon className="w-5 h-5 mt-0.5 text-accent-light flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-canvas/50 text-xs mb-1">{label}</p>
                    <p className="text-canvas text-base truncate border-b border-transparent group-hover:border-canvas/60 transition-colors duration-300 inline-flex items-center gap-1.5">
                      {value}
                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-canvas/40 group-hover:text-canvas transition-colors duration-300" />
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
