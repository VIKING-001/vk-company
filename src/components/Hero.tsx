import { motion } from "framer-motion";
import { useRef, useMemo } from "react";
import logo from "../assets/logo.png";
import fotoHero from "../assets/foto-perfil.jpg";
import { WHATSAPP_LINK } from "../lib/constants";

const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
});

const PhotoBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-[340px] mx-auto lg:max-w-none lg:w-[420px] xl:w-[500px] h-[380px] md:h-[460px] lg:h-[560px] xl:h-[680px] relative flex-shrink-0"
    >
      {/* Static halo glow — no animation, GPU-friendly */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="w-[110%] h-[110%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 60%, rgba(254,196,17,0.25) 0%, rgba(254,196,17,0.08) 30%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Photo */}
      <div
        className="absolute inset-0 z-10 overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] shadow-[0_0_60px_rgba(254,196,17,0.1)]"
      >
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
        className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary/40 z-20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
        className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary/20 z-20"
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-[5vw] pb-[8vh] relative overflow-hidden">
      {/* Background — static gradients, no animation */}
      <div className="absolute inset-0 bg-[#0F0F10]">
        <div
          className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(254,196,17,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(254,196,17,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
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
          <motion.div {...fadeUp(0)} className="w-fit mb-10">
            <img
              src={logo}
              alt="VK Company Logo"
              className="h-[80px] md:h-[100px] w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.15)}
            className="text-[0.72rem] tracking-[0.22em] uppercase text-primary mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-primary inline-block" />
            Agência Digital Estratégica
          </motion.div>

          {/* Headline with staggered words */}
          <h1 className="font-display text-[clamp(4rem,10vw,8.5rem)] leading-[0.92] tracking-[0.02em]">
            <motion.span
              {...fadeUp(0.3)}
              className="block"
            >
              Seu negócio
            </motion.span>
            <motion.em
              {...fadeUp(0.45)}
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
            {...fadeUp(0.55)}
            className="max-w-[500px] mt-8 text-[1rem] font-light leading-[1.8] text-white/70"
          >
            A VK Company não executa tarefas — ela transforma negócios. Entramos como parceiros estratégicos, diagnosticamos o cenário completo e entregamos soluções que realmente alavancam seus resultados.
          </motion.p>

          <motion.div
            {...fadeUp(0.65)}
            className="flex flex-wrap items-center gap-8 mt-12"
          >

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
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
