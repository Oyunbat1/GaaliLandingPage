"use client";

import React, { useState } from "react";
import { easeInOut, easeOut, motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Copy, Check } from "lucide-react";

export default function ContactSection() {
    // State to track which item was copied for visual feedback
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        // Reset feedback after 2 seconds
        setTimeout(() => setCopiedId(null), 2000);
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: easeInOut },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: easeOut },
        },
    };

    const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <section id="contact" className="py-20 bg-[#2A00FF] bg-gradient-to-br from-[#2A00FF] to-[#ad1d55] text-white overflow-hidden relative">

            {/* Pattern Overlay */}
            <div
                className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"
                style={{ backgroundImage: `url("${heroPattern}")` }}
            />

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

                    {/* Left Column - Contact Info */}
                    <div className="lg:w-1/2 w-full">
                        <motion.h2
                            variants={textVariants}
                            className="text-3xl lg:text-4xl font-bold mb-6"
                        >
                            Холбоо барих
                        </motion.h2>
                        <motion.p
                            variants={textVariants}
                            className="text-blue-100 mb-8 leading-relaxed max-w-lg opacity-90"
                        >
                            Танд асуулт байна уу? Бид танд туслахад бэлэн байна. Доорх сувгуудаар бидэнтэй холбогдоорой.
                        </motion.p>

                        <div className="space-y-4">

                            {/* Item 1: Phone */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.01 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-[#2A00FF]/20"
                            >
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md shrink-0">
                                    <Phone size={22} className="text-[#2A00FF]" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-semibold">Утас</div>

                                    {/* Phone Line 1 */}
                                    <div className="flex items-center justify-between group/btn">
                                        <a href="tel:+97695118788" className="font-bold text-lg tracking-wide text-white hover:text-blue-200 transition-colors">
                                            976-95118788
                                        </a>
                                        <CopyButton
                                            text="97695118788"
                                            id="p1"
                                            activeId={copiedId}
                                            onCopy={handleCopy}
                                        />
                                    </div>

                                    {/* Phone Line 2 */}
                                    <div className="flex items-center justify-between group/btn">
                                        <a href="tel:+97688868595" className="text-sm text-white/80 hover:text-white transition-colors">
                                            976-88868595
                                        </a>
                                        <CopyButton
                                            text="97688868595"
                                            id="p2"
                                            activeId={copiedId}
                                            onCopy={handleCopy}
                                            small
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 2: Email */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.01 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-[#2A00FF]/20"
                            >
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md shrink-0">
                                    <Mail size={22} className="text-[#2A00FF]" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-semibold">Имэйл</div>

                                    {/* Email Line 1 */}
                                    <div className="flex items-center justify-between group/btn">
                                        <a href="mailto:info@customsbroker.mn" className="font-bold text-lg text-white hover:text-blue-200 transition-colors">
                                            info@customsbroker.mn
                                        </a>
                                        <CopyButton
                                            text="info@customsbroker.mn"
                                            id="e1"
                                            activeId={copiedId}
                                            onCopy={handleCopy}
                                        />
                                    </div>

                                    {/* Email Line 2 */}
                                    <div className="flex items-center justify-between group/btn">
                                        <a href="mailto:togtokhnomt99@gmail.com" className="text-sm text-white/80 hover:text-white transition-colors">
                                            togtokhnomt99@gmail.com
                                        </a>
                                        <CopyButton
                                            text="togtokhnomt99@gmail.com"
                                            id="e2"
                                            activeId={copiedId}
                                            onCopy={handleCopy}
                                            small
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Item 3: Address (Static) */}
                            {/* <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md"
                            >
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md shrink-0">
                                    <MapPin size={22} className="text-[#2A00FF]" />
                                </div>
                                <div>
                                    <div className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-semibold">Хаяг</div>
                                    <div className="font-bold text-white">Улаанбаатар хот, Сүхбаатар дүүрэг</div>
                                    <div className="text-sm text-white/80">Их тойруу 81/1</div>
                                </div>
                            </motion.div> */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

/**
 * Reusable Copy Button Component for cleaner code
 */
function CopyButton({
    text,
    id,
    activeId,
    onCopy,
    small = false
}: {
    text: string;
    id: string;
    activeId: string | null;
    onCopy: (text: string, id: string) => void;
    small?: boolean;
}) {
    const isCopied = activeId === id;

    return (
        <button
            onClick={() => onCopy(text, id)}
            className="p-2 hover:bg-white/20 rounded-lg transition-all relative flex items-center justify-center"
            title="Copy to clipboard"
        >
            <AnimatePresence mode="wait">
                {isCopied ? (
                    <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                    >
                        <Check size={small ? 14 : 16} className="text-green-400" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="copy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <Copy size={small ? 14 : 16} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Tooltip */}
            <AnimatePresence>
                {isCopied && (
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: -25 }}
                        exit={{ opacity: 0 }}
                        className="absolute whitespace-nowrap bg-green-500 text-white text-[10px] px-2 py-0.5 rounded font-bold pointer-events-none shadow-lg"
                    >
                        Хуулагдлаа!
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}