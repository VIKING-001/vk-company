import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-[5vw] pb-[8vh] relative overflow-hidden">
      {/* Background with Neon Glow */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      {/* Vertical lines with Neon Effect */}
      {[25, 50, 75].map((pos) => (
        <div
          key={pos}
          className="absolute top-0 bottom-0 w-px opacity-20"
          style={{
            left: `${pos}%`,
            background: 'linear-gradient(180deg, transparent, var(--primary) 30%, var(--primary) 70%, transparent)',
            boxShadow: '0 0 15px var(--primary)',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2.5rem] w-fit mb-12 animate-fade-up shadow-[0_0_30px_rgba(56,189,248,0.25)] relative group">
           <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
           <img 
            src={logo} 
            alt="VK Company Logo" 
            className="h-[60px] md:h-[80px] w-auto object-contain relative z-10 filter drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]" 
          />
        </div>
        <p className="text-[0.72rem] tracking-[0.22em] uppercase text-primary mb-6 animate-fade-up flex items-center gap-3">
          <span className="w-8 h-px bg-primary inline-block" />
          Agência Digital Estratégica
        </p>

        <h1 className="font-display text-[clamp(4rem,11vw,9rem)] leading-[0.92] tracking-[0.02em] animate-fade-up-1">
          Seu negócio<br />
          <em className="not-italic text-primary block">
            merece mais<br />
            que botões.
          </em>
        </h1>

        <p className="max-w-[520px] mt-8 text-[1.05rem] font-light leading-[1.7] text-muted-foreground animate-fade-up-2">
          A VK Company não executa tarefas — ela transforma negócios. Entramos como parceiros estratégicos, diagnosticamos o cenário completo e entregamos soluções que realmente alavancam seus resultados.
        </p>

        <div className="flex items-center gap-8 mt-12 animate-fade-up-3">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-bold text-[0.82rem] tracking-[0.14em] uppercase px-8 py-4 hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,162,77,0.3)] transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.573-1.462A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.734-6.388-1.988l-.364-.253-3.014.963.998-2.965-.277-.384A9.943 9.943 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
            Quero contratar
          </a>
          <span className="text-[0.72rem] tracking-[0.18em] uppercase text-muted-foreground">
            ↓ Conheça a agência
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
