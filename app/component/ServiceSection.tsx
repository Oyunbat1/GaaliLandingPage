"use client";
import React from "react";

export default function ServiceSection() {
    return (
        <div>
            {/* 4. KEY FEATURES */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Үйлчилгээний боломжууд</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Бид танд дараах 6 үндсэн чиглэлийн цахим үйлчилгээг санал болгож байна.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                            <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#ad1d55] mb-6 group-hover:bg-[#ad1d55] group-hover:text-white transition">
                                <i className="fa-solid fa-file-import text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Импортын зөвлөмж</h3>
                            <p className="text-gray-600 text-sm">Бараа импортлох үе шат, шаардлагатай бичиг баримтын бүрдүүлэлтийн дэлгэрэнгүй заавар.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                            <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#ad1d55] mb-6 group-hover:bg-[#ad1d55] group-hover:text-white transition">
                                <i className="fa-solid fa-plane-departure text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Экспортын мэдээлэл</h3>
                            <p className="text-gray-600 text-sm">Экспортын барааны ангилал, хориглолт болон хязгаарлалт, тусгай зөвшөөрлийн мэдээлэл.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                            <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#ad1d55] mb-6 group-hover:bg-[#ad1d55] group-hover:text-white transition">
                                <i className="fa-solid fa-calculator text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Татварын тооцоолуур</h3>
                            <p className="text-gray-600 text-sm">Гаалийн болон нэмэгдсэн өртгийн албан татварын урьдчилсан тооцооллыг хялбар хийх.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                            <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#ad1d55] mb-6 group-hover:bg-[#ad1d55] group-hover:text-white transition">
                                <i className="fa-solid fa-magnifying-glass-location text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Өргөдөл хянах</h3>
                            <p className="text-gray-600 text-sm">Таны илгээсэн гаалийн мэдүүлэг болон зөвшөөрлийн хүсэлтийн явцыг цахимаар хянах.</p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                            <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#ad1d55] mb-6 group-hover:bg-[#ad1d55] group-hover:text-white transition">
                                <i className="fa-solid fa-briefcase text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">ААН-ийн бүртгэл</h3>
                            <p className="text-gray-600 text-sm">Гадаад худалдааны үйл ажиллагаа эрхлэхээр бүртгүүлэх, код авах бүрэн цахимжсан үйлчилгээ.</p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                            <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#ad1d55] mb-6 group-hover:bg-[#ad1d55] group-hover:text-white transition">
                                <i className="fa-solid fa-headset text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Мэдээлэл</h3>
                            <p className="text-gray-600 text-sm">Лавлагаа мэдээллийн төвтэй холбогдох, хууль эрх зүйн мэдээллийг цаг алдалгүй авах.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}