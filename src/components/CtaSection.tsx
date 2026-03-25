import { useEffect, useRef } from "react";

const CtaSection = () => {
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
    <section className="px-[5vw] py-[12vh] border-t border-border text-center relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(199,210,254,0.03) 0%, transparent 70%)'
      }} />

      <div ref={ref} className="reveal relative">
        <p className="text-[0.72rem] tracking-[0.25em] uppercase text-primary mb-6">
          Pronto para crescer?
        </p>
        <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] mb-8">
          Vamos<br />transformar<br /><span className="text-primary">seu negócio.</span>
        </h2>
        <p className="max-w-[500px] mx-auto mb-12 text-base text-muted-foreground leading-[1.7]">
          Uma conversa no WhatsApp é suficiente para entender se faz sentido trabalharmos juntos. Sem enrolação.
        </p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-[0.85rem] tracking-[0.14em] uppercase px-11 py-5 hover:bg-primary-light hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,162,77,0.35)] transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.573-1.462A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.734-6.388-1.988l-.364-.253-3.014.963.998-2.965-.277-.384A9.943 9.943 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
