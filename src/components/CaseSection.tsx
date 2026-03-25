import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import lviiCase from "../assets/lvii_case.png";
import antolinaCase from "../assets/antolina_case.png";

const cases = [
  {
    title: "LVII — Street Luxo",
    description: "A LVII nasceu de um posicionamento claro: democratizar o acesso ao streetwear premium. Desenvolvemos toda a identidade visual, estratégia de marca e funil de vendas — do zero à loja ativa.",
    image: lviiCase,
    metrics: [
      { value: "4", label: "Camadas de funil" },
      { value: "R$450", label: "Ticket médio" },
      { value: "100%", label: "Brand do zero" },
      { value: "Street Luxo", label: "Posicionamento único" },
    ],
    tag: "Case E-commerce"
  },
  {
    title: "Antolina Hotel — Habite a História",
    description: "Um hotel que une tradição e conforto em um ambiente histórico. Trabalhamos no posicionamento digital e na experiência do cliente, destacando a exclusividade e a herança cultural de suas acomodações.",
    image: antolinaCase,
    metrics: [
      { value: "Premium", label: "Acomodações" },
      { value: "Exclusivo", label: "Experiência" },
      { value: "Histórico", label: "Posicionamento" },
      { value: "100%", label: "Digital Brand" },
    ],
    tag: "Case Hospitalidade"
  }
];

const CaseSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  return (
    <section className="border-t border-border bg-card/10 backdrop-blur-md overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cases.map((c, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-[5vw] py-[12vh]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="animate-fade-up">
                  <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-4">Case de execução</p>
                  <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] leading-none mb-6">
                    {c.title.split(' — ')[0]} —<br />
                    {c.title.split(' — ')[1]}
                  </h2>
                  <p className="text-[0.95rem] leading-[1.8] text-muted-foreground mb-8 max-w-[500px]">
                    {c.description}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="border-l-2 border-primary pl-4">
                        <div className="font-display text-[2.2rem] text-primary leading-none">{m.value}</div>
                        <div className="text-[0.75rem] text-muted-foreground uppercase tracking-[0.1em] mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-[320px] lg:h-[480px] bg-black border border-white/10 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  <div className="absolute top-4 right-4 text-[0.65rem] tracking-[0.18em] uppercase text-white bg-primary px-3 py-1 rounded-full z-20 shadow-lg">
                    {c.tag}
                  </div>
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
