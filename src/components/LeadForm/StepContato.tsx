import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  nome: z.string().min(3, "Informe seu nome completo"),
  whatsapp: z.string().min(14, "Informe um WhatsApp válido"),
  email: z.string().email("Informe um e-mail válido"),
  empresa: z.string().min(2, "Informe o nome do negócio"),
});

type ContatoData = z.infer<typeof schema>;

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

interface Props {
  defaultValues: Partial<ContatoData>;
  onNext: (data: ContatoData) => void;
  onBack: () => void;
}

export function StepContato({ defaultValues, onNext, onBack }: Props) {
  const form = useForm<ContatoData>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", whatsapp: "", email: "", empresa: "", ...defaultValues },
  });

  const inputClass = "bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-primary focus:ring-0 rounded-sm";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-5">

        <FormField control={form.control} name="nome" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">Nome completo</FormLabel>
            <Input {...field} placeholder="Rodrigo Cabral" className={inputClass} />
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        <FormField control={form.control} name="whatsapp" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">WhatsApp</FormLabel>
            <Input
              {...field}
              placeholder="(62) 99999-9999"
              className={inputClass}
              onChange={(e) => field.onChange(maskPhone(e.target.value))}
            />
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">E-mail</FormLabel>
            <Input {...field} type="email" placeholder="voce@empresa.com" className={inputClass} />
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        <FormField control={form.control} name="empresa" render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white/80 text-[0.85rem]">Empresa / Nome do negócio</FormLabel>
            <Input {...field} placeholder="Ex: Clínica Estética X" className={inputClass} />
            <FormMessage className="text-primary text-[0.75rem]" />
          </FormItem>
        )} />

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 border border-white/15 text-white/50 font-bold text-[0.78rem] tracking-[0.12em] uppercase py-4 rounded-sm hover:border-white/30 hover:text-white/70 transition-colors duration-200"
          >
            ← Voltar
          </button>
          <button
            type="submit"
            className="flex-[2] bg-primary text-primary-foreground font-bold text-[0.82rem] tracking-[0.14em] uppercase py-4 rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Continuar →
          </button>
        </div>
      </form>
    </Form>
  );
}
