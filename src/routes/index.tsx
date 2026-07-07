import { useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroAtifAsset from "@/assets/hero-atif.png.asset.json";
const portrait = heroAtifAsset.url;
import ceoHeroAsset from "@/assets/ceo-atif-hero.jpeg.asset.json";
const ceoHero = ceoHeroAsset.url;
import atifDesk from "@/assets/atif-desk.png";
import globalLeadershipDubaiAsset from "@/assets/global-leadership-dubai.png.asset.json";
const globalLeadershipDubai = globalLeadershipDubaiAsset.url;
const COPYRIGHT_YEAR = 2026;

export const Route = createFileRoute("/")({
  component: Profile,
});

const memberships = [
  { name: "Pakistan – Rwanda Business Council", role: "Chairman", year: "2026" },
  { name: "Pakistan – Myanmar Business Council", role: "Chairman", year: "2026" },
  { name: "Pakistan – Philippines Business Council", role: "Chairman", year: "2024–2025" },
  { name: "Pakistan – Saint Kitts and Nevis Business Council", role: "Chairman", year: "2024–2025" },
  { name: "Pakistan – Finland Business Council", role: "Vice Chairman", year: "2024–2025" },
  { name: "Pakistan – Australia Business Council", role: "Director", year: "2024–2025" },
  { name: "Pakistan – Croatia Business Council", role: "Director", year: "2024–2025" },
  { name: "FPCCI Sindh — Health & Safety", role: "Deputy Convener", year: "2026" },
  { name: "PPMA — Pakistan Pharmaceuticals Manufacturers Assoc.", role: "Vice Chairman", year: "2021–2022" },
  { name: "Ziauddin University — Faculty of Pharmacy", role: "Board of Faculty", year: "2024–2027" },
  { name: "Pakistan Council on Foreign Relations", role: "Member", year: "2023" },
  { name: "Diplomatic Business Club", role: "Platinum Member", year: "Lifetime" },
];

const affiliations = [
  "WBC — World Business Council",
  "CACCI — Asia-Pacific Chambers",
  "SAARC",
  "PBBC — Pakistan Britain Business Council",
  "KCFR — Karachi Council on Foreign Relations",
  "ESU — English Speaking Union",
  "CEO Club — Executive Member",
  "Made in Pakistan Executive Club",
  "PBCF — Patron in Chief",
  "KATI — Korangi Trade & Industry",
  "Rotary Club — District Chair",
  "Karachi Golf Club",
];

const awards = [
  { year: "2025", title: "Top 50 Export Award", place: "8th Pakistan Pharma Summit & PESA Awards" },
  { year: "2025", title: "Global Leadership Excellence Award", place: "Global Image Award — Dubai, Middle East" },
  { year: "2025", title: "CEO Summit Award", place: "CEO Summit, Islamabad" },
  { year: "2025", title: "PBBC Certificate & MIP Award", place: "House of Lords, London" },
  { year: "2024", title: "Patron Award", place: "The Youth Parliament" },
  { year: "2023", title: "Export Award", place: "Presented by H.E. Former PM Shehbaz Sharif — 6th Pakistan Pharma Summit" },
];



const stats = [
  { value: "30+", label: "Years in Industry" },
  { value: "40+", label: "Countries Travelled" },
  { value: "20+", label: "Council Roles" },
  { value: "2007", label: "HIGH-Q Plant Established" },
];

async function downloadProfilePdf(setBusy: (b: boolean) => void) {
  const el = document.getElementById("profile-root");
  if (!el) return;
  try {
    setBusy(true);
    const mod = await import("html2pdf.js");
    const html2pdf = (mod as { default: (...args: unknown[]) => unknown }).default;
    // wait a tick so any lazy images render
    await new Promise((r) => setTimeout(r, 100));
    await (html2pdf as (...args: unknown[]) => { set: (o: unknown) => { from: (e: HTMLElement) => { save: () => Promise<void> } } })()
      .set({
        margin: 0,
        filename: "Atif-Iqbal-Profile.pdf",
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#0a0a0a",
          windowWidth: 1280,
        },
        jsPDF: { unit: "px", format: [1280, el.scrollHeight], orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"] },
      })
      .from(el)
      .save();
  } catch (err) {
    console.error("PDF export failed", err);
  } finally {
    setBusy(false);
  }
}

function Nav() {
  const items: [string, string][] = [
    ["about", "About"],
    ["memberships", "Councils"],
    ["awards", "Awards"],
    ["gallery", "Gallery"],
    ["contact", "Contact"],
  ];
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <span className="font-serif italic text-2xl leading-none text-gold">AI</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.4em] text-cream/60 truncate">
            Atif Iqbal
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {items.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="nav-link text-[10px] uppercase tracking-[0.4em] text-cream/60"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => downloadProfilePdf(setBusy)}
            disabled={busy}
            className="no-print inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold border border-gold/40 hover:bg-gold/10 px-3 lg:px-4 py-2.5 disabled:opacity-50"
          >
            <span className="hidden lg:inline">{busy ? "Preparing…" : "Download Profile"}</span>
            <span className="lg:hidden">{busy ? "…" : "PDF"}</span>
          </button>
          <a
            href="/Atif_Iqbal_CV.pdf"
            download
            className="btn-gold inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-noir bg-gold px-4 lg:px-5 py-2.5"
          >
            <span className="hidden lg:inline">Download CV</span>
            <span className="lg:hidden">CV</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" strokeLinecap="square" />
            </svg>
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-gold"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="square" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gold/15 glass-strong">
          <ul className="px-4 py-4 flex flex-col divide-y divide-gold/10">
            {items.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[11px] uppercase tracking-[0.4em] text-cream/70 hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-2 pt-3">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  downloadProfilePdf(setBusy);
                }}
                disabled={busy}
                className="inline-flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold border border-gold/40 px-5 py-3 disabled:opacity-50"
              >
                {busy ? "Preparing PDF…" : "Download Profile PDF"}
              </button>
              <a
                href="/Atif_Iqbal_CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.4em] text-noir bg-gold px-5 py-3"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function ReelBadge({ scene, section }: { scene: string; section: string }) {
  return (
    <div className="hidden lg:flex fixed top-24 right-6 z-40 flex-col items-end gap-2 text-cream/50">
      <span className="text-[10px] tracking-[0.5em] uppercase">Scene {scene}</span>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold/60 gold-pulse" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-gold/80">{section}</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-noir"
    >
      {/* Full-bleed CEO portrait */}
      <img
        src={ceoHero}
        alt="Atif Iqbal — Group CEO of HIGH-Q Pharmaceuticals, seated at his executive desk"
        className="hero-image absolute inset-0 w-full h-full object-cover object-[65%_center] sm:object-[60%_center] md:object-center"
        loading="eager"
        decoding="async"
      />

      {/* Cinematic tonal grade */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 40%, rgba(0,0,0,0) 0%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.9) 100%)",
        }}
      />
      {/* Left readability veil */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-full md:w-[62%] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 35%, rgba(10,10,10,0.35) 70%, rgba(10,10,10,0) 100%)",
        }}
      />
      {/* Bottom fade into page */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-56 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 65%, #0a0a0a 100%)",
        }}
      />
      {/* Gold filament accent */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none mix-blend-screen"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M-50,780 C250,700 500,880 780,600 S1050,220 1200,300"
          stroke="#D4AF37"
          strokeWidth="0.5"
          fill="none"
          style={{ filter: "blur(1.2px)" }}
        />
      </svg>

      {/* Corner accents */}
      <div aria-hidden className="absolute top-24 left-6 lg:left-12 w-16 h-16 border-t border-l border-gold/40 z-10" />
      <div aria-hidden className="absolute bottom-24 right-6 lg:right-12 w-16 h-16 border-b border-r border-gold/40 z-10" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-28 flex flex-col justify-end lg:justify-center">
        <div className="max-w-2xl">
          <div
            className="flex items-center gap-4 opacity-95 hero-rise"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="h-px w-10 bg-gold" />
            <span
              className="text-[10px] uppercase tracking-[0.5em] text-gold font-medium"
              style={{ fontFamily: '"Cormorant SC", serif' }}
            >
              Group Chief Executive
            </span>
          </div>

          <h1 className="leading-[0.86] mt-6 sm:mt-8">
            <span
              className="hero-rise block text-cream italic font-black tracking-tight text-6xl sm:text-7xl md:text-8xl"
              style={{ fontFamily: '"Italiana", serif', animationDelay: "0.3s" }}
            >
              Atif
            </span>
            <span
              className="hero-rise block font-black tracking-tight text-transparent bg-clip-text text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] -mt-2 sm:-mt-3 md:-mt-4"
              style={{
                fontFamily: '"Italiana", serif',
                backgroundImage:
                  "linear-gradient(180deg, #F9E29C 0%, #D4AF37 45%, #8A6E2F 100%)",
                animationDelay: "0.4s",
              }}
            >
              Iqbal
            </span>
          </h1>

          <div
            className="hero-rise flex items-center gap-4 pt-6"
            style={{ animationDelay: "0.55s" }}
          >
            <span className="h-px w-12 bg-gold" />
            <p
              className="text-base sm:text-lg md:text-xl text-cream/90 tracking-[0.14em] uppercase"
              style={{ fontFamily: '"Cormorant SC", serif', fontWeight: 400 }}
            >
              HIGH-Q Pharmaceuticals · Vida Laboratories
            </p>
          </div>

          <p
            className="hero-rise mt-6 text-sm sm:text-base text-cream/75 font-light leading-relaxed max-w-lg"
            style={{ animationDelay: "0.75s" }}
          >
            Industrial leader, diplomat, and philanthropist — building bridges
            between industry, medicine, and nations across four continents.
          </p>

          <div
            className="hero-rise mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="/Atif_Iqbal_CV.pdf"
              download
              className="btn-gold group inline-flex items-center justify-center gap-3 bg-gold text-noir px-8 sm:px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold"
            >
              Download CV
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-y-0.5">
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" strokeLinecap="square" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-ghost-gold inline-flex items-center justify-center gap-3 border border-gold/50 text-cream px-8 sm:px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Bottom hairline indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-70 z-10">
        <span
          className="text-[10px] uppercase tracking-[0.5em] text-cream/70"
          style={{ fontFamily: '"Cormorant SC", serif' }}
        >
          Legacy in Motion
        </span>
        <div className="h-14 w-px bg-gradient-to-b from-gold to-transparent gold-drop" />
      </div>
    </section>
  );
}



