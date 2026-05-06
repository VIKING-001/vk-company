import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { LeadForm } from "@/components/LeadForm";

const Diagnostico = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-4 border-b border-white/5 bg-background/90 backdrop-blur-xl">
        <Link to="/" aria-label="VK Company — Voltar ao início">
          <img
            src={logo}
            alt="VK Company"
            className="h-[32px] w-auto object-contain"
            style={{ mixBlendMode: "screen" }}
          />
        </Link>
        <Link
          to="/"
          className="text-[0.68rem] tracking-[0.18em] uppercase text-white/30 hover:text-white/60 transition-colors duration-200"
        >
          ← Voltar ao site
        </Link>
      </header>

      {/* Content */}
      <main className="pt-[80px] pb-20 px-[5vw]">
        <div className="py-12 md:py-16">
          <LeadForm />
        </div>
      </main>
    </div>
  );
};

export default Diagnostico;
