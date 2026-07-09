import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroAtifAsset from "@/assets/hero-atif.png.asset.json";
const portrait = heroAtifAsset.url;
import ceoHeroAsset from "@/assets/ceo-atif-hero.jpeg.asset.json";
const ceoHero = ceoHeroAsset.url;
import atifDesk from "@/assets/atif-desk.png";
import globalLeadershipDubaiAsset from "@/assets/global-leadership-dubai.png.asset.json";
const globalLeadershipDubai = globalLeadershipDubaiAsset.url;
import atif1 from "@/assets/portraits/atif-1.jpg.asset.json";
import atif2 from "@/assets/portraits/atif-2.jpg.asset.json";
import atif3 from "@/assets/portraits/atif-3.jpg.asset.json";
import atif4 from "@/assets/portraits/atif-4.jpg.asset.json";
import atif5 from "@/assets/portraits/atif-5.jpg.asset.json";
import atif6 from "@/assets/portraits/atif-6.jpg.asset.json";
import atif7 from "@/assets/portraits/atif-7.jpg.asset.json";
import profilePdfAsset from "@/assets/Atif_Iqbal_Profile.pdf.asset.json";
const profilePdfUrl = profilePdfAsset.url;
import logoAsset from "@/assets/atif-iqbal-logo.png.asset.json";
const brandLogo = logoAsset.url;
const heroSlides = [
  { src: ceoHero, alt: "Atif Iqbal — Group CEO at his executive desk", pos: "center 25%" },
  { src: atif5.url, alt: "Atif Iqbal — signing at HIGH-Q Group", pos: "center 30%" },
  { src: atif1.url, alt: "Atif Iqbal — portrait in brown paisley suit", pos: "center 20%" },
  { src: atif2.url, alt: "Atif Iqbal — in Dubai skyline", pos: "center 30%" },
  { src: atif3.url, alt: "Atif Iqbal — at an event", pos: "center 30%" },
  { src: atif4.url, alt: "Atif Iqbal — in navy pinstripe suit", pos: "center 30%" },
  { src: atif6.url, alt: "Atif Iqbal — in light blue suit", pos: "center 30%" },
  { src: atif7.url, alt: "Atif Iqbal — Group CEO, HIGH-Q Group nameplate", pos: "center 30%" },
];

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


function Nav() {
  const items: [string, string][] = [
    ["about", "About"],
    ["memberships", "Councils"],
    ["awards", "Awards"],
    ["gallery", "Gallery"],
    ["contact", "Contact"],
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-24 sm:h-28 lg:h-32 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)} aria-label="Atif Iqbal — Home">
          <img src={brandLogo} alt="Atif Iqbal monogram logo" className="h-20 sm:h-24 lg:h-[7.5rem] w-auto object-contain drop-shadow-[0_2px_10px_rgba(201,162,76,0.35)]" />
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
          <a
            href={profilePdfUrl}
            download="Atif-Iqbal-Profile.pdf"
            className="no-print inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold border border-gold/40 hover:bg-gold/10 px-3 lg:px-4 py-2.5"
          >
            <span className="hidden lg:inline">Download Profile</span>
            <span className="lg:hidden">PDF</span>
          </a>
          <a
            href="#contact"
            className="btn-gold inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-noir bg-gold px-4 lg:px-5 py-2.5"
          >
            Contact
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
              <a
                href={profilePdfUrl}
                download="Atif-Iqbal-Profile.pdf"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold border border-gold/40 px-5 py-3"
              >
                Download Profile
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.4em] text-noir bg-gold px-5 py-3"
              >
                Contact
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

