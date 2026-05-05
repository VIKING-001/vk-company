import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Entendemos seu negócio por completo — cenário atual, concorrência, público e objetivos reais." },
  { num: "02", title: "Estratégia", desc: "Mapeamos os pontos de alavancagem e definimos o plano de ação com prioridades claras." },
  { num: "03", title: "Execução", desc: "Desenvolvemos e implementamos tudo com velocidade e qualidade de nível premium." },
  { num: "04", title: "Escala", desc: "Monitoramos, otimizamos e escalamos o que funciona — de forma contínua e mensurável." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const Process = () => {
  return (
    <section
      aria-label="Nosso processo de trabalho"
      className="px-[5vw] py-12 md:py-[10vh] border-t border-white/5 bg-background overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-3">Como trabalhamos</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[0.02em] leading-[0.9]">
            Nosso<br /><span className="text-primary italic">Processo</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[0.88rem] text-white/40 max-w-[300px] leading-relaxed hidden lg:block"
        >
          Cada etapa foi desenhada para eliminar desperdício e maximizar resultado.
        </motion.p>
      </div>

      <motion.ol
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        aria-label="Etapas do processo"
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.num}
            variants={itemVariants}
            className="group bg-secondary hover:bg-card transition-colors duration-300 p-8 lg:p-10 relative overflow-hidden flex flex-col gap-5"
          >
            {/* Hover top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Step badge */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center font-display text-base text-primary bg-background group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 flex-shrink-0 relative z-10">
                {s.num}
              </div>
              {/* connector line — only on desktop between steps */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-[2.75rem] w-px h-px" aria-hidden="true" />
              )}
            </div>

            <div>
              <h3 className="font-display text-[1.2rem] tracking-[0.04em] mb-2 group-hover:text-primary transition-colors duration-300">
                <span className="sr-only">Etapa {i + 1}: </span>
                {s.title}
              </h3>
              <p className="text-[0.85rem] leading-[1.75] text-muted-foreground group-hover:text-white/70 transition-colors duration-300">
                {s.desc}
              </p>
            </div>

            {/* Bottom number watermark */}
            <div
              className="font-display text-[4rem] leading-none text-white/3 group-hover:text-primary/6 transition-colors duration-300 select-none mt-auto self-end"
              aria-hidden="true"
            >
              {s.num}
            </div>
          </motion.li>
        ))}
      </motion.ol>

      {/* Desktop connecting line */}
      <div className="hidden lg:block relative -mt-px">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Process;
