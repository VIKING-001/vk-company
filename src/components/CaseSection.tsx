import { useEffect, useRef } from "react";

const metrics = [
  { value: "4", label: "Camadas de funil" },
  { value: "R$450", label: "Ticket médio" },
  { value: "100%", label: "Brand do zero" },
  { value: "Street Luxo", label: "Posicionamento único" },
];

const CaseSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-[5vw] py-[10vh] border-t border-border bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="reveal">
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-4">Case de execução</p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] leading-none mb-6">
            LVII —<br />Street Luxo
          </h2>
          <p className="text-[0.95rem] leading-[1.8] text-muted-foreground mb-8">
            A LVII nasceu de um posicionamento claro: democratizar o acesso ao streetwear premium. Desenvolvemos toda a identidade visual, estratégia de marca e funil de vendas — do zero à loja ativa.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="border-l-2 border-primary pl-4">
                <div className="font-display text-[2.2rem] text-primary leading-none">{m.value}</div>
                <div className="text-[0.75rem] text-muted-foreground uppercase tracking-[0.1em] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative h-[280px] lg:h-[420px] bg-card border border-border flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, rgba(201,162,77,0.06) 0%, transparent 70%)'
          }} />
          <div className="absolute top-4 right-4 text-[0.65rem] tracking-[0.18em] uppercase text-primary border border-primary px-3 py-1">
            Case Real
          </div>
          <div className="text-center relative">
            <div className="font-display text-7xl tracking-[0.3em] text-foreground leading-none">LVII</div>
            <div className="text-[0.65rem] tracking-[0.4em] uppercase text-primary mt-2">Luxury In Vision</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
