import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Eu desconfiava bastante no começo — já tinha queimado dinheiro com outra agência antes. Mas o Rodrigo chegou com dados do meu setor e perguntou coisas que o último fornecedor nunca perguntou. Em 60 dias meu custo de captação caiu quase na metade. Renovei sem pensar.",
    name: "João Alves",
    role: "Clínica Dr. Alves — Goiânia",
    initials: "JA",
  },
  {
    quote: "Meu site tinha 3 anos e eu achava que o problema era o produto. A VK refez a landing page e em duas semanas a taxa de conversão triplicou. Parece mentira mas tenho o print aqui.",
    name: "Mariana Gomes",
    role: "Loja Deitada no Sol — São Paulo",
    initials: "MG",
  },
  {
    quote: "Passei 8 meses tentando fazer Google Ads funcionar sozinho. Em 30 dias com eles já estava lucrando. O que me chamou atenção foi que eles me ligaram pra pedir uma informação do setor antes de começar. Aí eu soube que estavam fazendo sério.",
    name: "Pedro Carvalho",
    role: "PC Reformas — Brasília",
    initials: "PC",
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
          Quem já<br />
          <span className="text-primary italic">passou por aqui.</span>
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
            className="group relative bg-secondary p-8 lg:p-10 hover:bg-card transition-colors duration-300 overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

            <div className="font-display text-[4.5rem] leading-none text-primary/8 mb-1 -mt-3 select-none" aria-hidden="true">
              "
            </div>

            <div className="flex gap-0.5 mb-5" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="text-primary text-[0.8rem]">★</span>
              ))}
            </div>

            <p className="text-[0.95rem] leading-[1.85] text-white/60 flex-1">
              {t.quote}
            </p>

            <div className="flex items-center gap-3 pt-7 mt-7 border-t border-white/5">
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display text-xs text-primary flex-shrink-0">
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
