import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { WHATSAPP_LINK } from "../lib/constants";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      // Scrolled state logic for styling
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-[5vw] transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <Link 
        to="/" 
        className="flex items-center transition-all hover:opacity-80 active:scale-95 shrink-0"
      >
        <img 
          src={logo} 
          alt="VK Company Logo" 
          className={`w-auto object-contain block transition-all duration-500 ${
            scrolled ? "h-[32px] md:h-[38px]" : "h-[45px] md:h-[55px]"
          }`} 
          style={{ mixBlendMode: 'screen' }}
        />
      </Link>

      <div className="flex items-center gap-6">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden bg-primary text-primary-foreground font-body font-bold text-[0.72rem] md:text-[0.78rem] tracking-[0.14em] uppercase px-5 py-2.5 md:px-7 md:py-3 transition-all"
        >
          <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 inline-block">Falar Agora</span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

