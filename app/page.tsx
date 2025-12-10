"use client"
import Image from "next/image";
import Lenis from 'lenis'
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ServiceSection from "./component/ServiceSection";
import ContactSection from "./component/ContactSection";
import { useEffect } from "react";
import TeamSection from "./component/TeamSection";
import InformationSection from "./component/InformationSection";
import AboutTeam from "./component/AboutTeam";
export default function Home() {

  useEffect(() => {

    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="font-sans text-gray-800 antialiased bg-white">
      <HeroSection />
      <AboutSection />
      <AboutTeam />
      <TeamSection />
      <InformationSection />
      <ServiceSection />
      <ContactSection />
    </div>
  );
}