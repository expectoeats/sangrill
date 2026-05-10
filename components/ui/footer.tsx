"use client";

import { motion } from "framer-motion";
import { FADE_UP, STAGGER_CHILDREN } from "@/lib/motion";

const FOOTER_LINKS = {
  Explore: ["Experience", "Menu", "Chef's Table", "Private Dining", "Gallery"],
  Reserve: ["Book a Table", "Private Events", "Wine Pairing", "Gift Vouchers"],
  About: ["Our Story", "The Chef", "Press", "Careers", "Contact"],
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-ink border-t border-saffron/15 overflow-hidden"
    >
      {/* Warm glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(232,130,12,0.08),transparent_60%)]" />

      {/* Newsletter band */}
      <div className="relative border-b border-saffron/10 py-14 md:py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.4em] font-bold text-saffron mb-2">
              Join Our Culinary Circle
            </p>
            <h3 className="text-2xl md:text-3xl font-serif text-ivory">
              Receive seasonal menus & exclusive invitations
            </h3>
          </div>
          <form
            className="flex w-full md:w-auto gap-0"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 bg-ivory/5 border border-ivory/15 border-r-0 px-5 py-4 text-ivory text-sm focus:outline-none focus:border-saffron/50 transition-all placeholder:text-ivory/30"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-4 bg-saffron text-char font-ui text-[9px] uppercase tracking-[0.28em] font-bold hover:bg-honey transition-all whitespace-nowrap"
              data-cursor-hover
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative py-16 md:py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-saffron/50 flex items-center justify-center">
                  <span className="text-saffron text-xs font-ui font-bold">S</span>
                </div>
                <span className="text-xl font-ui text-ivory tracking-[0.15em] uppercase">Sangrilla</span>
              </div>
              <p className="text-ivory/45 font-sans text-sm leading-relaxed max-w-xs mb-8">
                A culinary legacy built on the belief that every meal is an opportunity for
                extraordinary human connection.
              </p>

              {/* Social */}
              <div className="flex gap-4">
                {/* Social links */}
              <div className="flex gap-4">
                {["Instagram", "Facebook", "X"].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="px-3 py-2 border border-ivory/15 text-ivory/45 hover:border-saffron hover:text-saffron transition-all text-[9px] uppercase tracking-[0.2em] font-bold"
                    aria-label={label}
                    data-cursor-hover
                  >
                    {label}
                  </a>
                ))}
              </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-ui text-[9px] uppercase tracking-[0.35em] font-bold text-saffron mb-6">
                  {heading}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="animated-underline text-ivory/45 text-sm hover:text-saffron transition-colors duration-300"
                        data-cursor-hover
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="gold-hairline my-12 md:my-16" />

          {/* Large brand name */}
          <div className="overflow-hidden mb-10">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-9xl font-serif text-ivory/5 leading-none tracking-[-0.02em] select-none"
            >
              Sangrilla
            </motion.p>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-ui text-[9px] uppercase tracking-[0.22em] text-ivory/25 font-bold">
              © 2026 Sangrilla Restaurant. All rights reserved.
            </p>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] text-ivory/25 font-bold">
              <a href="#" className="hover:text-ivory/60 transition-colors" data-cursor-hover>Privacy Policy</a>
              <a href="#" className="hover:text-ivory/60 transition-colors" data-cursor-hover>Terms of Service</a>
              <a href="#" className="hover:text-ivory/60 transition-colors" data-cursor-hover>Accessibility</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact info strip */}
      <div className="border-t border-saffron/8 py-6 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-ivory/30 font-bold">
          <address className="not-italic flex flex-wrap gap-6 justify-center sm:justify-start">
            <span>12 Rue de la Gastronomie, Paris</span>
            <span>+33 1 42 00 00 00</span>
            <span>reservations@sangrilla.com</span>
          </address>
          <span>Open Daily · 6:00 PM – 11:00 PM</span>
        </div>
      </div>
    </footer>
  );
}
