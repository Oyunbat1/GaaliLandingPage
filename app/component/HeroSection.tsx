"use client";

import React from "react";
import { motion, easeOut, easeInOut } from "framer-motion";
import Image from "next/image";

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
        opacity: [0.4, 0.6, 0.4],
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
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-58 overflow-hidden bg-[#6125da] bg-linear-to-br from-[#2A00FF] to-[#bf3b6e]">

                {/* Background Pattern Overlay */}
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"
                    style={{ backgroundImage: `url("${heroPattern}")` }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">

                    {/* --- Left Side: Text Content --- */}
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left text-white z-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2 variants={fadeUpVariants} className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            <br />
                            <span className="text-white">
                                Шуурхай, Ил тод, Найдвартай
                            </span>
                        </motion.h2>

                        <motion.p variants={fadeUpVariants} className="text-lg text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Экспорт, импортын гаалийн бүрдүүлэлтийг
                            цаг хугацаа, орон зайнаас үл хамааран
                            шийдвэрлэх боломж
                        </motion.p>

                        <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <motion.a
                                href="#services"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-[#6125da] px-8 py-3.5 rounded-md font-bold shadow-lg shadow-[#2A00FF]/50 transition duration-300"
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

                    {/* --- Right Side: Image & Visuals --- */}
                    <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end relative z-10">
                        {/* Wrapper for Blobs and Image */}
                        <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center">

                            {/* Floating Blobs (Behind Image) */}
                            <motion.div
                                custom={1}
                                variants={floatingBlobVariants}
                                animate="animate"
                                className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#AA00FF] rounded-full mix-blend-screen filter blur-3xl opacity-40"
                            />
                            <motion.div
                                custom={2}
                                variants={floatingBlobVariants}
                                animate="animate"
                                className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-[#D889FF] rounded-full mix-blend-screen filter blur-3xl opacity-30 delay-75"
                            />

                            {/* Main Image */}
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative z-10 w-full rounded-2xl cursor-pointer "
                            >
                                <Image
                                    src="/gaali6.png" // Ensure this file exists in your public folder
                                    alt="Mongolian Customs Service"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl "
                                    priority // Loads image immediately for Hero LCP optimization
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}