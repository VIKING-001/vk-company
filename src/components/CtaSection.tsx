import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { DIAGNOSTICO_LINK } from "../lib/constants";
import MagneticButton from "./MagneticButton";

const features = [
  "Diagnóstico gratuito na primeira conversa",
  "Sem contrato de fidelidade",
  "Proposta só se fizer sentido pro seu caso",
  "Acompanhamento semanal — não relatório mensal bonito",
];

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Chamada para ação — entre em contato"
      className="px-[5vw] py-16 md:py-[16vh] border-t border-white/5 bg-background relative overflow-hidden"
    >
      {/* Background dramático */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Glow central forte */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%]" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(254,196,17,0.12) 0%, rgba(254,196,17,0.04) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        {/* Linha brilhante no topo */}
        <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{
          background: 'linear-gradient(to right, transparent, rgba(254,196,17,0.4), transparent)'
        }} />
        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '128px',
        }} />
      </div>

      <div className="relative max-w-[960px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Headline side */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[0.68rem] tracking-[0.28em] uppercase mb-6" style={{ color: 'hsl(42 100% 55%)' }}>
              Pronto para começar?
            </p>
            <h2 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.9] mb-8">
              Se fizer sentido,<br />
              <span className="text-shimmer">
                a gente começa<br />essa semana.
              </span>
            </h2>
            <p className="text-[0.9rem] text-white/60 leading-[1.85] max-w-[340px]">
              Manda uma mensagem. Se não for o momento certo ou o perfil não se encaixar, a gente fala com honestidade. Sem pitch de venda.
            </p>

            {/* Metrics row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/6">
              {[
                { value: "100+", label: "Projetos" },
                { value: "97%", label: "Renovaram" },
                { value: "4 anos", label: "No mercado" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-[1.8rem] leading-none" style={{ color: 'hsl(42 100% 55%)' }}>{m.value}</p>
                  <p className="text-[0.62rem] tracking-[0.14em] uppercase text-white/35 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card side */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Card glow */}
            <div className="absolute -inset-4 rounded-sm pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(254,196,17,0.1) 0%, transparent 60%)',
              filter: 'blur(20px)',
            }} />

            <div className="relative border border-white/12 bg-white/3 backdrop-blur-sm p-8 lg:p-10"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.3)' }}
            >
              {/* Top shine line */}
              <div className="absolute top-0 left-8 right-8 h-px" style={{
                background: 'linear-gradient(to right, transparent, rgba(254,196,17,0.3), transparent)'
              }} />

              <ul className="space-y-4 mb-10" role="list">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start gap-3 text-[0.88rem] text-white/75 leading-snug"
                  >
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'hsl(42 100% 55%)' }} strokeWidth={2} />
                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button com efeito magnético */}
              <MagneticButton
                href={DIAGNOSTICO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fazer diagnóstico gratuito"
                strength={0.15}
                className="relative overflow-hidden flex items-center justify-between gap-4 font-bold text-[0.8rem] tracking-[0.16em] uppercase px-8 py-5 w-full rounded-sm text-[#0F0F10] group"
              >
                <span
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #FEC411 0%, #FFD043 50%, #FEC411 100%)',
                    boxShadow: '0 8px 32px rgba(254,196,17,0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                />
                <span className="relative z-10 font-bold">Diagnóstico gratuito</span>
                <span className="relative z-10 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">→</span>
                {/* Shine */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
                />
              </MagneticButton>

              <p className="text-[0.65rem] text-white/45 tracking-wide mt-4 text-center">
                Leva menos de 10 minutos. Gratuito, sem compromisso.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
