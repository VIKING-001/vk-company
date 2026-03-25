import { useEffect, useRef } from "react";
import lviiCase from "../assets/lvii_case.png";

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
    <section ref={ref} className="px-[5vw] py-[10vh] border-t border-border bg-card/30 backdrop-blur-md">
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

        <div className="reveal relative h-[320px] lg:h-[480px] bg-black border border-white/10 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
          <div className="absolute top-4 right-4 text-[0.65rem] tracking-[0.18em] uppercase text-white bg-primary px-3 py-1 rounded-full z-20 shadow-lg">
            Case Real
          </div>
          <img 
            src={lviiCase} 
            alt="LVII Store Showcase" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
