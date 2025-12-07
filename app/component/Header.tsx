"use client"


export default function Header() {
    return (
        <div>
            <header className="bg-white shadow-sm fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="shrink-0 flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#ad1d55] rounded-full flex items-center justify-center text-white">
                                <i className="fa-solid fa-shield-halved text-xl"></i>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl text-gray-900 leading-tight">ТогтохномТ</h1>
                                <p className="text-xs text-gray-500 tracking-wider">Гаалийн зуучлал</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-600 hover:text-[#ad1d55] font-medium transition">Нүүр</a>
                            <a href="#services" className="text-gray-600 hover:text-[#ad1d55] font-medium transition">Үйлчилгээ</a>
                            <a href="#about" className="text-gray-600 hover:text-[#ad1d55] font-medium transition">Бидний тухай</a>
                            <a href="#contact" className="text-gray-600 hover:text-[#ad1d55] font-medium transition">Холбоо барих</a>
                        </nav>
                        <div className="hidden md:flex">
                            <a href="#" className="bg-white border-2 border-[#ad1d55] text-[#ad1d55] hover:bg-[#ad1d55] hover:text-white px-5 py-2 rounded-md font-semibold transition duration-300">
                                Мэдээлэл авах
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}