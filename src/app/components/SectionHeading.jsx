// Eyebrow label + serif heading used at the top of each section.
const SectionHeading = ({ eyebrow, title, className = "" }) => (
  <div className={className}>
    <div className="flex items-center gap-4 mb-5">
      <span className="w-8 h-px bg-accent" />
      <span className="text-accent text-[11px] font-medium tracking-[0.3em] uppercase">{eyebrow}</span>
    </div>
    <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1] tracking-[-0.01em]">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
