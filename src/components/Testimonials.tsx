import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "A VK Company transformou completamente nossa presença digital. Em 90 dias triplicamos nossas vendas online — estratégia real, sem enrolação.",
    name: "Marcos Henrique",
    role: "CEO, Construtora MH",
    initials: "MH",
  },
  {
    quote: "O site entregue foi além das expectativas. Design premium, rápido e convertendo de verdade. Já recuperei o investimento na primeira semana.",
    name: "Ana Paula Souza",
    role: "Proprietária, Clínica Estética AP",
    initials: "AP",
  },
  {
    quote: "Gestão de tráfego séria com resultados reais. Meu custo por lead caiu 60% e o faturamento subiu 40% em dois meses.",
    name: "Ricardo Fernandes",
    role: "Sócio, RF Advocacia",
    initials: "RF",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const Testimonials = () => {
  return (
    <section
      aria-label="Depoimentos de clientes"
      className="px-[5vw] py-12 md:py-[10vh] border-t border-white/5 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-10 md:mb-16"
      >
        <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-3">
          O que dizem sobre nós
        </p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[0.02em] leading-[0.9]">
          Resultados<br />
          <span className="text-primary italic">Reais.</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative bg-secondary p-8 lg:p-10 hover:bg-card transition-colors duration-300 overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            {/* Quote mark */}
            <div
              className="font-display text-[5rem] leading-none text-primary/10 mb-2 -mt-4 select-none"
              aria-hidden="true"
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-5" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="text-primary text-sm">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-[0.98rem] leading-[1.8] text-white/65 mb-8">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/5">
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center font-display text-xs text-primary flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="text-[0.85rem] font-semibold text-white leading-tight">{t.name}</p>
                <p className="text-[0.72rem] text-white/35 tracking-wide mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
