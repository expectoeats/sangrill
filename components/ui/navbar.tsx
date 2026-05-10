"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GLOBAL_SPRING } from "@/lib/motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Experience", href: "#experience" },
  { name: "Menu", href: "#menu" },
  { name: "Chef", href: "#chef" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reserve", href: "#booking" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-[80] flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 md:py-6">
        {/* Blur bg on scroll */}
        <motion.div
          className="absolute inset-0 bg-paper/95 backdrop-blur-xl border-b border-parchment"
          style={{ opacity: bgOpacity }}
        />

        {/* Logo */}
        <a href="#experience" className="relative z-10 flex items-center gap-3 group" data-cursor-hover>
          <div className="w-8 h-8 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-tomato to-saffron opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-ivory text-xs font-ui font-bold">S</span>
          </div>
          <span className="text-xl md:text-2xl font-ui text-ink tracking-[0.12em] uppercase">
            Sangrilla
          </span>
        </a>

        {/* Desktop links */}
        <div className="relative z-10 hidden lg:flex items-center gap-10">
          {NAV_LINKS.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="animated-underline font-ui text-[10px] uppercase tracking-[0.3em] font-bold text-ash/70 hover:text-ink transition-colors duration-300"
              data-cursor-hover
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="relative z-10 flex items-center gap-4">
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-tomato to-saffron text-ivory font-ui text-[10px] uppercase tracking-[0.25em] font-bold hover:from-chili hover:to-turmeric transition-all duration-300 animate-pulse-glow"
            data-cursor-hover
          >
            Reserve Table
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 border border-parchment text-ash hover:border-saffron/60 hover:text-saffron transition-all"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ ...GLOBAL_SPRING, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-paper border-l border-parchment flex flex-col"
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-parchment">
                <span className="text-xl font-ui text-ink tracking-[0.12em] uppercase">Sangrilla</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 border border-parchment text-ash hover:border-saffron/60 hover:text-saffron transition-all" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 px-8 py-10 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i, ...GLOBAL_SPRING }} href={link.href} onClick={() => setMobileOpen(false)} className="group flex items-center justify-between py-5 border-b border-parchment/60 last:border-0">
                    <div>
                      <span className="block font-ui text-[9px] tracking-[0.35em] font-bold uppercase text-saffron/60 mb-1">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-2xl font-serif text-ink tracking-[0.02em] group-hover:text-saffron transition-colors">{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ash/40 group-hover:text-saffron transition-colors" />
                  </motion.a>
                ))}
              </div>
              <div className="px-8 pb-10">
                <a href="#booking" onClick={() => setMobileOpen(false)} className="block w-full py-4 text-center bg-gradient-to-r from-tomato to-saffron text-ivory font-ui font-bold text-[10px] tracking-[0.25em] uppercase hover:opacity-90 transition-opacity">
                  Reserve Your Table
                </a>
                <p className="text-center font-ui text-[9px] tracking-[0.2em] uppercase text-ash/40 mt-4">Open Daily · 6:00 PM – 11:00 PM</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
