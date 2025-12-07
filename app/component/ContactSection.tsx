"use client"

export default function ContactSection() {
    return (
        <div>

            {/* 6. CONTACT SECTION */}
            <section id="contact" className="py-20 bg-[#2d0510] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Холбоо барих</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Танд асуулт байна уу? Бид танд туслахад бэлэн байна. Доорх сувгуудаар бидэнтэй холбогдоорой.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Утас</div>
                                        <div className="font-bold">+976-9511-8788</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Имэйл</div>
                                        <div className="font-bold">togtokhnomt99@gmail.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                                        <i className="fa-solid fa-map-location-dot"></i>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Хаяг</div>
                                        <div className="font-bold">Улаанбаатар хот, Сүхбаатар дүүрэг, Их тойруу 81/1</div>
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