import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import { caseStudies } from "../../data/projects";
import { asset } from "../../../lib/asset";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  const title = `${study.name} Case Study - Ashwin Nyamainashe`;
  return {
    title,
    description: study.tagline,
    openGraph: { title, description: study.tagline, images: [asset(study.cover)] },
  };
}

const Eyebrow = ({ children }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="w-10 h-px bg-[#D4AF6E]" />
    <span className="text-[#D4AF6E] text-[11px] tracking-[0.35em] uppercase">{children}</span>
  </div>
);

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();

  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const webShots = study.gallery.filter((g) => g.type === "web");
  const phoneShots = study.gallery.filter((g) => g.type === "phone");

  return (
    <main className="flex min-h-screen flex-col bg-[#060B14]">
      <Navbar />

      {/* ── Intro ── */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#D4AF6E] opacity-[0.05] blur-[160px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <Link href="/#projects"
              className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#D4AF6E] text-[11px] tracking-[0.3em] uppercase mb-14 transition-colors duration-500">
              <ArrowLeftIcon className="w-3.5 h-3.5" /> All work
            </Link>
            <Eyebrow>{study.category} · {study.location}</Eyebrow>
            <h1 className="font-display font-medium text-6xl sm:text-7xl lg:text-8xl text-[#F4EFE6] leading-[0.95] mb-8">
              {study.name}
            </h1>
            <p className="font-display italic text-2xl sm:text-3xl text-[#D4AF6E] max-w-3xl leading-snug">
              {study.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cover ── */}
      <Reveal className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16">
        <div className="rounded-xl overflow-hidden border border-[#F4EFE6]/[0.06] shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
          <img src={asset(study.cover)} alt={`${study.name} cover`} className="w-full h-auto block" />
        </div>
      </Reveal>

      {/* ── Story + facts ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-16">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <p className="text-[#CBD5E1] text-lg lg:text-xl font-light leading-relaxed">{study.overview}</p>
            </Reveal>
            <Reveal>
              <Eyebrow>The challenge</Eyebrow>
              <p className="text-[#CBD5E1] text-lg lg:text-xl font-light leading-relaxed">{study.challenge}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28 space-y-10 border-t border-[#F4EFE6]/[0.08] pt-10 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-10">
              <div>
                <p className="text-[#64748B] text-[10px] tracking-[0.3em] uppercase mb-4">Scope</p>
                <ul className="space-y-3">
                  {study.scope.map((item) => (
                    <li key={item} className="flex gap-3 text-[#F4EFE6] text-sm leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#D4AF6E] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {study.stack && (
                <div>
                  <p className="text-[#64748B] text-[10px] tracking-[0.3em] uppercase mb-4">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full border border-[#D4AF6E]/30 text-[#D4AF6E] text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <p className="text-[#64748B] text-[10px] tracking-[0.3em] uppercase mb-4">Live</p>
                <ul className="space-y-2">
                  {study.links.map(({ label, href }) => (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[#F4EFE6] text-sm hover:text-[#D4AF6E] transition-colors duration-500">
                        {label}
                        <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#D4AF6E] transition-colors duration-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal><Eyebrow>Highlights</Eyebrow></Reveal>
          <div className="grid sm:grid-cols-2 gap-px bg-[#F4EFE6]/[0.06] border border-[#F4EFE6]/[0.06] rounded-xl overflow-hidden">
            {study.highlights.map(({ title, text }, i) => (
              <Reveal key={title} delay={i * 0.1} className="bg-[#060B14] p-8 sm:p-10">
                <p className="font-display text-[#D4AF6E]/60 text-lg mb-3">0{i + 1}</p>
                <h3 className="font-display text-3xl text-[#F4EFE6] mb-3">{title}</h3>
                <p className="text-[#94A3B8] font-light leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {(webShots.length > 1 || phoneShots.length > 0) && (
        <section className="pb-24 md:pb-36">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
            <Reveal><Eyebrow>Gallery</Eyebrow></Reveal>
            {webShots.slice(1).map((shot) => (
              <Reveal key={shot.src}>
                <img src={asset(shot.src)} alt={shot.alt} loading="lazy"
                  className="w-full h-auto rounded-xl border border-[#F4EFE6]/[0.06]" />
              </Reveal>
            ))}
            {phoneShots.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 rounded-xl bg-[#0A1628]/60 border border-[#F4EFE6]/[0.06] p-6 sm:p-10">
                {phoneShots.map((shot, i) => (
                  <Reveal key={shot.src} delay={i * 0.1}>
                    <img src={asset(shot.src)} alt={shot.alt} loading="lazy"
                      className="w-full h-auto rounded-2xl border border-[#F4EFE6]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Next project ── */}
      <Link href={`/projects/${next.slug}`}
        className="group block border-t border-[#F4EFE6]/[0.06] py-20 md:py-28 hover:bg-[#0A1628]/60 transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-end justify-between gap-6">
          <div>
            <p className="text-[#64748B] text-[10px] tracking-[0.35em] uppercase mb-4">Next case study</p>
            <p className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#F4EFE6] group-hover:text-[#D4AF6E] transition-colors duration-700">
              {next.name}
            </p>
          </div>
          <ArrowRightIcon className="w-8 h-8 text-[#D4AF6E] group-hover:translate-x-2 transition-transform duration-700 flex-shrink-0 mb-3" />
        </div>
      </Link>

      <Footer />
    </main>
  );
}
