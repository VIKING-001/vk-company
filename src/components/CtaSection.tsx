import { motion } from "framer-motion";

import { CheckCircle } from "lucide-react";
import { DIAGNOSTICO_LINK } from "../lib/constants";

const features = [
  "Diagnóstico gratuito na primeira conversa",
  "Sem contrato de fidelidade",
  "Proposta só se fizer sentido pro seu caso",
  "Acompanhamento semanal — não relatório mensal bonito",
];

const CtaSection = () => {
  return (
    <section
      aria-label="Chamada para ação — entre em contato"
      className="px-[5vw] py-12 md:py-[14vh] border-t border-white/5 bg-background relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(254,196,17,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Headline */}
          <div>
            <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-6">
              Pronto para começar?
            </p>
            <h2 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.92] mb-8">
              Se fizer sentido,<br />
              <span className="text-primary italic">a gente começa<br />essa semana.</span>
            </h2>
            <p className="text-[0.9rem] text-white/40 leading-[1.85] max-w-[360px]">
              Manda uma mensagem. Se não for o momento certo ou o perfil não se encaixar, a gente fala com honestidade. Sem pitch de venda.
            </p>
          </div>

          {/* Card */}
          <div className="border border-white/8 bg-secondary/40 p-8 lg:p-10">
            <ul className="space-y-4 mb-10" role="list">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.88rem] text-white/60 leading-snug">
                  <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>

            <motion.a
              href={DIAGNOSTICO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fazer diagnóstico gratuito"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between gap-4 bg-primary text-primary-foreground font-bold text-[0.8rem] tracking-[0.14em] uppercase px-8 py-5 w-full rounded-sm hover:bg-primary/90 transition-colors duration-200"
            >
              <span className="inline-flex items-center gap-3">
                Diagnóstico gratuito
              </span>
              <span className="text-primary-foreground/50">→</span>
            </motion.a>

            <p className="text-[0.65rem] text-white/20 tracking-wide mt-4 text-center">
              Leva menos de 10 minutos. Gratuito, sem compromisso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
