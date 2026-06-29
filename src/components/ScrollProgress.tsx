import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Barra de progresso de scroll fixa no topo da página.
 * Usa spring physics para um movimento suave e premium.
 */
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden="true"
            style={{
                scaleX,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                transformOrigin: "0%",
                zIndex: 9999,
                background:
                    "linear-gradient(90deg, #FEC411 0%, #FFD860 50%, #FEC411 100%)",
                boxShadow: "0 0 12px rgba(254,196,17,0.6)",
            }}
        />
    );
};

export default ScrollProgress;