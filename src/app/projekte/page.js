"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const logoBlue = "#42B4FF";
const email = "info@konstruktbaugmbh.ch";
const phoneDisplay = "+41 78 880 00 26";
const phoneHref = "tel:+41788800026";

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "10+", label: "Jahre in der Schweiz" },
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-100">
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 h-24 md:h-32 top-0">
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-full flex justify-between items-center">
          <Link href="/" className="relative flex items-center h-full group">
            <div className="relative w-36 md:w-56 h-full flex items-center overflow-hidden">
              <img
                src="/logo.png"
                alt="KonstruktBau Logo"
                className="w-full h-auto max-h-[90px] md:max-h-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
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

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden w-11 h-11 flex items-center justify-center border border-slate-200 text-slate-950 text-2xl font-light"
            aria-label="Menü öffnen"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-slate-100 px-6 py-6 shadow-xl"
            >
              <div className="flex flex-col gap-5 text-sm uppercase tracking-[0.25em] font-black text-slate-800">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>

                <Link href="/ueber-uns" onClick={() => setMenuOpen(false)}>
                  Über uns
                </Link>

                <Link href="/services" onClick={() => setMenuOpen(false)}>
                  Dienstleistungen
                </Link>

                <Link
                  href="/projekte"
                  onClick={() => setMenuOpen(false)}
                  style={{ color: logoBlue }}
                >
                  Projekte
                </Link>

                <Link href="/karriere" onClick={() => setMenuOpen(false)}>
                  Karriere
                </Link>

                <Link
                  href="/kontakt"
                  onClick={() => setMenuOpen(false)}
                  className="bg-slate-950 text-white px-6 py-4 text-center mt-2"
                >
                  Kontakt
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end mb-10 md:mb-14"
          >
            <div className="lg:col-span-7">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] md:tracking-[0.4em] text-blue-300 mb-4 md:mb-6">
                Projekte
              </p>

              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8">
                Referenzen <br />
                <span style={{ color: logoBlue }}>in Vorbereitung.</span>
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="text-base md:text-xl text-slate-300 leading-relaxed font-light">
                Unsere Projektgalerie wird aktuell aufgebaut. Bald zeigen wir
                hier ausgewählte Arbeiten aus Trockenbau, Sanitärbereichen,
                Deckensystemen und Oberflächen.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 border border-white/10 mb-10 md:mb-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 md:p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0"
              >
                <p className="text-4xl md:text-5xl font-black tracking-tighter mb-3">
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] md:tracking-[0.25em] text-blue-300 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
            <div className="lg:col-span-5 border border-white/10 bg-white/[0.025] p-5 md:p-8">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.35em] text-blue-300 mb-5 md:mb-6">
                Demnächst
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-5 md:mb-6">
                Einblicke in unsere Arbeit.
              </h2>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                Sobald die finalen Projektdaten und Bilder vorbereitet sind,
                wird diese Seite mit echten Referenzen ergänzt.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {upcoming.map((item, index) => (
                <div
                  key={item}
                  className="border border-white/10 bg-white/[0.025] p-5 md:p-6 hover:bg-white/[0.04] transition-all"
                >
                  <p className="text-xs md:text-sm font-black text-blue-300 mb-5 md:mb-8">
                    0{index + 1}
                  </p>

                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 md:mb-4 leading-tight break-words">
                    {item}
                  </h3>

                  <p className="text-slate-500 text-xs md:text-sm uppercase tracking-[0.18em] md:tracking-[0.2em] font-bold">
                    Referenz folgt
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-6 pb-16 md:pb-28">
        <div className="max-w-7xl mx-auto border border-white/10 bg-white/[0.025] px-5 md:px-16 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] md:tracking-[0.4em] text-blue-300 mb-4 md:mb-5">
              Projektanfrage
            </p>

            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none mb-5 md:mb-6">
              Möchten Sie Ihr <br />
              <span style={{ color: logoBlue }}>Projekt besprechen?</span>
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              Kontaktieren Sie uns direkt. Wir beraten Sie persönlich und
              besprechen die nächsten Schritte.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4 min-w-0">
            <a
              href={phoneHref}
              className="w-full bg-white text-slate-950 px-5 md:px-8 py-4 md:py-5 text-center text-xs md:text-sm font-black uppercase tracking-[0.16em] md:tracking-[0.25em] hover:bg-slate-100 transition-all"
            >
              {phoneDisplay}
            </a>

            <Link
              href="/kontakt"
              className="w-full border border-white/20 px-5 md:px-8 py-4 md:py-5 text-center text-xs md:text-sm font-black uppercase tracking-[0.16em] md:tracking-[0.25em] hover:bg-white/10 transition-all"
            >
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 px-5 md:px-6 py-8 md:py-6 text-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 md:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 text-center md:text-left">
            <img
              src="/logo.png"
              alt="KonstruktBau Logo"
              className="h-11 md:h-12 w-auto object-contain"
            />
            <p className="text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-slate-400">
              © 2026 KonstruktBau GmbH
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-xs md:text-sm font-semibold text-slate-500 max-w-full">
            <a href={phoneHref} className="hover:text-slate-950 transition-colors">
              {phoneDisplay}
            </a>
            <a
              href={`mailto:${email}`}
              className="hover:text-slate-950 transition-colors break-all text-center"
            >
              {email}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}