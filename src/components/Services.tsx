import { motion } from "framer-motion";

const services = [
  { num: "01", name: "Assessoria Estratégica", desc: "Diagnóstico completo do seu negócio digital. Identificamos gargalos, oportunidades e traçamos um plano claro de ação para escalar." },
  { num: "02", name: "Sites & Landing Pages", desc: "Páginas de alta conversão com design premium. Do briefing ao ar em tempo recorde, focando em resultado e não só em estética." },
  { num: "03", name: "Tráfego Pago", desc: "Campanhas no Meta Ads e Google Ads gerenciadas com foco em ROI real. Cada real investido rastreado e otimizado." },
  { num: "04", name: "Identidade Visual & Branding", desc: "Marcas que comunicam autoridade antes de qualquer palavra. Logo, paleta, tipografia e guia de estilo completo." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
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

const Services = () => {
  return (
    <section className="px-[5vw] py-12 md:py-[10vh] border-t border-white/5 bg-background">
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border"
      >
        {services.map((s) => (
          <motion.div
            key={s.num}
            variants={itemVariants}
            className="group bg-secondary p-10 relative overflow-hidden hover:bg-card transition-colors duration-300"
          >
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-display text-[3.5rem] text-border leading-none mb-6 group-hover:text-primary/15 transition-colors duration-300">
              {s.num}
            </div>
            <h3 className="font-display text-[1.6rem] tracking-[0.05em] mb-4 text-foreground">{s.name}</h3>
            <p className="text-[0.9rem] leading-[1.7] text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
