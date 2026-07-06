"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const logoBlue = "#42B4FF";
const email = "info@konstruktbaugmbh.ch";
const phoneDisplay = "+41 78 880 00 26";
const phoneHref = "tel:+41788800026";

const tasks = [
  "Trockenbauarbeiten",
  "Deckenverkleidungen",
  "Spachtelarbeiten",
  "Trägerverkleiden",
  "Arbeiten nach Plan",
];

const profile = [
  "Mehrjährige Berufserfahrung im Trockenbau",
  "Gute Deutschkenntnisse",
  "Selbstständige Arbeitsweise",
  "Zuverlässigkeit und Pünktlichkeit",
  "Teamfähigkeit",
];

const offers = [
  "Gute Verdienstmöglichkeiten",
  "Kollegiales Arbeitsklima",
  "Langfristige Zusammenarbeit",
  "Professionelle Projekte",
  "Moderne Arbeitsmittel",
];

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 items-start text-slate-300">
      <span
        className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
        style={{ backgroundColor: logoBlue }}
      />
      <span className="text-sm md:text-base leading-relaxed">{children}</span>
    </li>
  );
}

export default function KarrierePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-950 font-sans selection:bg-blue-100">
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
            <Link href="/projekte">Projekte</Link>

            <Link href="/karriere" style={{ color: logoBlue }}>
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

                <Link href="/projekte" onClick={() => setMenuOpen(false)}>
                  Projekte
                </Link>

                <Link
                  href="/karriere"
                  onClick={() => setMenuOpen(false)}
                  style={{ color: logoBlue }}
                >
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

      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-5 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-5"
          >
            <p
              className="text-[10px] font-black uppercase tracking-[0.35em] md:tracking-[0.45em] mb-3"
              style={{ color: logoBlue }}
            >
              Karriere
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
              Trockenbaumonteur gesucht.
            </h1>

            <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light max-w-3xl mx-auto">
              Zur Verstärkung unseres Teams suchen wir einen erfahrenen
              Trockenbaumonteur für Projekte in der Schweiz. Wenn Sie
              selbstständig, zuverlässig und mit hohem Qualitätsanspruch
              arbeiten, freuen wir uns auf Ihre Bewerbung.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="bg-slate-950 text-white p-5 md:p-7 shadow-2xl rounded-sm"
          >
            <div className="border-b border-white/10 pb-5 mb-5">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] md:tracking-[0.35em] font-black text-blue-300 mb-3">
                  Offene Stelle
                </p>

                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-5 leading-tight">
                  Trockenbaumonteur (100%)
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10 text-slate-300 text-sm md:text-base">
                  <p>
                    <span className="text-white font-bold">Standort:</span>{" "}
                    Schweiz
                  </p>
                  <p>
                    <span className="text-white font-bold">Eintritt:</span>{" "}
                    Nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base md:text-lg font-black uppercase tracking-tight mb-3">
                  Ihre Aufgaben
                </h3>
                <ul className="space-y-2">
                  {tasks.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-black uppercase tracking-tight mb-3">
                  Ihr Profil
                </h3>
                <ul className="space-y-2">
                  {profile.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <h3 className="text-base md:text-lg font-black uppercase tracking-tight mb-3">
                Wir bieten
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {offers.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`mailto:${email}?subject=Bewerbung%20als%20Trockenbaumonteur%20bei%20KonstruktBau`}
                  className="w-full sm:w-auto bg-white text-slate-950 px-5 md:px-7 py-3.5 text-center text-xs font-black uppercase tracking-[0.16em] md:tracking-[0.22em] hover:bg-slate-100 transition-all"
                >
                  Lebenslauf senden
                </a>

                <a
                  href={phoneHref}
                  className="w-full sm:w-auto border border-white/20 px-5 md:px-7 py-3.5 text-center text-xs font-black uppercase tracking-[0.16em] md:tracking-[0.22em] hover:bg-white/10 transition-all"
                >
                  {phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-100 px-5 md:px-6 py-8 md:py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 md:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <img
              src="/logo.png"
              alt="KonstruktBau Logo"
              className="h-11 md:h-12 w-auto object-contain"
            />

            <p className="text-[10px] uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-slate-400">
              © 2026 KonstruktBau GmbH
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-7 text-xs md:text-sm font-semibold text-slate-500 max-w-full">
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={`mailto:${email}`} className="break-all text-center">
              {email}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}