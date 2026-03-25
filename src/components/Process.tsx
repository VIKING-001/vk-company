import { useEffect, useRef } from "react";

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
    <section ref={ref} className="px-[5vw] py-[10vh] border-t border-border">
      <div className="mb-20">
        <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-4">Como trabalhamos</p>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[0.04em] leading-none">
          Nosso<br /><span className="text-primary">Processo</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />

        {steps.map((s) => (
          <div key={s.num} className="reveal lg:pr-8 relative">
            <div className="w-16 h-16 border border-border rounded-full flex items-center justify-center mb-8 bg-secondary font-display text-xl text-primary relative z-10">
              {s.num}
            </div>
            <h3 className="font-display text-[1.3rem] tracking-[0.05em] mb-3">{s.title}</h3>
            <p className="text-[0.85rem] leading-[1.7] text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
