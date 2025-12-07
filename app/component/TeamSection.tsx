"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Users, CornerDownRight } from "lucide-react";
import { zonesData, getMembersByZoneId, Member } from "@/lib/Members";

export default function TeamSection() {
    // 1. State for the currently active Zone ID (Default to the first one)
    const [activeZoneId, setActiveZoneId] = useState<number>(zonesData[0]?.id || 1);

    // 2. Filter logic: Ensure we only show a max of 7 zones on the left
    const visibleZones = zonesData.slice(0, 7);

    // 3. Get members for the active zone (using your helper function)
    const activeMembers = getMembersByZoneId(activeZoneId);

    const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <section
            id="team"
            className="relative w-full min-h-screen bg-[#ad1d55] bg-gradient-to-br from-[#ad1d55] to-[#5e0a28] text-white py-20 px-6 overflow-hidden"
        >
            {/* Background Pattern */}
            <div
                className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none mix-blend-overlay opacity-50"
                style={{ backgroundImage: `url("${heroPattern}")` }}
            />

            <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-rose-900 bg-opacity-50 border border-rose-300 text-sm font-semibold tracking-wide mb-4">
                        OUR TEAMS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
                        Манай салбар, нэгжийн бүтэц, бүрэлдэхүүн
                    </h2>
                </div>

                {/* Main Split Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">
                    {/* LEFT SIDE: Zone Navigation (Sticky list) */}
                    <div className="lg:w-1/3 flex-shrink-0">
                        <div className="lg:sticky lg:top-10 flex flex-col gap-3">
                            {visibleZones.map((zone) => {
                                const isParentActive = activeZoneId === zone.id;

                                return (
                                    <div key={zone.id} className="flex flex-col gap-2">
                                        {/* Main Parent Button */}
                                        <button
                                            onClick={() => setActiveZoneId(zone.id)}
                                            className={`group relative flex items-center justify-between w-full p-5 text-left rounded-xl border transition-all duration-300 outline-none
                                    ${isParentActive
                                                    ? "bg-white text-[#ad1d55] border-white shadow-xl translate-x-2"
                                                    : "bg-rose-950/20 border-rose-300/20 text-rose-100 hover:bg-rose-900/40 hover:border-rose-300/40"
                                                }`}
                                        >
                                            <span
                                                className={`font-semibold text-lg ${isParentActive ? "font-bold" : "font-medium"
                                                    }`}
                                            >
                                                {zone.zone}
                                            </span>
                                            {isParentActive && (
                                                <ChevronRight className="w-5 h-5 animate-pulse" />
                                            )}
                                        </button>

                                        {/* Sub-Zones Render Logic */}
                                        {zone.zones && zone.zones.length > 0 && (
                                            <div className="flex flex-col gap-2 ml-6 pl-4 border-l-2 border-rose-300/20">
                                                {zone.zones.map((subZone) => {
                                                    const isSubActive = activeZoneId === subZone.id;
                                                    return (
                                                        <button
                                                            key={subZone.id}
                                                            onClick={() => setActiveZoneId(subZone.id)}
                                                            className={`group flex items-center gap-2 text-left py-2 px-4 rounded-lg text-sm transition-all duration-200
                                                        ${isSubActive
                                                                    ? "bg-rose-500 text-white font-bold shadow-md translate-x-1"
                                                                    : "text-rose-200 hover:text-white hover:bg-rose-900/30"
                                                                }`}
                                                        >
                                                            <CornerDownRight size={14} className={isSubActive ? "opacity-100" : "opacity-50"} />
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
                        <div className="bg-black/10 rounded-3xl p-6 md:p-8 border border-white/5 min-h-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeZoneId}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full"
                                >
                                    <div className="mb-6 flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-rose-100">
                                            Багийн гишүүд
                                        </h3>
                                        <span className="text-rose-300 text-sm flex items-center gap-2">
                                            <Users size={16} />
                                            {activeMembers.length} member(s)
                                        </span>
                                    </div>

                                    {activeMembers.length > 0 ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {activeMembers.map((member) => (
                                                <MemberCard key={member.id} member={member} />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-[300px] text-rose-300/50 border-2 border-dashed border-rose-300/20 rounded-xl">
                                            <Users size={48} className="mb-4 opacity-50" />
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
                className="group relative h-full bg-white/5 border border-rose-300/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-900/50 hover:border-rose-300/50"
            >
                <div className="flex items-center gap-4 p-4">
                    {/* Avatar */}
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-rose-300/30 group-hover:border-rose-200 transition-colors">
                        <Image
                            src={member.src}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col min-w-0">
                        <h4 className="text-lg font-bold text-white truncate group-hover:text-rose-200 transition-colors">
                            {member.name}
                        </h4>
                        <p className="text-sm text-rose-200/80 truncate font-light">
                            {member.job}
                        </p>
                        <div className="mt-2 flex items-center text-xs text-rose-300 font-medium group-hover:translate-x-1 transition-transform">
                            Дэлгэрэнгүй <ChevronRight size={12} className="ml-1" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}