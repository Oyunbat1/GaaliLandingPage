"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    Users,
    CornerDownRight,
    ArrowUpRight,
    Instagram,
    Facebook,
    Linkedin,
    Twitter,
    Phone,
    Mail,
    MessageCircle, // Using for Viber
    MessageSquare, // Using for WeChat
    Copy,
} from "lucide-react";

import { zonesData, getMembersByZoneId, Member } from "@/lib/Members";

// --- ANIMATION VARIANTS ---
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
    },
};

// --- ICON MAP ---
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

// --- MAIN COMPONENT ---
export default function TeamSection() {
    const [activeZoneId, setActiveZoneId] = useState<number>(zonesData[0]?.id || 1);
    const visibleZones = zonesData.slice(0, 7);
    const activeMembers = getMembersByZoneId(activeZoneId);

    return (
        <section
            id="salbar"
            className="relative w-full min-h-screen text-white py-20 px-6 overflow-hidden bg-[#6125da] bg-linear-to-br from-[#2A00FF] to-[#bf3b6e]"
        >
            <div className="max-w-6xl mx-auto relative z-10 h-full flex flex-col">
                <div className="mb-10 flex gap-5 items-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight tracking-tight ml-3">
                        Салбар нэгжүүд
                    </h2>
                </div>

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-[600px]">
                    {/* LEFT SIDE: Zone Navigation */}
                    <div className="lg:w-1/3 flex-shrink-0">
                        <div className="lg:sticky lg:top-10 flex flex-col gap-3">
                            {visibleZones.map((zone) => {
                                const isParentActive = activeZoneId === zone.id;

                                return (
                                    <div key={zone.id} className="flex flex-col gap-2">
                                        {/* Main Parent Button */}
                                        <button
                                            onClick={() => setActiveZoneId(zone.id)}
                                            className={`group relative flex items-center justify-between w-full p-4 md:p-5 text-left rounded-2xl border transition-all duration-300 outline-none
                      ${isParentActive
                                                    ? "bg-white border-white shadow-xl shadow-black/10 translate-x-2"
                                                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 text-white"
                                                }`}
                                        >
                                            <span
                                                className={`text-lg transition-colors duration-300 ${isParentActive
                                                        ? "font-bold text-[#2A00FF]"
                                                        : "font-medium text-white/90"
                                                    }`}
                                            >
                                                {zone.zone}
                                            </span>

                                            {/* Icon Indicator */}
                                            {isParentActive ? (
                                                <div className="bg-[#2A00FF] rounded-full p-1">
                                                    <ChevronRight className="w-4 h-4 text-white" />
                                                </div>
                                            ) : (
                                                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                            )}
                                        </button>

                                        {/* Sub-Zones (ALWAYS VISIBLE NOW) */}
                                        {zone.zones && zone.zones.length > 0 && (
                                            <div className="flex flex-col gap-2 ml-4 pl-4 border-l border-white/20 mt-1">
                                                {zone.zones.map((subZone) => {
                                                    const isSubActive = activeZoneId === subZone.id;
                                                    return (
                                                        <button
                                                            key={subZone.id}
                                                            onClick={() => setActiveZoneId(subZone.id)}
                                                            className={`group flex items-center gap-3 text-left py-3 px-4 rounded-xl text-sm transition-all duration-200
                              ${isSubActive
                                                                    ? "bg-[#6125da] text-white font-bold shadow-md translate-x-2"
                                                                    : "text-white/70 hover:text-white hover:bg-white/10"
                                                                }`}
                                                        >
                                                            <CornerDownRight
                                                                size={14}
                                                                className={isSubActive ? "opacity-100" : "opacity-40"}
                                                            />
                                                            {subZone.zone}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Members Grid */}
                    <div className="lg:w-2/3 flex-grow">
                        <div className="bg-black/20 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 border border-white/10 min-h-full shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeZoneId}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full"
                                >
                                    <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">
                                                Багийн гишүүд
                                            </h3>
                                            <p className="text-blue-200 text-sm font-medium">
                                                Active Team Members
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                                            <Users size={16} className="text-[#a58aff]" />
                                            <span className="text-white font-mono text-sm">
                                                {activeMembers.length}
                                            </span>
                                        </div>
                                    </div>

                                    {activeMembers.length > 0 ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {activeMembers.map((member) => (
                                                <MemberCard key={member.id} member={member} />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-[300px] text-white/40 border-2 border-dashed border-white/10 rounded-2xl bg-white/5">
                                            <Users size={48} className="mb-4 opacity-20" />
                                            <p>Энэ хэсэгт одоогоор гишүүн бүртгэгдээгүй байна.</p>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- SUB-COMPONENTS ---

function MemberCard({ member }: { member: Member }) {
    return (
        <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col h-full w-[300px] bg-white backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#2A00FF]/20 transition-all duration-300"
        >
            {/* Top Decoration Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2A00FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                    <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold text-[#2A00FF] truncate leading-tight transition-colors duration-300">
                            {member.name}
                        </h4>
                        <p className="text-sm text-[#2A00FF] font-medium truncate mt-1">
                            {member.job}
                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-[#2A00FF]/10 mb-6" />

                <div className="flex-1 flex flex-col">
                    {member.socials && member.socials.length > 0 ? (
                        <>
                            <h5 className="text-xs font-bold uppercase tracking-widest text-[#2A00FF]/60 mb-4">
                                Холбогдох
                            </h5>
                            <div className="grid grid-cols-1 gap-3">
                                {member.socials.map((social) => {
                                    const iconKey = social.name.toLowerCase();
                                    const Icon = SocialIconMap[iconKey] || Linkedin;
                                    // WECHAT and Phone/Email are treated as static text (Copy action)
                                    // Viber is treated as a link (Direct action)
                                    const isStatic = iconKey === "phone" || iconKey === "email" || iconKey === "wechat";

                                    return (
                                        <SocialLink
                                            key={social.id}
                                            href={social.url}
                                            icon={<Icon size={16} />}
                                            label={social.name}
                                            isStatic={isStatic}
                                        />
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-[#2A00FF]/40 text-sm italic">
                            Холбогдох мэдээлэл байхгүй
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

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
        "flex items-center justify-between w-full px-4 py-2.5 rounded-md border border-[#2A00FF] bg-transparent transition-all duration-300";

    // Handle Static items (WeChat, Phone, Email) -> Copy to Clipboard
    if (isStatic) {
        const displayValue = href.replace(/^(tel:|mailto:)/, "");

        const handleCopy = () => {
            navigator.clipboard.writeText(displayValue);
            alert(`${label} copied to clipboard: ${displayValue}`);
        };

        return (
            <div
                onClick={handleCopy}
                className={`${baseClasses} cursor-pointer opacity-90 hover:opacity-100 hover:bg-[#2A00FF]/5 active:scale-95`}
                title="Click to Copy"
            >
                <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-[#2A00FF]">{icon}</span>
                    <span className="text-sm text-[#2A00FF] font-mono leading-3 select-all truncate">
                        {displayValue}
                    </span>
                </div>
                {/* Copy Icon to indicate action */}
                <Copy size={14} className="text-[#2A00FF] opacity-60" />
            </div>
        );
    }

    // Handle Link items (Viber, Facebook, etc.) -> Direct Link
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} group/link hover:bg-[#2A00FF]/5 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#2A00FF]/10`}
        >
            <div className="flex items-center gap-3">
                <span className="text-[#2A00FF] transition-colors duration-300">
                    {icon}
                </span>
                <span className="text-sm font-medium text-[#2A00FF] transition-colors duration-300 capitalize">
                    {label}
                </span>
            </div>

            <ArrowUpRight
                size={14}
                className="text-[#2A00FF] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
            />
        </a>
    );
}