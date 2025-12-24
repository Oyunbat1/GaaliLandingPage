"use client"

export default function Footer() {
    return (
        <div>
            <footer className="bg-white text-black py-10 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-gray-500">
                        &copy; 2025 Монгол Улсын Гаалийн Ерөнхий Газар.
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-white transition">Нууцлалын бодлого</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Үйлчилгээний нөхцөл</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Тусламж</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}