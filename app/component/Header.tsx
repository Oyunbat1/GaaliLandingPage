"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Нүүр", href: "#" },
        { name: "Бидний тухай", href: "#about" },
        { name: "Баг хамт олон", href: "#team" },
        { name: "Үйлчилгээ", href: "#services" },
        { name: "Салбар нэгж", href: "#salbar" },
        { name: "Холбоо барих", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // --- NEW: Custom Scroll Handler ---
    const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault(); // Stop the default jump
        setIsMobileMenuOpen(false); // Close the menu

        // Wait a tiny bit for the menu closing animation to start, then scroll
        setTimeout(() => {
            if (href === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const targetId = href.replace("#", "");
                const elem = document.getElementById(targetId);

                if (elem) {
                    // Calculate position with offset for the fixed header (80px)
                    const headerOffset = 80;
                    const elementPosition = elem.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        }, 100);
    };

    return (
        <div>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed w-full top-0 z-40 transition-all duration-300 overflow-visible ${isScrolled || isMobileMenuOpen
                    ? "bg-white/95 backdrop-blur-md shadow-md"
                    : "bg-white shadow-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        {/* Logo Section */}
                        <div className="shrink-0 flex items-center gap-3">
                            <Image src={"/logo.png"} alt="logo" width={100} height={100} className="w-10 h-10  rounded-full flex items-center justify-center text-white"></Image>
                            <div>
                                <h1 className="font-bold text-xl text-gray-900 leading-tight">
                                    ТогтохномТ
                                </h1>
                                <p className="text-xs text-gray-500 tracking-wider">
                                    Гаалийн зуучлал
                                </p>
                            </div>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-[#ad1d55] font-medium transition"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* Action Button (Desktop) */}
                        <div className="hidden md:flex">
                            <a
                                href="#"
                                className="bg-white border-2 border-[#ad1d55] text-[#ad1d55] hover:bg-[#ad1d55] hover:text-white px-5 py-2 rounded-md font-semibold transition duration-300"
                            >
                                Мэдээлэл авах
                            </a>
                        </div>

                        {/* Animated Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="group flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className={`block h-0.5 w-6 rounded-full transition-colors duration-300 ${isMobileMenuOpen ? "bg-[#ad1d55]" : "bg-gray-600 group-hover:bg-[#ad1d55]"}`}
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className={`block h-0.5 w-6 rounded-full transition-colors duration-300 ${isMobileMenuOpen ? "bg-[#ad1d55]" : "bg-gray-600 group-hover:bg-[#ad1d55]"}`}
                                />
                                <motion.span
                                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className={`block h-0.5 w-6 rounded-full transition-colors duration-300 ${isMobileMenuOpen ? "bg-[#ad1d55]" : "bg-gray-600 group-hover:bg-[#ad1d55]"}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden bg-white border-t border-gray-100 z-50 relative"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}

                                        // UPDATED: Using the custom handler here
                                        onClick={(e) => handleMobileNav(e, item.href)}
                                        className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#ad1d55] hover:bg-gray-50 transition"
                                    >
                                        {item.name}
                                    </a>
                                ))}

                                <div className="pt-4 mt-2 border-t border-gray-100">
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="block w-full text-center bg-[#ad1d55] text-white px-5 py-3 rounded-md font-semibold hover:bg-[#8a1744] transition duration-300"
                                    >
                                        Мэдээлэл авах
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
}