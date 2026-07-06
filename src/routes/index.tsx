import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/atif-portrait.png";
import atifDesk from "@/assets/atif-desk.png";
import galleryCeoSummit from "@/assets/gallery-ceo-summit.jpg";
import galleryDubai from "@/assets/gallery-dubai.jpg";
import galleryPresidential from "@/assets/gallery-presidential.jpg";
import galleryPhilippines from "@/assets/gallery-philippines.jpg";
import galleryDiplomatic from "@/assets/gallery-diplomatic.jpg";
import galleryCeoToday from "@/assets/gallery-ceo-today.jpg";

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
  { name: "PPMA (Pakistan Pharmaceuticals Manufacturers Association)", role: "Vice Chairman", year: "2021–2022" },
  { name: "Ziauddin University — Faculty of Pharmacy", role: "Member, Board of Faculty", year: "2024–2027" },
  { name: "Pakistan Council on Foreign Relations", role: "Member", year: "2023" },
  { name: "Diplomatic Business Club", role: "Platinum Member", year: "Lifetime" },
];

const affiliations = [
  "WBC — World Business Council",
  "CACCI — Confederation of Asia-Pacific Chambers",
  "SAARC — South Asian Association for Regional Cooperation",
  "PBBC — Pakistan Britain Business Council",
  "KCFR — Karachi Council on Foreign Relations",
  "ESU — English Speaking Union of Pakistan",
  "CEO Club — Executive Member",
  "Made in Pakistan Executive Club",
  "PBCF — Pakistan Business Club Forum, Patron in Chief",
  "KATI — Korangi Association of Trade & Industry",
  "Rotary Club — District Chair, Healthcare & Safety",
  "Karachi Golf Club",
];

const awards = [
  {
    year: "2025",
    title: "Top 50 Export Award",
    place: "8th Pakistan Pharma Summit & PESA Awards",
  },
  {
    year: "2025",
    title: "Global Leadership Excellence Award",
    place: "Global Image Award, Dubai — Middle East",
  },
  {
    year: "2025",
    title: "CEO Summit Award",
    place: "CEO Summit, Islamabad",
  },
  {
    year: "2025",
    title: "PBBC Certificate & MIP Award",
    place: "House of Lords, London",
  },
  {
    year: "2024",
    title: "Patron Award",
    place: "The Youth Parliament",
  },
  {
    year: "2023",
    title: "Export Award",
    place: "Presented by H.E. Former PM Shehbaz Sharif — 6th Pakistan Pharma Summit",
  },
];

const media = [
  { outlet: "CEO Today Magazine", note: "Cover feature — Paving the Way for Growth" },
  { outlet: "Pakistan Today", note: "EU pharmaceutical imports — commentary" },
  { outlet: "The Financial Daily", note: "RKSM Chairmanship coverage" },
  { outlet: "Television & Talk Shows", note: "Healthcare awareness programs" },
];

const gallery = [
  { src: galleryDubai, label: "Global Leadership Excellence Award — Global Image Award, Dubai, 2025" },
  { src: galleryPresidential, label: "Receiving a National Award — Pakistan" },
  { src: galleryCeoSummit, label: "CEO Summit Award — Islamabad, 2025" },
  { src: galleryPhilippines, label: "127th Philippine Independence Day — Diplomatic Reception, 2025" },
  { src: galleryDiplomatic, label: "Consular Reception — Diplomatic Engagement" },
  { src: galleryCeoToday, label: "CEO Today Magazine — Cover Feature" },
];

const stats = [
  { value: "30+", label: "Years in Industry" },
  { value: "40+", label: "Countries Travelled" },
  { value: "20+", label: "Council Roles" },
  { value: "2007", label: "HIGH-Q Plant Established" },
];

