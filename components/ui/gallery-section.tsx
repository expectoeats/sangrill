"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GLOBAL_SPRING, FADE_UP, STAGGER_CHILDREN } from "@/lib/motion";
import { X, ZoomIn } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=85&w=1200",
    alt: "Sangrilla dining room ambiance",
    label: "The Dining Room",
    span: "col-span-2 row-span-2",
    height: "h-[400px]",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=85&w=800",
    alt: "Signature dish plating",
    label: "Signature Plating",
    span: "col-span-1 row-span-1",
    height: "h-[190px]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=85&w=800",
    alt: "Chef's kitchen",
    label: "The Kitchen",
    span: "col-span-1 row-span-1",
    height: "h-[190px]",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=85&w=800",
    alt: "Culinary artistry",
    label: "Culinary Artistry",
    span: "col-span-1 row-span-1",
    height: "h-[280px]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1550966841-3ee3ad359051?auto=format&fit=crop&q=85&w=1200",
    alt: "Private dining setup",
    label: "Private Dining",
    span: "col-span-2 row-span-1",
    height: "h-[280px]",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=85&w=800",
    alt: "Dessert composition",
    label: "Sweet Finale",
    span: "col-span-1 row-span-1",
    height: "h-[280px]",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=85&w=800",
    alt: "Ingredient close-up",
    label: "The Ingredients",
    span: "col-span-1 row-span-1",
    height: "h-[280px]",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=85&w=800",
    alt: "Wine and dining",
    label: "Wine Pairing",
    span: "col-span-1 row-span-1",
    height: "h-[280px]",
  },
];

export function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-40 px-6 md:px-12 lg:px-16 bg-paper overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh-warm pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

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
            Visual Stories
          </motion.span>
          <motion.h2
            variants={FADE_UP}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-ink leading-[0.95] tracking-[-0.02em]"
          >
            The Sangrilla{" "}
            <span className="gradient-text-gold">Experience</span>
          </motion.h2>
          <motion.p
            variants={FADE_UP}
            className="mt-5 text-ash/70 font-sans text-sm md:text-base max-w-xl leading-relaxed"
          >
            A curated glimpse into our world — from the kitchen to the table, from the first
            ingredient to the final flourish.
          </motion.p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.07, ...GLOBAL_SPRING }}
              onClick={() => openLightbox(item.src, item.alt)}
              className={`group relative overflow-hidden cursor-pointer ${item.height} ${
                item.id === 1 ? "col-span-2 row-span-2 h-[400px] md:h-[500px]" :
                item.id === 5 ? "col-span-2" : ""
              }`}
              data-cursor-hover
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-500" />

              {/* Hover content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ZoomIn className="w-8 h-8 text-saffron mb-3" />
                <span className="font-ui text-[10px] uppercase tracking-[0.3em] font-bold text-ivory">
                  {item.label}
                </span>
              </motion.div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-char/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="font-ui text-[9px] uppercase tracking-[0.3em] font-bold text-saffron">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/95 backdrop-blur-sm p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={GLOBAL_SPRING}
              className="relative max-w-5xl w-full max-h-[85vh] aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxSrc}
                alt={lightboxAlt}
                fill
                sizes="90vw"
                className="object-contain"
              />
              <button
                onClick={() => setLightboxSrc(null)}
                className="absolute top-4 right-4 p-2 border border-ivory/20 text-ivory hover:border-saffron hover:text-saffron transition-all"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
