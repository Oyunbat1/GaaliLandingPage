"use client";

import { easeInOut, easeOut, motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react"; // Import actual icon components

export default function ContactSection() {
    // Animation Variants

    // 1. The Container orchestrates the timing of children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Triggers children one by one every 0.15s
                delayChildren: 0.2,
            },
        },
    };

    // 2. General fade slide up animation for text
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeInOut, // "Apple-style" smooth easing
            },
        },
    };

    // 3. Specific animation for contact items (slide in from left slightly)
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: easeOut,
            },
        },
    };

    return (
        <div>
            <section id="contact" className="py-20 bg-[#2d0510] text-white overflow-hidden">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

                        {/* Left Column - Contact Info */}
                        <div className="lg:w-1/2">
                            <motion.h2
                                variants={textVariants}
                                className="text-3xl font-bold mb-6"
                            >
                                Холбоо барих
                            </motion.h2>
                            <motion.p
                                variants={textVariants}
                                className="text-gray-400 mb-8 leading-relaxed"
                            >
                                Танд асуулт байна уу? Бид танд туслахад бэлэн байна. Доорх сувгуудаар бидэнтэй холбогдоорой.
                            </motion.p>

                            <div className="space-y-6">
                                {/* Contact Item 1: Phone */}
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }} // Subtle nudge right on hover
                                    className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-white/5 cursor-default"
                                >
                                    <div className="w-12 h-12 bg-[#ad1d55] bg-opacity-80 rounded-full flex items-center justify-center shadow-lg shadow-[#ad1d55]/20">
                                        {/* Replaced <i> tag with Lucide Phone icon */}
                                        <Phone size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-300 uppercase tracking-wider mb-1">Утас</div>
                                        <div className="font-bold text-lg tracking-wide">976-95118788 ,976-88868595</div>
                                    </div>
                                </motion.div>

                                {/* Contact Item 2: Email */}
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-white/5 cursor-default"
                                >
                                    <div className="w-12 h-12 bg-[#ad1d55] bg-opacity-80 rounded-full flex items-center justify-center shadow-lg shadow-[#ad1d55]/20">
                                        {/* Replaced <i> tag with Lucide Mail icon */}
                                        <Mail size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-300 uppercase tracking-wider mb-1">Имэйл</div>
                                        <div className="font-bold text-lg">togtokhnomt99@gmail.com, info@customsbroker.mn</div>
                                    </div>
                                </motion.div>

                                {/* Contact Item 3: Address */}
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-3 rounded-lg transition-colors hover:bg-white/5 cursor-default"
                                >
                                    <div className="w-12 h-12 bg-[#ad1d55] bg-opacity-80 rounded-full flex items-center justify-center shadow-lg shadow-[#ad1d55]/20 flex-shrink-0">
                                        {/* Replaced <i> tag with Lucide MapPin icon */}
                                        <MapPin size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-300 uppercase tracking-wider mb-1">Хаяг</div>
                                        <div className="font-bold leading-snug">Улаанбаатар хот, Сүхбаатар дүүрэг, Их тойруу 81/1</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Column (Optional placeholder if you add a map or form later) */}
                        <div className="lg:w-1/2 hidden lg:block">
                            {/* You could add a contact form or an image here later */}
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}