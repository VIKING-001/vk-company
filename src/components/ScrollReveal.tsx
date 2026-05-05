import { motion, useInView } from "framer-motion";
import { useRef, useMemo, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
  className?: string;
}

const ScrollReveal = ({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
  id,
  className,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const offset = useMemo(() => {
    if (typeof window === "undefined") return 30;
    return window.innerWidth < 768 ? 20 : 30;
  }, []);

  const initial = useMemo(() => ({
    opacity: 0,
    y: direction === "up" ? offset : direction === "down" ? -offset : 0,
    x: direction === "left" ? offset : direction === "right" ? -offset : 0,
  }), [direction, offset]);

  return (
    <div ref={ref} id={id} className={className} style={{ position: "relative", width }}>
      <motion.div
        initial={initial}
        animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay,
        }}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
