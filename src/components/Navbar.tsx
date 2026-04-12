import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { WHATSAPP_LINK } from "../lib/constants";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY.current;

    // Only update if meaningful scroll happened
    if (Math.abs(delta) < 8) return;

    if (delta > 0 && currentScrollY > 150) {
      setHidden(true);
    } else if (delta < 0) {
      setHidden(false);
    }

    setScrolled(currentScrollY > 50);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);

  return (
    <motion.nav
      animate={hidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[5vw] will-change-transform ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
      style={{ transition: "padding 0.4s ease, background-color 0.4s ease, border-color 0.4s ease" }}
    >

      <Link
        to="/"
        className="flex items-center hover:opacity-80 active:scale-95 shrink-0"
        style={{ transition: "opacity 0.3s ease, transform 0.15s ease" }}
      >
        <img
          src={logo}
          alt="VK Company Logo"
          className="w-auto object-contain block"
          style={{
            mixBlendMode: 'screen',
            height: scrolled ? '32px' : '45px',
            transition: 'height 0.4s ease',
          }}
        />
      </Link>

      <div className="flex items-center gap-6">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden bg-primary text-primary-foreground font-body font-bold text-[0.72rem] md:text-[0.78rem] tracking-[0.14em] uppercase px-5 py-2.5 md:px-7 md:py-3 transition-all"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 inline-block">Falar Agora</span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
