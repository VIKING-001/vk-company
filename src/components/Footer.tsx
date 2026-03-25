import logo from "../assets/logo.png";

const Footer = () => {
  console.log("Footer rendering with logo:", logo);
  
  return (
    <footer className="border-t border-border px-[5vw] py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center">
        <img src={logo} alt="VK Company Logo" className="h-[45px] w-auto object-contain opacity-90 block" />
      </div>
      <p className="text-[0.75rem] text-border tracking-[0.05em]">
        © 2025 VK Company. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
