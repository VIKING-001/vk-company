import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

interface Props {
  onBack: () => void;
}

export function StepDescartado({ onBack }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8 space-y-6"
    >
      <div>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-white/30 mb-4">Uma resposta honesta</p>
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-4">
          Talvez não seja<br />o momento certo.
        </h2>
        <p className="text-[0.9rem] text-white/50 leading-[1.75] max-w-[420px] mx-auto">
          Não trabalhamos com quem ainda está descobrindo o caminho — não porque não queiramos ajudar, mas porque o resultado não vai aparecer sem intenção real de investir.
        </p>
      </div>

      <div className="border border-white/8 bg-white/3 p-5 max-w-[380px] mx-auto text-left space-y-3">
        <p className="text-[0.72rem] tracking-[0.18em] uppercase text-white/30">O que fazer agora</p>
        <p className="text-[0.85rem] text-white/60 leading-[1.65]">
          Quando você tiver clareza do que quer e estiver pronto para investir, nos procure. A conversa vai ser completamente diferente — e o resultado também.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onBack}
          className="border border-white/15 text-white/50 font-bold text-[0.78rem] tracking-[0.12em] uppercase px-8 py-4 rounded-sm hover:border-white/30 hover:text-white/70 transition-colors duration-200"
        >
          ← Rever minhas respostas
        </button>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/8 text-white/60 font-bold text-[0.78rem] tracking-[0.12em] uppercase px-8 py-4 rounded-sm hover:bg-white/12 transition-colors duration-200"
        >
          Falar assim mesmo
        </a>
      </div>
    </motion.div>
  );
}
