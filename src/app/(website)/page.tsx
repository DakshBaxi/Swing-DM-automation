"use client"

import type React from "react"

import { useRef } from "react"
import { ArrowDown } from "lucide-react"
import Navbar from "@/components/landingPage/navbar"
import HeroSection from "@/components/landingPage/heroSection"
import FeaturesSection from "@/components/landingPage/features"
import PricingSection from "@/components/landingPage/pricingSection"
import Footer from "@/components/landingPage/footer"

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onPricingClick={() => scrollToSection(pricingRef)}
      />

      <HeroSection />

      <div className="flex justify-center my-8">
        <button
          onClick={() => scrollToSection(featuresRef)}
          className="animate-bounce bg-green-700 hover:bg-green-600 rounded-full p-3 transition-colors duration-300"
          aria-label="Scroll down to features"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      <div ref={featuresRef}>
        <FeaturesSection />
      </div>


      <div ref={pricingRef}>
        <PricingSection />
      </div>

      <Footer />
    </main>
  )
}


