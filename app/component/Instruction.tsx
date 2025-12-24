"use client";
import React from "react";

export default function Instruction() {
    return (
        <div>
            {/* 5. HOW IT WORKS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Хэрхэн ажилладаг вэ?</h2>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                        {/* Step 1 */}
                        <div className="bg-white w-full max-w-xs text-center p-6">
                            <div className="w-16 h-16 bg-[#AA00FF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">1</div>
                            <h3 className="text-xl font-bold mb-3">Хүсэлт илгээх</h3>
                            <p className="text-gray-600 text-sm">Системд нэвтэрч, шаардлагатай мэдээллийг үнэн зөв бөглөн илгээнэ.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white w-full max-w-xs text-center p-6">
                            <div className="w-16 h-16 bg-[#AA00FF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">2</div>
                            <h3 className="text-xl font-bold mb-3">Хянан шалгах</h3>
                            <p className="text-gray-600 text-sm">Гаалийн улсын байцаагч таны илгээсэн бичиг баримтыг цахимаар хянана.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white w-full max-w-xs text-center p-6">
                            <div className="w-16 h-16 bg-[#AA00FF] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">3</div>
                            <h3 className="text-xl font-bold mb-3">Хариу авах</h3>
                            <p className="text-gray-600 text-sm">Зөвшөөрөл олгогдсон эсвэл татвар төлөх тухай мэдэгдлийг хүлээн авна.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}