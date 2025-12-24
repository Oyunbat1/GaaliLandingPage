"use client";

import { easeInOut, easeOut, motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
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

    // Blob animation for the visual side
    const blobVariants = {
        animate: {
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 10,
                repeat: Infinity,
                ease: easeInOut
            }
        }
    };

    // Reusing the pattern from Hero for consistency
    const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <div>
            {/* Background: Bright Gradient matching Hero Section */}
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
                            {/* <motion.span
                                variants={textVariants}
                                className="inline-block py-1 px-3 rounded-full bg-white border border-white/20 text-[#2A00FF] font-semibold tracking-wider text-xs mb-4"
                            >
                                SUPPORT
                            </motion.span> */}
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
                                {/* Contact Item 1: Phone */}
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white backdrop-blur-md transition-all cursor-default shadow-lg shadow-[#2A00FF]/20"
                                >
                                    {/* Icon Box: White background for contrast against the blue section */}
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md shrink-0">
                                        <Phone size={22} className="text-[#2A00FF]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-semibold">Утас</div>
                                        <div className="font-bold text-lg tracking-wide text-white">976-95118788</div>
                                        <div className="text-sm text-white/80">976-88868595</div>
                                    </div>
                                </motion.div>

                                {/* Contact Item 2: Email */}
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white backdrop-blur-md transition-all cursor-default shadow-lg shadow-[#2A00FF]/20"
                                >
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md shrink-0">
                                        <Mail size={22} className="text-[#2A00FF]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-semibold">Имэйл</div>
                                        <div className="font-bold text-lg text-white">info@customsbroker.mn</div>
                                        <div className="text-sm text-white/80">togtokhnomt99@gmail.com</div>
                                    </div>
                                </motion.div>

                                {/* Contact Item 3: Address */}
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white backdrop-blur-md transition-all cursor-default shadow-lg shadow-[#2A00FF]/20"
                                >
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md shrink-0">
                                        <MapPin size={22} className="text-[#2A00FF]" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-200 uppercase tracking-wider mb-1 font-semibold">Хаяг</div>
                                        <div className="font-bold leading-snug text-white">Улаанбаатар хот, Сүхбаатар дүүрэг</div>
                                        <div className="text-sm text-white/80">Их тойруу 81/1</div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>



                    </div>
                </motion.div>
            </section>
        </div>
    );
}