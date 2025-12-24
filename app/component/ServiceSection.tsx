"use client";
import React from "react";
import Link from "next/link";
import { motion, easeInOut } from "framer-motion";

import { serviceSupportData } from "@/lib/ServiteData";
import { featuresData } from "@/lib/ServiceSectionData";

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
            <section id="services" className="py-6 bg-gray-50">

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
                            Манай компани Гаалийн бүртгэгдсэн мэргэжилтнүүд гаалийн
                            бүрдүүлэлт, импорт-экспортын үйл ажиллагаа, зэрэгт өндөр
                            мэргэшсэн туршлагатай. Бид харилцагчдынхаа бараа, тээвэрлэлт,
                            гаалийн үйл явцыг хуульд нийцсэн, түргэн шуурхай шийдэж, аливаа
                            эрсдэлээс хамгаалах үйлчилгээг үзүүлдэг.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {serviceSupportData.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white h-auto p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                                    {service.title}
                                </h3>

                                <ul className="space-y-4 text-gray-600">
                                    {service.description.map((item) => (
                                        <li key={item.id} className="flex items-start">
                                            <span className="shrink-0 h-2 w-2 mt-2.5 mr-3 bg-[#AA00FF] rounded-full"></span>
                                            <span className="text-sm md:text-base">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Үйлчилгээний боломжууд
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Бид танд дараах 6 үндсэн чиглэлийн цахим үйлчилгээг санал болгож
                            байна.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresData.map((feature) => {

                            const IconComponent = feature.icon;

                            return (
                                <Link key={feature.id} href={`/service/${feature.id}`}>
                                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group cursor-pointer h-full">
                                        <div className="flex gap-8">
                                            {/* Icon Container */}
                                            <div className="w-24 h-14 bg-rose-100 rounded-lg flex items-center justify-center text-[#AA00FF] mb-6 group-hover:bg-[#AA00FF] group-hover:text-white transition duration-300">
                                                <IconComponent className="w-7 h-7" strokeWidth={2} />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-[18px] font-bold text-gray-900 mb-3">
                                                {feature.title}
                                            </h3>
                                        </div>

                                        {/* Short Description */}
                                        <p className="text-gray-600 text-sm">
                                            {feature.shortDescription}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}