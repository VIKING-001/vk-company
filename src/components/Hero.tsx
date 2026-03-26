import logo from "../assets/logo.png";
import fotoHero from "../assets/foto-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-[5vw] pb-[8vh] relative overflow-hidden">
      {/* Background with Gold Glow */}
      <div className="absolute inset-0 bg-[#0F0F10]">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Vertical lines with Gold Effect */}
      {[25, 50, 75].map((pos) => (
        <div
          key={pos}
          className="absolute top-0 bottom-0 w-px opacity-[0.05]"
          style={{
            left: `${pos}%`,
            background: 'linear-gradient(180deg, transparent, var(--primary) 30%, var(--primary) 70%, transparent)',
            boxShadow: '0 0 15px var(--primary)',
          }}
        />
      ))}

      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-24">
        {/* Left Side: Copy */}
        <div className="flex-1">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] w-fit mb-12 animate-fade-up shadow-[0_0_40px_rgba(201,162,77,0.1)] relative group">
             <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
             <img 
              src={logo} 
              alt="VK Company Logo" 
              className="h-[60px] md:h-[80px] w-auto object-contain relative z-10 filter drop-shadow-[0_0_12px_rgba(201,162,77,0.4)]" 
            />
          </div>
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-primary mb-6 animate-fade-up flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            Agência Digital Estratégica
          </p>

          <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.92] tracking-[0.02em] animate-fade-up-1">
            Seu negócio<br />
            <em className="not-italic text-primary block">
              merece mais<br />
              que botões.
            </em>
          </h1>

          <p className="max-w-[500px] mt-8 text-[1rem] font-light leading-[1.8] text-white/70 animate-fade-up-2">
            A VK Company não executa tarefas — ela transforma negócios. Entramos como parceiros estratégicos, diagnosticamos o cenário completo e entregamos soluções que realmente alavancam seus resultados.
          </p>

          <div className="flex flex-wrap items-center gap-8 mt-12 animate-fade-up-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-bold text-[0.82rem] tracking-[0.14em] uppercase px-10 py-5 hover:bg-primary-light hover:scale-105 transition-all shadow-[0_10px_40px_rgba(201,162,77,0.2)]"
            >
              Quero contratar
            </a>
            <span className="text-[0.72rem] tracking-[0.18em] uppercase text-white/40">
              ↓ Conheça o método
            </span>
          </div>
        </div>

        {/* Right Side: Founder Photo */}
        <div className="hidden lg:block w-[400px] xl:w-[480px] h-[550px] xl:h-[650px] relative animate-fade-up-2">
           <div className="absolute -inset-4 border border-primary/20 rotate-1 translate-x-2 translate-y-2" />
           <div className="absolute inset-0 bg-primary/10 -z-10 translate-x-4 translate-y-4" />
           <img 
            src={fotoHero} 
            alt="Founder" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/5" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
