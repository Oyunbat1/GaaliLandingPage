"use client";
import React from "react";
import { motion, easeInOut } from "framer-motion";
import { ShieldCheck, HeartHandshake, Scale, CheckCircle2 } from 'lucide-react';
import { teamInfoData } from "../../lib/teamInfoData";
export default function AboutTeam() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeInOut,
            },
        },
    };

    const cardHoverVariants = {
        hover: {
            y: -8,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2, ease: easeInOut }
        }
    };
    const getIconById = (id: number) => {
        switch (id) {
            case 1: return ShieldCheck;
            case 2: return HeartHandshake;
            case 3: return Scale;
            default: return ShieldCheck;
        }
    };

    return (
        <div id="team">
            <section className="py-20 bg-white">
                <motion.div
                    className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* Header Section */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold text-gray-900 mb-6"
                        >
                            Манай багийн соёл
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            Манай компанийн харилцаа үйлчилгээ нь зөвхөн баримт бичгийн бүрдүүлэлт,
                            зөвөлгөөнд сууриласан бус <span className="text-[#ad1d55] font-semibold">харилцан итгэлцэл, хүндлэлийн</span> үндсэн дээр бүтээгддэг.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="w-24 h-1 bg-[#ad1d55] mx-auto rounded mt-6"
                        ></motion.div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamInfoData.map((item) => {
                            const IconComponent = getIconById(item.id);

                            return (
                                <motion.div
                                    key={item.id}
                                    variants={cardHoverVariants}
                                    whileHover="hover"
                                    className="bg-gray-50 p-8 rounded-xl border border-gray-100 flex flex-col h-full relative overflow-hidden"
                                >
                                    {/* Decorative background circle */}
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#ad1d55]/5 rounded-full blur-2xl"></div>

                                    {/* Icon */}
                                    <div className="mb-6 p-4 bg-white rounded-full shadow-sm w-fit border border-gray-100">
                                        <IconComponent className="w-8 h-8 text-[#ad1d55]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">
                                        {item.title}
                                    </h3>

                                    <ul className="space-y-4 flex flex-col grow relative z-10">
                                        {item.description.map((desc) => (
                                            <li key={desc.id} className="flex items-start group">
                                                <CheckCircle2 className="w-5 h-5 text-[#ad1d55] mt-1 mr-3 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                                                <span className="text-gray-600 text-sm leading-relaxed">
                                                    {desc.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>
        </div>
    );
}