function Stats() {
  return (
    <section className="border-y border-gold/15">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`stat-tile py-12 md:py-16 px-5 sm:px-8 text-center md:text-left group ${i > 0 ? "md:border-l border-gold/15" : ""} ${i >= 2 ? "border-t md:border-t-0 border-gold/15" : ""}`}
          >
            <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-gold leading-none transition-colors duration-500 group-hover:text-gold-soft">{s.value}</p>
            <p className="mt-3 sm:mt-4 text-[10px] uppercase tracking-[0.42em] text-cream/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" /> Biography
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream">
            A life built at the intersection of <em className="text-gold not-italic">industry</em>,
            diplomacy, and service.
          </h2>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Portrait tile */}
          <div className="md:col-span-5 md:row-span-2 cinema-card cinema-card-hover overflow-hidden group">
            <div className="relative h-full min-h-[360px] md:min-h-[520px]">
              <img
                src={atifDesk}
                alt="Atif Iqbal at the HIGH-Q Group office"
                width={1500}
                height={1000}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-noir via-noir/70 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Portrait</p>
                <p className="font-serif italic text-xl sm:text-2xl text-cream mt-2">At the HIGH-Q office</p>
              </div>
            </div>
          </div>

          {/* Biography prose */}
          <div className="md:col-span-7 cinema-card cinema-card-hover p-6 sm:p-10 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">The Vision</p>
            <div className="space-y-5 text-cream/75 leading-relaxed text-base sm:text-[17px] font-light">
              <p>
                Born in 1972 with an entrepreneurial spirit, Mr. Atif Iqbal began his career in
                1994 at the root level of the family business, HIGH-Q International — an
                import-based pharmaceutical company founded under the chairmanship of his
                father, Mr. Iqbal Ahmed.
              </p>
              <p>
                In 2007 the HIGH-Q Pharmaceuticals manufacturing plant was established. In 2015,
                Vida Laboratories — a nutraceutical sister concern — was built. An exceptional
                communicator and industrial-management specialist, he is IBA-certified in cGMP
                and PSQCA-certified in environmental safety.
              </p>
              <p>
                A champion of research, technology, and AI, he launched the HIGH-Q Simulation
                Centre — a one-of-a-kind facility enabling surgeons to practise procedures and
                reduce human error in real-life scenarios.
              </p>
            </div>
          </div>

          {/* Academics tile */}
          <div className="md:col-span-4 cinema-card cinema-card-hover p-6 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Academics</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>MBA Marketing — Newport Institute University, 1999</li>
              <li>B.Com — DHA Degree College for Men, 1996</li>
              <li>HSSC Pre-Engineering — PAF College Masroor, 1992</li>
            </ul>
          </div>

          {/* Certifications tile */}
          <div className="md:col-span-3 cinema-card cinema-card-hover p-6 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Certifications</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>IBA — cGMP</li>
              <li>PSQCA — Environmental Safety</li>
              <li>Factory Management</li>
              <li>Managerial Comms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Memberships() {
  return (
    <section id="memberships" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" /> Councils & Memberships
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream">
            Serving on councils that shape trade, health, and diplomacy across
            <em className="text-gold not-italic"> four continents.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured — Gold slab */}
          <div className="md:col-span-4 relative overflow-hidden bg-gradient-to-br from-gold to-[#b8933e] text-noir p-8 sm:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[320px] transition-transform duration-700 hover:-translate-y-1">
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none opacity-30"
              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 65%)" }}
              aria-hidden
            />
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.4em] text-noir/60 mb-4">Chairman · 2026</p>
              <h3 className="font-serif text-2xl sm:text-3xl leading-tight">
                Pakistan – Rwanda &amp; Pakistan – Myanmar Business Councils
              </h3>
            </div>
            <div className="relative flex items-center gap-3 mt-6">
              <span className="h-px w-10 bg-noir/50" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-noir/70">
                Founding chairmanships
              </p>
            </div>
          </div>

          {/* Council list */}
          <div className="md:col-span-8 cinema-card p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {memberships.slice(2).map((m, i) => (
                <div
                  key={m.name}
                  className={`group relative p-5 sm:p-7 min-w-0 ${i % 2 === 0 ? "sm:border-r border-gold/10" : ""} border-b border-gold/10 last:border-b-0 transition-colors duration-500 hover:bg-gold/[0.04]`}
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gold transition-all duration-500 group-hover:h-2/3" />
                  <p className="text-[10px] uppercase tracking-[0.35em] text-gold">{m.role}</p>
                  <p className="font-serif text-base sm:text-lg text-cream mt-2 leading-snug break-words transition-colors duration-500 group-hover:text-gold-soft">{m.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-cream/40 mt-2">{m.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Affiliations chips */}
          <div className="md:col-span-12 cinema-card cinema-card-hover p-6 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Also Affiliated With</p>
            <div className="flex flex-wrap gap-2">
              {affiliations.map((a) => (
                <span
                  key={a}
                  className="text-xs tracking-wide border border-gold/25 text-cream/70 px-3.5 sm:px-4 py-2 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-500 cursor-default"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" /> Awards & Media
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream">
            Recognised on the world stage — from the House of Lords to the
            <em className="text-gold not-italic"> Middle East.</em>
          </h2>
        </div>

        {/* Trophy wall — cinematic image tiles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <AwardTile
            className="md:col-span-6"
            src="/profile/award-dubai-globe.jpg"
            eyebrow="01 · Dubai, UAE"
            title="Global Leadership Excellence Award"
            note="Recognised for visionary leadership and outstanding contributions to healthcare and the global community."
          />
          <AwardTile
            className="md:col-span-6"
            src="/profile/award-house-of-lords.jpg"
            eyebrow="02 · London, United Kingdom"
            title="Honoured at the House of Lords"
            note="At the heart of global dialogue on healthcare, innovation and sustainable growth."
          />
          <AwardTile
            className="md:col-span-4"
            src="/profile/award-ceo-summit-crystal.jpg"
            eyebrow="03 · Asia 2023"
            title="CEO Summit Leadership Award"
            note="Honouring exceptional leadership, strategic vision and industry excellence."
            compact
          />
          <AwardTile
            className="md:col-span-4"
            src="/profile/award-export-excellence.jpg"
            eyebrow="04 · Pakistan"
            title="Export Excellence Award"
            note="Outstanding contributions to exports and strengthening Pakistan's presence globally."
            compact
          />
          <AwardTile
            className="md:col-span-4"
            src="/profile/award-global-partnerships.jpg"
            eyebrow="05 · Worldwide"
            title="Strengthening Global Partnerships"
            note="Building bridges. Creating opportunities. Transforming healthcare together."
            compact
          />
        </div>

        {/* Global Partnerships — cinematic pack */}
        <div className="cinema-card p-5 sm:p-8 mb-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">
                06 · Global Partnerships
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream leading-tight">
                Partnering beyond borders.<br />
                <em className="text-gold not-italic">Impacting lives worldwide.</em>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-cream/60 italic max-w-sm md:text-right">
              “Through strategic partnerships and global collaborations, we are expanding access to quality healthcare and building a healthier future together.”
            </p>
          </div>

          {/* Hero: globe + 2×2 country grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">
            <div className="lg:col-span-6 relative overflow-hidden aspect-[4/3] lg:aspect-auto border border-gold/15">
              <img
                src="/profile/partners-globe.jpg"
                alt="Global partnership network illuminated across the world"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ["China", "/profile/partners-china.jpg"],
                ["Myanmar", "/profile/partners-myanmar.jpg"],
                ["Philippines", "/profile/partners-philippines.jpg"],
                ["USA", "/profile/partners-usa.jpg"],
              ].map(([country, src]) => (
                <div key={country} className="group relative overflow-hidden aspect-[16/10] border border-gold/15">
                  <img
                    src={src}
                    alt={`Partnership with ${country}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second row: Oman, Lebanon, world map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 sm:mb-8">
            {[
              ["Oman", "/profile/partners-oman.jpg"],
              ["Lebanon", "/profile/partners-lebanon.jpg"],
            ].map(([country, src]) => (
              <div key={country} className="group relative overflow-hidden aspect-[4/3] border border-gold/15">
                <img
                  src={src}
                  alt={`Partnership with ${country}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
            <div className="relative overflow-hidden aspect-[4/3] border border-gold/15">
              <img
                src="/profile/partners-worldmap.jpg"
                alt="A global network with a local impact"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gold/15">
            {[
              ["40+", "Countries reached"],
              ["Strategic", "Global partnerships"],
              ["Millions", "Lives touched"],
              ["Global · Local", "Standards & commitment"],
            ].map(([k, v]) => (
              <div key={v as string}>
                <p className="font-serif text-xl sm:text-2xl text-gold leading-tight">{k}</p>
                <p className="text-[11px] uppercase tracking-[0.28em] text-cream/60 mt-2">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media strip */}
      </div>
    </section>
  );
}

function AwardTile({
  className = "",
  src,
  eyebrow,
  title,
  note,
  compact = false,
}: {
  className?: string;
  src: string;
  eyebrow: string;
  title: string;
  note: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden cinema-card cinema-card-hover ${compact ? "min-h-[280px] md:min-h-[320px]" : "min-h-[340px] md:min-h-[420px]"} ${className}`}
    >
      <img
        src={src}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:opacity-90 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/10" />
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">{eyebrow}</p>
        <h3 className={`font-serif text-cream leading-tight ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl md:text-4xl"}`}>
          {title}
        </h3>
        <p className="mt-3 text-xs sm:text-sm text-cream/70 leading-relaxed max-w-md">{note}</p>
      </div>
    </div>
  );
}

type GalleryItem = { src: string; label: string; place: string; contain?: boolean };
type GallerySection = { id: string; eyebrow: string; title: ReactNode; items: GalleryItem[] };

const gallerySections: GallerySection[] = [
  {
    id: "gallery-social",
    eyebrow: "Chapter I",
    title: (
      <>
        Participation in recent <em className="text-gold not-italic">social &amp; diplomatic</em> events.
      </>
    ),
    items: [
      { src: "/profile/social-myanmar.jpg", label: "78th Independence Day of Myanmar", place: "Islamabad · with H.E. Wunna Han" },
      { src: "/profile/social-china-consulate.jpg", label: "Economic Diplomatic Forum 2026", place: "Chinese Consulate · Karachi" },
      { src: "/profile/social-quaid-summit.jpg", label: "Quaid-e-Azam Leadership Summit", place: "National Leadership Awards · Karachi 2025" },
      { src: "/profile/social-us-consul.jpg", label: "With H.E. Conrad Tribble", place: "Consul General · U.S. Consulate" },
      { src: "/profile/social-oman-consul.jpg", label: "With H.E. Sami Al Khanjari", place: "Consul General · Oman" },
      { src: "/profile/social-philippines.jpg", label: "With H.E. Dr. Imran Yousuf Muhammad", place: "Honorary Consul General · Philippines" },
      { src: "/profile/social-consuls-group.jpg", label: "Consuls General of Turkey, Thailand, Sri Lanka & Indonesia", place: "Diplomatic Gathering" },
      { src: "/profile/social-china-cpec.jpg", label: "With H.E. Li Bijian", place: "CPEC BOI Meeting · Karachi" },
      { src: "/profile/social-usa-rotary.jpg", label: "With H.E. Nicole Theriot", place: "Rotary Square Mile · London Night" },
      { src: "/profile/social-tajikistan.jpg", label: "With Honorary Consul of Tajikistan", place: "HIGH-Q Pharmaceuticals" },
    ],
  },
  {
    id: "gallery-award",
    eyebrow: "Chapter II",
    title: (
      <>
        Receiving the <em className="text-gold not-italic">Global Leadership Excellence</em> Award.
      </>
    ),
    items: [
      { src: globalLeadershipDubai, label: "Global Leadership Excellence Award", place: "Honouring Visionaries · Dubai 2024" },
      { src: "/profile/award-global-leadership-1.jpg", label: "Global Leadership Excellence Award", place: "Global Image Award · Dubai 2025" },
      { src: "/profile/award-global-leadership-2.jpg", label: "On Stage in Dubai", place: "Middle East · 2025" },
      { src: "/profile/award-pbbc-london.jpg", label: "PBBC Certificate & MIP Award", place: "House of Lords · London" },
      { src: "/profile/award-shehbaz.jpg", label: "Export Award by Former PM Shehbaz Sharif", place: "6th Pakistan Pharma Summit & PESA '23" },
      { src: "/profile/award-export-1.jpg", label: "Top 50 Export Award", place: "8th Pakistan Pharma Summit & PESA 2025" },
      { src: "/profile/award-ceo-summit.jpg", label: "CEO Summit Award", place: "Islamabad · 2025" },
      { src: "/profile/award-patron.jpg", label: "Patron Award", place: "Governor Sindh Kamran Tessori · Youth Parliament 2024" },
    ],
  },
  {
    id: "gallery-speaker",
    eyebrow: "Chapter III",
    title: (
      <>
        Participation as <em className="text-gold not-italic">Guest Speaker</em> / Guest of Honor.
      </>
    ),
    items: [
      { src: "/profile/speaker-roshan.jpg", label: "2nd Roshan Pakistan Corporate Business Forum & Awards", place: "Guest Speaker" },
      { src: "/profile/speaker-podium.jpg", label: "Keynote Address", place: "Industry Forum" },
      { src: "/profile/speaker-ziauddin.jpg", label: "Ziauddin University Commencement", place: "2022" },
      { src: "/profile/speaker-ribbon.jpg", label: "Inauguration Ceremony", place: "Ribbon Cutting" },
      { src: "/profile/speaker-jsmu.jpg", label: "First JSMU Pharma Career Fair", place: "2022" },
    ],
  },
  {
    id: "gallery-fpcci",
    eyebrow: "Chapter IV",
    title: (
      <>
        <em className="text-gold not-italic">FPCCI</em> achievements &amp; bilateral appointments.
      </>
    ),
    items: [
      { src: "/profile/fpcci-finland.jpg", label: "Appointed Vice Chairman, Pakistan–Finland Business Council", place: "Federation of Pakistan Chambers" },
      { src: "/profile/fpcci-morocco-yemen.jpg", label: "With H.E. Ishtiaq Baig (Morocco) & H.E. Dr. Mirza Ikhtiar Baig (Yemen)", place: "Honorary Consuls General" },
    ],
  },
  {
    id: "gallery-press",
    eyebrow: "Chapter V",
    title: (
      <>
        Newspaper clippings &amp; <em className="text-gold not-italic">magazine features.</em>
      </>
    ),
    items: [
      { src: "/profile/media-ceo-today.jpg", label: "CEO Today Magazine — Cover Feature", place: "Paving the Way for Growth · Issue LXV", contain: true },
      { src: "/profile/media-pakistan-today.jpg", label: "Pakistan Today", place: "EU envoy on pharmaceutical imports from Pakistan", contain: true },
      { src: "/profile/media-financial-daily.jpg", label: "The Financial Daily", place: "Nominated as RKSM Chairman", contain: true },
    ],
  },
  {
    id: "gallery-certs",
    eyebrow: "Chapter VI",
    title: (
      <>
        Certifications &amp; <em className="text-gold not-italic">memberships.</em>
      </>
    ),
    items: [
      { src: "/profile/cert-fpcci-rwanda-myanmar.jpg", label: "Chairman — Pakistan–Rwanda & Pakistan–Myanmar Business Councils", place: "FPCCI · 2026", contain: true },
      { src: "/profile/cert-fpcci-3.jpg", label: "FPCCI Standing Committee", place: "Federation of Pakistan Chambers", contain: true },
      { src: "/profile/cert-kcfr.jpg", label: "Karachi Council on Foreign Relations", place: "Lifetime Member · 2024", contain: true },
      { src: "/profile/cert-fpcci-philippines.jpg", label: "Chairman — Pakistan–Philippines Business Council", place: "FPCCI · 2024–2025", contain: true },
      { src: "/profile/cert-pcfr.jpg", label: "Pakistan Council on Foreign Relations", place: "Certificate of Membership · 2023", contain: true },
      { src: "/profile/cert-iba.jpg", label: "IBA — Managerial Communication Strategies", place: "Institute of Business Administration", contain: true },
      { src: "/profile/cert-dbc.jpg", label: "Diplomatic Business Club", place: "Platinum Member", contain: true },
    ],
  },
];

function bentoSpanFor(count: number, index: number): string {
  // Editorial bento layout — always fill the 12-col row so small chapters don't leave gaps.
  if (count === 1) return "md:col-span-12 min-h-[320px] md:min-h-[440px]";
  if (count === 2) return "md:col-span-6 min-h-[320px] md:min-h-[440px]";
  if (count === 3) return "md:col-span-4 min-h-[300px] md:min-h-[400px]";
  if (count === 4) return "md:col-span-6 min-h-[300px] md:min-h-[380px]";
  // 5+: hero-led rhythmic mix
  const pattern = [
    "md:col-span-8 min-h-[340px] md:min-h-[520px]",
    "md:col-span-4 min-h-[300px] md:min-h-[520px]",
    "md:col-span-4 min-h-[280px] md:min-h-[320px]",
    "md:col-span-4 min-h-[280px] md:min-h-[320px]",
    "md:col-span-4 min-h-[280px] md:min-h-[320px]",
    "md:col-span-6 min-h-[280px] md:min-h-[360px]",
    "md:col-span-6 min-h-[280px] md:min-h-[360px]",
    "md:col-span-4 min-h-[280px] md:min-h-[320px]",
    "md:col-span-4 min-h-[280px] md:min-h-[320px]",
    "md:col-span-4 min-h-[280px] md:min-h-[320px]",
  ];
  return pattern[index % pattern.length];
}

function GallerySectionBlock({ section, index }: { section: GallerySection; index: number }) {
  return (
    <div id={section.id} className={index === 0 ? "" : "mt-16 md:mt-24"}>
      <div className="max-w-3xl mb-10 md:mb-12">
        <p className="eyebrow mb-6">
          <span className="gold-rule mr-4" /> {section.eyebrow}
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl leading-[1.15] text-cream">{section.title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
        {section.items.map((g, i) => (
          <figure
            key={g.src}
            className={`group relative overflow-hidden cinema-card cinema-card-hover ${bentoSpanFor(section.items.length, i)}`}
          >
            <img
              src={g.src}
              alt={g.label}
              loading="lazy"
              className={`absolute inset-0 w-full h-full ${g.contain ? "object-contain bg-noir-soft p-3" : "object-cover object-top"} grayscale-[35%] group-hover:grayscale-0 scale-[1.03] group-hover:scale-[1.06] transition-all duration-[1400ms]`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent pointer-events-none opacity-95 group-hover:opacity-80 transition-opacity duration-700" />
            {/* Gold corner accents */}
            <span className="pointer-events-none absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/80 transition-all duration-500" />
            <span className="pointer-events-none absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/80 transition-all duration-500" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{g.place}</p>
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-cream mt-1.5 leading-tight">{g.label}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" /> The Archive
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream">
            A visual record of engagements, awards, and
            <em className="text-gold not-italic"> diplomatic milestones.</em>
          </h2>
        </div>

        {gallerySections.map((s, i) => (
          <GallerySectionBlock key={s.id} section={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="cinema-card p-6 sm:p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute -bottom-40 -left-40 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
            aria-hidden
          />
          <div className="relative grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="min-w-0">
              <p className="eyebrow mb-6">
                <span className="gold-rule mr-4" /> Contact
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream italic">
                Connect for<br />strategic dialogue.
              </h2>
              <p className="mt-6 sm:mt-8 text-cream/60 leading-relaxed max-w-md">
                For collaborations, board inquiries, speaking engagements, and diplomatic
                correspondence — reach out through the official channels below.
              </p>

              <div className="mt-10 sm:mt-12 space-y-5 sm:space-y-6">
                {[
                  { label: "Email", value: "atif@highq.pk", href: "mailto:atif@highq.pk" },
                  { label: "Direct", value: "+92 321 2595007", href: "tel:+923212595007" },
                  { label: "Website", value: "www.highq.pk", href: "https://www.highq.pk" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 group border-b border-gold/15 pb-4"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gold sm:w-24 shrink-0">{c.label}</span>
                    <span className="hidden sm:block flex-1 h-px bg-gold/20" />
                    <span className="font-serif text-lg sm:text-xl text-cream group-hover:text-gold transition-colors duration-500 break-all sm:break-normal">
                      {c.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4 content-start">
              {[
                { label: "Corporate Office", body: "B-64, KDA Scheme-1, Karsaz Road, Karachi, Pakistan." },
                { label: "Manufacturing Plant", body: "Plot 224 & 225/1, Sector 23, Korangi Industrial Area, Karachi." },
                { label: "Residence", body: "B-42, KDA Scheme-1, Karachi, Pakistan." },
                { label: "Group", body: "HIGH-Q Pharmaceuticals · Vida Laboratories · HIGH-Q Simulation Centre." },
              ].map((c) => (
                <div key={c.label} className="border border-gold/15 p-5 sm:p-6 hover:border-gold/50 transition-colors duration-500">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">{c.label}</p>
                  <p className="text-cream/70 leading-relaxed text-sm">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/15 glass">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-2xl text-gold leading-none">AI</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-cream/50">
            Atif Iqbal · Group CEO
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40">
          © {COPYRIGHT_YEAR} · Excellence in Leadership
        </p>
      </div>
    </footer>
  );
}

function Profile() {
  return (
    <div id="profile-root" className="min-h-screen text-cream overflow-x-hidden">
      <Nav />
      <ReelBadge scene="01" section="Profile" />
      <Hero />
      <Stats />
      <About />
      <Memberships />
      <Awards />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
