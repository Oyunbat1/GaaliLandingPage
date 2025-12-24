"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import {
    ChevronLeft,
    Instagram,
    Facebook,
    Linkedin,
    Twitter,
    Phone,
    Mail,
    MessageCircle,
    MessageSquare,
    ExternalLink
} from "lucide-react";
import { getMemberById } from "@/lib/Members";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOut },
    },
};

export default function TeamMemberPage() {
    const { id } = useParams();
    const router = useRouter();
    const memberIdStr = Array.isArray(id) ? id[0] : id;

    const handleHome = () => {
        router.push("/");
    };

    const member = memberIdStr !== undefined ? getMemberById(memberIdStr) : undefined;

    // Same background logic as the main page
    if (!member) {
        return (
            <div
                className="min-h-screen text-white flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, #AA00FF 0%, #B840FF 50%, #D889FF 100%)` }}
            >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                    <p className="text-xl font-semibold">Гишүүн олдсонгүй.</p>
                    <button
                        onClick={handleHome}
                        className="mt-4 text-sm text-[#D889FF] hover:text-white underline underline-offset-4"
                    >
                        Буцах
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen w-full text-white relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, #AA00FF 0%, #B840FF 50%, #D889FF 100%)` }}
        >
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#D889FF] rounded-full blur-[120px] opacity-20" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#AA00FF] rounded-full blur-[120px] opacity-40" />
            </div>

            {/* Top Navigation Bar */}
            <div className="fixed top-0 left-0 w-full p-6 z-50">
                <button
                    onClick={() => handleHome()}
                    className="group flex items-center gap-2 bg-[#D889FF] hover:bg-[#AA00FF] backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full text-white transition-all duration-300"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300 text-white" />
                    <span className="font-medium">Буцах</span>
                </button>
            </div>

            <main className="max-w-7xl  px-6 pt-32 pb-20 relative z-10">
                <div className=" gap-12 lg:gap-20 items-start">

                    {/* Right Column: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col gap-10 lg:pt-4"
                    >
                        {/* Header Info */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-4">
                            <span className="inline-flex items-center py-1.5 px-4 w-fit rounded-full bg-white/10 border border-white/20 text-[#D889FF] text-xs font-bold tracking-wider backdrop-blur-md shadow-sm">
                                TEAM MEMBER
                            </span>

                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                                    {member.name}
                                </h1>
                                <p className="text-xl md:text-2xl text-white/70 font-light flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-[#D889FF] inline-block" />
                                    {member.job}
                                </p>
                            </div>
                        </motion.div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {/* About / Bio */}
                        {/* <motion.div variants={itemVariants} className="flex flex-col gap-4">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                                Тухай
                            </h2>
                            <div className="p-8 rounded-[2rem] border border-white/10 bg-black/20 backdrop-blur-xl shadow-xl">
                                <p className="text-base md:text-lg leading-relaxed text-white/90 font-light whitespace-pre-line">
                                    {member.about}
                                </p>
                            </div>
                        </motion.div> */}

                        {/* Socials */}
                        {member.socials && member.socials.length > 0 && (
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col gap-5 mt-2"
                            >
                                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                                    Холбогдох
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {member.socials.map((social) => {
                                        const iconKey = social.name.toLowerCase();
                                        const Icon = SocialIconMap[iconKey] || Linkedin;
                                        const isStatic = iconKey === "phone" || iconKey === "email";

                                        return (
                                            <SocialLink
                                                key={social.id}
                                                href={social.url}
                                                icon={<Icon size={18} />}
                                                label={social.name}
                                                isStatic={isStatic}
                                            />
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

// Helper for Social Icons
const SocialIconMap: Record<string, any> = {
    instagram: Instagram,
    facebook: Facebook,
    linkedin: Linkedin,
    twitter: Twitter,
    phone: Phone,
    email: Mail,
    viber: MessageCircle,
    wechat: MessageSquare,
};

function SocialLink({
    href,
    icon,
    label,
    isStatic,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
    isStatic?: boolean;
}) {
    const baseClasses =
        "flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 transition-all duration-300";

    if (isStatic) {
        const displayValue = href.replace(/^(tel:|mailto:)/, "");
        return (
            <div className={`${baseClasses} cursor-default hover:bg-white/10 hover:border-white/30`}>
                <span className="text-[#D889FF]">{icon}</span>
                <span className="text-sm font-medium tracking-wide">{displayValue}</span>
            </div>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} hover:bg-white hover:text-[#AA00FF] hover:border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10 group`}
        >
            <span className="group-hover:scale-110 transition-transform">{icon}</span>
            <span className="text-sm font-bold">{label}</span>
            <ExternalLink size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </a>
    );
}