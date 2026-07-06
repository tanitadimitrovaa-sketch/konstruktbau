"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const logoBlue = "#42B4FF";
const email = "info@konstruktbaugmbh.ch";
const phoneDisplay = "+41 78 880 00 26";
const phoneHref = "tel:+41788800026";

const services = [
  {
    number: "01",
    title: "Trockenbau",
    intro: "Flexible Raumlösungen für Neubau, Umbau und Renovation.",
    images: [
      "/services/trockenbau-1.jpeg",
      "/services/trockenbau-2.jpeg",
      "/services/trockenbau-3.jpeg",
      "/services/trockenbau-5.jpg",
      "/services/trockenbau-4.jpg",
      "/services/trockenbau-6.jpg",
      "/services/trockenbau-7.jpg",
      "/services/trockenbau-8.jpg",
      "/services/trockenbau-9.jpg",
      "/services/trockenbau-10.jpg",
      "/services/trockenbau-11.jpg",
      "/services/trockenbau-12.jpg",
      "/services/trockenbau-13.jpg",
      "/services/trockenbau-14.jpg",
    ],
    items: [
      ["Trennwände", "Raumaufteilung für neue Zimmer oder Funktionsbereiche."],
      ["Vorsatzschalen", "Verkleidung von Wänden, Kabeln und Rohren."],
      ["Schallschutz", "Dämmstoffe für mehr Ruhe und Privatsphäre."],
      ["Brandschutz", "Zertifizierte Platten für mehr Sicherheit."],
      ["Wärmedämmung", "Isolierung für bessere Energieeffizienz."],
    ],
  },
  {
    number: "02",
    title: "Sanitärinstallationen",
    intro: "Vorbereitung und Montage für moderne Sanitärbereiche.",
    images: [
      "/services/sanitaer-1.jpeg",
      "/services/sanitaer-2.jpeg",
      "/services/sanitaer-3.jpeg",
      "/services/sanitaer-4.jpg",
      "/services/sanitaer-5.jpg",
      "/services/sanitaer-6.jpg",
      "/services/sanitaer-7.jpg",
      "/services/sanitaer-8.jpg",
    ],
    items: [
      ["Einfachbeplankung 18 mm", "Stabile Beplankung für Sanitärbereiche."],
      ["Zweifachbeplankung 2 × 12.5 mm", "Robuste Ausführung für hohe Belastbarkeit."],
      ["Geberit GIS Montage", "Montage von Installationssystemen."],
      ["Geberit Duofix Montage", "Vorwandmontage für WC und Waschtisch."],
    ],
  },
  {
    number: "03",
    title: "Deckensysteme",
    intro: "Deckensysteme für Technik, Akustik, Brandschutz und Design.",
    images: [
      "/services/decken-1.jpeg",
      "/services/decken-2.jpeg",
      "/services/decken-3.jpeg",
      "/services/decken-4.jpg",
      "/services/decken-5.jpeg",
      "/services/decken-6.jpg",
      "/services/decken-7.jpg",
    ],
    items: [
      ["Standard-Gipsdecken", "Klassische Lösungen für Wohn- und Gewerberäume."],
      ["Akustikdecken", "Verbesserte Raumakustik durch funktionale Systeme."],
      ["Brandschutzdecken EI30 – EI120", "Zertifizierte Lösungen für erhöhte Sicherheit."],
      ["Träger- & Stützenbekleidung", "Saubere Verkleidung tragender Elemente."],
      ["Freitragende Decken", "Konstruktionen ohne direkte Rohdecken-Abhängung."],
      ["Raster- & Kassettendecken", "Modulare Systeme für Büros und Gewerbe."],
    ],
  },
  {
    number: "04",
    title: "Spachtelarbeiten",
    intro: "Hochwertige Oberflächen und Finish-Arbeiten von Q1 bis Q4.",
    images: ["/services/spachtel-1.jpeg"],
    items: [
      ["Q1 Grundverspachtelung", "Basis für Fugen und Befestigungsmittel."],
      ["Q2 Standardverspachtelung", "Für Tapeten, Strukturputze oder Anstriche."],
      ["Q3 Sonderverspachtelung", "Feinere Oberfläche für hochwertige Gestaltung."],
      ["Q4 Premium-Finish", "Maximal glatte Oberfläche."],
      ["Abrieb & Strukturputz", "Robuste dekorative Putzoberflächen."],
      ["Glattputz & Feinputz", "Edle Oberflächen mit präziser Verarbeitung."],
    ],
  },
];

