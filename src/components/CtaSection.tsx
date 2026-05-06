import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/constants";

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
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp com a VK Company"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-between gap-4 bg-primary text-primary-foreground font-bold text-[0.8rem] tracking-[0.14em] uppercase px-8 py-5 w-full rounded-sm hover:bg-primary/90 transition-colors duration-200"
            >
              <span className="inline-flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.573-1.462A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.734-6.388-1.988l-.364-.253-3.014.963.998-2.965-.277-.384A9.943 9.943 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                Falar no WhatsApp
              </span>
              <span className="text-primary-foreground/50">→</span>
            </motion.a>

            <p className="text-[0.65rem] text-white/20 tracking-wide mt-4 text-center">
              Resposta em até 2 horas nos dias úteis
            </p>

            <div className="mt-6 pt-6 border-t border-white/5 text-center">
              <p className="text-[0.72rem] text-white/30 mb-2">Prefere se apresentar antes?</p>
              <Link
                to="/diagnostico"
                className="text-[0.75rem] tracking-[0.15em] uppercase text-primary/70 hover:text-primary transition-colors duration-200 border-b border-primary/20 pb-0.5"
              >
                Preencher diagnóstico gratuito →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
