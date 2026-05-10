"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GLOBAL_SPRING, FADE_UP, STAGGER_CHILDREN } from "@/lib/motion";

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "The Harvest",
    desc: "Dawn sourcing from trusted artisan farms. Every ingredient chosen by hand.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=85&w=800",
  },
  {
    step: "02",
    title: "The Preparation",
    desc: "Hours of mise en place. Precision, patience, and an obsession with detail.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=85&w=800",
  },
  {
    step: "03",
    title: "The Composition",
    desc: "Plating as an art form. Each dish is a canvas, each element intentional.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=85&w=800",
  },
];

export function ChefSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id="chef"
      className="relative py-28 md:py-44 overflow-hidden bg-ink"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />

      {/* Parallax chef image */}
      <motion.div
        style={{ y: y1, willChange: "transform" }}
        className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block"
      >
        <div className="relative h-full">
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=85&w=1200"
            alt="Executive Chef at Sangrilla"
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="lg:max-w-[55%]">

          {/* Header */}
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
              The Culinary Vision
            </motion.span>

            <motion.h2
              variants={FADE_UP}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-paper leading-[0.95] tracking-[-0.02em]"
            >
              A Chef's Story,{" "}
              <br />
              <span className="gradient-text-gold">Told in Flavour</span>
            </motion.h2>

            <motion.blockquote
              variants={FADE_UP}
              className="mt-10 pl-6 border-l-2 border-saffron/40"
            >
              <p className="text-paper/70 font-serif text-lg md:text-xl italic leading-relaxed">
                "I don't cook food. I compose experiences. Every plate that leaves my kitchen
                carries a memory, an emotion, a story that I hope will stay with you long after
                the last bite."
              </p>
              <footer className="mt-4">
                <span className="font-ui text-[10px] uppercase tracking-[0.35em] font-bold text-saffron">
                  — Chef Arjun Mehta, Executive Chef
                </span>
              </footer>
            </motion.blockquote>

            <motion.p
              variants={FADE_UP}
              className="mt-8 text-paper/50 font-sans text-sm md:text-base leading-relaxed"
            >
              With over two decades of experience across Paris, Tokyo, and New York, Chef Arjun
              brings a global perspective to deeply rooted culinary traditions. His philosophy:
              honour the ingredient, trust the technique, and always cook with intention.
            </motion.p>
          </motion.div>

          {/* Journey steps */}
          <div className="mt-16 md:mt-20 space-y-0">
            {JOURNEY_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: i * 0.15, ...GLOBAL_SPRING }}
                className="group flex gap-6 py-8 border-b border-paper/8 last:border-0 hover:border-saffron/20 transition-colors duration-300"
              >
                {/* Step image */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors" />
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-ui text-[9px] uppercase tracking-[0.35em] font-bold text-saffron/60">
                      {step.step}
                    </span>
                    <div className="h-px flex-1 bg-saffron/15" />
                  </div>
                  <h3 className="font-serif text-xl text-paper group-hover:text-saffron transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-paper/45 font-sans text-sm leading-relaxed mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile chef image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ...GLOBAL_SPRING }}
            className="lg:hidden mt-12 relative h-80 overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=85&w=800"
              alt="Executive Chef at Sangrilla"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
