import { useEffect, useRef } from "react";

const services = [
  { num: "01", name: "Assessoria Estratégica", desc: "Diagnóstico completo do seu negócio digital. Identificamos gargalos, oportunidades e traçamos um plano claro de ação para escalar." },
  { num: "02", name: "Sites & Landing Pages", desc: "Páginas de alta conversão com design premium. Do briefing ao ar em tempo recorde, focando em resultado e não só em estética." },
  { num: "03", name: "Tráfego Pago", desc: "Campanhas no Meta Ads e Google Ads gerenciadas com foco em ROI real. Cada real investido rastreado e otimizado." },
  { num: "04", name: "Identidade Visual & Branding", desc: "Marcas que comunicam autoridade antes de qualquer palavra. Logo, paleta, tipografia e guia de estilo completo." },
];

const Services = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    gridRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-[5vw] py-[10vh] border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-20 gap-4">
        <div>
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-4">O que fazemos</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[0.04em] leading-none">
            Nossos<br /><span className="text-primary">Serviços</span>
          </h2>
        </div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {services.map((s) => (
          <div key={s.num} className="reveal group bg-secondary p-10 relative overflow-hidden hover:bg-card transition-colors">
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
            <div className="font-display text-[3.5rem] text-border leading-none mb-6 group-hover:text-primary/15 transition-colors">
              {s.num}
            </div>
            <h3 className="font-display text-[1.6rem] tracking-[0.05em] mb-4 text-foreground">{s.name}</h3>
            <p className="text-[0.9rem] leading-[1.7] text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
