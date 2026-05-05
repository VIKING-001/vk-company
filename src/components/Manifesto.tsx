import { motion } from "framer-motion";

const Manifesto = () => {
  return (
    <section
      aria-label="Nossa filosofia"
      className="px-[5vw] py-10 md:py-[10vh] border-t border-white/5 bg-background grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 items-start"
    >
      <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary pt-1">
        Nossa filosofia
      </p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-[clamp(1.3rem,2.5vw,1.9rem)] font-light leading-[1.6] text-foreground"
      >
        A maioria das agências aperta botões. Nós entramos no seu negócio, entendemos o cenário real, identificamos os pontos de alavancagem e entregamos soluções que <strong className="font-bold text-primary">somam</strong>. Não vendemos serviços isolados — vendemos <strong className="font-bold text-primary">transformação de negócio</strong>.
      </motion.div>
    </section>
  );
};

export default Manifesto;
