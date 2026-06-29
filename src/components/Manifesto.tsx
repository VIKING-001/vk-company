import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Manifesto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="px-[5vw] py-12 md:py-[10vh] bg-background relative overflow-hidden section-scan section-grid"
    >
      {/* Left accent line */}
      <div className="absolute left-0 top-[10%] bottom-[10%] w-px" aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(254,196,17,0.3), transparent)' }}
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-8 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.65rem] tracking-[0.28em] uppercase pt-1" style={{ color: 'hsl(42 100% 55%)' }}>
            Nossa filosofia
          </p>
          <div className="w-8 h-px mt-4" style={{ background: 'hsl(42 100% 55%)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="absolute -top-8 -left-4 font-display text-[8rem] leading-none select-none pointer-events-none"
            style={{ color: 'rgba(254,196,17,0.06)' }}
            aria-hidden="true"
          >
            "
          </div>
          <p className="relative text-[clamp(1.15rem,2.2vw,1.75rem)] font-light leading-[1.7] text-foreground">
            A maioria das agências aperta botões. Nós entramos no seu negócio, entendemos o cenário real, identificamos os pontos de alavancagem e entregamos soluções que{' '}
            <strong className="font-bold" style={{ color: 'hsl(42 100% 55%)' }}>somam</strong>.
            {' '}Não vendemos serviços isolados — vendemos{' '}
            <strong className="font-bold" style={{ color: 'hsl(42 100% 55%)' }}>transformação de negócio</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
