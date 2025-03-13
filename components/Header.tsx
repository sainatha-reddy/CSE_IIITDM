"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import MainNav from "@/components/MainNav"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=50&width=50" alt="IIITDM Kancheepuram Logo" width={50} height={50} />
            <div>
              <span className="font-bold text-xl text-[#003366] block">IIITDM Kancheepuram</span>
              <span className="text-sm text-gray-600">Department of Computer Science & Engineering</span>
            </div>
          </Link>
          <MainNav />
        </div>
      </div>
    </header>
  )
}

