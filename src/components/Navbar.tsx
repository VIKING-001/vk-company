import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { WHATSAPP_LINK } from "../lib/constants";

const Navbar = () => {
  console.log("Navbar rendering with logo:", logo);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-[5vw] py-4 bg-background/60 backdrop-blur-2xl border-b border-white/5">
      <Link to="/" className="flex items-center transition-all hover:scale-105 active:scale-95">
        <img 
          src={logo} 
          alt="VK Company Logo" 
          className="h-[40px] md:h-[48px] w-auto object-contain block" 
          style={{ mixBlendMode: 'screen' }}
        />
      </Link>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-primary-foreground font-body font-bold text-[0.78rem] tracking-[0.12em] uppercase px-5 py-2.5 hover:bg-primary-light transition-colors"
      >
        Falar Agora
      </a>
    </nav>
  );
};

export default Navbar;
