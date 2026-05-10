"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GLOBAL_SPRING, CINEMATIC_EASE } from "@/lib/motion";
import { ArrowRight, Star, Clock, Flame, ChevronDown } from "lucide-react";

const DISHES = [
  {
    id: 1,
    name: "Truffle Lobster",
    category: "Chef's Signature",
    price: "$185",
    tag: "Black Truffle · Atlantic Lobster",
    image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?auto=format&fit=crop&q=90&w=1200",
    thumb1: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400",
    thumb2: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Wagyu Carpaccio",
    category: "Premium Starter",
    price: "$78",
    tag: "A5 Wagyu · Aged Balsamic",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=90&w=1200",
    thumb1: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?auto=format&fit=crop&q=80&w=400",
    thumb2: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Velvet Soufflé",
    category: "Signature Dessert",
    price: "$42",
    tag: "Valrhona 72% · Raspberry",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=90&w=1200",
    thumb1: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=400",
    thumb2: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?auto=format&fit=crop&q=80&w=400",
  },
];

const TICKER = [
  "Truffle Lobster", "Wagyu Carpaccio", "Saffron Risotto",
  "Foie Gras Torchon", "Velvet Soufflé", "Beluga Caviar",
  "Duck Confit", "Tasting Journey",
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % DISHES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const dish = DISHES[active];

  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden"
      style={{ background: "#0D0A07", minHeight: "100svh" }}
    >
      {/* ── Full-bleed background image ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={dish.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: CINEMATIC_EASE }}
          className="absolute inset-0"
        >
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-char/95 via-char/70 to-char/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-char/90 via-transparent to-char/40" />
        </motion.div>
      </AnimatePresence>

      {/* ── Ambient color glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(192,57,43,0.2),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(232,130,12,0.15),transparent_70%)]" />
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
          ══════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: "100svh" }}>

        {/* ── TOP BAR ── */}
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 pt-28 pb-0">
          {/* Open status */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...GLOBAL_SPRING }}
            className="flex items-center gap-2 px-3 py-1.5 border border-herb/30 bg-herb/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            <span className="font-ui text-[9px] uppercase tracking-[0.3em] font-bold text-mint">Open Tonight</span>
            <span className="font-ui text-[9px] text-ivory/30 ml-1">· 6PM–11PM</span>
          </motion.div>

          {/* Michelin stars */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ...GLOBAL_SPRING }}
            className="hidden sm:flex items-center gap-1.5"
          >
            {[1, 2, 3].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-saffron text-saffron" />
            ))}
            <span className="font-ui text-[9px] uppercase tracking-[0.3em] text-ivory/40 ml-2">Michelin</span>
          </motion.div>
        </div>

        {/* ── HERO BODY ── */}
        <div className="flex-1 grid lg:grid-cols-2 gap-0 px-6 md:px-12 lg:px-16 py-10 md:py-14 items-center">

          {/* LEFT — dish info */}
          <div className="flex flex-col justify-center max-w-xl">

            {/* Category pill */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cat-${active}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: CINEMATIC_EASE }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-8 bg-saffron" />
                <span className="font-ui text-[10px] uppercase tracking-[0.4em] font-bold text-saffron">
                  {dish.category}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Dish name — BIG */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={`name-${active}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl text-ivory leading-[0.92] tracking-[-0.02em]"
              >
                {dish.name}
              </motion.h2>
            </AnimatePresence>

            {/* Ingredient tag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${active}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: CINEMATIC_EASE }}
                className="flex items-center gap-2 mt-5"
              >
                <Flame className="w-3.5 h-3.5 text-tomato shrink-0" />
                <span className="font-ui text-[10px] uppercase tracking-[0.3em] text-ivory/50">{dish.tag}</span>
              </motion.div>
            </AnimatePresence>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: CINEMATIC_EASE }}
              className="h-px bg-gradient-to-r from-tomato via-saffron to-transparent my-8 origin-left"
            />

            {/* Price + CTA row */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`price-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-6 flex-wrap"
              >
                <div>
                  <p className="font-ui text-[9px] uppercase tracking-[0.3em] text-ivory/35 mb-1">Starting from</p>
                  <p className="font-serif text-4xl gradient-text-fire leading-none">{dish.price}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-tomato to-saffron text-ivory font-ui text-[10px] uppercase tracking-[0.28em] font-bold hover:opacity-90 transition-opacity animate-pulse-glow"
                    data-cursor-hover
                  >
                    Reserve Table <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-ivory/15 text-ivory/70 font-ui text-[10px] uppercase tracking-[0.28em] font-bold hover:border-saffron/50 hover:text-saffron transition-all"
                    data-cursor-hover
                  >
                    View Full Menu
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, ...GLOBAL_SPRING }}
              className="flex items-center gap-8 mt-10 pt-8 border-t border-ivory/8"
            >
              {[
                { val: "27", lbl: "Years" },
                { val: "3★", lbl: "Michelin" },
                { val: "200+", lbl: "Dishes" },
                { val: "12", lbl: "Tables" },
              ].map((s) => (
                <div key={s.lbl}>
                  <p className="font-serif text-2xl gradient-text-fire leading-none">{s.val}</p>
                  <p className="font-ui text-[8px] uppercase tracking-[0.25em] text-ivory/30 mt-1">{s.lbl}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — dish visual stack */}
          <div className="hidden lg:flex items-center justify-center relative h-[480px] xl:h-[540px]">

            {/* Main dish image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active}`}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 xl:w-80 h-80 xl:h-96 overflow-hidden"
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char/60 to-transparent" />

                {/* Price circle */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-full bg-gradient-to-br from-tomato to-saffron flex flex-col items-center justify-center shadow-lg">
                  <span className="font-serif text-ivory text-sm font-bold leading-none">{dish.price}</span>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-ui text-[8px] uppercase tracking-[0.3em] text-saffron font-bold">{dish.category}</span>
                  <p className="font-serif text-ivory text-xl mt-0.5 leading-tight">{dish.name}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Thumb 1 — top left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, ...GLOBAL_SPRING }}
              className="absolute top-4 left-4 w-32 h-32 xl:w-36 xl:h-36 overflow-hidden border border-saffron/20 animate-float"
            >
              <Image src={dish.thumb1} alt="" fill sizes="144px" className="object-cover" />
              <div className="absolute inset-0 bg-char/30" />
            </motion.div>

            {/* Thumb 2 — bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.65, ...GLOBAL_SPRING }}
              className="absolute bottom-4 right-4 w-28 h-28 xl:w-32 xl:h-32 overflow-hidden border border-tomato/20 animate-float-slow"
            >
              <Image src={dish.thumb2} alt="" fill sizes="128px" className="object-cover" />
              <div className="absolute inset-0 bg-char/30" />
            </motion.div>

            {/* Review card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, ...GLOBAL_SPRING }}
              className="absolute bottom-4 left-4 w-44 p-3 bg-char/90 backdrop-blur-sm border border-ivory/8"
            >
              <div className="flex gap-0.5 mb-1.5">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-saffron text-saffron" />)}
              </div>
              <p className="font-serif text-ivory/75 text-xs italic leading-snug">
                "An unforgettable culinary journey."
              </p>
              <p className="font-ui text-[7px] uppercase tracking-[0.2em] text-ivory/30 mt-1.5">Michelin Guide 2024</p>
            </motion.div>

            {/* Dish selector dots — right edge */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 pr-2">
              {DISHES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-1.5 h-6 bg-saffron"
                      : "w-1.5 h-1.5 bg-ivory/20 hover:bg-saffron/50"
                  }`}
                  aria-label={`View dish ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM TICKER ── */}
        <div className="border-t border-white/10 bg-ink/70 backdrop-blur-sm overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex w-max py-3"
          >
            {[...TICKER, ...TICKER].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6 shrink-0">
                <span className="w-1 h-1 rounded-full bg-saffron/50" />
                <span className="font-ui text-[9px] uppercase tracking-[0.25em] text-ivory/35 whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 right-8 z-20"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-saffron/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
