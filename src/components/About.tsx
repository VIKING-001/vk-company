import { motion } from "framer-motion";
import fotoPerfil from "../assets/foto-fundador.jpg";

const About = () => {
  return (
    <section className="px-[5vw] py-12 md:py-[12vh] bg-background relative overflow-hidden border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Photo Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-1 relative group"
        >
          <div className="absolute -inset-4 border border-primary/10 rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-700" />
          <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              src={fotoPerfil} 
              alt="Perfil Fundador" 
              className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" 
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-6 -right-4 xl:-right-6 bg-primary p-4 xl:p-6 hidden sm:block shadow-2xl shadow-primary/30"
          >
            <div className="font-display text-base xl:text-2xl text-primary-foreground leading-none mb-1">Rodrigo Cabral</div>
            <div className="text-[0.55rem] tracking-[0.25em] uppercase text-primary-foreground/80">Founder & CEO</div>
          </motion.div>
        </motion.div>

        {/* Text Container */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-2"
        >
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-6">Sobre o fundador</p>
          <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.1] mb-8">
            Estratégia que<br /> 
            <span className="text-primary italic">vem da prática.</span>
          </h2>
          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-white/70 font-light">
            <p>
              A VK Company foi fundada com uma missão clara: elevar o padrão do mercado digital. Não acreditamos em fórmulas prontas ou automações genéricas.
            </p>
            <p>
              Cada projeto que assumimos passa por um olhar crítico e estratégico, focado em criar um posicionamento de marca sólido e funis de vendas que convertem de verdade.
            </p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="border-l-2 border-primary pl-6 py-2 italic text-white"
            >
              "Nosso objetivo não é apenas entregar um serviço, mas sim construir o próximo grande case do seu setor."
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

