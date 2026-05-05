import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Entendemos seu negócio por completo — cenário atual, concorrência, público e objetivos reais." },
  { num: "02", title: "Estratégia", desc: "Mapeamos os pontos de alavancagem e definimos o plano de ação com prioridades claras." },
  { num: "03", title: "Execução", desc: "Desenvolvemos e implementamos tudo com velocidade e qualidade de nível premium." },
  { num: "04", title: "Escala", desc: "Monitoramos, otimizamos e escalamos o que funciona — de forma contínua e mensurável." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Process = () => {
  return (
    <section
      aria-label="Nosso processo de trabalho"
      className="px-[5vw] py-12 md:py-[10vh] border-t border-white/5 bg-background overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 md:mb-16">
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
      </div>

      <motion.ol
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative"
        aria-label="Etapas do processo"
      >
        {/* Connecting line desktop */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ originX: 0 }}
          className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"
          aria-hidden="true"
        />

        {steps.map((s, i) => (
          <motion.li
            key={s.num}
            variants={itemVariants}
            className="lg:pr-8 relative flex gap-4 sm:block group"
          >
            <div
              aria-hidden="true"
              className="w-14 h-14 flex-shrink-0 border border-border rounded-full flex items-center justify-center sm:mb-6 bg-secondary font-display text-lg text-primary relative z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
            >
              {s.num}
            </div>
            <div>
              <h3 className="font-display text-[1.15rem] tracking-[0.05em] mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                <span className="sr-only">Etapa {i + 1}: </span>
                {s.title}
              </h3>
              <p className="text-[0.85rem] leading-[1.7] text-muted-foreground group-hover:text-white/80 transition-colors duration-300">{s.desc}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
};

export default Process;