function Nav() {
  const items = [
    ["about", "About"],
    ["memberships", "Councils"],
    ["awards", "Awards"],
    ["gallery", "Gallery"],
    ["contact", "Contact"],
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-deep/85 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 text-cream">
          <span className="font-serif text-2xl leading-none text-gold">AI</span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.28em] text-cream/70">
            Atif Iqbal
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {items.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-xs uppercase tracking-[0.24em] text-cream/70 hover:text-gold transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Atif_Iqbal_CV.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-navy-deep bg-gold px-4 py-2 hover:bg-gold-soft transition-colors"
        >
          Download CV
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" strokeLinecap="square" />
          </svg>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={portrait}
        alt="Portrait of Atif Iqbal, Group CEO of HIGH-Q Pharmaceuticals"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-[65%_center]"
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(11,15,32,0.92) 0%, rgba(11,15,32,0.78) 40%, rgba(11,15,32,0.35) 65%, rgba(11,15,32,0.05) 100%)",
        }}
      />
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
        <div className="max-w-xl text-cream">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" />
            Group CEO — HIGH-Q Pharmaceuticals
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Atif <span className="italic text-gold">Iqbal</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/85 leading-relaxed font-light">
            Industrial leader, diplomat, and philanthropist. Steward of the HIGH-Q Group
            and Vida Laboratories — building bridges between industry, medicine, and nations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/Atif_Iqbal_CV.pdf"
              download
              className="group inline-flex items-center gap-3 bg-gold text-navy-deep px-6 py-3 text-xs uppercase tracking-[0.28em] hover:bg-gold-soft transition-colors"
            >
              Download CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="transition-transform group-hover:translate-y-0.5">
                <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" strokeLinecap="square" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-gold/60 text-cream px-6 py-3 text-xs uppercase tracking-[0.28em] hover:bg-gold/10 transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="mt-12 text-[10px] uppercase tracking-[0.4em] text-gold/80">
            Est. 1994
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-[10px] uppercase tracking-[0.4em]">
        Scroll
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-navy-deep text-cream border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-serif text-5xl md:text-6xl text-gold leading-none">{s.value}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.28em] text-cream/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <div>
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" />
            Biography
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-navy-deep">
            A life built at the intersection of <em className="text-gold not-italic">industry</em>,
            diplomacy, and service.
          </h2>
          <div className="mt-10 relative">
            <div className="absolute -inset-3 border border-gold/40" aria-hidden />
            <img
              src={atifDesk}
              alt="Atif Iqbal at the HIGH-Q Group office"
              width={1500}
              height={1000}
              loading="lazy"
              className="relative w-full h-[340px] object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 text-navy/90 leading-relaxed text-lg">
          <p>
            Born in 1972 with an entrepreneurial spirit, Mr. Atif Iqbal began his career in 1994
            at the root level of the family business, HIGH-Q International — an import-based
            pharmaceutical company founded under the chairmanship of his father, Mr. Iqbal Ahmed.
          </p>
          <p>
            He completed his MBA while gaining hands-on business experience. In 2007, the
            HIGH-Q Pharmaceuticals manufacturing plant was established. In 2015, Vida Laboratories —
            a nutraceutical sister concern — was built.
          </p>
          <p>
            An exceptional communicator and industrial management specialist, he is IBA-certified in
            cGMP and PSQCA-certified in environmental safety. He frequently appears as Guest of
            Honor and guest speaker at leading universities of pharmacy, engineering, medicine,
            and nursing in Karachi.
          </p>
          <p>
            A champion of research, technology, and artificial intelligence, he launched the
            HIGH-Q Simulation Centre — a one-of-a-kind facility enabling surgeons to practice
            procedures and reduce human error in real-life scenarios.
          </p>
          <div className="pt-6 border-t border-navy/10 grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="eyebrow mb-3">Academics</p>
              <ul className="space-y-1.5 text-navy/80">
                <li>MBA Marketing — Newport Institute University, 1999</li>
                <li>B.Com — DHA Degree College for Men, 1996</li>
                <li>HSSC Pre-Engineering — PAF College Masroor, 1992</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Certifications</p>
              <ul className="space-y-1.5 text-navy/80">
                <li>IBA — cGMP Certified</li>
                <li>PSQCA — Environmental Safety</li>
                <li>Factory Management</li>
                <li>Managerial Communication Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Memberships() {
  return (
    <section id="memberships" className="py-28 bg-navy-deep text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" />
            Councils & Memberships
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Serving on councils that shape trade, health, and diplomacy across
            <em className="text-gold not-italic"> four continents.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-1">
          {memberships.map((m) => (
            <div
              key={m.name}
              className="flex items-baseline justify-between gap-4 py-5 border-b border-gold/15"
            >
              <div>
                <p className="font-serif text-xl text-cream">{m.name}</p>
                <p className="text-xs uppercase tracking-[0.24em] text-gold mt-1">{m.role}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-cream/50 shrink-0">
                {m.year}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow mb-6">Also Affiliated With</p>
          <div className="flex flex-wrap gap-2">
            {affiliations.map((a) => (
              <span
                key={a}
                className="text-xs tracking-wide border border-gold/25 text-cream/80 px-4 py-2"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" />
            Awards & Media
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-navy-deep">
            Recognized on the world stage — from the House of Lords to the
            <em className="text-gold not-italic"> Middle East.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-16">
          <div>
            <ol className="relative border-l border-gold/40 pl-8 space-y-10">
              {awards.map((a) => (
                <li key={a.title} className="relative">
                  <span className="absolute -left-[37px] top-2 w-3 h-3 bg-gold rotate-45" />
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">{a.year}</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-navy-deep mt-2">
                    {a.title}
                  </h3>
                  <p className="text-navy/70 mt-1">{a.place}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-navy-deep text-cream p-10">
            <p className="eyebrow mb-6">Featured In</p>
            <ul className="space-y-6">
              {media.map((m) => (
                <li key={m.outlet} className="border-b border-gold/20 pb-5 last:border-0">
                  <p className="font-serif text-xl text-gold">{m.outlet}</p>
                  <p className="text-sm text-cream/70 mt-1">{m.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-navy-deep text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" />
            Moments
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            A visual record of engagements, awards, and
            <em className="text-gold not-italic"> diplomatic milestones.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {gallery.map((g, i) => {
            const wide = i === 0 || i === gallery.length - 1;
            return (
              <figure
                key={g.label}
                className={`group relative overflow-hidden border border-gold/20 ${
                  wide ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className={`w-full transition-transform duration-[1200ms] group-hover:scale-105 ${
                    g.label.startsWith("CEO Today")
                      ? "h-[560px] object-contain bg-navy-deep"
                      : `object-cover object-top ${wide ? "h-[460px]" : "h-[340px]"}`
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-gold">Portfolio</p>
                  <p className="font-serif text-xl text-cream mt-1">{g.label}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <div>
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" />
            Contact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-navy-deep">
            For collaborations, appearances, and correspondence.
          </h2>
          <div className="mt-10 space-y-6 text-navy/90">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-gold mb-1">Email</p>
              <a href="mailto:atif@highq.pk" className="font-serif text-2xl hover:text-gold">
                atif@highq.pk
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-gold mb-1">Direct</p>
              <a href="tel:+923212595007" className="font-serif text-2xl hover:text-gold">
                +92 321 2595007
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-gold mb-1">Website</p>
              <a
                href="https://www.highq.pk"
                target="_blank"
                rel="noreferrer"
                className="font-serif text-2xl hover:text-gold"
              >
                www.highq.pk
              </a>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              label: "Corporate Office",
              body: "B-64, KDA Scheme-1, Karsaz Road, Karachi, Pakistan.",
            },
            {
              label: "Manufacturing Plant",
              body: "Plot 224 & 225/1, Sector 23, Korangi Industrial Area, Karachi.",
            },
            {
              label: "Residence",
              body: "B-42, KDA Scheme-1, Karachi, Pakistan.",
            },
            {
              label: "Group",
              body: "HIGH-Q Pharmaceuticals · Vida Laboratories · HIGH-Q Simulation Centre.",
            },
          ].map((c) => (
            <div key={c.label} className="border border-navy/15 p-8 bg-card">
              <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">{c.label}</p>
              <p className="text-navy/80 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-cream border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl text-gold leading-none">AI</span>
          <span className="text-xs uppercase tracking-[0.28em] text-cream/60">
            Atif Iqbal · Group CEO
          </span>
        </div>
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} Atif Iqbal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Profile() {
  return (
    <div className="min-h-screen bg-cream text-navy-deep">
      <Nav />
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
