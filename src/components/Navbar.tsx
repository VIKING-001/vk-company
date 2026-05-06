import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { DIAGNOSTICO_LINK } from "../lib/constants";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Sobre", href: "#sobre" },
  { label: "Processo", href: "#processo" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY.current;
    if (Math.abs(delta) < 8) return;
    if (delta > 0 && currentScrollY > 150) setHidden(true);
    else if (delta < 0) setHidden(false);
    setScrolled(currentScrollY > 50);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(handleScroll); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafId); };
  }, [handleScroll]);

  return (
    <motion.nav
      aria-label="Navegação principal"
      animate={hidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[5vw] will-change-transform ${
        scrolled
          ? "py-3 bg-background/90 backdrop-blur-xl border-b border-white/8"
          : "py-6 bg-transparent border-b border-transparent"
      }`}
      style={{ transition: "padding 0.4s ease, background-color 0.4s ease, border-color 0.4s ease" }}
    >
      <Link
        to="/"
        aria-label="VK Company — Página inicial"
        className="flex items-center shrink-0"
      >
        <img
          src={logo}
          alt="VK Company"
          className="w-auto object-contain block"
          style={{
            mixBlendMode: 'screen',
            height: scrolled ? '32px' : '45px',
            transition: 'height 0.4s ease',
          }}
        />
      </Link>

      <div className="flex items-center gap-6 md:gap-8">
        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.72rem] tracking-[0.14em] uppercase text-white/45 hover:text-white/90 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href={DIAGNOSTICO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fazer diagnóstico gratuito"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="bg-primary text-primary-foreground font-bold text-[0.72rem] md:text-[0.75rem] tracking-[0.14em] uppercase px-5 py-2.5 md:px-7 md:py-3 rounded-sm hover:bg-primary/90 transition-colors duration-200"
        >
          Diagnóstico gratuito
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
