"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  const [isMounted, setIsMounted] = React.useState(false)

  // Set isMounted to true after component mounts
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Prevent rendering during SSR
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#001F3F] to-[#003366] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="IIITDM Kancheepuram Logo"
                width={50}
                height={50}
                className="bg-white rounded-md p-1"
              />
              <div>
                <h3 className="font-bold text-lg">IIITDM Kancheepuram</h3>
                <p className="text-sm text-blue-200">Department of CSE</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              The Department of Computer Science and Engineering at IIITDM Kancheepuram is committed to excellence in
              education, research, and innovation.
            </p>
            <div className="flex space-x-3 mt-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 p-2 rounded-full hover:bg-blue-800 transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-700 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                whileHover={{ y: -3 }}
              >
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Quick Links</h3>
            <ul className="space-y-2">
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
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  IIITDM Kancheepuram, Vandalur-Kelambakkam Road, Chennai - 600127, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-300" />
                <a href="tel:+914427476300" className="text-sm hover:text-blue-200 transition-colors duration-300">
                  +91 44 2747 6300
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-300" />
                <a
                  href="mailto:info@iiitdm.ac.in"
                  className="text-sm hover:text-blue-200 transition-colors duration-300"
                >
                  info@iiitdm.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on events, research, and opportunities.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-blue-900/50 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-blue-800 text-center text-sm text-gray-400">
          <p>© {currentYear} IIITDM Kancheepuram. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
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
