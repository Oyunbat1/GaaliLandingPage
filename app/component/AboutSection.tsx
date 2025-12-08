"use client"

import { easeInOut, motion } from "framer-motion";

export default function AboutSection() {
    // Animation Variants
    // 1. Controls the container to trigger children one by one
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // 0.2s delay between each item appearing
                delayChildren: 0.1,
            },
        },
    };

    // 2. The actual animation for each item (Fade up + Slide)
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: easeInOut, // Custom bezier for a "premium" feel
            },
        },
    };

    return (
        <div>
            <section id="about" className="py-20 bg-white">
                <motion.div
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }} // Animates when 100px into view
                >
                    {/* Header Group */}
                    <div className="text-center mb-12">
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-bold text-gray-900 mb-4"
                        >
                            Байгууллагын тухай
                        </motion.h2>
                        <motion.div
                            variants={itemVariants}
                            className="w-20 h-1 bg-[#ad1d55] mx-auto rounded"
                        ></motion.div>
                    </div>

                    {/* Content Group */}
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                        <motion.p variants={itemVariants}>
                            <span className="font-bold text-[#ad1d55]">Монгол Улсын Гаалийн байгууллага</span> нь дэлхийн жишигт нийцсэн цахим шилжилтийг хийж, төрийн үйлчилгээг иргэдэд ойртуулж байна. Бид орчин үеийн технологийн дэвшлийг ашиглан гаалийн хяналт шалгалтыг үр дүнтэй болгохын зэрэгцээ худалдааг хөнгөвчлөх бодлогыг баримталж байна.
                        </motion.p>

                        <motion.p variants={itemVariants}>
                            Энэхүү цахим систем нь гадаад худалдаа эрхлэгч иргэд, аж ахуйн нэгж, тээвэр зуучийн байгууллагуудад зориулагдсан болно. Та гаалийн мэдүүлэг бөглөх, төлбөр тооцоо хийх, зөвшөөрөл авах зэрэг үйлчилгээг гэрээсээ эсвэл оффисоосоо авах боломжтой.
                        </motion.p>

                        {/* Highlight Box with specialized hover animation */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 5 }} // Subtle pop and slide right on hover
                            className="bg-[#fff0f5] p-6 rounded-lg border-l-4 border-[#ad1d55] cursor-default transition-shadow hover:shadow-lg"
                        >
                            <p className="text-[#2d0510] font-medium italic">
                                "Бичиг цаасны ажлыг багасгаж, хүний оролцоог бууруулан, үйлчилгээний шат дамжлагыг хялбарчилснаар таны цаг хугацааг хэмнэж, ил тод байдлыг хангана."
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}