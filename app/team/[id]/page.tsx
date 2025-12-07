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
} from "lucide-react";
import { getMemberById } from "@/lib/Members";

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

    const member =
        memberIdStr !== undefined ? getMemberById(memberIdStr) : undefined;

    const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    if (!member) {
        return (
            <div className="min-h-screen bg-[#ad1d55] bg-gradient-to-br from-[#ad1d55] to-[#5e0a28] text-white flex items-center justify-center">
                <p className="text-xl font-semibold">Гишүүн олдсонгүй.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-[#ad1d55] bg-gradient-to-br from-[#ad1d55] to-[#5e0a28] text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none mix-blend-overlay opacity-40"
                style={{ backgroundImage: `url("${heroPattern}")` }}
            />

            {/* Top Navigation Bar */}
            <div className="fixed top-0 left-0 w-full p-6 z-50 bg-gradient-to-br from-[#5e0a28]/90 to-transparent backdrop-blur-sm">
                <button
                    onClick={() => router.back()}
                    className="group flex items-center gap-2 text-rose-200 hover:text-white transition-colors text-sm md:text-base"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span>Буцах</span>
                </button>
            </div>

            <main className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Image (Sticky on Desktop) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeOut }}
                        >
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-rose-950/50 border border-rose-300/20 shadow-2xl shadow-rose-900/30">
                                <Image
                                    src={member.src}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col gap-10 lg:pt-8"
                    >
                        {/* Header Info */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-3">
                            <span className="inline-block py-1 px-3 w-fit rounded-full bg-rose-900 bg-opacity-50 border border-rose-300 text-sm font-semibold tracking-wide">
                                TEAM MEMBER
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                                {member.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-rose-200 font-light">
                                {member.job}
                            </p>
                        </motion.div>

                        <div className="w-full h-px bg-rose-300/30" />

                        {/* About / Bio */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-4">
                            <h2 className="text-lg font-bold uppercase tracking-widest text-rose-300/80">
                                Тухай
                            </h2>
                            <div className="p-6 rounded-xl border border-rose-300/20 bg-rose-900/30 backdrop-blur-sm">
                                <p className="text-base md:text-lg leading-relaxed text-rose-50 font-light whitespace-pre-line">
                                    {member.about}
                                </p>
                            </div>
                        </motion.div>

                        {/* Socials */}
                        {member.socials && member.socials.length > 0 && (
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col gap-4 mt-4"
                            >
                                <h2 className="text-lg font-bold uppercase tracking-widest text-rose-300/80">
                                    Холбогдох
                                </h2>
                                <div className="flex flex-wrap gap-4">
                                    {member.socials.map((social) => {
                                        // Match the 'name' from JSON to the Icon Map
                                        const iconKey = social.name.toLowerCase();
                                        const Icon = SocialIconMap[iconKey] || Linkedin;

                                        // Check if it is Phone or Email to make it static
                                        const isStatic = iconKey === "phone" || iconKey === "email";

                                        return (
                                            <SocialLink
                                                key={social.id}
                                                href={social.url}
                                                icon={<Icon size={20} />}
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
        "flex items-center gap-2 px-4 py-3 rounded-full border border-rose-300/30 bg-rose-900/20 text-rose-100 transition-all duration-300";

    if (isStatic) {
        // If it's static (Phone/Email), we strip the protocol (tel:, mailto:)
        // and show the actual value so the user can see it, instead of just the label.
        const displayValue = href.replace(/^(tel:|mailto:)/, "");

        return (
            <div className={`${baseClasses} cursor-default opacity-90`}>
                {icon}
                <span className="text-sm font-medium">{displayValue}</span>
            </div>
        );
    }

    // Regular clickable link for other socials
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} hover:bg-white hover:text-[#ad1d55] hover:border-white group`}
        >
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </a>
    );
}