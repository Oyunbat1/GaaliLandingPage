"use client"
import Image from "next/image";
import Lenis from 'lenis'
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ServiceSection from "./component/ServiceSection";
import ContactSection from "./component/ContactSection";
import TeamSection from "./component/TeamSection";
import Footer from "./component/Footer";
export default function Home() {

  const lenis = new Lenis();
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <div className="font-sans text-gray-800 antialiased bg-white">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}