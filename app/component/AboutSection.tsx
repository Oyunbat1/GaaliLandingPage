"use client"

export default function AboutSection() {
    return (
        <div>
            <section id="about" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Байгууллагын тухай</h2>
                        <div className="w-20 h-1 bg-[#ad1d55] mx-auto rounded"></div>
                    </div>

                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                        <p>
                            <span className="font-bold text-[#ad1d55]">Монгол Улсын Гаалийн байгууллага</span> нь дэлхийн жишигт нийцсэн цахим шилжилтийг хийж, төрийн үйлчилгээг иргэдэд ойртуулж байна. Бид орчин үеийн технологийн дэвшлийг ашиглан гаалийн хяналт шалгалтыг үр дүнтэй болгохын зэрэгцээ худалдааг хөнгөвчлөх бодлогыг баримталж байна.
                        </p>
                        <p>
                            Энэхүү цахим систем нь гадаад худалдаа эрхлэгч иргэд, аж ахуйн нэгж, тээвэр зуучийн байгууллагуудад зориулагдсан болно. Та гаалийн мэдүүлэг бөглөх, төлбөр тооцоо хийх, зөвшөөрөл авах зэрэг үйлчилгээг гэрээсээ эсвэл оффисоосоо авах боломжтой.
                        </p>
                        <div className="bg-[#fff0f5] p-6 rounded-lg border-l-4 border-[#ad1d55]">
                            <p className="text-[#2d0510] font-medium">
                                "Бичиг цаасны ажлыг багасгаж, хүний оролцоог бууруулан, үйлчилгээний шат дамжлагыг хялбарчилснаар таны цаг хугацааг хэмнэж, ил тод байдлыг хангана."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}