import { useEffect, useRef } from "react";
import fotoPerfil from "../assets/foto-perfil.jpg";

const About = () => {
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
    <section ref={ref} className="px-[5vw] py-[15vh] bg-[#0F0F10] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div className="reveal order-2 lg:order-1">
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-6">Sobre o fundador</p>
          <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.1] mb-8">
            Estratégia que<br /> 
            <span className="text-primary italic">vem da prática.</span>
          </h2>
          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-white/70 font-light">
            <p>
              A VK Company foi fundada com uma missão clara: elevar o padrão do mercado digital. Não acreditamos em fórmulas prontas ou automações genéricas.
            </p>
            <p>
              Cada projeto que assumimos passa por um olhar crítico e estratégico, focado em criar um posicionamento de marca sólido e funis de vendas que convertem de verdade.
            </p>
            <p className="border-l-2 border-primary pl-6 py-2 italic text-white">
              "Nosso objetivo não é apenas entregar um serviço, mas sim construir o próximo grande case do seu setor."
            </p>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2 relative group">
          <div className="absolute -inset-4 border border-primary/10 -rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-700" />
          <div className="aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src={fotoPerfil} 
              alt="Perfil Fundador" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
            />
          </div>
          <div className="absolute bottom-10 -left-10 bg-primary p-8 hidden xl:block shadow-2xl">
            <div className="font-display text-4xl text-primary-foreground leading-none mb-1">VK</div>
            <div className="text-[0.6rem] tracking-[0.3em] uppercase text-primary-foreground/80">Founder & CEO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
