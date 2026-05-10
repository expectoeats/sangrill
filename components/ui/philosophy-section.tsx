"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GLOBAL_SPRING, FADE_UP, STAGGER_CHILDREN } from "@/lib/motion";

const PILLARS = [
  {
    number: "01",
    title: "Seasonal Provenance",
    desc: "Every ingredient is sourced at peak season from trusted artisan producers — from hand-dived scallops to heritage grain.",
  },
  {
    number: "02",
    title: "Culinary Precision",
    desc: "Our kitchen operates with the discipline of a fine art studio. Each plate is a composition, not merely a meal.",
  },
  {
    number: "03",
    title: "Intimate Hospitality",
    desc: "We host only twelve tables per evening. Your experience is never rushed, never compromised.",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative py-28 md:py-44 px-6 md:px-12 lg:px-16 bg-paper overflow-hidden">
      {/* Warm mesh background */}
      <div className="absolute inset-0 bg-mesh-warm pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={STAGGER_CHILDREN}
          >
            <motion.span
              variants={FADE_UP}
              className="font-ui text-[10px] uppercase tracking-[0.4em] font-bold text-saffron block mb-6"
            >
              Our Philosophy
            </motion.span>

            <motion.h2
              variants={FADE_UP}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-ink leading-[1.02] tracking-[-0.01em]"
            >
              Designed for Guests Who Appreciate{" "}
              <em className="not-italic gradient-text-gold">Quiet Luxury</em>
            </motion.h2>

            <motion.p
              variants={FADE_UP}
              className="mt-8 text-ink/60 font-sans text-base md:text-lg leading-relaxed max-w-lg"
            >
              At Sangrilla, hospitality is not loud. It is thoughtful, warm, and precise.
              From the ambient candlelight to the cadence of each course, every detail is
              orchestrated to create an evening of quiet, unforgettable luxury.
            </motion.p>

            <div className="gold-hairline my-10" />

            <motion.div
              variants={STAGGER_CHILDREN}
              className="space-y-8"
            >
              {PILLARS.map((p) => (
                <motion.div
                  key={p.number}
                  variants={FADE_UP}
                  className="flex gap-6 group"
                >
                  <span className="font-ui text-[11px] font-bold text-saffron/50 tracking-[0.3em] mt-1 shrink-0">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink mb-2 group-hover:text-saffron transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-ink/55 font-sans text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[500px] md:h-[620px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=85&w=1200"
                alt="Sangrilla dining room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, ...GLOBAL_SPRING }}
              className="absolute -bottom-8 -left-8 luxury-panel p-6 w-52"
            >
              <p className="font-ui text-[9px] uppercase tracking-[0.3em] font-bold text-saffron mb-3">Signature Standards</p>
              <div className="space-y-3">
                <div>
                  <p className="text-3xl font-serif text-ink">50+</p>
                  <p className="font-ui text-[9px] uppercase tracking-[0.25em] text-ink/45 font-bold">Seasonal Dishes</p>
                </div>
                <div className="gold-hairline" />
                <div>
                  <p className="text-3xl font-serif text-ink">12</p>
                  <p className="font-ui text-[9px] uppercase tracking-[0.25em] text-ink/45 font-bold">Private Tables</p>
                </div>
              </div>
            </motion.div>

            {/* Floating dish image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, ...GLOBAL_SPRING }}
              className="absolute -top-6 -right-6 w-36 h-36 md:w-44 md:h-44 overflow-hidden border-4 border-parchment shadow-2xl animate-float"
            >
              <Image
                src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=85&w=400"
                alt="Signature dish detail"
                fill
                sizes="176px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
