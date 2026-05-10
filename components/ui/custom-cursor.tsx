"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springCfg = { damping: 28, stiffness: 280, mass: 0.5 };
  const x = useSpring(cursorX, springCfg);
  const y = useSpring(cursorY, springCfg);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("button, a, [data-cursor-hover]");
      setIsHovering(!!interactive);

      const labelEl = target.closest("[data-cursor-label]");
      setLabel(labelEl ? labelEl.getAttribute("data-cursor-label") : null);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`custom-cursor${isHovering ? " hovering" : ""}`}
      style={{ left: x, top: y, x: "-50%", y: "-50%", willChange: "transform" }}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="absolute whitespace-nowrap text-[9px] font-bold text-gold tracking-widest pointer-events-none"
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
}
