import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const schema = z.object({
  negocio: z.string().min(3, "Conta um pouco sobre o que você faz"),
  desafio: z.string().min(1, "Selecione uma opção"),
  marketing_anterior: z.string().min(1, "Selecione uma opção"),
  orcamento: z.string().min(1, "Selecione uma opção"),
  quando_comecar: z.string().min(1, "Selecione uma opção"),
});

type TriagemData = z.infer<typeof schema>;

const desafioOptions = [
  { value: "Atrair mais clientes", label: "Atrair mais clientes" },
  { value: "Converter melhor os que chegam", label: "Converter melhor os que chegam" },
  { value: "Estruturar e fortalecer a marca", label: "Estruturar e fortalecer a marca" },
  { value: "Crescer com consistência", label: "Crescer com consistência" },
];

const orcamentoOptions = [
  { value: "Até R$1.500", label: "Até R$1.500" },
  { value: "R$1.500 – R$3.000", label: "R$1.500 – R$3.000" },
  { value: "R$3.000 – R$6.000", label: "R$3.000 – R$6.000" },
  { value: "Acima de R$6.000", label: "Acima de R$6.000" },
];

const quandoOptions = [
  { value: "Agora — já decidi", label: "Agora — já decidi" },
  { value: "Em breve — estou avaliando", label: "Em breve — estou avaliando" },
  { value: "Ainda pesquisando — sem prazo", label: "Ainda pesquisando — sem prazo" },
];

interface Props {
  defaultValues: Partial<TriagemData>;
  onNext: (data: TriagemData, qualificado: boolean) => void;
}

export function StepTriagem({ defaultValues, onNext }: Props) {
  const form = useForm<TriagemData>({
    resolver: zodResolver(schema),
    defaultValues: { negocio: "", desafio: "", marketing_anterior: "", orcamento: "", quando_comecar: "", ...defaultValues },
  });

  function onSubmit(data: TriagemData) {
    const qualificado = !(
      data.quando_comecar === "Ainda pesquisando — sem prazo" &&
      data.orcamento === "Até R$1.500"
    );
    onNext(data, qualificado);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        {/* Q1 */}
        <FormField control={form.control} name="negocio" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">
              Qual é o seu negócio e o que você vende?
            </FormLabel>
            <Input
              {...field}
              placeholder="Ex: Clínica de estética em Goiânia, vendo procedimentos..."
              className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-primary focus:ring-0 rounded-sm"
            />
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        {/* Q2 */}
        <FormField control={form.control} name="desafio" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">
              Qual é o maior desafio no seu negócio agora?
            </FormLabel>
            <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {desafioOptions.map((o) => (
                <label
                  key={o.value}
                  className={`flex items-center gap-3 p-4 border cursor-pointer transition-all duration-150 ${
                    field.value === o.value
                      ? "border-primary bg-primary/10 text-white"
                      : "border-white/10 bg-white/3 text-white/50 hover:border-white/25"
                  }`}
                >
                  <RadioGroupItem value={o.value} className="border-white/30 text-primary" />
                  <span className="text-[0.82rem]">{o.label}</span>
                </label>
              ))}
            </RadioGroup>
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        {/* Q3 */}
        <FormField control={form.control} name="marketing_anterior" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">
              Você já investiu em marketing digital antes?
            </FormLabel>
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col sm:flex-row gap-2 mt-2">
              {["Sim, já investi", "Não, nunca investi"].map((o) => (
                <label
                  key={o}
                  className={`flex-1 flex items-center gap-3 p-4 border cursor-pointer transition-all duration-150 ${
                    field.value === o
                      ? "border-primary bg-primary/10 text-white"
                      : "border-white/10 bg-white/3 text-white/50 hover:border-white/25"
                  }`}
                >
                  <RadioGroupItem value={o} className="border-white/30 text-primary" />
                  <span className="text-[0.82rem]">{o}</span>
                </label>
              ))}
            </RadioGroup>
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        {/* Q4 */}
        <FormField control={form.control} name="orcamento" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">
              Qual é o orçamento mensal disponível para marketing?
            </FormLabel>
            <RadioGroup value={field.value} onValueChange={field.onChange} className="grid grid-cols-2 gap-2 mt-2">
              {orcamentoOptions.map((o) => (
                <label
                  key={o.value}
                  className={`flex items-center gap-3 p-4 border cursor-pointer transition-all duration-150 ${
                    field.value === o.value
                      ? "border-primary bg-primary/10 text-white"
                      : "border-white/10 bg-white/3 text-white/50 hover:border-white/25"
                  }`}
                >
                  <RadioGroupItem value={o.value} className="border-white/30 text-primary" />
                  <span className="text-[0.82rem]">{o.label}</span>
                </label>
              ))}
            </RadioGroup>
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        {/* Q5 — chave */}
        <FormField control={form.control} name="quando_comecar" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">
              Quando você quer começar?
            </FormLabel>
            <p className="text-[0.72rem] text-white/30 -mt-1">Seja honesto — isso não elimina ninguém, só ajuda a gente a priorizar.</p>
            <RadioGroup value={field.value} onValueChange={field.onChange} className="flex flex-col gap-2 mt-2">
              {quandoOptions.map((o) => (
                <label
                  key={o.value}
                  className={`flex items-center gap-3 p-4 border cursor-pointer transition-all duration-150 ${
                    field.value === o.value
                      ? "border-primary bg-primary/10 text-white"
                      : "border-white/10 bg-white/3 text-white/50 hover:border-white/25"
                  }`}
                >
                  <RadioGroupItem value={o.value} className="border-white/30 text-primary" />
                  <span className="text-[0.82rem]">{o.label}</span>
                </label>
              ))}
            </RadioGroup>
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground font-bold text-[0.82rem] tracking-[0.14em] uppercase py-4 rounded-sm hover:bg-primary/90 transition-colors duration-200"
        >
          Continuar →
        </button>
      </form>
    </Form>
  );
}
