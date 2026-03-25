const Footer = () => {
  return (
    <footer className="border-t border-border px-[5vw] py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="font-display text-[1.3rem] tracking-[0.1em] text-muted-foreground">
        VK<span className="text-primary">.</span>COMPANY
      </div>
      <p className="text-[0.75rem] text-border tracking-[0.05em]">
        © 2025 VK Company. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
