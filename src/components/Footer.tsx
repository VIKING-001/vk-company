import logo from "../assets/logo.png";

const Footer = () => {
  console.log("Footer rendering with logo:", logo);
  
  return (
    <footer className="border-t border-white/5 px-[5vw] py-16 flex flex-col sm:flex-row justify-between items-center gap-10 bg-[#0F0F10]">
      <div className="flex items-center bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(201,162,77,0.1)]">
        <img src={logo} alt="VK Company Logo" className="h-[35px] w-auto object-contain filter drop-shadow-[0_0_10px_rgba(201,162,77,0.4)]" />
      </div>
      <p className="text-[0.72rem] text-white/30 tracking-[0.08em] uppercase">
        © 2025 VK Company. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
