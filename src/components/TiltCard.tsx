import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    maxTilt?: number;
    glare?: boolean;
}

/**
 * Card com efeito 3D tilt — inclina suavemente seguindo o cursor.
 * Inclui glare (brilho) opcional para um toque premium.
 */
const TiltCard = ({
    children,
    className = "",
    maxTilt = 8,
    glare = true,
}: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState("");
    const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        const rotateX = ((percentY - 50) / 50) * -maxTilt;
        const rotateY = ((percentX - 50) / 50) * maxTilt;
        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        );
        setGlarePos({ x: percentX, y: percentY, opacity: 0.15 });
    };

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
        setGlarePos((p) => ({ ...p, opacity: 0 }));
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform,
                transformStyle: "preserve-3d",
                transition: "transform 0.2s ease-out",
            }}
            className={`relative ${className}`}
        >
            {children}
            {glare && (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
                    style={{
                        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(254,196,17,${glarePos.opacity}) 0%, transparent 60%)`,
                        transition: "opacity 0.3s ease",
                    }}
                />
            )}
        </motion.div>
    );
};

export default TiltCard;