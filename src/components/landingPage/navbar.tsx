"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NavbarProps {
  onFeaturesClick: () => void
  onAboutClick: () => void
  onPricingClick: () => void
}

export default function Navbar({ onFeaturesClick, onAboutClick, onPricingClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold text-white mr-8">
            <span className="text-violet-400">Swing</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white hover:text-violet-400 transition-colors"
            >
              Home
            </button>
            <button onClick={onFeaturesClick} className="text-white hover:text-violet-400 transition-colors">
              Features
            </button>
            <button onClick={onAboutClick} className="text-white hover:text-violet-400 transition-colors">
              About
            </button>
            <button onClick={onPricingClick} className="text-white hover:text-violet-400 transition-colors">
              Pricing
            </button>
          </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
        <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
              >
              <Link href="/dashboard">Login</Link>
              </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
                setIsMenuOpen(false)
              }}
              className="text-white hover:text-violet-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                onFeaturesClick()
                setIsMenuOpen(false)
              }}
              className="text-white hover:text-violet-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => {
                onAboutClick()
                setIsMenuOpen(false)
              }}
              className="text-white hover:text-violet-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                onPricingClick()
                setIsMenuOpen(false)
              }}
              className="text-white hover:text-violet-400 transition-colors"
            >
              Pricing
            </button>
            <div className="flex justify-center space-x-4 pt-4">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
              >
               <Link href="/dashboard">Login</Link>
              </Button>
         
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

