import { motion } from "framer-motion";
import fotoPerfil from "../assets/foto-fundador.jpg";

const About = () => {
  return (
    <section
      aria-label="Sobre o fundador"
      className="px-[5vw] py-12 md:py-[12vh] bg-background relative overflow-hidden border-t border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Photo Container */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="order-1 lg:order-1 relative group"
        >
          <div className="absolute -inset-4 border border-primary/10 rotate-2 -z-10 group-hover:rotate-0 transition-transform duration-500" aria-hidden="true" />
          <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm">
            <img
              src={fotoPerfil}
              alt="Rodrigo Cabral, Founder & CEO da VK Company"
              className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              style={{ transform: 'scale(1)', transition: 'filter 0.7s ease, transform 0.7s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute bottom-6 -right-4 xl:-right-6 bg-primary p-4 xl:p-6 hidden sm:block shadow-2xl shadow-primary/30"
          >
            <div className="font-display text-base xl:text-2xl text-primary-foreground leading-none mb-1">Rodrigo Cabral</div>
            <div className="text-[0.55rem] tracking-[0.25em] uppercase text-primary-foreground/80">Founder & CEO</div>
          </motion.div>
        </motion.div>

        {/* Text Container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="order-2 lg:order-2"
        >
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-6">Sobre o fundador</p>
          <h2 className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.1] mb-8">
            Estratégia que<br />
            <span className="text-primary italic">vem da prática.</span>
          </h2>
          <div className="space-y-6 text-[1.05rem] leading-[1.8] text-white/70 font-light">
            <p>
              Trabalhei anos vendo negócios locais perderem clientes por estratégia digital ruim. Não por falta de produto — por falta de direção. Fundei a VK Company porque sabia que dava pra fazer diferente.
            </p>
            <p>
              Cada cliente que a gente assume passa por uma conversa honesta primeiro. Se não enxergarmos onde podemos ajudar de verdade, falamos isso antes de qualquer proposta.
            </p>
            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-l-2 border-primary pl-6 py-2 italic text-white"
            >
              "Não me interessa ter uma carteira grande de clientes. Me interessa ter uma carteira de clientes que cresceram."
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
