"use client"

import React from "react";

export default function HeroSection() {
    const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
    return (
        <div>
            {/* 2. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#ad1d55] bg-linear-to-br from-[#ad1d55] to-[#5e0a28]">
                {/* Background Pattern Overlay */}
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"
                    style={{ backgroundImage: `url("${heroPattern}")` }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left text-white">
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-900 bg-opacity-50 border border-rose-300 text-sm font-semibold tracking-wide mb-6">
                            DIGITAL FIRST CUSTOMS
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Төрийн Үйлчилгээг Цахимаар:<br />
                            <span className="text-rose-100">Хурдан, Шуурхай, Ил Тод</span>
                        </h2>
                        <p className="text-lg text-rose-50 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Гаалийн бүрдүүлэлт, татвар төлөлт, барааны мэдээллийг цаг хугацаа, орон зайнаас үл хамааран шийдвэрлэх боломж.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <a href="#services" className="bg-white text-[#ad1d55] px-8 py-3.5 rounded-md font-bold shadow-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1">
                                Үйлчилгээ үзэх
                            </a>
                            <a href="#about" className="border border-white text-white px-8 py-3.5 rounded-md font-bold hover:bg-white hover:bg-opacity-10 transition duration-300">
                                Дэлгэрэнгүй
                            </a>
                        </div>
                    </div>

                    {/* Abstract Visual */}
                    <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Decorative back elements */}
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75"></div>

                            {/* Main visual card */}
                            <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl p-8 shadow-2xl">
                                <div className="flex items-center justify-between mb-6 border-b border-white border-opacity-10 pb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                    <div className="text-white text-xs font-mono opacity-70">CUSTOMS_SYSTEM_V2.0</div>
                                </div>
                                {/* Mock Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-rose-950 bg-opacity-40 p-4 rounded-lg">
                                        <i className="fa-solid fa-ship text-rose-300 mb-2"></i>
                                        <div className="text-2xl font-bold text-white">1,240</div>
                                        <div className="text-xs text-rose-200">Өнөөдрийн импорт</div>
                                    </div>
                                    <div className="bg-rose-950 bg-opacity-40 p-4 rounded-lg">
                                        <i className="fa-solid fa-check-circle text-green-300 mb-2"></i>
                                        <div className="text-2xl font-bold text-white">98%</div>
                                        <div className="text-xs text-rose-200">Шийдвэрлэлт</div>
                                    </div>
                                    <div className="col-span-2 bg-rose-950 bg-opacity-40 p-4 rounded-lg flex items-center justify-between">
                                        <div>
                                            <div className="text-sm font-bold text-white">E-Declaration</div>
                                            <div className="text-xs text-rose-200">Status: Active</div>
                                        </div>
                                        <i className="fa-solid fa-wifi text-white animate-pulse"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}