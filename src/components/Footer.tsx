const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-[5vw] py-16 flex justify-center items-center bg-card section-scan">
      <p className="text-center text-[0.72rem] text-white/30 tracking-[0.08em] uppercase">
        Estratégia · Branding · Performance — © {year} VK Company.
      </p>
    </footer>
  );
};

export default Footer;
