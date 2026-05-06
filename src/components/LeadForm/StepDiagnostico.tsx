import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const schema = z.object({
  tempo_mercado: z.string().min(1, "Campo obrigatório"),
  procedimentos_mes: z.string().min(1, "Campo obrigatório"),
  ticket_medio: z.string().min(1, "Campo obrigatório"),
  retorno_cliente: z.string().min(1, "Campo obrigatório"),
  fonte_clientes: z.string().min(1, "Campo obrigatório"),
  ciclo_vendas: z.string().min(1, "Campo obrigatório"),
  taxa_fechamento: z.string().min(1, "Campo obrigatório"),
  campanhas_pagas: z.string().min(1, "Campo obrigatório"),
  melhor_resultado: z.string().min(1, "Campo obrigatório"),
  prova_social: z.string().min(1, "Selecione uma opção"),
  diferencial: z.string().min(1, "Campo obrigatório"),
  case_marcante: z.string().min(1, "Campo obrigatório"),
  capacidade_fechamento: z.string().min(1, "Campo obrigatório"),
  objetivo_90_dias: z.string().min(1, "Campo obrigatório"),
});

type DiagData = z.infer<typeof schema>;

const inputClass = "bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-primary focus:ring-0 rounded-sm";
const taClass = `${inputClass} min-h-[90px] resize-none`;

interface Props {
  defaultValues: Partial<DiagData>;
  onNext: (data: DiagData) => void;
  onBack: () => void;
}

const SUB_STEPS = 4;

