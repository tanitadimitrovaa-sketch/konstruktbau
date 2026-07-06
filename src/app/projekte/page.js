"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const logoBlue = "#42B4FF";
const email = "info@konstruktbaugmbh.ch";
const phoneDisplay = "+41 78 880 00 26";
const phoneHref = "tel:+41788800026";

const stats = [
  { value: "11+", label: "Jahre Erfahrung" },
  { value: "6+", label: "Jahre in der Schweiz" },
  { value: "100%", label: "Fokus auf Qualität" },
  { value: "4", label: "Leistungsbereiche" },
];

const upcoming = [
  "Trockenbau",
  "Sanitärinstallationen",
  "Deckensysteme",
  "Spachtelarbeiten",
];

export default function Projekte() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-100">
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 h-28 md:h-32 top-0">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <Link href="/" className="relative flex items-center h-full group">
            <div className="relative w-40 md:w-56 h-full flex items-center overflow-hidden">
              <img
                src="/logo.png"
                alt="KonstruktBau Logo"
                className="w-full h-auto max-h-[100px] md:max-h-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-semibold text-slate-700">
            <Link href="/">Home</Link>
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/services">Dienstleistungen</Link>
            <Link href="/projekte" style={{ color: logoBlue }}>
              Projekte
            </Link>
            <Link href="/karriere" style={{ color: "inherit" }}>
    Karriere
  </Link>
            <Link
              href="/kontakt"
              className="text-white px-8 py-3 rounded-sm transition-all text-xs shadow-md hover:bg-slate-800"
              style={{ backgroundColor: "#0f172a" }}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14"
          >
            <div className="lg:col-span-7">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-300 mb-6">
                Projekte
              </p>

              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Referenzen <br />
                <span style={{ color: logoBlue }}>in Vorbereitung.</span>
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                Unsere Projektgalerie wird aktuell aufgebaut. Bald zeigen wir
                hier ausgewählte Arbeiten aus Trockenbau, Sanitärbereichen,
                Deckensystemen und Oberflächen.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-white/10 mb-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0"
              >
                <p className="text-4xl md:text-5xl font-black tracking-tighter mb-3">
                  {stat.value}
                </p>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 border border-white/10 bg-white/[0.025] p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300 mb-6">
                Demnächst
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-6">
                Einblicke in unsere Arbeit.
              </h2>

              <p className="text-slate-400 leading-relaxed">
                Sobald die finalen Projektdaten und Bilder vorbereitet sind,
                wird diese Seite mit echten Referenzen ergänzt.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {upcoming.map((item, index) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/[0.025] p-6 hover:bg-white/[0.04] transition-all"
                >
                  <p className="text-sm font-black text-blue-300 mb-8">
                    0{index + 1}
                  </p>

                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                    {item}
                  </h3>

                  <p className="text-slate-500 text-sm uppercase tracking-[0.2em] font-bold">
                    Referenz folgt
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto border border-white/10 bg-white/[0.025] px-8 md:px-16 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-300 mb-5">
              Projektanfrage
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Möchten Sie Ihr <br />
              <span style={{ color: logoBlue }}>Projekt besprechen?</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Kontaktieren Sie uns direkt. Wir beraten Sie persönlich und
              besprechen die nächsten Schritte.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href={phoneHref}
              className="bg-white text-slate-950 px-8 py-5 text-center text-sm font-black uppercase tracking-[0.25em] hover:bg-slate-100 transition-all"
            >
              {phoneDisplay}
            </a>

            <Link
              href="/kontakt"
              className="border border-white/20 px-8 py-5 text-center text-sm font-black uppercase tracking-[0.25em] hover:bg-white/10 transition-all"
            >
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 px-6 py-6 text-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-5">
            <img
              src="/logo.png"
              alt="KonstruktBau Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
              © 2026 KonstruktBau GmbH
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 text-sm font-semibold text-slate-500">
            <a href={phoneHref} className="hover:text-slate-950 transition-colors">
              {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="hover:text-slate-950 transition-colors">
              {email}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}