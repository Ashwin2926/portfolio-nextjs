import { clients } from "../data/projects";

// Slow, endless row of client names; the list is doubled so the loop is seamless.
const ClientsStrip = () => (
  <section aria-label="Selected clients" className="relative bg-[#060B14] border-y border-[#F4EFE6]/[0.06] py-10 overflow-hidden">
    <p className="text-center text-[#64748B] text-[10px] tracking-[0.4em] uppercase mb-7">Selected clients</p>
    <div className="relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee">
        {[...clients, ...clients].map((name, i) => (
          <span key={i} aria-hidden={i >= clients.length}
            className="flex items-center font-display italic text-2xl sm:text-3xl text-[#D4AF6E]/70 whitespace-nowrap">
            <span className="px-10">{name}</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF6E]/40" />
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsStrip;