export function StepDiagnostico({ defaultValues, onNext, onBack }: Props) {
  const [sub, setSub] = useState(0);

  const form = useForm<DiagData>({
    resolver: zodResolver(schema),
    defaultValues: {
      tempo_mercado: "", procedimentos_mes: "", ticket_medio: "", retorno_cliente: "",
      fonte_clientes: "", ciclo_vendas: "", taxa_fechamento: "",
      campanhas_pagas: "", melhor_resultado: "", prova_social: "",
      diferencial: "", case_marcante: "", capacidade_fechamento: "", objetivo_90_dias: "",
      ...defaultValues,
    },
    mode: "onBlur",
  });

  async function handleSubNext() {
    const fieldsPerSub: (keyof DiagData)[][] = [
      ["tempo_mercado", "procedimentos_mes", "ticket_medio", "retorno_cliente"],
      ["fonte_clientes", "ciclo_vendas", "taxa_fechamento"],
      ["campanhas_pagas", "melhor_resultado", "prova_social"],
      ["diferencial", "case_marcante", "capacidade_fechamento", "objetivo_90_dias"],
    ];
    const valid = await form.trigger(fieldsPerSub[sub]);
    if (!valid) return;
    if (sub < SUB_STEPS - 1) setSub(sub + 1);
    else form.handleSubmit(onNext)();
  }

  const subTitles = [
    "Sobre o seu negócio",
    "Sobre seus clientes atuais",
    "Sobre marketing atual",
    "Diferencial e objetivos",
  ];

  return (
    <Form {...form}>
      <form className="space-y-1">
        {/* Sub-step label */}
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-primary mb-6">
          {subTitles[sub]} — parte {sub + 1} de {SUB_STEPS}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={sub}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="space-y-5"
          >
            {/* Sub 0 — Negócio */}
            {sub === 0 && (
              <>
                <FormField control={form.control} name="tempo_mercado" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Quanto tempo você está no mercado?</FormLabel>
                    <Input {...field} placeholder="Ex: 3 anos" className={inputClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="procedimentos_mes" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Quantos clientes/projetos fecha por mês em média?</FormLabel>
                    <Input {...field} placeholder="Ex: 8 clientes por mês" className={inputClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="ticket_medio" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Qual é o ticket médio? (mínimo e máximo)</FormLabel>
                    <Input {...field} placeholder="Ex: mínimo R$800, máximo R$3.000" className={inputClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="retorno_cliente" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Seu cliente volta a comprar? Qual a taxa aproximada?</FormLabel>
                    <Input {...field} placeholder="Ex: 40% volta, ou 'raramente'" className={inputClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
              </>
            )}

            {/* Sub 1 — Clientes */}
            {sub === 1 && (
              <>
                <FormField control={form.control} name="fonte_clientes" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">De onde vêm seus clientes hoje? Qual a principal fonte?</FormLabel>
                    <Textarea {...field} placeholder="Ex: 60% indicação, 30% Instagram, 10% Google" className={taClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="ciclo_vendas" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Do primeiro contato ao fechamento, quanto tempo demora?</FormLabel>
                    <Input {...field} placeholder="Ex: 3 dias, 1 semana..." className={inputClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="taxa_fechamento" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">De 10 pessoas que te contatam, quantas fecham?</FormLabel>
                    <Input {...field} placeholder="Ex: 3 em 10" className={inputClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
              </>
            )}

            {/* Sub 2 — Marketing */}
            {sub === 2 && (
              <>
                <FormField control={form.control} name="campanhas_pagas" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Você faz campanhas pagas? Plataforma + investimento/mês?</FormLabel>
                    <Textarea {...field} placeholder="Ex: Meta Ads, R$800/mês — ou 'nunca fiz'" className={taClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="melhor_resultado" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Qual o melhor resultado que já teve com marketing? O que funcionou?</FormLabel>
                    <Textarea {...field} placeholder="Se nunca fez, o que te impediu até hoje?" className={taClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="prova_social" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Você tem prova social? (depoimentos, resultados, antes/depois)</FormLabel>
                    <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col gap-2 mt-1">
                      {["Tenho bastante", "Tenho alguns", "Tenho pouco", "Não tenho"].map((o) => (
                        <label key={o} className={`flex items-center gap-3 p-3 border cursor-pointer transition-all duration-150 ${
                          field.value === o ? "border-primary bg-primary/10 text-white" : "border-white/10 text-white/50 hover:border-white/25"
                        }`}>
                          <RadioGroupItem value={o} className="border-white/30 text-primary" />
                          <span className="text-[0.82rem]">{o}</span>
                        </label>
                      ))}
                    </RadioGroup>
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
              </>
            )}

            {/* Sub 3 — Diferencial e objetivos */}
            {sub === 3 && (
              <>
                <FormField control={form.control} name="diferencial" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Por que as pessoas escolhem você e não o concorrente?</FormLabel>
                    <Textarea {...field} placeholder="Se eu fosse um cliente e perguntasse, o que você diria em 2 frases?" className={taClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="case_marcante" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Você tem algum case de resultado marcante para usar como exemplo?</FormLabel>
                    <Textarea {...field} placeholder="Um cliente ou projeto que deu muito certo" className={taClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="capacidade_fechamento" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Se tivesse 10 contatos qualificados por dia, quantos você fecharia?</FormLabel>
                    <Input {...field} placeholder="Ex: 3 em 10" className={inputClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
                <FormField control={form.control} name="objetivo_90_dias" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 text-[0.85rem]">Qual é o seu objetivo nos próximos 90 dias?</FormLabel>
                    <Textarea {...field} placeholder="Seja específico — número de clientes, faturamento, etc." className={taClass} />
                    <FormMessage className="text-primary text-[0.75rem]" />
                  </FormItem>
                )} />
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={() => sub === 0 ? onBack() : setSub(sub - 1)}
            className="flex-1 border border-white/15 text-white/50 font-bold text-[0.78rem] tracking-[0.12em] uppercase py-4 rounded-sm hover:border-white/30 hover:text-white/70 transition-colors duration-200"
          >
            ← Voltar
          </button>
          <button
            type="button"
            onClick={handleSubNext}
            className="flex-[2] bg-primary text-primary-foreground font-bold text-[0.82rem] tracking-[0.14em] uppercase py-4 rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            {sub === SUB_STEPS - 1 ? "Enviar diagnóstico →" : "Continuar →"}
          </button>
        </div>
      </form>
    </Form>
  );
}