function ServiceSection({ service }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (service.images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % service.images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [service.images.length]);

  return (
    <section
      id={service.title.toLowerCase()}
      className="scroll-mt-36 py-8 md:py-10 border-t border-white/10"
    >
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-4 mb-4">
          <p className="text-blue-400 text-sm font-black">{service.number}</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white mb-4">
          {service.title}
        </h2>

        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light max-w-3xl">
          {service.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
        <div className="lg:col-span-5">
          <div className="relative h-[260px] md:h-[360px] overflow-hidden bg-slate-800 border border-white/10 group">
            <img
              src={service.images[activeIndex]}
              alt={service.title}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {service.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  type="button"
                  aria-label="Vorheriges Bild"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 bg-black/55 backdrop-blur border border-white/10 flex items-center justify-center text-white text-2xl hover:bg-black/75 transition-all md:opacity-0 md:group-hover:opacity-100"
                >
                  ←
                </button>

                <button
                  onClick={nextImage}
                  type="button"
                  aria-label="Nächstes Bild"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 bg-black/55 backdrop-blur border border-white/10 flex items-center justify-center text-white text-2xl hover:bg-black/75 transition-all md:opacity-0 md:group-hover:opacity-100"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 bg-white/[0.022] border border-white/10 px-4 md:px-5 py-4 md:py-5">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-blue-300 mb-4">
            Leistungsumfang
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {service.items.map(([title, text]) => (
              <div key={title} className="pb-3 border-b border-white/10">
                <h3 className="text-sm md:text-base font-black uppercase tracking-tight text-white mb-1 leading-tight">
                  {title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-xs md:text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-100">
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 h-28 md:h-32 top-0">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center relative">
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

            <Link href="/ueber-uns" style={{ color: "inherit" }}>
              Über uns
            </Link>

            <Link href="/services" style={{ color: logoBlue }}>
              Dienstleistungen
            </Link>

            <Link href="/projekte">Projekte</Link>

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

      <section className="relative pt-28 md:pt-32 min-h-screen overflow-hidden">
        <div className="fixed inset-0 -z-10 bg-slate-950">
          <img
            src="/services/services-bg.jpeg"
            alt="KonstruktBau Dienstleistungen"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-950/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mb-10"
          >
            <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-300 mb-6">
              Dienstleistungen
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-7">
              Präziser Ausbau. <br />
              <span style={{ color: logoBlue }}>Klare Leistungen.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
              Trockenbau, Sanitärinstallationen, Deckensysteme und hochwertige
              Oberflächen — sauber strukturiert und professionell ausgeführt.
            </p>
          </motion.div>

          <div className="sticky top-28 md:top-32 z-30 bg-slate-950/90 backdrop-blur border-y border-white/10 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={`#${service.title.toLowerCase()}`}
                  className="px-3 py-4 text-center text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {services.map((service) => (
            <ServiceSection key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-28 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto bg-slate-950 text-white px-8 md:px-16 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-300 mb-5">
              Kontakt
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Bereit für Ihr <br />
              <span style={{ color: logoBlue }}>nächstes Projekt?</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Schreiben Sie uns oder rufen Sie direkt an. Wir beraten Sie
              unkompliziert und besprechen die nächsten Schritte.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              href={phoneHref}
              className="bg-white text-slate-950 px-8 py-5 text-center text-sm font-black uppercase tracking-[0.25em] hover:bg-slate-100 transition-all"
            >
              {phoneDisplay}
            </a>

            <a
              href={`mailto:${email}`}
              className="border border-white/20 px-8 py-5 text-center text-sm font-black uppercase tracking-[0.25em] hover:bg-white/10 transition-all"
            >
              {email}
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-white border-t border-slate-100 px-6 py-10 text-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5">
            <img
              src="/logo.png"
              alt="KonstruktBau Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400">
              © 2026 KonstruktBau GmbH
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-semibold text-slate-500">
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