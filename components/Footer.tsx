"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#001F3F] to-[#003366] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Logo and About */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="IIITDM Kancheepuram Logo"
                width={40}
                height={40}
                className="bg-white rounded-md p-1"
              />
              <div>
                <h3 className="font-bold text-base">IIITDM Kancheepuram</h3>
                <p className="text-xs text-blue-200">Department of CSE</p>
              </div>
            </div>
            <p className="text-xs text-gray-300 mt-2">
              The Department of Computer Science and Engineering at IIITDM Kancheepuram is committed to excellence in
              education, research, and innovation.
            </p>
            <div className="flex space-x-2 mt-2">
              {[{ Icon: Facebook, url: "https://facebook.com", bg: "bg-blue-800", hover: "hover:bg-blue-700" },
              { Icon: Twitter, url: "https://twitter.com", bg: "bg-blue-500", hover: "hover:bg-blue-400" },
              { Icon: Linkedin, url: "https://linkedin.com", bg: "bg-blue-900", hover: "hover:bg-blue-800" },
              { Icon: Instagram, url: "https://instagram.com", bg: "bg-pink-700", hover: "hover:bg-pink-600" },
              { Icon: Youtube, url: "https://youtube.com", bg: "bg-red-700", hover: "hover:bg-red-600" }
              ].map(({ Icon, url, bg, hover }) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${bg} p-1.5 rounded-full ${hover} transition-colors duration-300`}
                  whileHover={{ y: -2 }}
                >
                  <Icon size={16} />
                  <span className="sr-only">{url}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-2 border-b border-blue-400 pb-1">Quick Links</h3>
            <ul className="space-y-1.5 text-xs">
              {[
                { label: "About Us", href: "/about" },
                { label: "Academics", href: "/academics" },
                { label: "Research", href: "/research" },
                { label: "People", href: "/people" },
                { label: "Placements", href: "/placements" },
                { label: "Events", href: "/events" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ExternalLink
                      size={12}
                      className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-2 border-b border-blue-400 pb-1">Contact Us</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-blue-300 flex-shrink-0 mt-0.5" />
                <span>
                  IIITDM Kancheepuram, Vandalur-Kelambakkam Road, Chennai - 600127, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-blue-300" />
                <a href="tel:+914427476300" className="hover:text-blue-200 transition-colors duration-300">
                  +91 44 2747 6300
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-blue-300" />
                <a
                  href="mailto:info@iiitdm.ac.in"
                  className="hover:text-blue-200 transition-colors duration-300"
                >
                  info@iiitdm.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-semibold mb-2 border-b border-blue-400 pb-1">Newsletter</h3>
            <p className="text-xs text-gray-300 mb-3">
              Subscribe to receive updates on events, research, and opportunities.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-1.5 rounded-md bg-blue-900/50 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-1.5 px-3 rounded-md transition-colors duration-300 text-xs"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-blue-800 text-center text-xs text-gray-400">
          <p>© {currentYear} IIITDM Kancheepuram. All rights reserved.</p>
          <div className="mt-1 flex justify-center space-x-3">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
