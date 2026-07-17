import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor customizado com glow que segue o mouse suavemente.
 * Só aparece em dispositivos com mouse (desktop). Esconde em touch.
 * Reage a hover em elementos interáveis (a, button, [data-cursor]).
 */
const CursorGlow = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { stiffness: 350, damping: 28, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Desabilita em touch / telas pequenas
        if (window.matchMedia("(hover: none)").matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        setIsVisible(true);

        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            const interactive = target.closest(
                'a, button, [role="button"], [data-cursor="pointer"], input, textarea, select'
            );
            setIsPointer(!!interactive);
        };

        const leave = () => setIsHidden(true);
        const enter = () => setIsHidden(false);

        window.addEventListener("mousemove", move);
        document.addEventListener("mouseleave", leave);
        document.addEventListener("mouseenter", enter);

        return () => {
            window.removeEventListener("mousemove", move);
            document.removeEventListener("mouseleave", leave);
            document.removeEventListener("mouseenter", enter);
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Glow outer */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
                style={{
                    x,
                    y,
                    opacity: isHidden ? 0 : isPointer ? 0.6 : 0.35,
                }}
                transition={{ opacity: { duration: 0.2 } }}
            >
                <motion.div
                    className="rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(254,196,17,0.5) 0%, rgba(254,196,17,0.1) 40%, transparent 70%)",
                        filter: "blur(8px)",
                    }}
                    animate={{
                        width: isPointer ? 56 : 32,
                        height: isPointer ? 56 : 32,
                        x: isPointer ? -28 : -16,
                        y: isPointer ? -28 : -16,
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>

            {/* Dot inner */}
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
                style={{
                    x,
                    y,
                    opacity: isHidden ? 0 : 1,
                }}
            >
                <motion.div
                    className="rounded-full bg-primary"
                    animate={{
                        width: isPointer ? 8 : 6,
                        height: isPointer ? 8 : 6,
                        x: isPointer ? -4 : -3,
                        y: isPointer ? -4 : -3,
                    }}
                    transition={{ duration: 0.15 }}
                    style={{ boxShadow: "0 0 8px rgba(254,196,17,0.8)" }}
                />
            </motion.div>
        </>
    );
};

export default CursorGlow;