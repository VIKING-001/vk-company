import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Entramos no contexto, nos números e nas restrições do negócio. A proposta começa pela pergunta certa.",
  },
  {
    num: "02",
    title: "Direção",
    desc: "Definimos prioridades, metas e o papel de cada frente. Você entende o plano antes de aprovar a execução.",
  },
  {
    num: "03",
    title: "Execução",
    desc: "Criação e mídia avançam com ciclos curtos, revisão interna e comunicação direta com quem decide.",
  },
  {
    num: "04",
    title: "Evolução",
    desc: "O que funciona ganha escala. O que não responde é corrigido com velocidade e aprendizado documentado.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const Process = () => {
  return (
    <section
      aria-label="Nosso processo de trabalho"
      className="px-[5vw] py-12 md:py-[10vh] bg-background overflow-hidden section-scan section-grid"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end text-center lg:text-left gap-6 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-3">Como trabalhamos</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[0.02em] leading-[0.9]">
            Clareza em<br /><span className="text-primary italic">cada etapa.</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[0.88rem] text-white/40 max-w-[280px] leading-relaxed hidden lg:block"
        >
          Sem a sensação de que o projeto entrou numa caixa-preta. Você sabe o que está acontecendo, por que e qual é o próximo passo.
        </motion.p>
      </div>

      <motion.ol
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        aria-label="Etapas do processo"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.num}
            variants={itemVariants}
            className="group bg-secondary hover:bg-card transition-colors duration-300 p-8 lg:p-10 relative overflow-hidden flex flex-col items-center lg:items-stretch text-center lg:text-left gap-5"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center font-display text-base text-primary bg-background group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 flex-shrink-0">
              {s.num}
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

            <div
              className="font-display text-[4rem] leading-none text-white/3 group-hover:text-primary/6 transition-colors duration-300 select-none mt-auto self-center lg:self-end"
              aria-hidden="true"
            >
              {s.num}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
};

export default Process;
