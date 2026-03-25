import logo from "../assets/logo.png";

const Footer = () => {
  console.log("Footer rendering with logo:", logo);
  
  return (
    <footer className="border-t border-white/5 px-[5vw] py-12 flex flex-col sm:flex-row justify-between items-center gap-8 bg-background/40 backdrop-blur-xl">
      <div className="flex items-center bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(56,189,248,0.1)]">
        <img src={logo} alt="VK Company Logo" className="h-[35px] w-auto object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
      </div>
      <p className="text-[0.75rem] text-border tracking-[0.05em]">
        © 2025 VK Company. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
