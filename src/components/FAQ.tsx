import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Qual é o investimento?",
    a: "Depende do diagnóstico e do que realmente precisa ser trabalhado. Depois da primeira conversa, você recebe uma direção clara de escopo e custo — sem tabela genérica.",
  },
  {
    q: "Vocês atendem fora de Goiânia?",
    a: "Sim. Os projetos podem ser conduzidos remotamente para clientes em qualquer estado. A localização não muda a proximidade da comunicação nem o rigor do acompanhamento.",
  },
  {
    q: "Quanto tempo leva para ver resultado?",
    a: "Cada frente tem um ciclo diferente. Mídia começa a gerar leitura em semanas; site e posicionamento produzem impacto progressivo. As expectativas são definidas antes do início.",
  },
  {
    q: "Preciso ter um negócio grande?",
    a: "Não. Atendemos desde operações estruturando o digital até empresas que querem acelerar uma máquina já ativa. O critério é disposição para executar, medir e evoluir.",
  },
  {
    q: "Existe contrato de fidelidade?",
    a: "Não. O trabalho acontece por projeto ou em ciclos renováveis. A continuidade precisa ser sustentada por entrega e confiança, não por uma trava contratual.",
  },
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-b border-white/6 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="flex-1 text-center lg:text-left text-[1rem] font-semibold text-white/80 group-hover:text-white transition-colors duration-200 leading-snug">
          {q}
        </span>
        <div className={`w-7 h-7 border flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open ? "border-primary bg-primary/10 rotate-45" : "border-white/10 group-hover:border-primary/40"}`}>
          <Plus size={14} className={`transition-colors duration-200 ${open ? "text-primary" : "text-white/40 group-hover:text-primary/60"}`} strokeWidth={2} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-center lg:text-left text-[0.92rem] leading-[1.85] text-white/70 max-w-[600px] mx-auto lg:mx-0">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section
      aria-label="Perguntas frequentes"
      className="px-[5vw] py-12 md:py-[10vh] bg-secondary/20 section-scan section-grid"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center lg:text-left"
        >
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-3">
            Dúvidas comuns
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[0.02em] leading-[0.9] mb-6">
            Perguntas<br />
            <span className="text-primary italic">respondidas<br />com clareza.</span>
          </h2>
          <p className="text-[0.88rem] text-white/35 leading-relaxed">
            Sem esconder nada.
          </p>
        </motion.div>

        <div className="pt-2">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
