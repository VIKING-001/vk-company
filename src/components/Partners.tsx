import { motion } from "framer-motion";
import { ShoppingBag, Heart, Bike, Shirt } from "lucide-react";

const partners = [
  {
    name: "Autêntica Moda Íntima",
    niche: "Moda Íntima Feminina",
    location: "Goiânia, GO",
    description: "Identidade visual, estratégia de marca e presença digital para uma das maiores lojas de moda íntima da região.",
    icon: Heart,
    color: "from-pink-950/40 to-transparent",
    accent: "border-pink-500/30",
  },
  {
    name: "La Vie Intimates",
    niche: "Moda Íntima Premium",
    location: "Goiânia, GO",
    description: "Posicionamento de marca voltado ao público premium. Comunicação refinada, fotografias e presença digital consistente.",
    icon: ShoppingBag,
    color: "from-rose-950/30 to-transparent",
    accent: "border-rose-400/20",
  },
  {
    name: "Honda Moto União",
    niche: "Concessionária Honda",
    location: "Goiânia, GO",
    description: "Tráfego pago, gestão de leads e estratégia digital para concessionária Honda — conectando compradores ao estoque certo.",
    icon: Bike,
    color: "from-red-950/40 to-transparent",
    accent: "border-red-500/30",
  },
  {
    name: "Camisaria Executiva",
    niche: "Moda Masculina",
    location: "Goiânia, GO",
    description: "Comunicação de marca para o público executivo. Conteúdo alinhado ao posicionamento premium da loja.",
    icon: Shirt,
    color: "from-zinc-800/40 to-transparent",
    accent: "border-zinc-500/20",
  },
];

const Partners = () => {
  return (
    <section
      aria-label="Parceiros de sucesso"
      className="px-[5vw] py-12 md:py-[10vh] border-t border-white/5 bg-background"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <p className="text-[0.68rem] tracking-[0.25em] uppercase text-primary mb-4">
            Parceiros de sucesso
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
            Negócios que confiam<br />
            <span className="text-white/40">no nosso trabalho.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className={`bg-background p-6 lg:p-8 flex flex-col gap-4 group border-t-0 border-l-0`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-sm bg-gradient-to-br ${p.color} border ${p.accent} flex items-center justify-center`}>
                  <Icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-1">
                    {p.niche} · {p.location}
                  </p>
                  <h3 className="font-display text-[1.15rem] leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
                    {p.name}
                  </h3>
                  <p className="text-[0.8rem] text-white/45 leading-[1.65]">
                    {p.description}
                  </p>
                </div>

                {/* Indicator */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  <span className="text-[0.6rem] tracking-[0.15em] uppercase text-white/25">
                    Cliente ativo
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
