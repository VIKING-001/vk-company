import { useEffect, useRef } from "react";

const Manifesto = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section className="px-[5vw] py-10 md:py-[10vh] border-t border-white/5 bg-background grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 items-start">
      <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary pt-1">
        Nossa filosofia
      </p>
      <div ref={ref} className="reveal text-[clamp(1.3rem,2.5vw,1.9rem)] font-light leading-[1.6] text-foreground">
        A maioria das agências aperta botões. Nós entramos no seu negócio, entendemos o cenário real, identificamos os pontos de alavancagem e entregamos soluções que <strong className="font-bold text-primary">somam</strong>. Não vendemos serviços isolados — vendemos <strong className="font-bold text-primary">transformação de negócio</strong>.
      </div>
    </section>
  );
};

export default Manifesto;
