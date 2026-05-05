import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../lib/constants";

const features = [
  "Diagnóstico gratuito no primeiro contato",
  "Sem contrato de fidelidade",
  "Estratégia personalizada para o seu negócio",
  "Resultados mensuráveis desde o primeiro mês",
];

const CtaSection = () => {
  return (
    <section
      aria-label="Chamada para ação — entre em contato"
      className="px-[5vw] py-12 md:py-[14vh] border-t border-white/5 bg-background relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(254,196,17,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute right-[-10%] bottom-[-20%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(254,196,17,0.04) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left — headline */}
          <div>
            <p className="text-[0.72rem] tracking-[0.25em] uppercase text-primary mb-6">
              Pronto para crescer?
            </p>
            <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.92] mb-8">
              Vamos<br />
              transformar<br />
              <span className="text-primary italic">seu negócio.</span>
            </h2>
            <p className="text-[0.95rem] text-white/50 leading-[1.8] max-w-[380px]">
              Uma conversa no WhatsApp é suficiente para entender se faz sentido trabalharmos juntos. Sem enrolação.
            </p>
          </div>

          {/* Right — card */}
          <div className="border border-white/6 bg-secondary/60 backdrop-blur-sm p-8 lg:p-10">
            <ul className="space-y-4 mb-10" role="list">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.92rem] text-white/70">
                  <CheckCircle
                    size={16}
                    className="text-primary mt-0.5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp com a VK Company"
              className="group relative flex items-center justify-between gap-4 bg-primary text-primary-foreground font-bold text-[0.82rem] tracking-[0.14em] uppercase px-8 py-5 overflow-hidden w-full shadow-[0_12px_40px_rgba(254,196,17,0.2)] hover:shadow-[0_16px_50px_rgba(254,196,17,0.35)] transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
              <span className="relative z-10 inline-flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.573-1.462A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.734-6.388-1.988l-.364-.253-3.014.963.998-2.965-.277-.384A9.943 9.943 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                Falar no WhatsApp
              </span>
              <span className="relative z-10 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors duration-300 text-lg">
                →
              </span>
            </motion.a>

            <p className="text-[0.68rem] text-white/25 tracking-wide mt-4 text-center">
              Resposta em até 2 horas • Sem compromisso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
