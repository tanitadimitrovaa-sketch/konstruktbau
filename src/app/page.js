"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const logoBlue = "#42B4FF";
const email = "info@konstruktbaugmbh.ch";
const phoneDisplay = "+41 78 880 00 26";
const phoneHref = "tel:+41788800026";

const images = Array.from(
  { length: 15 },
  (_, i) => `/projects/project-${i + 1}.jpeg`
);

const services = [
  {
    title: "Trockenbau",
    text: "Wände, Vorsatzschalen und Innenausbau-Lösungen für Neubau und Renovation.",
  },
  {
    title: "Sanitärinstallationen",
    text: "Saubere Vorbereitung und fachgerechte Umsetzung von Sanitärbereichen.",
  },
  {
    title: "Deckensysteme",
    text: "Abgehängte Decken, Akustiklösungen und präzise ausgeführte Deckenkonstruktionen.",
  },
  {
    title: "Spachtelarbeiten",
    text: "Glatte Oberflächen, exakte Kanten und saubere Übergänge bis zum gewünschten Finish.",
  },
];

const partners = [
  { name: "Bosch", src: "/partners/bosch.png" },
  { name: "Rigips", src: "/partners/rigips.png" },
  { name: "Knauf", src: "/partners/knauf.png" },
  { name: "Hilti", src: "/partners/hilti.png" },
  { name: "DeWalt", src: "/partners/dewalt.png" },
  { name: "Makita", src: "/partners/makita.png" },
];

function SafeImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`${className} bg-slate-200 flex items-center justify-center`}>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Bild nicht gefunden
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-950 font-sans selection:bg-blue-100">
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 h-24 md:h-32 top-0">
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-full flex justify-between items-center relative">
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
            <Link href="/" style={{ color: logoBlue }}>Home</Link>
            <Link href="/ueber-uns" style={{ color: "inherit" }}>Über uns</Link>
            <Link href="/services" style={{ color: "inherit" }}>Dienstleistungen</Link>
            <Link href="/projekte" style={{ color: "inherit" }}>Projekte</Link>
            <Link href="/karriere" style={{ color: "inherit" }}>Karriere</Link>

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
                <Link href="/" onClick={() => setMenuOpen(false)} style={{ color: logoBlue }}>
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

      <section className="relative min-h-screen pt-24 md:pt-32 overflow-hidden bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
            className="absolute inset-0"
          >
            <SafeImage
              src={images[current]}
              alt="KonstruktBau Projekt"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-5 md:px-6 flex items-center py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl text-white"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="h-[2px] w-10 md:w-14" style={{ backgroundColor: logoBlue }} />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.28em] md:tracking-[0.35em] text-blue-300">
                KonstruktBau GmbH
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-10">
              Willkommen bei der <br />
              <span style={{ color: logoBlue }}>KonstruktBau GmbH</span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-slate-200 max-w-2xl leading-relaxed font-light mb-8 md:mb-12">
              Professionelle Lösungen für Neubau, Umbau und Renovation in der Schweiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href={phoneHref}
                className="w-full sm:w-auto bg-white text-slate-950 px-6 md:px-10 py-3.5 md:py-5 text-center text-xs md:text-sm uppercase tracking-[0.18em] md:tracking-[0.25em] font-black hover:bg-slate-100 transition-all"
              >
                Jetzt anrufen
              </a>

              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto border border-white/30 text-white px-6 md:px-10 py-3.5 md:py-5 text-center text-xs md:text-sm uppercase tracking-[0.18em] md:tracking-[0.25em] font-black hover:bg-white/10 transition-all"
              >
                E-Mail senden
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 z-20 max-w-7xl mx-auto flex justify-between items-end text-white">
          <p className="hidden md:block text-xs uppercase tracking-[0.3em] text-slate-300"></p>

          <div className="hidden sm:flex gap-2">
            {images.slice(0, 5).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-[3px] transition-all ${
                  current === index ? "w-12 bg-blue-400" : "w-7 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-36 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] md:tracking-[0.4em] text-blue-500 mb-4 md:mb-6">
              Über KonstruktBau
            </p>
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Qualität, <br />
              die man sieht.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base md:text-2xl leading-relaxed text-slate-500 font-light mb-8 md:mb-10">
              KonstruktBau steht für zuverlässige Ausführung im Innenausbau.
              Wir verbinden präzises Handwerk, saubere Baustellenorganisation
              und klare Kommunikation — vom ersten Gespräch bis zur fertigen Oberfläche.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              {["Präzise", "Zuverlässig", "Sauber"].map((item) => (
                <div key={item} className="border-l-4 pl-4 md:pl-5" style={{ borderColor: logoBlue }}>
                  <h3 className="text-xl md:text-2xl font-black uppercase">{item}</h3>
                  <p className="text-xs md:text-sm text-slate-400 mt-2 uppercase tracking-widest">
                    Ausführung mit Anspruch
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-36 px-5 md:px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-10 mb-10 md:mb-20">
            <div>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] md:tracking-[0.4em] text-blue-400 mb-4 md:mb-6">
                Dienstleistungen
              </p>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none">
                Leistungen
              </h2>
            </div>

            <p className="max-w-xl text-slate-400 text-base md:text-lg leading-relaxed">
              Klare Leistungen, sauber umgesetzt — für private und gewerbliche Bauprojekte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-5 md:p-12 border-b md:border-r border-white/10 group hover:bg-white/[0.03] transition-all"
              >
                <div className="flex items-start justify-between gap-4 md:gap-8 mb-5 md:mb-10">
                  <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight leading-tight max-w-[78%] break-words">
                    {service.title}
                  </h3>
                  <span className="text-xs md:text-sm font-black text-blue-400 shrink-0 pt-1">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed text-sm md:text-lg">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[420px] md:h-[680px] overflow-hidden bg-slate-950">
        <SafeImage
          src="/projects/project-8.jpeg"
          alt="KonstruktBau Innenausbau"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-5 md:px-6 flex items-center">
          <div className="max-w-3xl text-white">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] md:tracking-[0.4em] text-blue-300 mb-5 md:mb-8">
              Qualität im Detail
            </p>

            <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tight leading-none mb-5 md:mb-8">
              Jeder Anschluss zählt.
            </h2>

            <p className="text-base md:text-xl text-slate-200 leading-relaxed font-light">
              Von der Unterkonstruktion bis zur fertigen Oberfläche achten wir
              auf präzise Verarbeitung, saubere Übergänge und eine professionelle
              Baustellenorganisation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-5 md:px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p
              className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] md:tracking-[0.4em] mb-4 md:mb-6"
              style={{ color: logoBlue }}
            >
              Unsere Partner
            </p>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-5 md:mb-6">
              Mit starken Partnern zum besten Ergebnis
            </h2>

            <p className="max-w-3xl mx-auto text-base md:text-lg text-slate-500 leading-relaxed font-light">
              Wir setzen auf bewährte Materialien und professionelle Werkzeuge
              namhafter Hersteller. So sichern wir Qualität, Zuverlässigkeit
              und eine saubere Ausführung auf jeder Baustelle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-14 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-11 md:h-16 max-w-[120px] md:max-w-none w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-36 px-5 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-slate-950 text-white px-5 md:px-16 py-10 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] md:tracking-[0.4em] text-blue-300 mb-4 md:mb-6">
              Kontakt
            </p>

            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none mb-5 md:mb-8">
              Bereit für Ihr <br />
              <span style={{ color: logoBlue }}>nächstes Projekt?</span>
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              Schreiben Sie uns oder rufen Sie direkt an. Wir beraten Sie
              unkompliziert und besprechen die nächsten Schritte.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4 min-w-0">
            <a
              href={phoneHref}
              className="w-full bg-white text-slate-950 px-5 md:px-8 py-4 md:py-5 text-center text-xs md:text-sm font-black uppercase tracking-[0.16em] md:tracking-[0.25em] hover:bg-slate-100 transition-all break-words"
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

      <footer className="bg-white border-t border-slate-100 px-5 md:px-6 py-8 md:py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 md:gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 text-center md:text-left">
            <img
              src="/logo.png"
              alt="KonstruktBau Logo"
              className="h-11 md:h-14 w-auto object-contain"
            />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold text-slate-400">
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