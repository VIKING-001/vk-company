import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "../assets/logo.png";
import fotoHero from "../assets/foto-perfil.jpg";
import { WHATSAPP_LINK } from "../lib/constants";

const PhotoBlock = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[340px] mx-auto lg:max-w-none lg:w-[420px] xl:w-[500px] h-[380px] md:h-[460px] lg:h-[560px] xl:h-[680px] relative flex-shrink-0"
    >
      {/* Neon halo behind photo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-[120%] h-[120%] rounded-full" 
          style={{
            background: 'radial-gradient(ellipse at 50% 60%, rgba(254,196,17,0.45) 0%, rgba(254,196,17,0.2) 25%, rgba(254,196,17,0.08) 50%, transparent 70%)',
            filter: 'blur(24px)',
          }} 
        />
      </div>
      
      {/* Photo with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-10 overflow-hidden rounded-[2rem] shadow-[0_0_80px_rgba(254,196,17,0.15)]"
      >
        <img
          src={fotoHero}
          alt="Rodrigo Cabral – Founder"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[40%]" style={{
          background: 'linear-gradient(to top, hsl(222 47% 2%) 0%, transparent 100%)'
        }} />
      </motion.div>
      
      {/* Corner accents */}
      <motion.div 
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary/50 z-20" 
      />
      <motion.div 
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary/30 z-20" 
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-[5vw] pb-[8vh] relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-[#0F0F10]">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" 
        />
      </div>

      {/* Vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-[12.5vw] pointer-events-none opacity-[0.03]">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-px h-full bg-primary" />
        ))}
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-24">
        
        {/* Content */}
        <div className="flex-1 w-full">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-fit mb-10"
          >
            <img
              src={logo}
              alt="VK Company Logo"
              className="h-[80px] md:h-[100px] w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[0.72rem] tracking-[0.22em] uppercase text-primary mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-primary inline-block" />
            Agência Digital Estratégica
          </motion.div>

          {/* Headline with staggered words */}
          <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.92] tracking-[0.02em]">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Seu negócio
            </motion.span>
            <motion.em 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="not-italic text-primary block"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="max-w-[500px] mt-8 text-[1rem] font-light leading-[1.8] text-white/70"
          >
            A VK Company não executa tarefas — ela transforma negócios. Entramos como parceiros estratégicos, diagnosticamos o cenário completo e entregamos soluções que realmente alavancam seus resultados.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-8 mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-bold text-[0.82rem] tracking-[0.14em] uppercase px-10 py-5 transition-colors shadow-[0_10px_40px_rgba(201,162,77,0.2)]"
            >
              Quero contratar
            </motion.a>
            <span className="text-[0.72rem] tracking-[0.18em] uppercase text-white/40">
              ↓ Conheça o método
            </span>
          </motion.div>
        </div>

        {/* Desktop Photo */}
        <div className="hidden lg:block">
          <PhotoBlock />
        </div>

      </div>
    </section>
  );
};

export default Hero;

