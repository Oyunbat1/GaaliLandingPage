"use client";

import React from "react";
import { motion, easeOut, easeInOut } from "framer-motion";

// --- Animation Variants ---

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easeOut }
    },
};

const floatingBlobVariants = {
    animate: (custom: number) => ({
        y: [0, -20, 0],
        x: [0, custom % 2 === 0 ? 15 : -15, 0],
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.5, 0.3],
        transition: {
            duration: 7 + custom,
            repeat: Infinity,
            ease: easeInOut,
        }
    })
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1, delay: 0.6, ease: easeOut }
    }
};

export default function HeroSection() {
    // White pattern to overlay on the blue background
    const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <div>
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#6125da] bg-linear-to-tr from-[#2A00FF] to-[#]">

                {/* Background Pattern Overlay */}
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"
                    style={{ backgroundImage: `url("${heroPattern}")` }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">

                    {/* --- Left Side: Text Content --- */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left text-white"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* <motion.span
                            variants={fadeUpVariants}
                            className="inline-block py-1 px-3 rounded-full bg-white bg-opacity-30 border border-[#2A00FF] border-opacity-50 text-sm font-semibold tracking-wide mb-6 text-[#2A00FF]"
                        >
                            DIGITAL FIRST CUSTOMS
                        </motion.span> */}

                        <motion.h2 variants={fadeUpVariants} className="text-4xl lg:text-5xl font-bold leading-tight mb-6">

                            <br />
                            {/* Accent Color Text */}
                            <span className="text-white">
                                Шуурхай, Ил тод, Найдвартай
                            </span>
                        </motion.h2>

                        <motion.p variants={fadeUpVariants} className="text-lg text-white mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed opacity-90">
                            Экспорт, импортын гаалийн бүрдүүлэлтийг
                            цаг хугацаа, орон зайнаас үл хамааран
                            шийдвэрлэх боломж
                        </motion.p>

                        <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <motion.a
                                href="#services"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-[#AA00FF] px-8 py-3.5 rounded-md font-bold shadow-lg shadow-[#2A00FF]/50 transition duration-300"
                            >
                                Үйлчилгээ үзэх
                            </motion.a>
                            <motion.a
                                href="#about"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="border border-white/40 text-white px-8 py-3.5 rounded-md font-bold transition duration-300 hover:border-white"
                            >
                                Дэлгэрэнгүй
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* --- Right Side: Abstract Visual & Glass Card --- */}
                    <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center">
                        <div className="relative w-full max-w-md">

                            {/* Decorative Blobs - Using Theme Colors */}
                            <motion.div
                                custom={1}
                                variants={floatingBlobVariants}
                                animate="animate"
                                className="absolute top-0 -left-4 w-72 h-72 bg-[#AA00FF] rounded-full mix-blend-screen filter blur-3xl opacity-40"
                            ></motion.div>
                            <motion.div
                                custom={2}
                                variants={floatingBlobVariants}
                                animate="animate"
                                className="absolute bottom-0 -right-4 w-72 h-72 bg-[#D889FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 delay-75"
                            ></motion.div>

                            {/* Glassmorphism Card */}

                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}