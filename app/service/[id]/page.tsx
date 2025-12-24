"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Ensure this path matches your actual data file location
import { featuresData } from "@/lib/ServiceSectionData";

export default function ServiceDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = Number(params?.id);

    // Find the active item
    const selectedItem = featuresData.find((item) => item.id === id);

    // State
    const [selectedId, setSelectedId] = useState<number | null>(id);
    const [isHovered, setIsHovered] = useState<number | null>(null);

    // Smooth Scroll & Init Logic
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        if (id) {
            setSelectedId(id);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [id]);

    const navigateToHome = () => {
        router.push("/");
    };

    if (!selectedItem) {
        return (
            <div className="min-h-screen pt-40 text-center flex flex-col items-center justify-center">
                <p className="text-xl text-gray-600 mb-4">Мэдээлэл олдсонгүй</p>
                <button onClick={navigateToHome} className="text-[#AA00FF] underline">
                    Нүүр хуудас руу буцах
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex flex-col pb-[140px] bg-gray-50">

            {/* Main Container */}
            <div className="max-w-[1400px] mx-auto w-full px-4 lg:px-8 pt-[120px]">

                {/* --- BACK BUTTON --- */}
                <div className="mb-8">
                    <button
                        onClick={navigateToHome}
                        className="group inline-flex items-center gap-2 text-gray-600 hover:text-[#AA00FF] transition-colors duration-300 font-medium px-3 py-2 -ml-3 rounded-lg hover:bg-white/50"
                    >
                        <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="text-lg">Буцах</span>
                    </button>
                </div>

                {/* --- CONTENT LAYOUT (Sidebar + Main) --- */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center">

                    {/* --- LEFT SIDEBAR (Navigation) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white shadow-md rounded-xl lg:sticky lg:top-[120px] h-fit p-6 lg:w-[320px] flex-shrink-0"
                    >
                        <h1 className="text-xl font-bold pb-4 border-b border-gray-200 text-gray-800">
                            Үйлчилгээний төрлүүд
                        </h1>
                        <div className="grid grid-cols-1 gap-2 mt-4">
                            {featuresData.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onHoverStart={() => setIsHovered(item.id)}
                                    onHoverEnd={() => setIsHovered(null)}
                                >
                                    <Link
                                        href={`/service/${item.id}`}
                                        className={`block w-full transition-all duration-300 rounded-lg p-3 text-left text-sm font-medium flex items-center gap-3
                      ${selectedId === item.id
                                                ? "bg-[#AA00FF] text-white shadow-md"
                                                : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-[#AA00FF]"
                                            }
                    `}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* --- RIGHT CONTENT (Detail View) --- */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedItem.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white shadow-md rounded-xl w-full flex-grow p-6 lg:p-10"
                        >
                            <div className="flex flex-col gap-8">

                                {/* Header Section */}
                                <div className="flex flex-col gap-4 border-b border-gray-100 pb-6">
                                    <div className="flex gap-6 items-center">
                                        <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center text-[#AA00FF] mb-2">
                                            <selectedItem.icon className="w-7 h-7" strokeWidth={2} />
                                        </div>
                                        <motion.h1
                                            className="text-2xl font-bold text-gray-900 pb-3"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {selectedItem.title}
                                        </motion.h1></div>
                                    <motion.p
                                        className="text-gray-600 leading-relaxed text-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {selectedItem.shortDescription}
                                    </motion.p>
                                </div>

                                {/* Dynamic Content Loop */}
                                <div className="space-y-8">
                                    {selectedItem.content?.map((contentItem, index) => (
                                        <motion.div
                                            key={contentItem.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                            className="flex flex-col gap-4"
                                        >
                                            {/* Sub-title */}
                                            {contentItem.title && (
                                                <h2 className="text-xl font-bold text-gray-800">
                                                    {contentItem.title}
                                                </h2>
                                            )}

                                            {/* First Rules List */}
                                            {contentItem.first_rules && (
                                                <ul className="space-y-3 bg-gray-50 p-6 rounded-lg">
                                                    {contentItem.first_rules.map((rule) => (
                                                        <motion.li
                                                            key={rule.id}
                                                            className="flex items-start gap-3 text-gray-700"
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            <span className="text-[#AA00FF] mt-1.5 shrink-0">
                                                                ●
                                                            </span>
                                                            <span className="leading-relaxed">
                                                                {rule.rule1}
                                                            </span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Second Rules List (if exists) */}
                                            {"second_rules" in contentItem &&
                                                Array.isArray(contentItem.second_rules) && (
                                                    <ul className="space-y-3 mt-2 pl-4 border-l-2 border-gray-200">
                                                        {contentItem.second_rules.map(
                                                            (rule: any, idx: number) => (
                                                                <motion.li
                                                                    key={idx}
                                                                    className="flex items-start gap-3 text-gray-600"
                                                                    whileHover={{ x: 5 }}
                                                                >
                                                                    <span className="text-gray-400 mt-1.5 shrink-0">
                                                                        ○
                                                                    </span>
                                                                    <span className="leading-relaxed">
                                                                        {rule.rule1}
                                                                    </span>
                                                                </motion.li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}