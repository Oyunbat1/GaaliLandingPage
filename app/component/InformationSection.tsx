"use client";

import React from "react";
import { motion, easeInOut } from "framer-motion";
import { newspaperData } from "@/lib/NewsPaper";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Cascading effect
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeInOut } // Apple-style ease
    },
};

export default function InformationSection() {
    return (
        <section id="information" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Мэдээ, мэдээлэл</h2>
                    <div className="w-16 h-1 bg-[#ad1d55] mx-auto rounded"></div>
                </motion.div>

                {/* Grid Container */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {newspaperData.map((item) => (
                        <Link href={`/news/${item.id}`} className="block">
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                className="group flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={item.src[0]}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col grow">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                        <Calendar size={14} className="text-[#ad1d55]" />
                                        <span>2025-08-18</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-[#ad1d55] transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 grow leading-relaxed">
                                        {item.description}
                                    </p>

                                    <span className="mt-auto inline-flex items-center text-[#ad1d55] font-semibold text-sm">
                                        Дэлгэрэнгүй унших
                                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </motion.div>
                        </Link>

                    ))}
                </motion.div>
            </div>
        </section>
    );
}