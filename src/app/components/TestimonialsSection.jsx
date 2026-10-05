import { testimonials } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Renders nothing until real quotes are added to `testimonials` in data/projects.js.
const TestimonialsSection = () => {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="relative bg-canvas py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal>
          <SectionHeading eyebrow="Kind words" title={<>What clients <em className="text-accent">say</em></>} className="mb-16" />
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }, i) => (
            <Reveal key={name} delay={i * 0.12} className="bg-paper border border-line rounded-2xl p-8 sm:p-10 flex flex-col">
              <span className="font-display text-7xl leading-[0.5] text-accent mb-6">&ldquo;</span>
              <blockquote className="font-display text-2xl leading-snug text-ink flex-1">{quote}</blockquote>
              <div className="mt-8 pt-6 border-t border-line">
                <p className="text-ink text-sm font-medium">{name}</p>
                <p className="text-muted text-sm mt-0.5">{role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
