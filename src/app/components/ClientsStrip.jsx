import { clients } from "../data/projects";

// Slow, endless row of client names; the list is doubled so the loop is seamless.
const ClientsStrip = () => (
  <section aria-label="Selected clients" className="relative bg-canvas border-y border-line py-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
      <p className="text-muted text-xs whitespace-nowrap">Selected clients</p>
      <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[...clients, ...clients].map((name, i) => (
            <span key={i} aria-hidden={i >= clients.length}
              className="flex items-center font-display text-2xl sm:text-3xl text-ink/70 whitespace-nowrap">
              <span className="px-8">{name}</span>
              <span className="text-accent text-base">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ClientsStrip;
