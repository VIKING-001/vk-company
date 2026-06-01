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
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(254,196,17,0.1) 0%, rgba(254,196,17,0.03) 40%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to right, transparent, rgba(254,196,17,0.2), transparent)" }}
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
            <p className="text-[0.9rem] text-white/60 leading-[1.85] max-w-[360px]">
              Manda uma mensagem. Se não for o momento certo ou o perfil não se encaixar, a gente fala com honestidade. Sem pitch de venda.
            </p>
          </div>

          {/* Card */}
          <div className="border border-white/10 bg-secondary/50 p-8 lg:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <ul className="space-y-4 mb-10" role="list">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.88rem] text-white/75 leading-snug">
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
              className="relative overflow-hidden flex items-center justify-between gap-4 bg-primary text-primary-foreground font-bold text-[0.8rem] tracking-[0.14em] uppercase px-8 py-5 w-full rounded-sm shadow-[0_8px_30px_rgba(254,196,17,0.25)] hover:shadow-[0_12px_40px_rgba(254,196,17,0.4)] transition-shadow duration-300 group"
            >
              <span className="relative z-10 inline-flex items-center gap-3">Diagnóstico gratuito</span>
              <span className="relative z-10 text-primary-foreground/60">→</span>
              <span className="absolute inset-0 w-1/3 h-full bg-white/25 blur-sm -skew-x-12 -translate-x-full group-hover:animate-shine pointer-events-none" />
            </motion.a>

            <p className="text-[0.65rem] text-white/45 tracking-wide mt-4 text-center">
              Leva menos de 10 minutos. Gratuito, sem compromisso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
