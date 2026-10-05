// Eyebrow label + serif heading used at the top of each section.
const SectionHeading = ({ eyebrow, title, className = "" }) => (
  <div className={className}>
    <div className="flex items-center gap-4 mb-4">
      <span className="w-10 h-px bg-[#D4AF6E]" />
      <span className="text-[#D4AF6E] text-[11px] tracking-[0.35em] uppercase">{eyebrow}</span>
    </div>
    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F4EFE6] leading-[1.05]">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
