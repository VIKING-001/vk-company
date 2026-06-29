import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import logo from "../assets/logo.png";
import fotoHero from "../assets/foto-perfil.jpg";
import { DIAGNOSTICO_LINK } from "../lib/constants";
import MagneticButton from "./MagneticButton";
import CybercoreBackground from "./ui/cybercore-section-hero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
});

// Linha horizontal animada
function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-px pointer-events-none z-0"
      style={{ background: "linear-gradient(to right, transparent, rgba(254,196,17,0.3), transparent)" }}
      initial={{ top: "0%", opacity: 0 }}
      animate={{ top: ["10%", "90%"], opacity: [0, 0.6, 0] }}
      transition={{ duration: 6, repeat: Infinity, repeatDelay: 8, ease: "linear" }}
      aria-hidden="true"
    />
  );
}

// Badge flutuante acima do headline
function Badge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2.5 mb-6"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
        <div className="relative flex items-center gap-2 border border-primary/25 bg-primary/8 backdrop-blur-sm px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-medium">
            Agência Digital Estratégica
          </span>
        </div>
      </div>
    </motion.div>
  );
}

const PhotoBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="w-full max-w-[340px] mx-auto lg:max-w-none lg:w-[420px] xl:w-[500px] h-[380px] md:h-[460px] lg:h-[560px] xl:h-[680px] relative flex-shrink-0"
    >
      {/* Outer glow */}
      <div className="absolute -inset-6 pointer-events-none z-0" aria-hidden="true">
        <div className="w-full h-full rounded-[2.5rem]" style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(254,196,17,0.18) 0%, rgba(254,196,17,0.06) 40%, transparent 70%)',
          filter: 'blur(24px)',
        }} />
      </div>

      {/* Photo frame */}
      <div className="absolute inset-0 z-10 overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] shadow-[0_0_80px_rgba(254,196,17,0.12),0_40px_80px_rgba(0,0,0,0.5)]">
        <img
          src={fotoHero}
          alt="Rodrigo Cabral, Founder & CEO da VK Company"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%]" style={{
          background: 'linear-gradient(to top, #0F0F10 0%, transparent 100%)'
        }} />
        {/* Subtle inner border */}
        <div className="absolute inset-0 rounded-[1.5rem] lg:rounded-[2rem] ring-1 ring-white/8 pointer-events-none" />
      </div>

      {/* Corner accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
        className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-primary/50 z-20"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
        className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-primary/25 z-20"
        aria-hidden="true"
      />

      {/* Floating name tag */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-6 -left-4 xl:-left-8 z-30 hidden sm:block"
      >
        <div className="bg-primary px-4 py-3 shadow-[0_8px_30px_rgba(254,196,17,0.4)]">
          <p className="font-display text-base xl:text-lg text-primary-foreground leading-none">Rodrigo Cabral</p>
          <p className="text-[0.55rem] tracking-[0.25em] uppercase text-primary-foreground/75 mt-0.5">Founder & CEO</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse parallax para o conteúdo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const photoX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const photoY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const yVal = (e.clientY / innerHeight - 0.5) * 20;
    mouseX.set(x);
    mouseY.set(yVal);
  };

  return (
    <section
      ref={ref}
      id="inicio"
      aria-label="Seção principal"
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col justify-end px-[5vw] pb-[8vh] relative overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0F0F10]" aria-hidden="true">
        {/* Main ambient glow top-right */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%]" style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(254,196,17,0.1) 0%, rgba(254,196,17,0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        {/* Secondary glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%]" style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(254,196,17,0.06) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }} />
        {/* Cybercore animated grid background */}
        <CybercoreBackground streamCount={25} /></div>

      {/* Vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-[12.5vw] pointer-events-none" aria-hidden="true">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-px h-full" style={{
            background: 'linear-gradient(to bottom, transparent, rgba(254,196,17,0.06) 30%, rgba(254,196,17,0.06) 70%, transparent)'
          }} />
        ))}
      </div>

      {/* Animated scan line */}
      <ScanLine />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-24"
      >
        <div className="flex-1 w-full">
          {/* Logo */}
          <motion.div {...fadeUp(0)} className="w-fit mb-8">
            <img
              src={logo}
              alt="VK Company"
              className="h-[72px] md:h-[90px] w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
              loading="eager"
            />
          </motion.div>

          {/* Badge */}
          <Badge />

          {/* Headline */}
          <h1 className="font-display text-[clamp(3.8rem,10vw,8.5rem)] leading-[0.9] tracking-[0.02em]">
            <motion.span {...fadeUp(0.3)} className="block text-white" style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)" }}>
              Seu negócio
            </motion.span>
            <motion.em
              {...fadeUp(0.45)}
              className="not-italic block text-shimmer" style={{ textShadow: "0 2px 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)" }}
            >
              merece mais<br />
              que botões.
            </motion.em>
          </h1>

          {/* Mobile Photo */}
          <div className="block lg:hidden mt-8">
            <PhotoBlock />
          </div>

          <motion.p
            {...fadeUp(0.8)}
            className="max-w-[480px] mt-8 text-[1rem] font-light leading-[1.85] text-white/85" style={{ textShadow: "0 1px 20px rgba(0,0,0,0.9)" }}
          >
            A maioria das agências entrega layout. A gente estuda o seu mercado, entende onde você está perdendo dinheiro e monta o que vai fazer seu próximo mês ser melhor que o atual.
          </motion.p>

          <motion.div
            {...fadeUp(1)}
            className="flex flex-wrap items-center gap-6 mt-12"
          >
            {/* Primary CTA */}
            <motion.a
              href={DIAGNOSTICO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar questionário de qualificação"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden inline-flex items-center gap-3 text-primary-foreground font-bold text-[0.8rem] tracking-[0.16em] uppercase px-10 py-5 rounded-sm group"
              style={{
                background: 'linear-gradient(135deg, #FEC411 0%, #FFD043 50%, #FEC411 100%)',
                boxShadow: '0 8px 32px rgba(254,196,17,0.3), 0 2px 8px rgba(254,196,17,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 14px 48px rgba(254,196,17,0.5), 0 4px 16px rgba(254,196,17,0.3), inset 0 1px 0 rgba(255,255,255,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(254,196,17,0.3), 0 2px 8px rgba(254,196,17,0.2), inset 0 1px 0 rgba(255,255,255,0.2)')}
            >
              <span className="relative z-10">Iniciar qualificação</span>
              <span className="relative z-10 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">→</span>
              {/* Shine sweep */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }}
              />
            </motion.a>

            {/* Secondary link */}
            <a
              href="#servicos"
              className="flex items-center gap-2 text-[0.72rem] tracking-[0.18em] uppercase text-white/45 hover:text-white/75 transition-colors duration-200 group"
            >
              <span className="w-5 h-px bg-white/30 group-hover:bg-white/60 group-hover:w-8 transition-all duration-300" />
              Ver serviços
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            {...fadeUp(1.2)}
            className="flex items-center gap-4 mt-10"
          >
            <div className="flex -space-x-2">
              {['JA', 'MG', 'PC'].map((initials) => (
                <div key={initials} className="w-7 h-7 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center font-display text-[0.55rem] text-primary">
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-primary text-[0.65rem]">★</span>)}
              </div>
              <p className="text-[0.65rem] text-white/35 tracking-wide">+100 negócios transformados</p>
            </div>
          </motion.div>
        </div>

        {/* Desktop Photo com parallax do mouse */}
        <motion.div
          style={{ x: photoX, y: photoY }}
          className="hidden lg:block"
        >
          <PhotoBlock />
        </motion.div>
      </motion.div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px" aria-hidden="true"
        style={{ background: 'linear-gradient(to right, transparent, rgba(254,196,17,0.15), transparent)' }}
      />
    </section>
  );
};

export default Hero;
