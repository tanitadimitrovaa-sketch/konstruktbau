"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const logoBlue = "#42B4FF";
const email = "info@konstruktbaugmbh.ch";
const phoneDisplay = "+41 78 880 00 26";
const phoneHref = "tel:+41788800026";

const stats = [
  { value: "11+", label: "Jahre Erfahrung", text: "im Innenausbau" },
  { value: "6+", label: "Jahre Schweiz", text: "mit Schweizer Qualitätsanspruch" },
  { value: "2", label: "Gründer", text: "Plamen Buyukliev & Ignat Techev" },
];

const values = [
  "Saubere Ausführung",
  "Klare Kommunikation",
  "Verlässliche Planung",
  "Präzision bis ins Detail",
];

export default function UeberUns() {
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
            <Link href="/" style={{ color: "inherit" }}>
              Home
            </Link>

            <Link href="/ueber-uns" style={{ color: logoBlue }}>
              Über uns
            </Link>

            <Link href="/services" style={{ color: "inherit" }}>
              Dienstleistungen
            </Link>

            <Link href="/projekte" style={{ color: "inherit" }}>
              Projekte
            </Link>

            <Link href="/karriere" style={{ color: "inherit" }}>
              Karriere
            </Link>

            <Link
              href="/kontakt"
              className="text-white px-8 py-3 rounded-sm text-xs shadow-md"
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

                <Link
                  href="/ueber-uns"
                  onClick={() => setMenuOpen(false)}
                  style={{ color: logoBlue }}
                >
                  Über uns
                </Link>

                <Link href="/services" onClick={() => setMenuOpen(false)}>
                  Dienstleistungen
                </Link>

                <Link href="/projekte" onClick={() => setMenuOpen(false)}>
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
                Über KonstruktBau
              </p>

              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8">
                Handwerk mit <br />
                <span style={{ color: logoBlue }}>Verantwortung.</span>
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="text-base md:text-xl text-slate-300 leading-relaxed font-light">
                KonstruktBau steht für präzisen Innenausbau, saubere Baustellen
                und zuverlässige Umsetzung — vom ersten Gespräch bis zur
                fertigen Oberfläche.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 mb-10 md:mb-14">
            <div className="lg:col-span-7 border border-white/10 bg-white/[0.025] p-5 md:p-8">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.35em] text-blue-300 mb-5 md:mb-6">
                Unsere Geschichte
              </p>

              <div className="space-y-4 md:space-y-5 text-slate-300 leading-relaxed font-light text-sm md:text-lg">
                <p>
                  Hinter der KonstruktBau GmbH stehen Plamen Buyukliev und
                  Ignat Techev — zwei Fachleute mit langjähriger Erfahrung im
                  Innenausbau und einem klaren Anspruch an Qualität.
                </p>

                <p>
                  Mit insgesamt über 11 Jahren Erfahrung in der Branche und mehr
                  als 6 Jahren aktiver Arbeit in der Schweiz kennen wir die
                  Anforderungen an saubere, präzise und termingerechte
                  Ausführung.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 border border-white/10 bg-white/[0.025] p-5 md:p-8">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.35em] text-blue-300 mb-5 md:mb-6">
                Unser Motto
              </p>

              <blockquote className="text-xl md:text-3xl font-black uppercase tracking-tight leading-tight text-white">
                Erst wenn jedes Detail stimmt, ist die Arbeit fertig.
              </blockquote>

              <div
                className="h-[2px] w-16 md:w-20 mt-6 md:mt-8"
                style={{ backgroundColor: logoBlue }}
              />
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.025] p-5 md:p-14 mb-10 md:mb-14">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.35em] text-blue-300 mb-5 md:mb-6">
              Geschäftsführung
            </p>

            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none mb-5 md:mb-6">
              Plamen <br />
              <span style={{ color: logoBlue }}>Buyukliev</span>
            </h2>

            <p className="text-sm md:text-xl font-black uppercase tracking-tight text-white mb-6 md:mb-8 leading-relaxed">
              Geschäftsführer & Leitender Trockenbau-Spezialist
            </p>

            <div className="max-w-5xl space-y-5 md:space-y-6">
              <p className="text-slate-300 leading-relaxed text-sm md:text-lg">
                Plamen Buyukliev verbindet handwerkliche Erfahrung mit
                organisatorischer Verantwortung. Als Geschäftsführer und
                leitender Spezialist im Trockenbau steht er für präzise
                Ausführung, technisches Verständnis und einen klaren Anspruch
                an Qualität auf jeder Baustelle.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm md:text-lg">
                Mit strukturiertem Arbeiten, sauberer Planung und persönlichem
                Einsatz begleitet er Projekte vom ersten Schritt bis zur finalen
                Ausführung. Dabei stehen Qualität, Termintreue und eine
                professionelle Baustellenorganisation immer im Mittelpunkt.
              </p>
            </div>

            <div
              className="mt-8 md:mt-12 border-l-2 pl-5 md:pl-8"
              style={{ borderColor: logoBlue }}
            >
              <p className="text-xl md:text-4xl font-black uppercase tracking-tight leading-tight text-white">
                Qualität entsteht nicht am Ende eines Projekts —
                <br />
                sie entsteht bei jedem einzelnen Arbeitsschritt.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 mb-10 md:mb-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 md:p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0"
              >
                <p className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.22em] md:tracking-[0.25em] text-blue-300 mb-3 leading-relaxed">
                  {stat.label}
                </p>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
            <div className="lg:col-span-5 border border-white/10 bg-white/[0.025] p-5 md:p-8">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.35em] text-blue-300 mb-5 md:mb-6">
                Das Team
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-5 md:mb-6">
                Ein starkes Team. <br />
                Eine klare Linie.
              </h2>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                Unsere Stärke liegt nicht nur im Handwerk, sondern auch in der
                Zusammenarbeit. Ein eingespieltes Team arbeitet effizienter,
                sauberer und mit mehr Verantwortung für jedes Detail.
              </p>
            </div>

            <div className="lg:col-span-7 border border-white/10 bg-white/[0.025] p-5 md:p-8">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.35em] text-blue-300 mb-5 md:mb-6">
                Wofür wir stehen
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {values.map((value) => (
                  <div
                    key={value}
                    className="border-l-2 pl-4 md:pl-5 py-2"
                    style={{ borderColor: logoBlue }}
                  >
                    <p className="text-base md:text-lg font-black uppercase tracking-tight text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed mt-6 md:mt-8">
                Wir arbeiten strukturiert, halten Absprachen ein und achten auf
                eine professionelle Baustellenorganisation. Genau daraus entsteht
                Qualität, die man sieht.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-6 pb-16 md:pb-28">
        <div className="max-w-7xl mx-auto border border-white/10 bg-white/[0.025] text-white px-5 md:px-16 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] md:tracking-[0.4em] text-blue-300 mb-4 md:mb-5">
              Kontakt
            </p>

            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none mb-5 md:mb-6">
              Lernen Sie uns <br />
              <span style={{ color: logoBlue }}>persönlich kennen.</span>
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              Erzählen Sie uns von Ihrem Projekt. Wir beraten Sie ehrlich,
              direkt und lösungsorientiert.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4 min-w-0">
            <a
              href={phoneHref}
              className="w-full bg-white text-slate-950 px-5 md:px-8 py-4 md:py-5 text-center text-xs md:text-sm font-black uppercase tracking-[0.16em] md:tracking-[0.25em] hover:bg-slate-100 transition-all"
            >
              {phoneDisplay}
            </a>

            <a
              href={`mailto:${email}`}
              className="w-full border border-white/20 px-4 md:px-8 py-4 md:py-5 text-center text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.25em] hover:bg-white/10 transition-all break-all leading-relaxed"
            >
              {email}
            </a>
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
            <a
              href={phoneHref}
              className="hover:text-slate-950 transition-colors"
            >
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