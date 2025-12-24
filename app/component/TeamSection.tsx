"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Users, CornerDownRight, ArrowUpRight } from "lucide-react";
import { zonesData, getMembersByZoneId, Member } from "@/lib/Members";

export default function TeamSection() {
    // 1. State for the currently active Zone ID
    const [activeZoneId, setActiveZoneId] = useState<number>(zonesData[0]?.id || 1);

    // 2. Filter logic: Show max 7 zones
    const visibleZones = zonesData.slice(0, 7);

    // 3. Get members
    const activeMembers = getMembersByZoneId(activeZoneId);

    return (
        <section
            id="salbar"
            className="relative w-full min-h-screen text-white py-20 px-6 overflow-hidden"
            // Applied the requested Gradient
            style={{
                background: `linear-gradient(135deg, #AA00FF 0%, #B840FF 50%, #D889FF 100%)`
            }}
        >
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D889FF] rounded-full blur-[120px] opacity-20" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#AA00FF] rounded-full blur-[120px] opacity-40" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="mb-16">
                    <span className="inline-flex items-center py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-[#D889FF] text-xs font-bold tracking-wider mb-6 backdrop-blur-md shadow-lg">
                        OUR TEAMS
                    </span>
                    <h2 className="text-3xl md:text-6xl font-bold text-white max-w-3xl leading-tight tracking-tight">
                        Манай салбар, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D889FF]">нэгжийн бүтэц</span>, бүрэлдэхүүн
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
                                            <span className={`text-lg transition-colors duration-300 ${isParentActive ? "font-bold text-[#AA00FF]" : "font-medium text-white/90"}`}>
                                                {zone.zone}
                                            </span>

                                            {/* Icon Indicator */}
                                            {isParentActive ? (
                                                <div className="bg-[#AA00FF] rounded-full p-1">
                                                    <ChevronRight className="w-4 h-4 text-white" />
                                                </div>
                                            ) : (
                                                <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                            )}
                                        </button>

                                        {/* Sub-Zones */}
                                        <AnimatePresence>
                                            {zone.zones && zone.zones.length > 0 && isParentActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="flex flex-col gap-2 ml-4 pl-4 border-l border-white/20"
                                                >
                                                    {zone.zones.map((subZone) => {
                                                        const isSubActive = activeZoneId === subZone.id;
                                                        return (
                                                            <button
                                                                key={subZone.id}
                                                                onClick={() => setActiveZoneId(subZone.id)}
                                                                className={`group flex items-center gap-3 text-left py-3 px-4 rounded-xl text-sm transition-all duration-200
                                                                ${isSubActive
                                                                        ? "bg-[#D889FF] text-[#4a0072] font-bold shadow-md"
                                                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                                                    }`}
                                                            >
                                                                <CornerDownRight size={14} className={isSubActive ? "opacity-100" : "opacity-40"} />
                                                                {subZone.zone}
                                                            </button>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
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
                                            <p className="text-[#D889FF] text-sm font-medium">
                                                Active Team Members
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                                            <Users size={16} className="text-[#D889FF]" />
                                            <span className="text-white font-mono text-sm">{activeMembers.length}</span>
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

// Sub-component for individual member cards
function MemberCard({ member }: { member: Member }) {
    return (
        <Link href={`/team/${member.id}`} className="block h-full">
            <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#D889FF]/50 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-[#AA00FF]/20"
            >
                <div className="flex items-center gap-5">
                    {/* Avatar with Glow Ring */}
                    <div className="relative w-16 h-16 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#AA00FF] to-[#D889FF] blur opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white transition-colors">
                            <Image
                                src={member.src}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col min-w-0 flex-1">
                        <h4 className="text-lg font-bold text-white truncate group-hover:text-[#D889FF] transition-colors">
                            {member.name}
                        </h4>
                        <p className="text-sm text-white/60 truncate font-light mb-2">
                            {member.job}
                        </p>

                        <div className="flex items-center text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
                            Дэлгэрэнгүй
                            <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#D889FF]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}