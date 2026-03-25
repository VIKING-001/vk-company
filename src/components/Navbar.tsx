import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  console.log("Navbar rendering with logo:", logo);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-[5vw] py-5 bg-background/85 backdrop-blur-xl border-b border-border">
      <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
        <img 
          src={logo} 
          alt="VK Company Logo" 
          className="h-[45px] md:h-[55px] w-auto object-contain block" 
          style={{ minWidth: '100px' }}
        />
      </Link>
      <a
        href="https://wa.me/5500000000000"
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
