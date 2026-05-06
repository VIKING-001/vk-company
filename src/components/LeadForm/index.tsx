import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StepTriagem } from "./StepTriagem";
import { StepContato } from "./StepContato";
import { StepDiagnostico } from "./StepDiagnostico";
import { StepSucesso } from "./StepSucesso";
import { StepDescartado } from "./StepDescartado";
import { saveLead, type LeadData } from "@/lib/supabase";
import { notifyLead } from "@/lib/notify";

type Step = "triagem" | "descartado" | "contato" | "diagnostico" | "sucesso";

const STEP_ORDER: Step[] = ["triagem", "contato", "diagnostico", "sucesso"];

const STEP_LABELS: Partial<Record<Step, string>> = {
  triagem: "Triagem",
  contato: "Seus dados",
  diagnostico: "Diagnóstico",
  sucesso: "Concluído",
};

const stepIndex = (step: Step) => STEP_ORDER.indexOf(step);

export function LeadForm() {
  const [step, setStep] = useState<Step>("triagem");
  const [formData, setFormData] = useState<Partial<LeadData>>({});
  const [sending, setSending] = useState(false);

  const progressSteps = STEP_ORDER.filter((s) => s !== "sucesso");
  const currentIdx = stepIndex(step);

  async function handleFinalSubmit(diagData: Omit<LeadData,
    "negocio" | "desafio" | "marketing_anterior" | "orcamento" | "quando_comecar" | "qualificado" |
    "nome" | "whatsapp" | "email" | "empresa"
  >) {
    const full: LeadData = { ...formData, ...diagData } as LeadData;
    setSending(true);
    try {
      await saveLead(full);
      await notifyLead(full);
    } catch (e) {
      console.error("Erro ao salvar lead:", e);
    } finally {
      setSending(false);
      setStep("sucesso");
    }
  }

  return (
    <div className="w-full max-w-[640px] mx-auto">

      {/* Progress bar — só nas etapas normais */}
      {step !== "descartado" && step !== "sucesso" && (
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            {progressSteps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`h-0.5 flex-1 transition-all duration-500 ${i < currentIdx ? "bg-primary" : i === currentIdx ? "bg-primary/60" : "bg-white/10"}`} />
                {i === progressSteps.length - 1 && null}
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {progressSteps.map((s, i) => (
              <span
                key={s}
                className={`text-[0.6rem] tracking-[0.15em] uppercase transition-colors duration-300 ${
                  i <= currentIdx ? "text-primary" : "text-white/20"
                }`}
              >
                {STEP_LABELS[s]}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Step header */}
      {step === "triagem" && (
        <div className="mb-8">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-primary mb-3">Diagnóstico gratuito</p>
          <h1 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-2">
            Antes de tudo,<br />
            <span className="text-white/40">me conta um pouco.</span>
          </h1>
          <p className="text-[0.85rem] text-white/40 leading-[1.7]">
            5 perguntas rápidas. Nada genérico — só o que importa pra entender se faz sentido a gente trabalhar junto.
          </p>
        </div>
      )}

      {step === "contato" && (
        <div className="mb-8">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-primary mb-3">Seus dados</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-tight mb-2">
            Ótimo. Agora preciso<br />
            <span className="text-white/40">saber com quem falo.</span>
          </h2>
          <p className="text-[0.85rem] text-white/40 leading-[1.7]">
            Só para entrar em contato. Não compartilhamos com ninguém.
          </p>
        </div>
      )}

      {step === "diagnostico" && (
        <div className="mb-8">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-primary mb-3">Diagnóstico estratégico</p>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-tight mb-2">
            Agora vamos<br />
            <span className="text-white/40">ao que interessa.</span>
          </h2>
          <p className="text-[0.85rem] text-white/40 leading-[1.7]">
            14 perguntas sobre o seu negócio. Quanto mais detalhe, melhor a análise.
          </p>
        </div>
      )}

      {/* Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {step === "triagem" && (
            <StepTriagem
              defaultValues={formData}
              onNext={(data, qualificado) => {
                setFormData((f) => ({ ...f, ...data, qualificado }));
                setStep(qualificado ? "contato" : "descartado");
              }}
            />
          )}

          {step === "descartado" && (
            <StepDescartado onBack={() => setStep("triagem")} />
          )}

          {step === "contato" && (
            <StepContato
              defaultValues={formData}
              onNext={(data) => {
                setFormData((f) => ({ ...f, ...data }));
                setStep("diagnostico");
              }}
              onBack={() => setStep("triagem")}
            />
          )}

          {step === "diagnostico" && (
            <StepDiagnostico
              defaultValues={formData}
              onNext={handleFinalSubmit}
              onBack={() => setStep("contato")}
            />
          )}

          {step === "sucesso" && (
            <StepSucesso
              nome={formData.nome || ""}
              whatsapp={formData.whatsapp || ""}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {sending && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[0.8rem] text-white/50 tracking-wide">Enviando diagnóstico...</p>
          </div>
        </div>
      )}
    </div>
  );
}
