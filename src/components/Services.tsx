import { motion } from "framer-motion";
import { Target, Globe, BarChart2, Palette } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Target,
    name: "Assessoria Estratégica",
    desc: "Diagnóstico completo do seu negócio digital. Identificamos gargalos, oportunidades e traçamos um plano claro de ação para escalar.",
    tags: ["Diagnóstico", "Plano de Ação", "KPIs"],
  },
  {
    num: "02",
    icon: Globe,
    name: "Sites & Landing Pages",
    desc: "Páginas de alta conversão com design premium. Do briefing ao ar em tempo recorde, focando em resultado e não só em estética.",
    tags: ["Alta Conversão", "Design Premium", "Performance"],
  },
  {
    num: "03",
    icon: BarChart2,
    name: "Tráfego Pago",
    desc: "Campanhas no Meta Ads e Google Ads gerenciadas com foco em ROI real. Cada real investido rastreado e otimizado.",
    tags: ["Meta Ads", "Google Ads", "ROI Real"],
  },
  {
    num: "04",
    icon: Palette,
    name: "Identidade Visual & Branding",
    desc: "Marcas que comunicam autoridade antes de qualquer palavra. Logo, paleta, tipografia e guia de estilo completo.",
    tags: ["Logo", "Paleta", "Guia de Estilo"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const Services = () => {
  return (
    <section
      aria-label="Nossos serviços"
      className="px-[5vw] py-12 md:py-[10vh] border-t border-white/5 bg-background"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-3">O que fazemos</p>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] tracking-[0.02em] leading-[0.9]">
            Nossos<br /><span className="text-primary italic">Serviços</span>
          </h2>
        </motion.div>
      </div>

      <motion.ul
        role="list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
      >
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <motion.li
              key={s.num}
              variants={itemVariants}
              className="group bg-secondary p-8 lg:p-10 relative overflow-hidden hover:bg-card transition-colors duration-300 flex flex-col"
            >
              {/* Bottom border reveal */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

              {/* Top glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="mb-6 w-11 h-11 border border-white/8 flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                <Icon
                  size={18}
                  className="text-white/40 group-hover:text-primary transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>

              {/* Number */}
              <div className="font-display text-[3rem] text-border leading-none mb-5 group-hover:text-primary/12 transition-colors duration-300 select-none" aria-hidden="true">
                {s.num}
              </div>

              <h3 className="font-display text-[1.4rem] tracking-[0.03em] mb-3 text-foreground leading-tight">
                {s.name}
              </h3>
              <p className="text-[0.88rem] leading-[1.75] text-muted-foreground flex-1">
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-6">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.62rem] tracking-[0.1em] uppercase px-2.5 py-1 border border-white/6 text-white/30 group-hover:border-primary/20 group-hover:text-primary/60 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Services;
