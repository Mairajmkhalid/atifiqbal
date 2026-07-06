import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroAtifAsset from "@/assets/hero-atif.png.asset.json";
const portrait = heroAtifAsset.url;
import atifDesk from "@/assets/atif-desk.png";
import globalLeadershipDubaiAsset from "@/assets/global-leadership-dubai.png.asset.json";
const globalLeadershipDubai = globalLeadershipDubaiAsset.url;

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

const media = [
  { outlet: "CEO Today Magazine", note: "Cover feature — Paving the Way for Growth" },
  { outlet: "Pakistan Today", note: "EU pharmaceutical imports — commentary" },
  { outlet: "The Financial Daily", note: "RKSM Chairmanship coverage" },
  { outlet: "Television & Talk Shows", note: "Healthcare awareness programs" },
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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-noir/70 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-serif italic text-2xl leading-none text-gold">AI</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.4em] text-cream/60">
            Atif Iqbal
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {items.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-[10px] uppercase tracking-[0.4em] text-cream/60 hover:text-gold transition-colors duration-500"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Atif_Iqbal_CV.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-noir bg-gold px-5 py-2.5 hover:bg-gold-soft transition-colors duration-500"
        >
          Download CV
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" strokeLinecap="square" />
          </svg>
        </a>
      </div>
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
      className="relative min-h-screen flex items-start justify-start overflow-hidden px-6 lg:px-24 pt-32 lg:pt-40"
    >
      {/* Background portrait — cinematic, right-aligned, feathered */}
      <div className="absolute inset-0 bg-noir" aria-hidden />
      <img
        src={portrait}
        alt="Portrait of Atif Iqbal, Group CEO of HIGH-Q Pharmaceuticals"
        className="hero-image absolute inset-0 w-full h-full object-cover object-right opacity-90"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 90% at 75% 50%, #000 30%, rgba(0,0,0,0.55) 60%, transparent 92%)",
          maskImage:
            "radial-gradient(ellipse 80% 90% at 75% 50%, #000 30%, rgba(0,0,0,0.55) 60%, transparent 92%)",
        }}
      />
      {/* Gold spotlight */}
      <div
        className="absolute inset-0 gold-pulse pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 60%)",
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(13,13,13,0.7) 0%, transparent 25%, transparent 70%, rgba(13,13,13,0.95) 100%)",
        }}
      />

      {/* Centered cinematic title */}
      <div className="relative z-10 text-center max-w-4xl">
        <p className="eyebrow mb-8 hero-rise" style={{ animationDelay: "0.2s" }}>
          Group CEO · HIGH-Q Pharmaceuticals
        </p>
        <h1
          className="font-serif font-light text-white leading-[0.9] text-6xl md:text-8xl lg:text-[10rem] mb-8 hero-rise"
          style={{ animationDelay: "0.45s" }}
        >
          Atif <span className="italic text-gold">Iqbal</span>
        </h1>
        <p
          className="mx-auto max-w-2xl text-base md:text-lg text-cream/70 font-light leading-relaxed hero-rise"
          style={{ animationDelay: "0.7s" }}
        >
          Industrial leader, diplomat, and philanthropist. Steward of the HIGH-Q Group and
          Vida Laboratories — building bridges between industry, medicine, and nations.
        </p>
        <div
          className="mt-12 flex flex-wrap justify-center gap-4 hero-rise"
          style={{ animationDelay: "0.95s" }}
        >
          <a
            href="/Atif_Iqbal_CV.pdf"
            download
            className="group inline-flex items-center gap-3 bg-gold text-noir px-8 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-gold-soft transition-colors duration-500"
          >
            Download CV
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-y-0.5">
              <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" strokeLinecap="square" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-gold/50 text-cream px-8 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-gold/10 transition-colors duration-500"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Cinematic hairline */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-gold to-transparent gold-drop" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-cream/40">Scroll</span>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-gold/15 bg-noir">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-14 px-6 text-center md:text-left ${i > 0 ? "md:border-l border-gold/15" : ""}`}
          >
            <p className="font-serif text-5xl md:text-6xl text-gold leading-none">{s.value}</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-cream/50">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-noir">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" /> Biography
          </p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-cream">
            A life built at the intersection of <em className="text-gold not-italic">industry</em>,
            diplomacy, and service.
          </h2>
        </div>

        {/* Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Portrait tile */}
          <div className="md:col-span-5 md:row-span-2 cinema-card overflow-hidden group">
            <div className="relative h-full min-h-[520px]">
              <img
                src={atifDesk}
                alt="Atif Iqbal at the HIGH-Q Group office"
                width={1500}
                height={1000}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-noir via-noir/70 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Portrait</p>
                <p className="font-serif italic text-2xl text-cream mt-2">At the HIGH-Q office</p>
              </div>
            </div>
          </div>

          {/* Biography prose */}
          <div className="md:col-span-7 cinema-card p-10 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">The Vision</p>
            <div className="space-y-5 text-cream/75 leading-relaxed text-[17px] font-light">
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
          <div className="md:col-span-4 cinema-card p-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Academics</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>MBA Marketing — Newport Institute University, 1999</li>
              <li>B.Com — DHA Degree College for Men, 1996</li>
              <li>HSSC Pre-Engineering — PAF College Masroor, 1992</li>
            </ul>
          </div>

          {/* Certifications tile */}
          <div className="md:col-span-3 cinema-card p-8">
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
    <section id="memberships" className="py-32 bg-noir">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" /> Councils & Memberships
          </p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-cream">
            Serving on councils that shape trade, health, and diplomacy across
            <em className="text-gold not-italic"> four continents.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured — Gold slab */}
          <div className="md:col-span-4 bg-gold text-noir p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-noir/60 mb-4">Chairman · 2026</p>
              <h3 className="font-serif text-3xl leading-tight">
                Pakistan – Rwanda &amp; Pakistan – Myanmar Business Councils
              </h3>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-noir/70 mt-6">
              Founding chairmanships
            </p>
          </div>

          {/* Council list */}
          <div className="md:col-span-8 cinema-card p-2">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {memberships.slice(2).map((m, i) => (
                <div
                  key={m.name}
                  className={`p-6 ${i % 2 === 0 ? "md:border-r border-gold/10" : ""} border-b border-gold/10 last:border-b-0 hover:bg-gold/5 transition-colors duration-500`}
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{m.role}</p>
                  <p className="font-serif text-lg text-cream mt-2 leading-snug">{m.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40 mt-2">{m.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Affiliations chips */}
          <div className="md:col-span-12 cinema-card p-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Also Affiliated With</p>
            <div className="flex flex-wrap gap-2">
              {affiliations.map((a) => (
                <span
                  key={a}
                  className="text-xs tracking-wide border border-gold/25 text-cream/70 px-4 py-2 hover:border-gold hover:text-gold transition-colors duration-500"
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
  const [featured, ...rest] = awards;
  return (
    <section id="awards" className="py-32 bg-noir">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" /> Awards & Media
          </p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-cream">
            Recognised on the world stage — from the House of Lords to the
            <em className="text-gold not-italic"> Middle East.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Featured award — spotlight tile */}
          <div className="md:col-span-6 cinema-card p-10 md:p-14 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none gold-pulse"
              style={{ background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 65%)" }}
              aria-hidden
            />
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">{featured.year} · Featured</p>
              <h3 className="font-serif text-4xl md:text-5xl text-cream leading-tight">{featured.title}</h3>
              <p className="mt-6 text-cream/60 text-sm">{featured.place}</p>
            </div>
            <div className="relative text-gold mt-8">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 3l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>

          {/* Media strip */}
          <div className="md:col-span-6 cinema-card p-10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8">Featured In</p>
            <ul className="space-y-5">
              {media.map((m) => (
                <li key={m.outlet} className="flex items-baseline justify-between gap-6 border-b border-gold/10 pb-4 last:border-0">
                  <div>
                    <p className="font-serif italic text-xl text-cream">{m.outlet}</p>
                    <p className="text-xs text-cream/50 mt-1">{m.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards list — bento cards */}
          {rest.map((a) => (
            <div
              key={a.title}
              className="md:col-span-3 cinema-card p-8 hover:border-gold/60 transition-colors duration-500"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{a.year}</p>
              <h3 className="font-serif text-xl text-cream mt-3 leading-tight">{a.title}</h3>
              <p className="text-xs text-cream/50 mt-3 leading-relaxed">{a.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
  // Editorial bento layout: alternate hero-sized and standard tiles based on total count
  if (count <= 3) return "md:col-span-4 min-h-[360px]";
  if (count === 4) return "md:col-span-6 min-h-[380px]";
  // 5+: first tile large, then a rhythmic mix
  const pattern = [
    "md:col-span-8 min-h-[520px]",
    "md:col-span-4 min-h-[520px]",
    "md:col-span-4 min-h-[320px]",
    "md:col-span-4 min-h-[320px]",
    "md:col-span-4 min-h-[320px]",
    "md:col-span-6 min-h-[360px]",
    "md:col-span-6 min-h-[360px]",
    "md:col-span-4 min-h-[320px]",
    "md:col-span-4 min-h-[320px]",
    "md:col-span-4 min-h-[320px]",
  ];
  return pattern[index % pattern.length];
}

function GallerySectionBlock({ section, index }: { section: GallerySection; index: number }) {
  return (
    <div id={section.id} className={index === 0 ? "" : "mt-24"}>
      <div className="max-w-3xl mb-12">
        <p className="eyebrow mb-6">
          <span className="gold-rule mr-4" /> {section.eyebrow}
        </p>
        <h3 className="font-serif text-3xl md:text-5xl leading-[1.1] text-cream">{section.title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {section.items.map((g, i) => (
          <figure
            key={g.src}
            className={`group relative overflow-hidden cinema-card ${bentoSpanFor(section.items.length, i)}`}
          >
            <img
              src={g.src}
              alt={g.label}
              loading="lazy"
              className={`absolute inset-0 w-full h-full ${g.contain ? "object-contain bg-noir-soft p-3" : "object-cover object-top"} grayscale-[35%] group-hover:grayscale-0 scale-[1.03] group-hover:scale-100 transition-all duration-[1400ms]`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent pointer-events-none" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{g.place}</p>
              <p className="font-serif italic text-lg md:text-xl text-cream mt-1.5 leading-tight">{g.label}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-noir">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow mb-6">
            <span className="gold-rule mr-4" /> The Archive
          </p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-cream">
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
    <section id="contact" className="py-32 bg-noir">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="cinema-card p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }}
            aria-hidden
          />
          <div className="relative grid md:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-6">
                <span className="gold-rule mr-4" /> Contact
              </p>
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-cream italic">
                Connect for<br />strategic dialogue.
              </h2>
              <p className="mt-8 text-cream/60 leading-relaxed max-w-md">
                For collaborations, board inquiries, speaking engagements, and diplomatic
                correspondence — reach out through the official channels below.
              </p>

              <div className="mt-12 space-y-6">
                {[
                  { label: "Email", value: "atif@highq.pk", href: "mailto:atif@highq.pk" },
                  { label: "Direct", value: "+92 321 2595007", href: "tel:+923212595007" },
                  { label: "Website", value: "www.highq.pk", href: "https://www.highq.pk" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-baseline gap-4 group border-b border-gold/15 pb-4"
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gold w-24 shrink-0">{c.label}</span>
                    <span className="flex-1 h-px bg-gold/20" />
                    <span className="font-serif text-xl text-cream group-hover:text-gold transition-colors duration-500">
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
                <div key={c.label} className="border border-gold/15 p-6 hover:border-gold/50 transition-colors duration-500">
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
    <footer className="border-t border-gold/10 bg-noir">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-2xl text-gold leading-none">AI</span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-cream/50">
            Atif Iqbal · Group CEO
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.4em] text-cream/40">
          © {new Date().getFullYear()} · Excellence in Leadership
        </p>
      </div>
    </footer>
  );
}

function Profile() {
  return (
    <div className="min-h-screen bg-noir text-cream">
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
