"use client";
import React from "react";
// Make sure this path matches your actual file name (ServiceData vs ServiteData)
import { serviceSupportData } from "@/lib/ServiteData";
import {
    FileInput,
    FileOutput,
    Calculator,
    ScanSearch,
    FileBadge,
    Headset
} from "lucide-react";
import { motion, easeInOut } from "framer-motion";
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easeInOut,
        },
    },
};
export default function ServiceSection() {
    return (
        <div>
            {/* 4. KEY FEATURES */}
            <section id="services" className="py-6 bg-gray-50">

                {/* --- PART 1: Dynamic Data (Service Support) --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Үйлчилгээ
                        </h2>
                        <motion.div
                            variants={itemVariants}
                            className="w-40 mb-6 h-1 bg-[#D889FF] mx-auto rounded"
                        ></motion.div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Манай компаний Гаалийн бүртгэгдсэн мэргэжилтэнгүүд гаалийн
                            бүрдүүлэлт, импорт-экспортын үйл ажиллагаа, зэрэгт өндөр мэргэшсэн туршлагатай. Бид харилцагчдынхаа бараа,
                            тээвэрлэлт, гаалийн үйл явцыг хуульд нийцсэн, түргэн шуурхай
                            шийдэж, аливаа эрсдэлээс хамгаалах үйлчилгээг үзүүлдэг.
                        </p>
                    </div>

                    {/* Grid Layout for the two main data points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {serviceSupportData.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white h-auto p-8 rounded-xl shadow-md  hover:shadow-lg transition duration-300 flex flex-col "
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                                    {service.title}
                                </h3>

                                {/* Map through the description array */}
                                <ul className="space-y-4 text-gray-600">
                                    {service.description.map((item) => (
                                        <li key={item.id} className="flex items-start">
                                            {/* Styled Bullet Point */}
                                            <span className="shrink-0 h-2 w-2 mt-2.5 mr-3 bg-[#AA00FF] rounded-full"></span>
                                            <span className="text-sm md:text-base">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- PART 2: Static Features (6 Icons) --- */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Үйлчилгээний боломжууд
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Бид танд дараах 6 үндсэн чиглэлийн цахим үйлчилгээг санал болгож
                            байна.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Feature 1: Import Advice */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group cursor-pointer">
                            <div className="flex gap-8">
                                <div className="w-24 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#AA00FF] mb-6 group-hover:bg-[#AA00FF] group-hover:text-white transition duration-300">
                                    <FileInput className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                                    Импортын барааны бүрдүүлэлтийн зөвлөмж
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Бараа импортлох үе шат, шаардлагатай бичиг баримтын
                                бүрдүүлэлтийн дэлгэрэнгүй заавар.
                            </p>
                        </div>

                        {/* Feature 2: Export Advice */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group cursor-pointer">
                            <div className="flex gap-8">
                                <div className="w-24 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#AA00FF] mb-6 group-hover:bg-[#AA00FF] group-hover:text-white transition duration-300">
                                    <FileOutput className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                                    Экспортын барааны бүрдүүлэлтийн зөвлөмж
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Экспортын барааны ангилал, хориглолт болон хязгаарлалт, тусгай
                                зөвшөөрлийн мэдээлэл.
                            </p>
                        </div>

                        {/* Feature 3: Declaration/Calculation */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group cursor-pointer">
                            <div className="flex gap-8 items-center">
                                <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#AA00FF] mb-6 group-hover:bg-[#AA00FF] group-hover:text-white transition duration-300">
                                    <Calculator className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                                    Гаалийн мэдүүлэг
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Гаалийн болон нэмэгдсэн өртгийн албан татварын урьдчилсан
                                тооцооллыг хялбар хийх.
                            </p>
                        </div>

                        {/* Feature 4: Taxes and Fees (Tracking) */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group cursor-pointer">
                            <div className="flex gap-8">
                                <div className="w-16 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#AA00FF] mb-6 group-hover:bg-[#AA00FF] group-hover:text-white transition duration-300">
                                    {/* ScanSearch represents tracking the status of the declaration/payment */}
                                    <ScanSearch className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Гаалийн татвар, хураамж
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Таны илгээсэн гаалийн мэдүүлэг болон зөвшөөрлийн хүсэлтийн явцыг
                                цахимаар хянах.
                            </p>
                        </div>

                        {/* Feature 5: Registration Process */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group cursor-pointer">
                            <div className="flex gap-8">
                                <div className="w-24 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#AA00FF] mb-6 group-hover:bg-[#AA00FF] group-hover:text-white transition duration-300">
                                    {/* FileBadge represents official registration/licensing */}
                                    <FileBadge className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                                    Гаалийн бүрдүүлэлт хийгдэх ажиллагаа
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Гадаад худалдааны үйл ажиллагаа эрхлэхээр бүртгүүлэх, код авах
                                бүрэн цахимжсан үйлчилгээ.
                            </p>
                        </div>

                        {/* Feature 6: Advice/Support */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group cursor-pointer">
                            <div className="flex gap-8">
                                <div className="w-24 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#AA00FF] mb-6 group-hover:bg-[#AA00FF] group-hover:text-white transition duration-300">
                                    <Headset className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                                    ААН, байгууллага, иргэдэд өгөх зөвөлгөө
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Лавлагаа мэдээллийн төвтэй холбогдох, хууль эрх зүйн мэдээллийг
                                цаг алдалгүй авах.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}