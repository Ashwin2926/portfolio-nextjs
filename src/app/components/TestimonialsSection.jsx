import { testimonials } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Renders nothing until real quotes are added to `testimonials` in data/projects.js.
const TestimonialsSection = () => {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="relative bg-[#060B14] py-24 md:py-36 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHeading eyebrow="Kind Words" title={<>What clients <em className="text-[#D4AF6E]">say</em></>} className="mb-16" />
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F4EFE6]/[0.06] border border-[#F4EFE6]/[0.06] rounded-xl overflow-hidden">
          {testimonials.map(({ quote, name, role }, i) => (
            <Reveal key={name} delay={i * 0.12} className="bg-[#060B14] p-8 sm:p-10 flex flex-col">
              <span className="font-display text-6xl leading-none text-[#D4AF6E]/50 mb-4">&ldquo;</span>
              <blockquote className="font-display italic text-2xl leading-snug text-[#F4EFE6] flex-1">
                {quote}
              </blockquote>
              <div className="mt-8 pt-6 border-t border-[#F4EFE6]/[0.08]">
                <p className="text-[#F4EFE6] text-sm">{name}</p>
                <p className="text-[#D4AF6E] text-[10px] tracking-[0.3em] uppercase mt-1">{role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
