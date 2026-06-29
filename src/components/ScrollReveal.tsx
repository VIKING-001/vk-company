import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useMemo, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "blur";
  id?: string;
  className?: string;
  once?: boolean;
  amount?: number;
}

const ScrollReveal = ({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
  id,
  className,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const offset = useMemo(() => {
    if (typeof window === "undefined") return 40;
    return window.innerWidth < 768 ? 24 : 40;
  }, []);

  const variants: Variants = useMemo(() => {
    const base = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1] as const,
          delay,
        },
      },
    };

    switch (direction) {
      case "up":
        return {
          hidden: { ...base.hidden, y: offset },
          visible: base.visible,
        };
      case "down":
        return {
          hidden: { ...base.hidden, y: -offset },
          visible: base.visible,
        };
      case "left":
        return {
          hidden: { ...base.hidden, x: offset },
          visible: base.visible,
        };
      case "right":
        return {
          hidden: { ...base.hidden, x: -offset },
          visible: base.visible,
        };
      case "scale":
        return {
          hidden: { ...base.hidden, scale: 0.92 },
          visible: { ...base.visible, scale: 1 },
        };
      case "blur":
        return {
          hidden: { ...base.hidden, filter: "blur(12px)", scale: 0.98 },
          visible: {
            ...base.visible,
            filter: "blur(0px)",
            scale: 1,
            transition: {
              ...base.visible.transition,
              duration: 0.9,
            },
          },
        };
      default:
        return base;
    }
  }, [direction, offset, delay]);

  return (
    <div ref={ref} id={id} className={className} style={{ position: "relative", width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ willChange: "transform, opacity, filter" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;