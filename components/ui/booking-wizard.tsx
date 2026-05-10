"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GLOBAL_SPRING, FADE_UP, STAGGER_CHILDREN } from "@/lib/motion";
import { Calendar, Users, Utensils, Send, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

const STEPS = [
  { id: "datetime", title: "Date & Time", icon: Calendar },
  { id: "guests", title: "Guest Count", icon: Users },
  { id: "preferences", title: "Preferences", icon: Utensils },
];

export function BookingWizard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    dietary: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shake, setShake] = useState(false);

  const isStepValid = () => {
    if (step === 0) return !!(formData.date && formData.time);
    if (step === 1) return !!formData.guests;
    return true;
  };

  const next = () => {
    if (isStepValid()) {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!formData.date || !formData.time || !formData.guests || isSubmitting) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const allValid = !!(formData.date && formData.time && formData.guests);

  return (
    <section
      id="booking"
      className="relative py-24 md:py-40 px-6 md:px-12 lg:px-16 bg-paper overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh-warm pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={STAGGER_CHILDREN}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            variants={FADE_UP}
            className="font-ui text-[10px] uppercase tracking-[0.4em] font-bold text-saffron block mb-5"
          >
            Private Reservations
          </motion.span>
          <motion.h2
            variants={FADE_UP}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-ink leading-[0.95] tracking-[-0.02em]"
          >
            Reserve Your{" "}
            <span className="gradient-text-gold">Table</span>
          </motion.h2>
          <motion.p
            variants={FADE_UP}
            className="mt-6 text-ash/65 font-sans max-w-xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Complete your reservation in three steps. Our concierge team will confirm your
            table within 24 hours.
          </motion.p>
        </motion.div>

        {/* Wizard panel */}
        <motion.div
          animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="luxury-panel-dark p-6 md:p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Gold glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(232,130,12,0.15),transparent_50%)]" />

          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-ivory/8">
            <motion.div
              className="h-full bg-saffron"
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              transition={GLOBAL_SPRING}
            />
          </div>

          {/* Step indicators */}
          <div className="relative flex flex-wrap gap-3 mb-10 pt-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === step;
              const isDone = i < step;
              return (
                <div
                  key={s.id}
                  className={`inline-flex items-center gap-2 px-3 py-2 border font-ui text-[9px] uppercase tracking-[0.22em] font-bold transition-all ${
                    isActive
                      ? "border-saffron text-saffron bg-saffron/10"
                      : isDone
                      ? "border-saffron/40 text-saffron/60 bg-saffron/5"
                      : "border-ivory/12 text-ivory/35"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{s.title}</span>
                </div>
              );
            })}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={GLOBAL_SPRING}
              className="relative min-h-[280px]"
            >
              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-11 h-11 border border-saffron/40 bg-saffron/10 flex items-center justify-center">
                      {(() => { const Icon = STEPS[step].icon; return <Icon className="w-5 h-5 text-saffron" aria-hidden="true" />; })()}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-ivory">{STEPS[step].title}</h3>
                  </div>

                  {step === 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="date" className="font-ui text-[9px] uppercase tracking-[0.28em] text-saffron/70 font-bold">
                          Preferred Date
                        </label>
                        <input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="bg-ivory/5 border border-ivory/15 p-4 text-ivory text-sm focus:outline-none focus:border-saffron/60 transition-all"
                          aria-required="true"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="time" className="font-ui text-[9px] uppercase tracking-[0.28em] text-saffron/70 font-bold">
                          Preferred Time
                        </label>
                        <input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="bg-ivory/5 border border-ivory/15 p-4 text-ivory text-sm focus:outline-none focus:border-saffron/60 transition-all"
                          aria-required="true"
                        />
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="flex flex-col gap-3">
                      <label className="font-ui text-[9px] uppercase tracking-[0.28em] text-saffron/70 font-bold">
                        Number of Guests
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3" role="group" aria-label="Select number of guests">
                        {["1", "2", "4", "6", "8", "10+"].map((num) => (
                          <button
                            key={num}
                            onClick={() => setFormData({ ...formData, guests: num })}
                            className={`py-4 text-sm font-bold border transition-all ${
                              formData.guests === num
                                ? "bg-saffron text-char border-saffron"
                                : "bg-ivory/5 text-ivory/55 border-ivory/15 hover:border-saffron/50 hover:text-saffron"
                            }`}
                            aria-pressed={formData.guests === num}
                            data-cursor-hover
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="flex flex-col gap-3">
                      <label htmlFor="dietary" className="font-ui text-[9px] uppercase tracking-[0.28em] text-saffron/70 font-bold">
                        Special Preferences
                      </label>
                      <textarea
                        id="dietary"
                        value={formData.dietary}
                        onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                        placeholder="Dietary requirements, allergies, celebration details, special requests..."
                        rows={5}
                        className="bg-ivory/5 border border-ivory/15 p-4 text-ivory text-sm focus:outline-none focus:border-saffron/60 transition-all resize-none placeholder:text-ivory/25"
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="min-h-[260px] flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle2 className="w-14 h-14 text-saffron mb-6" />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-serif text-ivory mb-4">Reservation Received</h3>
                  <p className="text-ivory/55 font-sans max-w-md leading-relaxed text-sm">
                    Your reservation request has been received. Our concierge team will confirm
                    your table within 24 hours via email.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {!isSubmitted && (
            <div className="relative flex justify-between items-center mt-8 pt-8 border-t border-ivory/8">
              <button
                onClick={prev}
                disabled={step === 0}
                className={`flex items-center gap-2 text-[9px] font-ui uppercase tracking-[0.25em] font-bold transition-all ${
                  step === 0 ? "opacity-0 pointer-events-none" : "text-ivory/45 hover:text-saffron"
                }`}
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              {step < STEPS.length - 1 ? (
                <button
                  onClick={next}
                  className="flex items-center gap-2 px-8 py-4 bg-saffron text-char font-ui text-[9px] uppercase tracking-[0.28em] font-bold hover:bg-honey transition-all"
                  data-cursor-hover
                >
                  Next Step <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <motion.button
                  animate={allValid ? {
                    boxShadow: [
                      "0 0 0 rgba(232,130,12,0)",
                      "0 0 25px rgba(232,130,12,0.4)",
                      "0 0 0 rgba(232,130,12,0)",
                    ],
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  onClick={submit}
                  disabled={!allValid || isSubmitting}
                  className={`flex items-center gap-2 px-8 py-4 font-ui text-[9px] uppercase tracking-[0.28em] font-bold transition-all ${
                    !allValid || isSubmitting
                      ? "bg-ivory/8 border border-ivory/15 text-ivory/35 cursor-not-allowed"
                      : "bg-saffron text-char hover:bg-honey"
                  }`}
                  data-cursor-hover
                  aria-label="Submit reservation"
                >
                  {isSubmitting ? "Sending..." : "Confirm Reservation"}
                  <Send className="w-4 h-4" />
                </motion.button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
