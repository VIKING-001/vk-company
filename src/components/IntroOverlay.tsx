import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const IntroOverlay = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("vk-intro-seen")) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        setShow(true);
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setShow(false);
            document.body.style.overflow = "";
            sessionStorage.setItem("vk-intro-seen", "1");
        }, 2600);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0F0F10]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        className="absolute top-1/2 left-0 right-0 h-px bg-primary origin-center"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 0.6 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <motion.div
                        className="absolute w-[400px] h-[400px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(254,196,17,0.15) 0%, transparent 70%)",
                            filter: "blur(40px)",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <motion.div
                        className="relative z-10 flex flex-col items-center"
                        initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        <img
                            src={logo}
                            alt="VK Company"
                            className="h-[60px] md:h-[80px] w-auto object-contain"
                            style={{ mixBlendMode: "screen" }}
                        />
                        <motion.p
                            className="text-[0.6rem] md:text-[0.7rem] tracking-[0.4em] uppercase text-primary/60 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            Agencia Digital
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="absolute inset-0 bg-[#0F0F10]"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 1.8 }}
                        style={{ transformOrigin: "top" }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-[#0F0F10]"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 1.8 }}
                        style={{ transformOrigin: "bottom" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroOverlay;
