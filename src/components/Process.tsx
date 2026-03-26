import { useEffect, useRef } from "react";
import fotoTrabalho from "../assets/foto-trabalho.jpg";

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Entendemos seu negócio por completo — cenário atual, concorrência, público e objetivos reais." },
  { num: "02", title: "Estratégia", desc: "Mapeamos os pontos de alavancagem e definimos o plano de ação com prioridades claras." },
  { num: "03", title: "Execução", desc: "Desenvolvemos e implementamos tudo com velocidade e qualidade de nível premium." },
  { num: "04", title: "Escala", desc: "Monitoramos, otimizamos e escalamos o que funciona — de forma contínua e mensurável." },
];

const Process = () => {
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
    <section ref={ref} className="px-[5vw] py-12 md:py-[10vh] border-t border-white/5 bg-background">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 md:mb-16">
        <div className="reveal">
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-3">Como trabalhamos</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] tracking-[0.02em] leading-[0.9]">
            Nosso<br /><span className="text-primary italic">Processo</span>
          </h2>
        </div>
        {/* Work photo — shown on tablet+ only */}
        <div className="reveal hidden md:block w-full max-w-[380px] h-[200px] lg:h-[240px] relative group overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-primary/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
          <img
            src={fotoTrabalho}
            alt="Processo VK"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 border border-primary/20 pointer-events-none shadow-[inset_0_0_60px_rgba(5,5,20,0.7)] rounded-xl" />
        </div>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative">
        {/* Connecting line desktop */}
        <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />

        {steps.map((s) => (
          <div key={s.num} className="reveal lg:pr-8 relative flex gap-4 sm:block">
            <div className="w-14 h-14 flex-shrink-0 border border-border rounded-full flex items-center justify-center sm:mb-6 bg-secondary font-display text-lg text-primary relative z-10">
              {s.num}
            </div>
            <div>
              <h3 className="font-display text-[1.15rem] tracking-[0.05em] mb-2 sm:mb-3">{s.title}</h3>
              <p className="text-[0.85rem] leading-[1.7] text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
