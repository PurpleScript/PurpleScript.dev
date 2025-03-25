"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <Image
        src="/images/hero-bg-snow.jpg"
        alt="Snow covered mountains"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-purple-900/30 z-10"></div>
      <div className="container relative z-20 text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
          PurpleScript
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8">
          Make your software vision become a reality
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-100"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-purple-700 hover:bg-white/20"
            onClick={() => scrollToSection("services")}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
