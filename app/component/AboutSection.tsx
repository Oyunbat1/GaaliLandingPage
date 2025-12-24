"use client"

import { easeInOut, motion } from "framer-motion";
// Import icons. Make sure to run: npm install lucide-react
import { Briefcase, ShieldCheck, Clock, Users, Scale, Cpu, Target, Eye } from 'lucide-react';

// Data for Values section - Easier to manage and map over
const valuesList = [
    {
        id: 1,
        title: "Мэргэжлийн чадвар",
        description: "Гаалийн хууль, олон улсын стандарт, худалдааны журамд мэргэшсэн, тасралтгүй хөгждөг баг.",
        icon: Briefcase,
    },
    {
        id: 2,
        title: "Хариуцлага ба ил тод байдал",
        description: "Бүх мэдээлэл, баримт бичгийг үнэн зөв, хариуцлагатайгаар боловсруулах.",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "Шуурхай байдал",
        description: "Цагийн үнэ цэнийг эрхэмлэн, гаалийн үйлчилгээг хамгийн богино хугацаанд, саадгүй гүйцэтгэх.",
        icon: Clock,
    },
    {
        id: 4,
        title: "Харилцагч төвтэй хандлага",
        description: "Харилцагчийн нууцлалыг чандлан сахидаг, тэдгээрийн хэрэгцээг ойлгон, зөв шийдэл санал болгодог түнш байх.",
        icon: Users,
    },
    {
        id: 5,
        title: "Ёс зүй ба хуульд нийцэл",
        description: "Бүх ажиллагаагаа үндэсний болон олон улсын хууль журамд нийцүүлэн, өндөр ёс зүйтэйгээр гүйцэтгэх.",
        icon: Scale,
    },
    {
        id: 6,
        title: "Инноваци ба дижитал",
        description: "Үйл ажиллагаагаа боловсронгуй болгох дижитал шийдэл, автоматжуулалт, шинэ технологийг тасралтгүй нэвтрүүлэх.",
        icon: Cpu,
    },
];


export default function AboutSection() {
    // --- Animation Variants ---

    // 1. Controls the main container to trigger children one by one
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Slightly faster stagger for better flow
                delayChildren: 0.1,
            },
        },
    };

    // 2. The actual entrance animation for items (Fade up + Slide)
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

    // 3. New variant specifically for card hover interaction
    const cardHoverVariants = {
        hover: {
            y: -8, // Move up
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)", // Deeper shadow
            transition: { duration: 0.2, ease: easeInOut }
        }
    };


    return (
        <div>
            <section id="about" className="py-20 bg-gray-50"> {/* Changed bg to slight gray for contrast with white cards */}
                <motion.div
                    className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" // Increased max-width slightly for grid
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {/* --- Header Group --- */}
                    <div className="text-center mb-12">
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold text-gray-900 mb-4"
                        >
                            Байгууллагын тухай
                        </motion.h2>
                        <motion.div
                            variants={itemVariants}
                            className="w-20 h-1 bg-[#D889FF] mx-auto rounded"
                        ></motion.div>
                    </div>


                    {/* --- Mission & Vision Section (Top part) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-[#e9caf9] rounded-lg mr-3">
                                    <Target className="w-6 h-6 text-[#AA00FF]" />
                                </div>
                                <h1 className="text-xl font-bold text-[#AA00FF]">Эрхэм зорилго:</h1>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Олон улсын худалдааны урсгалыг саадгүй, үр ашигтайгаар дамжуулах мэргэжлийн зуучлалын үйлчилгээ үзүүлэх.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-4">
                                <div className="p-2 bg-[#e9caf9] rounded-lg mr-3">
                                    <Eye className="w-6 h-6 text-[#AA00FF]" />
                                </div>
                                <h1 className="text-xl font-bold text-[#AA00FF]">Алсын хараа:</h1>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Монголын болон бүс нутгын хамгийн найдвартай, инновацид тулгуурласан гаалийн зуучлагч компани болж, харилцагчдын анхны сонголт болох.
                            </p>
                        </motion.div>
                    </div>


                    {/* --- New Interactive Values Section (Grid of Cards) --- */}
                    <motion.div variants={itemVariants} className="mb-16">
                        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">Үнэт зүйлс:</h1>

                        {/* The Grid Container */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {valuesList.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={cardHoverVariants} // Defines the hover animation and entrance
                                    whileHover="hover" // Triggers the hover variant
                                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-start h-full cursor-default transition-all"
                                >
                                    {/* Icon Container */}
                                    <div className="mb-4 p-3 bg-[#e9caf9] rounded-lg inline-block">
                                        <item.icon className="w-6 h-6 text-[#AA00FF]" />
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed flex grow">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>


                    {/* --- Bottom Text and Quote --- */}
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify mt-8">
                        <motion.p variants={itemVariants}>
                            Манай компани нь 2013 онд Гаалийн зуучлагчийн тусгай зөвшөөрөл авч
                            байгуулагдсан цагаасаа эхлэн Монгол Улсын нийт боомтуудын Гаалийн
                            байгууллагын харьяанд албан ёсны бүртгэлтэйгээр үйл ажиллагаагаа тогтвортой
                            явуулж ирсэн туршлагатай байгууллага юм.
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            Гадаад худалдаанд оролцогч аж ахуйн нэгж, байгууллага, иргэдийн бараа
                            бүтээгдэхүүнийг гаалийн бүрдүүлэлт, бичиг баримтын боловсруулалт, холбогдох
                            байгууллагуудтай ххийх харилцааг мэргэжлийн түвшинд хууль эрх зүйн
                            шаардлагад нийцүүлэн шуурхай зохион байгуулах нь бидний үндсэн зорилт.
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            Бид олон жилийн туршлага, чадварлаг мэргэжилтнүүдийн бүрэлдэхүнн,
                            хариуцлагатай үйчилгээний бодлогоороо дамжуулан харилцагч бүрийн ачаа
                            тээврийн урсгалыг саадгүй, найдвартай, дамжуулахыг эрхэмлэн ажилладаг.
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            Гаалийн зуучлалын салбар дахь шинэчлэл, дижитал шийдлийг байнга нэвтрүүлж,
                            харилцагч төвтэй, ил тод, шударга, хариуцлагатай, найдвартай үйлчилгээ үзүүлэх
                            нь манай компанийн үйл ажиллагааны үндсэн зарчим юм.
                        </motion.p>
                    </div>

                    {/* Highlight Box */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.01, x: 5 }}
                        className="bg-white p-6 mt-8 rounded-lg border-l-4 border-[#AA00FF] shadow-sm cursor-default transition-all hover:shadow-md"
                    >
                        <p className="text-[#D889FF] font-medium italic text-center sm:text-left">
                            "Бичиг цаасны ажлыг багасгаж, хүний оролцоог бууруулан, үйлчилгээний шат дамжлагыг хялбарчилснаар таны цаг хугацааг хэмнэж, ил тод байдлыг хангана."
                        </p>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}