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

    <div className="container mx-auto px-4">

      <MainNav />
    </div>
  )
}

