import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Hook que inicializa o Lenis (smooth scroll premium) no app.
 * Inclui integração com requestAnimationFrame e respeita prefers-reduced-motion.
 */
export const useSmoothScroll = () => {
    useEffect(() => {
        // Respeita usuários que preferem menos movimento
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            lerp: 0.12,
        });

        let rafId: number;
        let running = true;
        const raf = (time: number) => {
            lenis.raf(time);
            if (running) rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        const handleVisibilityChange = () => {
            running = !document.hidden;
            if (running) {
                lenis.start();
                rafId = requestAnimationFrame(raf);
            } else {
                cancelAnimationFrame(rafId);
                lenis.stop();
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Smooth scroll para links âncora
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;
            const el = document.querySelector(href);
            if (el) {
                e.preventDefault();
                lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.4 });
            }
        };
        document.addEventListener("click", handleAnchorClick);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            document.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
        };
    }, []);
};
