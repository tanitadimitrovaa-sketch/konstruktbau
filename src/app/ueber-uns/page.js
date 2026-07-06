"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
                Über KonstruktBau
              </p>

              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Handwerk mit <br />
                <span style={{ color: logoBlue }}>Verantwortung.</span>
              </h1>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                KonstruktBau steht für präzisen Innenausbau, saubere Baustellen
                und zuverlässige Umsetzung — vom ersten Gespräch bis zur
                fertigen Oberfläche.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
            <div className="lg:col-span-7 border border-white/10 bg-white/[0.025] p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300 mb-6">
                Unsere Geschichte
              </p>

              <div className="space-y-5 text-slate-300 leading-relaxed font-light text-base md:text-lg">
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

            <div className="lg:col-span-5 border border-white/10 bg-white/[0.025] p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300 mb-6">
                Unser Motto
              </p>

              <blockquote className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight text-white">
                Erst wenn jedes Detail stimmt, ist die Arbeit fertig.
              </blockquote>

              <div
                className="h-[2px] w-20 mt-8"
                style={{ backgroundColor: logoBlue }}
              />
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.025] p-8 md:p-14 mb-14">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300 mb-6">
              Geschäftsführung
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Plamen <br />
              <span style={{ color: logoBlue }}>Buyukliev</span>
            </h2>

            <p className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-8">
              Geschäftsführer & Leitender Trockenbau-Spezialist
            </p>

            <div className="max-w-5xl space-y-6">
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                Plamen Buyukliev verbindet handwerkliche Erfahrung mit
                organisatorischer Verantwortung. Als Geschäftsführer und
                leitender Spezialist im Trockenbau steht er für präzise
                Ausführung, technisches Verständnis und einen klaren Anspruch
                an Qualität auf jeder Baustelle.
              </p>

              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                Mit strukturiertem Arbeiten, sauberer Planung und persönlichem
                Einsatz begleitet er Projekte vom ersten Schritt bis zur finalen
                Ausführung. Dabei stehen Qualität, Termintreue und eine
                professionelle Baustellenorganisation immer im Mittelpunkt.
              </p>
            </div>

            <div
              className="mt-12 border-l-2 pl-8"
              style={{ borderColor: logoBlue }}
            >
              <p className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight text-white">
                Qualität entsteht nicht am Ende eines Projekts —
                <br />
                sie entsteht bei jedem einzelnen Arbeitsschritt.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 mb-14">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0"
              >
                <p className="text-5xl md:text-6xl font-black tracking-tighter mb-3">
                  {stat.value}
                </p>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300 mb-3">
                  {stat.label}
                </p>
                <p className="text-slate-400 leading-relaxed">{stat.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 border border-white/10 bg-white/[0.025] p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300 mb-6">
                Das Team
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none mb-6">
                Ein starkes Team. <br />
                Eine klare Linie.
              </h2>

              <p className="text-slate-400 leading-relaxed">
                Unsere Stärke liegt nicht nur im Handwerk, sondern auch in der
                Zusammenarbeit. Ein eingespieltes Team arbeitet effizienter,
                sauberer und mit mehr Verantwortung für jedes Detail.
              </p>
            </div>

            <div className="lg:col-span-7 border border-white/10 bg-white/[0.025] p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-blue-300 mb-6">
                Wofür wir stehen
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((value) => (
                  <div
                    key={value}
                    className="border-l-2 pl-5 py-2"
                    style={{ borderColor: logoBlue }}
                  >
                    <p className="text-lg font-black uppercase tracking-tight text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-slate-400 leading-relaxed mt-8">
                Wir arbeiten strukturiert, halten Absprachen ein und achten auf
                eine professionelle Baustellenorganisation. Genau daraus entsteht
                Qualität, die man sieht.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto border border-white/10 bg-white/[0.025] text-white px-8 md:px-16 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-300 mb-5">
              Kontakt
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Lernen Sie uns <br />
              <span style={{ color: logoBlue }}>persönlich kennen.</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Erzählen Sie uns von Ihrem Projekt. Wir beraten Sie ehrlich,
              direkt und lösungsorientiert.
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
            <a
              href={phoneHref}
              className="hover:text-slate-950 transition-colors"
            >
              {phoneDisplay}
            </a>
            <a
              href={`mailto:${email}`}
              className="hover:text-slate-950 transition-colors"
            >
              {email}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}