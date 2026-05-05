import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Qual o investimento?",
    a: "Depende do que faz sentido pro seu caso. Depois da primeira conversa, você já sai com uma ideia clara do que seria trabalhado e do custo envolvido. Sem tabela genérica.",
  },
  {
    q: "Vocês atendem fora de Goiânia?",
    a: "Sim. Todos os nossos projetos são 100% remotos por padrão. Atendemos clientes em vários estados — o que importa é o negócio, não a localização.",
  },
  {
    q: "Quanto tempo leva pra ver resultado?",
    a: "Depende do que vamos trabalhar. Tráfego pago: primeiros números aparecem em semanas. Site e branding: o impacto é progressivo. A gente define isso antes de começar, não depois.",
  },
  {
    q: "Preciso ter um negócio grande?",
    a: "Não. Atendemos desde quem está estruturando o digital pela primeira vez até quem já tem operação rodando mas quer crescer mais rápido. O critério é comprometimento, não tamanho.",
  },
  {
    q: "Tem contrato de fidelidade?",
    a: "Não. Trabalhamos por projeto ou em ciclos de 3 meses renováveis. Se não estiver entregando resultado, você não tem obrigação de continuar. Simples assim.",
  },
  {
    q: "Por que vocês e não outra agência?",
    a: "Essa pergunta você deveria fazer pra qualquer agência antes de contratar. O que a gente oferece é transparência no processo, dedicação real ao seu caso e resultado mensurável. Se depois da conversa não fizer sentido, a gente mesmo vai dizer.",
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
        <span className="text-[1rem] font-semibold text-white/80 group-hover:text-white transition-colors duration-200 leading-snug">
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
            <p className="pb-6 text-[0.92rem] leading-[1.85] text-white/50 max-w-[600px]">
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
      className="px-[5vw] py-12 md:py-[10vh] border-t border-white/5 bg-secondary/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
