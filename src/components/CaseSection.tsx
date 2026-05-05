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
      { value: "Street Luxo", label: "Posicionamento" },
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
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section
      aria-label="Cases de execução"
      className="border-t border-border bg-card/10 overflow-hidden"
    >
      <div
        className="overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Cases de sucesso da VK Company"
      >
        <div className="flex">
          {cases.map((c, index) => (
            <article
              key={index}
              className="flex-[0_0_100%] min-w-0 px-[5vw] py-10 md:py-[10vh]"
              aria-label={c.title}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                {/* Text */}
                <div>
                  <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary mb-3">Case de execução</p>
                  <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none mb-4">
                    {c.title.split(' — ')[0]} —<br />
                    {c.title.split(' — ')[1]}
                  </h2>
                  <p className="text-[0.9rem] leading-[1.7] text-muted-foreground mb-6 max-w-[500px]">
                    {c.description}
                  </p>
                  <dl className="grid grid-cols-2 gap-4">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="border-l-2 border-primary pl-3">
                        <dd className="font-display text-[1.6rem] text-primary leading-none">{m.value}</dd>
                        <dt className="text-[0.68rem] text-muted-foreground uppercase tracking-[0.08em] mt-0.5">{m.label}</dt>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Image */}
                <div className="relative h-[220px] sm:h-[280px] lg:h-[420px] bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" aria-hidden="true" />
                  <div className="absolute top-3 right-3 text-[0.6rem] tracking-[0.15em] uppercase text-white bg-primary px-2.5 py-1 rounded-full z-20 shadow-lg">
                    {c.tag}
                  </div>
                  <img
                    src={c.image}
                    alt={`Case ${c.title}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
