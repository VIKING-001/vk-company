import logo from "../assets/logo.png";

const Footer = () => {
  console.log("Footer rendering with logo:", logo);
  
  return (
    <footer className="border-t border-white/5 px-[5vw] py-16 flex flex-col sm:flex-row justify-between items-center gap-10 bg-card">
      <div className="flex items-center">
        <img src={logo} alt="VK Company Logo" className="h-[50px] w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
      </div>
      <p className="text-[0.72rem] text-white/30 tracking-[0.08em] uppercase">
        © 2025 VK Company. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
