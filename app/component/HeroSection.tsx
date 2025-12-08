"use client";

import React from "react";
import { motion, easeOut, easeInOut } from "framer-motion";

// 1. Define Animation Variants for reusability and cleaner JSX

// Variant for stagger containers ( orchestrates children timing)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between each child starting
            delayChildren: 0.3,   // Initial delay before starting sequence
        },
    },
};

// Variant for items fading up from below
const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easeOut } // Smooth ease out
    },
};

const floatingBlobVariants = {
    animate: (custom: number) => ({
        y: [0, -20, 0],
        x: [0, custom % 2 === 0 ? 15 : -15, 0],
        scale: [1, 1.05, 1],
        opacity: [0.2, 0.3, 0.2],
        transition: {
            duration: 7 + custom,
            repeat: Infinity,
            ease: easeInOut,
        }
    })
};


export default function HeroSection() {
    const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <div>
            {/* 2. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#ad1d55] bg-linear-to-br from-[#ad1d55] to-[#5e0a28]">
                {/* Background Pattern Overlay */}
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"
                    style={{ backgroundImage: `url("${heroPattern}")` }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">

                    {/* --- Left Side: Text Content (Staggered Animation) --- */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left text-white"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span variants={fadeUpVariants} className="inline-block py-1 px-3 rounded-full bg-rose-900 bg-opacity-50 border border-rose-300 text-sm font-semibold tracking-wide mb-6">
                            DIGITAL FIRST CUSTOMS
                        </motion.span>
                        <motion.h2 variants={fadeUpVariants} className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Төрийн Үйлчилгээг Цахимаар:
                            <br />
                            <span className="text-rose-100">Хурдан, Шуурхай, Ил Тод</span>
                        </motion.h2>
                        <motion.p variants={fadeUpVariants} className="text-lg text-rose-50 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Гаалийн бүрдүүлэлт, татвар төлөлт, барааны мэдээллийг цаг хугацаа,
                            орон зайнаас үл хамааран шийдвэрлэх боломж.
                        </motion.p>
                        <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            {/* Added subtle hover tap effect to buttons */}
                            <motion.a
                                href="#services"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-[#ad1d55] px-8 py-3.5 rounded-md font-bold shadow-lg transition duration-300"
                            >
                                Үйлчилгээ үзэх
                            </motion.a>
                            <motion.a
                                href="#about"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="border border-white text-white px-8 py-3.5 rounded-md font-bold transition duration-300"
                            >
                                Дэлгэрэнгүй
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* --- Right Side: Abstract Visual --- */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Decorative back elements - Replaced Tailwind animate-pulse with smooth Framer float */}
                            <motion.div
                                custom={1} // Passes to variants to offset timing
                                variants={floatingBlobVariants}
                                animate="animate"
                                className="absolute top-0 -left-4 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl"
                            ></motion.div>
                            <motion.div
                                custom={2}
                                variants={floatingBlobVariants}
                                animate="animate"
                                className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl delay-75"
                            ></motion.div>

                            {/* Main visual card - Adds Entrance and Hover effect */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.6, // Wait for text to start loading first
                                    ease: "easeOut" // Smooth ease out
                                }}
                                whileHover={{
                                    y: -10, // Subtle lift on hover
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" // Increased shadow on hover
                                }}
                                className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-8 shadow-2xl will-change-transform"
                            >
                                <div className="flex items-center justify-between mb-6 border-b border-white border-opacity-10 pb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                    <div className="text-white text-xs font-mono opacity-70">
                                        CUSTOMS_SYSTEM_V2.0
                                    </div>
                                </div>
                                {/* Mock Stats - Added subtle staggered entry for internal items */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-2 gap-4"
                                >
                                    <motion.div variants={fadeUpVariants} className="bg-rose-950 bg-opacity-40 p-4 rounded-lg">
                                        <i className="fa-solid fa-ship text-rose-300 mb-2"></i>
                                        <div className="text-2xl font-bold text-white">1,240</div>
                                        <div className="text-xs text-rose-200">
                                            Өнөөдрийн импорт
                                        </div>
                                    </motion.div>
                                    <motion.div variants={fadeUpVariants} className="bg-rose-950 bg-opacity-40 p-4 rounded-lg">
                                        <i className="fa-solid fa-check-circle text-green-300 mb-2"></i>
                                        <div className="text-2xl font-bold text-white">98%</div>
                                        <div className="text-xs text-rose-200">Шийдвэрлэлт</div>
                                    </motion.div>
                                    <motion.div variants={fadeUpVariants} className="col-span-2 bg-rose-950 bg-opacity-40 p-4 rounded-lg flex items-center justify-between">
                                        <div>
                                            <div className="text-sm font-bold text-white">
                                                E-Declaration
                                            </div>
                                            <div className="text-xs text-rose-200">
                                                Status: Active
                                            </div>
                                        </div>
                                        <i className="fa-solid fa-wifi text-white animate-pulse"></i>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}