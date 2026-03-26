import logo from "../assets/logo.png";
import fotoHero from "../assets/foto-perfil.jpg";

const PhotoBlock = () => (
  <div className="w-full max-w-[340px] mx-auto lg:max-w-none lg:w-[420px] xl:w-[500px] h-[380px] md:h-[460px] lg:h-[560px] xl:h-[680px] relative flex-shrink-0">
    {/* Neon halo behind photo */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="w-[120%] h-[120%] rounded-full" style={{
        background: 'radial-gradient(ellipse at 50% 60%, rgba(254,196,17,0.45) 0%, rgba(254,196,17,0.2) 25%, rgba(254,196,17,0.08) 50%, transparent 70%)',
        filter: 'blur(24px)',
      }} />
    </div>
    {/* Animated pulsing outer glow */}
    <div className="absolute inset-[-8%] rounded-full animate-pulse pointer-events-none z-0" style={{
      background: 'radial-gradient(ellipse at 50% 55%, rgba(254,196,17,0.15) 0%, transparent 65%)',
      filter: 'blur(40px)',
    }} />
    {/* Photo */}
    <div className="absolute inset-0 z-10 overflow-hidden rounded-[2rem] shadow-[0_0_80px_rgba(254,196,17,0.15)]">
      <img
        src={fotoHero}
        alt="Rodrigo Cabral – Founder"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute bottom-0 left-0 right-0 h-[40%]" style={{
        background: 'linear-gradient(to top, hsl(222 47% 2%) 0%, transparent 100%)'
      }} />
    </div>
    {/* Corner accents */}
    <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary/50 z-20" />
    <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary/30 z-20" />
  </div>
);

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-[5vw] pb-[8vh] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F0F10]">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Vertical lines */}
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

      {/* Desktop: side-by-side | Mobile: stacked */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-24">

        {/* Left / Top copy */}
        <div className="flex-1 w-full">
          {/* Logo */}
          <div className="w-fit mb-10 animate-fade-up">
            <img
              src={logo}
              alt="VK Company Logo"
              className="h-[80px] md:h-[100px] w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>

          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-primary mb-6 animate-fade-up flex items-center gap-3">
            <span className="w-8 h-px bg-primary inline-block" />
            Agência Digital Estratégica
          </p>

          {/* Headline */}
          <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.92] tracking-[0.02em] animate-fade-up-1">
            Seu negócio<br />
            <em className="not-italic text-primary block">
              merece mais<br />
              que botões.
            </em>
          </h1>

          {/* ---- PHOTO — mobile only, between h1 and paragraph ---- */}
          <div className="block lg:hidden mt-8">
            <PhotoBlock />
          </div>

          {/* Paragraph */}
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

        {/* ---- PHOTO — desktop only, right side ---- */}
        <div className="hidden lg:block">
          <PhotoBlock />
        </div>

      </div>
    </section>
  );
};

export default Hero;
