"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GLOBAL_SPRING, FADE_UP, STAGGER_CHILDREN } from "@/lib/motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Isabella Fontaine",
    role: "Food Critic, Le Monde Gastronomique",
    quote: "Sangrilla is not merely a restaurant — it is a pilgrimage for those who believe that dining is one of life's highest arts. Chef Arjun's tasting menu left me speechless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=85&w=200",
    diningImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=85&w=600",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Michelin Guide Inspector",
    quote: "The precision, the restraint, the sheer beauty of each plate — Sangrilla operates at a level that very few restaurants in the world can claim. An extraordinary experience.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=85&w=200",
    diningImage: "https://images.unsplash.com/photo-1550966841-3ee3ad359051?auto=format&fit=crop&q=85&w=600",
  },
  {
    id: 3,
    name: "Sophia Reinholt",
    role: "Luxury Travel Editor, Condé Nast",
    quote: "I have dined at the world's finest tables, and Sangrilla stands apart. The intimacy, the service, the flavours — it is the kind of evening that redefines what a meal can be.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=85&w=200",
    diningImage: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=85&w=600",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const navigate = (dir: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive((p) => (p + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
    startInterval();
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-ink">
      {/* Background dining image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={t.diningImage}
            alt="Dining atmosphere"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/88" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={STAGGER_CHILDREN}
          className="mb-16 md:mb-20"
        >
          <motion.span
            variants={FADE_UP}
            className="font-ui text-[10px] uppercase tracking-[0.4em] font-bold text-saffron block mb-5"
          >
            Guest Voices
          </motion.span>
          <motion.h2
            variants={FADE_UP}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-paper leading-[0.95] tracking-[-0.02em]"
          >
            What Our Guests{" "}
            <span className="gradient-text-gold">Remember</span>
          </motion.h2>
        </motion.div>

        {/* Testimonial */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-saffron text-saffron" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-paper leading-[1.35] italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-10 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-saffron/30">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-paper text-lg">{t.name}</p>
                  <p className="font-ui text-[10px] uppercase tracking-[0.3em] font-bold text-saffron/60 mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex lg:flex-col gap-4 items-center">
            <button
              onClick={() => navigate(-1)}
              className="w-12 h-12 border border-ivory/20 flex items-center justify-center text-ivory hover:border-saffron hover:text-saffron transition-all"
              aria-label="Previous testimonial"
              data-cursor-hover
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex lg:flex-col gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { if (intervalRef.current) clearInterval(intervalRef.current); setActive(i); startInterval(); }}
                  className={`transition-all duration-300 ${
                    i === active
                      ? "w-8 h-1 lg:w-1 lg:h-8 bg-saffron"
                      : "w-4 h-1 lg:w-1 lg:h-4 bg-ivory/25 hover:bg-saffron/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-12 h-12 border border-ivory/20 flex items-center justify-center text-ivory hover:border-saffron hover:text-saffron transition-all"
              aria-label="Next testimonial"
              data-cursor-hover
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
