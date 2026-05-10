"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GLOBAL_SPRING, FADE_UP, STAGGER_CHILDREN } from "@/lib/motion";
import { Search, ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Tasting Menu"];

const MENU_ITEMS = [
  {
    id: 1,
    name: "Truffle-Infused Lobster",
    category: "Mains",
    price: "$185",
    description: "Butter-poached Atlantic lobster with black truffle shavings, saffron beurre blanc, and micro herbs.",
    image: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?auto=format&fit=crop&q=85&w=1200",
    badge: "Chef's Signature",
  },
  {
    id: 2,
    name: "Saffron Risotto Royale",
    category: "Mains",
    price: "$95",
    description: "Carnaroli rice with Persian saffron, aged Parmigiano, and edible 24k gold leaf.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=85&w=1200",
    badge: "Seasonal",
  },
  {
    id: 3,
    name: "Wagyu Carpaccio",
    category: "Starters",
    price: "$78",
    description: "Thinly sliced A5 Wagyu with caper berries, aged balsamic, and shaved black truffle.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=85&w=1200",
    badge: "Premium",
  },
  {
    id: 4,
    name: "Beluga Caviar Dreams",
    category: "Starters",
    price: "$220",
    description: "Beluga caviar with traditional accompaniments, crème fraîche, and warm blinis.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=85&w=1200",
    badge: "Exclusive",
  },
  {
    id: 5,
    name: "Sangrilla Tasting Journey",
    category: "Tasting Menu",
    price: "$385",
    description: "Seven courses of culinary storytelling — from amuse-bouche to mignardises. The complete Sangrilla experience.",
    image: "https://images.unsplash.com/photo-1550966841-3ee3ad359051?auto=format&fit=crop&q=85&w=1200",
    badge: "Full Experience",
  },
  {
    id: 6,
    name: "Midnight Velvet Soufflé",
    category: "Desserts",
    price: "$42",
    description: "Dark Valrhona chocolate soufflé with raspberry coulis, gold dust, and vanilla Chantilly.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=85&w=1200",
    badge: "Signature",
  },
  {
    id: 7,
    name: "Foie Gras Torchon",
    category: "Starters",
    price: "$68",
    description: "House-cured foie gras with Sauternes gelée, brioche toast, and fig compote.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=85&w=1200",
    badge: "Classic",
  },
  {
    id: 8,
    name: "Aged Duck Confit",
    category: "Mains",
    price: "$125",
    description: "48-hour duck confit with cherry gastrique, pommes sarladaises, and wilted watercress.",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=85&w=1200",
    badge: "Heritage",
  },
];

export function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="menu"
      className="relative py-24 md:py-40 px-6 md:px-12 lg:px-16 bg-ink overflow-hidden"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={STAGGER_CHILDREN}
            className="max-w-2xl"
          >
            <motion.span
              variants={FADE_UP}
              className="font-ui text-[10px] uppercase tracking-[0.4em] font-bold text-saffron block mb-5"
            >
              Curated Signature Menu
            </motion.span>
            <motion.h2
              variants={FADE_UP}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-paper leading-[0.95] tracking-[-0.02em]"
            >
              The Sangrilla{" "}
              <span className="gradient-text-saffron">Collection</span>
            </motion.h2>
            <motion.p
              variants={FADE_UP}
              className="mt-6 text-paper/55 font-sans text-sm md:text-base leading-relaxed"
            >
              Every plate is composed as a premium course, blending classical heritage with modern precision.
            </motion.p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ...GLOBAL_SPRING }}
            className="relative w-full lg:w-80 group"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-paper/35 group-focus-within:text-saffron transition-colors" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-paper/5 border border-paper/12 py-4 pl-12 pr-4 text-paper text-sm focus:outline-none focus:border-saffron/60 transition-all placeholder:text-paper/30"
              aria-label="Search menu items"
            />
          </motion.div>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, ...GLOBAL_SPRING }}
          className="flex flex-wrap gap-3 mb-12 md:mb-16 border-t border-paper/8 pt-8"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 font-ui text-[10px] uppercase tracking-[0.22em] font-bold border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-saffron text-char border-saffron"
                  : "bg-transparent text-ivory/50 border-ivory/15 hover:border-saffron/50 hover:text-saffron"
              }`}
              data-cursor-hover
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => {
              const isLarge = idx % 5 === 0 || idx % 5 === 4;
              const colSpan = isLarge ? "lg:col-span-7" : "lg:col-span-5";
              const height = isLarge ? "h-[480px] md:h-[560px]" : "h-[400px] md:h-[480px]";

              return (
                <motion.article
                  key={item.id}
                  layout="position"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={GLOBAL_SPRING}
                  onHoverStart={() => setHoveredId(item.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`group relative overflow-hidden border border-paper/8 hover:border-saffron/40 transition-all duration-500 dish-card ${colSpan} ${height}`}
                  data-cursor-label={item.price}
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      priority={idx < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                    <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />
                  </div>

                  {/* Warm glow on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      background: hoveredId === item.id
                        ? "radial-gradient(circle at 50% 80%, rgba(232,130,12,0.15) 0%, transparent 60%)"
                        : "radial-gradient(circle at 50% 80%, rgba(232,130,12,0) 0%, transparent 60%)",
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-ui text-[9px] uppercase tracking-[0.3em] font-bold text-saffron border border-saffron/35 bg-ink/50 px-2.5 py-1">
                        {item.badge}
                      </span>
                      <span className="text-saffron font-serif text-xl md:text-2xl border border-saffron/30 bg-ink/40 px-3 py-1">
                        {item.price}
                      </span>
                    </div>

                    {/* Bottom */}
                    <div>
                      <span className="font-ui text-[9px] uppercase tracking-[0.28em] font-bold text-paper/45 block mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif text-paper leading-tight tracking-[-0.01em] text-shadow-luxury">
                        {item.name}
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredId === item.id ? 1 : 0,
                          height: hoveredId === item.id ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-paper/65 font-sans text-sm leading-relaxed mt-3 overflow-hidden"
                      >
                        {item.description}
                      </motion.p>
                      <div className="mt-5 flex items-center gap-3">
                        <button
                          className="inline-flex items-center gap-2 text-paper/70 group-hover:text-saffron transition-colors duration-300"
                          data-cursor-hover
                          aria-label={`Explore ${item.name}`}
                        >
                          <span className="font-ui text-[9px] uppercase tracking-[0.3em] font-bold">Explore Dish</span>
                          <div className="w-8 h-8 border border-paper/25 group-hover:border-saffron group-hover:bg-saffron/10 flex items-center justify-center transition-all duration-300">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-28 text-center"
        >
          <button
            className="group relative px-14 py-5 border border-saffron/40 text-saffron font-ui font-bold tracking-[0.28em] uppercase text-[10px] overflow-hidden hover:border-saffron transition-all"
            data-cursor-hover
          >
            <span className="relative z-10 group-hover:text-char transition-colors duration-400">
              Download Full Menu PDF
            </span>
            <div className="absolute inset-0 bg-saffron -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
