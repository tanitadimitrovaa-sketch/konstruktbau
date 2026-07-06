"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const logoBlue = "#42B4FF";
const email = "info@konstruktbaugmbh.ch";
const phoneDisplay = "+41 78 880 00 26";
const phoneHref = "tel:+41788800026";

export default function Kontakt() {
  const [menuOpen, setMenuOpen] = useState(false);

  const googleMapUrl =
    "https://www.google.com/maps?q=Schachenhof%201,%206014%20Luzern,%20Switzerland&output=embed";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Fehler beim Senden.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-100">
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100 h-24 md:h-32 top-0 left-0">
        <div className="w-full max-w-7xl mx-auto px-5 md:px-6 h-full flex justify-between items-center">
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
            <Link href="/karriere">Karriere</Link>

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
            className="md:hidden w-11 h-11 flex items-center justify-center bg-slate-950 text-white text-2xl font-light shadow-md"
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

      <section className="pt-24 md:pt-32 min-h-[calc(100vh-72px)]">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-8 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] text-blue-300 mb-3">
              Kontakt
            </p>

            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              Ihr Projekt <span style={{ color: logoBlue }}>beginnt hier.</span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 max-w-3xl leading-relaxed font-light">
              Schreiben Sie uns oder rufen Sie direkt an — wir beraten Sie
              persönlich, unkompliziert und zuverlässig.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7 border border-white/10 bg-white/[0.025] p-5 md:p-6"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-4">
                Anfrage senden
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-colors"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-Mail"
                    required
                    className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-colors"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon"
                  className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-colors"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht..."
                  rows="5"
                  required
                  className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-400 transition-colors resize-none"
                />

                {status === "success" && (
                  <p className="text-sm text-blue-300 font-semibold">
                    Ihre Anfrage wurde erfolgreich gesendet.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-300 font-semibold">
                    Die Nachricht konnte nicht gesendet werden. Bitte versuchen
                    Sie es erneut.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-white text-slate-950 px-8 py-3.5 text-xs font-black uppercase tracking-[0.22em] md:tracking-[0.25em] hover:bg-slate-100 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Wird gesendet..." : "Anfrage senden"}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="lg:col-span-5 grid grid-cols-1 gap-4"
            >
              <div className="border border-white/10 bg-white/[0.025] p-5 md:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-4">
                  Direkter Kontakt
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-black mb-1.5">
                      Telefon
                    </p>
                    <a
                      href={phoneHref}
                      className="text-lg font-black hover:text-blue-300 transition-colors"
                    >
                      {phoneDisplay}
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-black mb-1.5">
                      E-Mail
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm md:text-base font-black break-all hover:text-blue-300 transition-colors"
                      style={{ color: logoBlue }}
                    >
                      {email}
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-black mb-1.5">
                      Firmensitz
                    </p>
                    <div className="text-sm text-slate-300 leading-relaxed font-semibold">
                      <p>KonstruktBau GmbH</p>
                      <p>Schachenhof 1 · 6014 Luzern</p>
                      <p>Switzerland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[220px] md:h-[250px] overflow-hidden border border-white/10 bg-slate-900">
                <iframe
                  src={googleMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="KonstruktBau Standort"
                  className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
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