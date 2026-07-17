import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    "aria-label"?: string;
}

/**
 * Botão/link com efeito magnético — segue o cursor suavemente quando próximo.
 * Efeito premium usado em sites de alto padrão.
 */
const MagneticButton = ({
    children,
    className = "",
    strength = 0.35,
    onClick,
    href,
    target,
    rel,
    ...rest
}: MagneticButtonProps) => {
    const ref = useRef<HTMLElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        setPos({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => setPos({ x: 0, y: 0 });

    const commonProps = {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        animate: { x: pos.x, y: pos.y },
        transition: { type: "spring" as const, stiffness: 200, damping: 15, mass: 0.3 },
        className,
    };

    if (href) {
        return (
            <motion.a
                ref={ref as React.RefObject<HTMLAnchorElement>}
                href={href}
                target={target}
                rel={rel}
                {...commonProps}
                {...rest}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            {...commonProps}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;