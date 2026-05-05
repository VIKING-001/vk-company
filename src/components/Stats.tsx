import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Projetos entregues" },
  { value: 97, suffix: "%", label: "Clientes que renovaram" },
  { value: 4, suffix: " anos", label: "No mercado digital" },
  { value: 12, suffix: " nichos", label: "Atendidos até hoje" },
];

const useCountUp = (target: number, duration: number, active: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target, duration]);
  return count;
};

const StatItem = ({
  value, suffix = "", prefix = "", label, active, index,
}: {
  value: number; suffix?: string; prefix?: string; label: string; active: boolean; index: number;
}) => {
  const count = useCountUp(value, 1800 + index * 200, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center text-center px-4 lg:px-10 py-8"
    >
      <span className="font-display text-[clamp(2rem,4vw,3.2rem)] text-primary leading-none mb-2 tabular-nums">
        {prefix}{count}{suffix}
      </span>
      <span className="text-[0.68rem] tracking-[0.18em] uppercase text-white/35 mt-1">
        {label}
      </span>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="border-t border-b border-white/5 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(254,196,17,0.04) 0%, transparent 100%)" }}
        aria-hidden="true"
      />
      <div className="px-[5vw] relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} active={isInView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