function HeroMobile() {
  return (
    <>
      {/* Portrait pane — face always fully visible, never covered by text */}
      <div className="relative w-full h-[52svh] min-h-[420px] max-h-[620px] sm:h-[60svh] sm:min-h-[480px] sm:max-h-[700px] md:h-[68svh] md:min-h-[560px] md:max-h-[780px] overflow-hidden">
        <HeroPortraitSlider />

        {/* Cinematic tonal grade */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 90% at 60% 30%, rgba(0,0,0,0) 0%, rgba(10,10,10,0.30) 55%, rgba(10,10,10,0.85) 100%)",
          }}
        />

        {/* Seamless fade into the text pane below */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32 sm:h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.9) 70%, #0a0a0a 100%)",
          }}
        />

        {/* Corner filaments */}
        <div aria-hidden className="absolute top-20 sm:top-24 left-4 sm:left-6 w-8 sm:w-10 h-8 sm:h-10 border-t border-l border-gold/50 z-10" />
        <div aria-hidden className="absolute top-20 sm:top-24 right-4 sm:right-6 w-8 sm:w-10 h-8 sm:h-10 border-t border-r border-gold/50 z-10" />
      </div>

      {/* Text pane — solid noir, no image behind, guaranteed no overlap */}
      <div className="relative bg-noir">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-4 sm:pt-6 pb-14 sm:pb-20 -mt-14 sm:-mt-20 relative z-10 flex flex-col">
          <div className="hero-rise w-12 h-px bg-gold mb-6" style={{ animationDelay: "0.15s" }} />
          <p
            className="hero-rise text-[10px] sm:text-[11px] uppercase tracking-[0.42em] text-gold font-semibold mb-3"
            style={{ letterSpacing: "0.02em", animationDelay: "0.25s" }}
          >
            Group Chief Executive
          </p>
          <h1 className="hero-rise leading-[0.95] mb-3" style={{ animationDelay: "0.35s" }}>
            <span
              className="block text-transparent bg-clip-text text-5xl sm:text-6xl md:text-7xl"
              style={{
                fontWeight: 700, letterSpacing: "-0.045em",
                backgroundImage:
                  "linear-gradient(180deg, #F9E29C 0%, #D4AF37 45%, #8A6E2F 100%)",
              }}
            >
              Atif Iqbal
            </span>
          </h1>
          <p
            className="hero-rise text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-gold/90 font-medium mb-6"
            style={{ letterSpacing: "0.02em", animationDelay: "0.5s" }}
          >
            HIGH-Q Pharmaceuticals
            <span className="mx-2 opacity-60">·</span>
            Vida Laboratories
          </p>
          <p
            className="hero-rise text-sm sm:text-base text-cream/75 font-light leading-relaxed max-w-lg mb-8"
            style={{ animationDelay: "0.65s" }}
          >
            Industrial leader, diplomat, and philanthropist — building bridges
            between industry, medicine, and nations across four continents.
          </p>
          <div className="hero-rise flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ animationDelay: "0.8s" }}>
            <a
              href={profilePdfUrl}
              download="Atif-Iqbal-Profile.pdf"
              className="btn-gold group inline-flex items-center justify-center gap-3 bg-gold text-noir px-8 sm:px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold"
            >
              Download Profile
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
          <div className="mt-12 flex items-center gap-3 opacity-70">
            <span
              className="text-[10px] uppercase tracking-[0.5em] text-cream/70"
              style={{ letterSpacing: "0.02em" }}
            >
              Legacy in Motion
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>
    </>
  );
}

function HeroDesktop() {
  return (
    <div className="relative w-full min-h-[100svh] flex items-center justify-center px-8 xl:px-12 pt-24 pb-16 overflow-hidden">
      {/* Faint background wordmark */}
      <div aria-hidden className="pointer-events-none select-none absolute -top-8 -left-6 opacity-[0.035]">
        <span
          className="block leading-none text-cream"
          style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: "clamp(12rem, 18vw, 22rem)", letterSpacing: "-0.04em" }}
        >
          EXCELLENCE
        </span>
      </div>

      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 w-[520px] h-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,162,76,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-12 gap-8 xl:gap-12 items-center">
        {/* Text column */}
        <div className="col-span-6 flex flex-col gap-8 pr-4 xl:pr-8">
          <div className="space-y-5">
            <div className="hero-rise flex items-center gap-4" style={{ animationDelay: "0.15s" }}>
              <div className="h-px w-12 bg-gold" />
              <span
                className="text-[10px] uppercase tracking-[0.4em] text-gold font-semibold"
                style={{ letterSpacing: "0.02em" }}
              >
                Group Chief Executive
              </span>
            </div>

            <h1 className="hero-rise leading-[0.85]" style={{ animationDelay: "0.3s" }}>
              <span
                className="hero-name-sweep block text-transparent bg-clip-text"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  fontSize: "clamp(4.5rem, 8vw, 8.5rem)",
                }}
              >
                Atif Iqbal
              </span>
            </h1>

          </div>

          <div className="hero-rise space-y-5 max-w-lg" style={{ animationDelay: "0.5s" }}>
            <p
              className="text-[11px] uppercase tracking-[0.32em] text-gold/90 font-medium"
              style={{ letterSpacing: "0.02em" }}
            >
              HIGH-Q Pharmaceuticals
              <span className="mx-3 opacity-60">·</span>
              Vida Laboratories
            </p>
            <p className="text-cream/70 leading-relaxed text-base xl:text-[17px] font-light border-l border-gold/25 pl-5">
              Industrial leader, diplomat, and philanthropist — building bridges between
              industry, medicine, and nations across four continents.
            </p>
          </div>

          <div className="hero-rise flex flex-wrap items-center gap-4 pt-2" style={{ animationDelay: "0.7s" }}>
            <a
              href={profilePdfUrl}
              download="Atif-Iqbal-Profile.pdf"
              className="btn-gold group inline-flex items-center gap-3 bg-gold text-noir px-9 py-4 text-[10px] uppercase tracking-[0.4em] font-bold"
            >
              Download Profile
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-y-0.5">
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" strokeLinecap="square" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-ghost-gold inline-flex items-center gap-3 border border-gold/40 text-cream px-9 py-4 text-[10px] uppercase tracking-[0.4em] font-bold"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Portrait column */}
        <div className="col-span-6 relative flex items-stretch justify-center h-[82svh] max-h-[860px] min-h-[620px]">
          {/* Vertical accent hairline */}
          <div
            aria-hidden
            className="absolute -left-2 top-1/2 -translate-y-1/2 w-px h-40 hidden xl:block"
            style={{ background: "linear-gradient(180deg, transparent, #c9a24c 50%, transparent)" }}
          />

          {/* Offset gold frame */}
          <div aria-hidden className="absolute inset-6 border border-gold/15 translate-x-4 translate-y-4 pointer-events-none" />

          {/* Portrait slider */}
          <HeroPortraitSlider />
        </div>

      </div>


      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  );
}

function HeroPortraitSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, 4200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="hero-image relative w-full h-full overflow-hidden shadow-cinema group bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: s.pos,
            opacity: i === active ? 1 : 0,
            zIndex: i === active ? 2 : 1,
            transition: "opacity 700ms ease-in-out",
          }}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}

      {/* Depth overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(15,17,20,0) 40%, rgba(15,17,20,0.85) 100%)" }}
      />

      {/* Corner filaments */}
      <span aria-hidden className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/60" />
      <span aria-hidden className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/60" />

      {/* Thumbnails */}
      <div className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show portrait ${i + 1}`}
            className={`group/thumb relative flex-1 h-14 overflow-hidden border transition-all duration-500 ${
              i === active
                ? "border-gold shadow-[0_0_0_1px_rgba(201,162,76,0.6)]"
                : "border-cream/15 opacity-60 hover:opacity-100 hover:border-gold/60"
            }`}
          >
            <img
              src={s.src}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: s.pos }}
              loading="lazy"
              decoding="async"
            />
            <span
              aria-hidden
              className={`absolute inset-0 transition-colors ${
                i === active ? "bg-noir/0" : "bg-noir/40 group-hover/thumb:bg-noir/10"
              }`}
            />
            {i === active && (
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-0.5 bg-gold"
                style={{ width: "100%" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-cream/80 font-semibold">
        <span className="text-gold">{String(active + 1).padStart(2, "0")}</span>
        <span className="w-4 h-px bg-gold/40" />
        <span>{String(heroSlides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}


function Hero() {
  return (
    <section id="top" className="relative w-full bg-noir flex flex-col">
      <div className="lg:hidden">
        <HeroMobile />
      </div>
      <div className="hidden lg:block">
        <HeroDesktop />
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
              <h3
                className="font-serif text-2xl sm:text-3xl leading-tight text-noir"
                style={{ background: "none", WebkitTextFillColor: "#0f1114", color: "#0f1114" }}
              >
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

function GallerySectionBlock({
  section,
  index,
  onOpen,
}: {
  section: GallerySection;
  index: number;
  onOpen: (item: GalleryItem) => void;
}) {
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
            className={`group relative overflow-hidden cinema-card cinema-card-hover cursor-zoom-in ${bentoSpanFor(section.items.length, i)}`}
            onClick={() => onOpen(g)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen(g);
              }
            }}
          >
            <img
              src={g.src}
              alt={g.label}
              loading="lazy"
              className={`absolute inset-0 w-full h-full ${g.contain ? "object-contain bg-noir-soft p-3" : "object-cover object-top"} grayscale-[35%] group-hover:grayscale-0 scale-[1.03] group-hover:scale-[1.06] transition-all duration-[1400ms]`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent pointer-events-none opacity-95 group-hover:opacity-80 transition-opacity duration-700" />
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

function Lightbox({ items, index, onClose, onPrev, onNext }: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-noir/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-gold border border-gold/30 hover:border-gold/70 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="square" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Previous"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-gold border border-gold/30 hover:border-gold/70 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 6l-6 6 6 6" strokeLinecap="square" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-cream/80 hover:text-gold border border-gold/30 hover:border-gold/70 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" strokeLinecap="square" />
        </svg>
      </button>
      <figure
        className="relative max-w-6xl max-h-full w-full flex flex-col items-center gap-4 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.label}
          className="max-h-[80svh] w-auto max-w-full object-contain shadow-2xl"
        />
        <figcaption className="text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{item.place}</p>
          <p className="font-serif italic text-lg sm:text-xl text-cream mt-1.5">{item.label}</p>
        </figcaption>
      </figure>
    </div>
  );
}

function Gallery() {
  const allItems = gallerySections.flatMap((s) => s.items);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItem = (item: GalleryItem) => {
    const idx = allItems.findIndex((it) => it.src === item.src);
    if (idx >= 0) setOpenIndex(idx);
  };
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
          <GallerySectionBlock key={s.id} section={s} index={i} onOpen={openItem} />
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          items={allItems}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((i) => (i === null ? i : (i - 1 + allItems.length) % allItems.length))}
          onNext={() => setOpenIndex((i) => (i === null ? i : (i + 1) % allItems.length))}
        />
      )}
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
