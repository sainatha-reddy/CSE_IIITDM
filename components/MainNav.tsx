"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Teaching",
    href: "/teaching",
    subItems: [
      { label: "Overview", href: "/teaching/overview" },
      { label: "Curriculum", href: "https://www.iiitdm.ac.in/students/existing-students/curriculum-info", target: "__blank" },
      { label: "Online Electives", href: "/teaching/online-electives" },
      { label: "Time Table", href: "https://www.iiitdm.ac.in/students/existing-students/time-table", target: "__blank" },
      { label: "Lecture Notes", href: "/teaching/lecture-notes" },
      { label: "Best Projects", href: "/teaching/best-projects" },
    ],
  },
  {
    label: "People",
    href: "/people",
    subItems: [
      { label: "Faculty", href: "/people/faculty" },
      { label: "Staff", href: "/people/staff" },
      { label: "Research Scholars", href: "https://www.iiitdm.ac.in/people/research-scholars/cse", target: "__blank" },
      {
        label: "Alumni",
        href: "/people/alumni",
        subItems: [
          { label: "In Abroad", href: "/people/alumni/abroad" },
          { label: "In India", href: "/people/alumni/india" },
        ],
      },
    ],
  },
  {
    label: "Research",
    href: "/research",
    subItems: [
      { label: "Overview", href: "/research/overview" },
      { label: "Sponsored Research", href: "/research/sponsored" },
      { label: "Ph.D Awarded", href: "/research/phd-awarded" },
      { label: "Publication", href: "/research/publication" },
    ],
  },
  {
    label: "Outreach",
    href: "/outreach",
    subItems: [{ label: "Workshop", href: "/outreach/workshop" }],
  },
  { label: "Industrial Consultancy", href: "/industrial-consultancy" },
  { label: "Clubs", 
    href: "/clubs",
    subItems: [
      { label: "CS Club", href: "https://www.cse.iiitdm.ac.in/csclub.html", target: "__blank" },
      { label: "Developers Club", href: "https://www.devclub.iiitdm.ac.in", target: "__blank" },
    ],
  },
  { label: "CSE Moodle", href: "http://172.16.1.173/moodle/", target: "__blank" },
]

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false) // Track if component has mounted
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null)
  const subDropdownTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsMounted(true) // Set isMounted to true after component mounts
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const handleDropdownToggle = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(label)
    }
  }

  const handleSubDropdownToggle = (label: string) => {
    if (activeSubDropdown === label) {
      setActiveSubDropdown(null)
    } else {
      setActiveSubDropdown(label)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setActiveSubDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
      if (subDropdownTimerRef.current) clearTimeout(subDropdownTimerRef.current)
    }
  }, [])

  // Check if a path is active, including partial matches for subpaths
  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const NavItem = ({ item, mobile = false, level = 0 }) => {
    const [isHovered, setIsHovered] = useState(false)
    const itemRef = useRef(null)

    // Only render on client side after component mounts
    if (!isMounted) return null

    const handleMouseEnter = () => {
      if (!mobile) {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
        setIsHovered(true)
        setActiveDropdown(item.label)
      }
    }

    const handleMouseLeave = () => {
      if (!mobile) {
        dropdownTimerRef.current = setTimeout(() => {
          setIsHovered(false)
          setActiveDropdown(null)
        }, 50)
      }
    }

    const hasSubItems = item.subItems && item.subItems.length > 0
    const isActive = isActivePath(item.href)  // Fix applied here

    return (
      <li
        className={`nav-item relative ${mobile ? "w-full" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={itemRef}
      >
        {hasSubItems ? (
          <div className="w-full">
            <button
              onClick={() => mobile && handleDropdownToggle(item.label)}
              className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium ${
                isActive ? "text-white bg-[#003366]" : "text-[#003366] hover:text-[#6495ED] hover:bg-blue-50"
              } rounded-md transition-colors duration-200`}
            >
              {item.label}
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isHovered ? "rotate-180" : ""}`} />
            </button>

            {isHovered && (
              <ul className="nav-dropdown active">
                {item.subItems.map((subItem) =>
                  subItem.subItems ? (
                    <SubNavItem key={subItem.label} item={subItem} mobile={mobile} level={level + 1} />
                  ) : (
                    <li key={subItem.label}>
                      <Link
                        href={subItem.href}
                        target={subItem.target}
                        className="block px-4 py-2 text-sm text-[#003366] hover:bg-blue-50 hover:text-[#6495ED]"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        ) : (
          <Link
            href={item.href}
            className={`block px-4 py-2 text-sm font-medium ${
              isActive ? "text-white bg-[#003366]" : "text-[#003366] hover:text-[#6495ED] hover:bg-blue-50"
            } rounded-md transition-colors duration-200`}
          >
            {item.label}
          </Link>
        )}
      </li>
    )
  }

  const SubNavItem = ({ item, mobile = false, level = 1 }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0
    const [isHovered, setIsHovered] = useState(false)
    const itemRef = useRef(null)

    if (!isMounted) return null

    const handleMouseEnter = () => {
      if (!mobile) {
        if (subDropdownTimerRef.current) clearTimeout(subDropdownTimerRef.current)
        setIsHovered(true)
      }
    }

    const handleMouseLeave = () => {
      if (!mobile) {
        subDropdownTimerRef.current = setTimeout(() => {
          setIsHovered(false)
        }, 100)
      }
    }

    const isActive = isActivePath(item.href)  // Fix applied here

    return (
      <li
        className={`relative ${mobile ? "w-full" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={itemRef}
      >
        {hasSubItems ? (
          <>
            <button
              onClick={() => handleSubDropdownToggle(item.label)}
              className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium ${
                isActive ? "text-white bg-[#003366]" : "text-[#003366] hover:text-[#6495ED] hover:bg-blue-50"
              } rounded-md transition-all duration-300 ${mobile ? "px-4" : ""}`}
            >
              {item.label}
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />
            </button>

            {isHovered && (
              <ul className="nav-subdropdown">
                {item.subItems.map((subItem) => (
                  <li key={subItem.label}>
                    <Link
                      href={subItem.href}
                      className={`block px-3 py-2 text-sm font-medium ${
                        isActivePath(subItem.href)
                          ? "text-white bg-[#003366]"
                          : "text-[#003366] hover:text-[#6495ED] hover:bg-blue-50"
                      } rounded-md transition-all duration-300 ${mobile ? "px-4" : ""}`}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className={`block px-3 py-2 text-sm font-medium ${
              isActive ? "text-white bg-[#003366]" : "text-[#003366] hover:text-[#6495ED] hover:bg-blue-50"
            } rounded-md transition-all duration-300 ${mobile ? "px-4" : ""}`}
          >
            {item.label}
          </Link>
        )}
      </li>
    )
  }

  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
      if (subDropdownTimerRef.current) clearTimeout(subDropdownTimerRef.current)
    }
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" ref={navRef}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title */}
            <Link href="/" className="flex items-center space-x-4">
              <Image 
                src="/assets/image.png" 
                alt="IIITDM Kancheepuram Logo" 
                width={45} 
                height={45} 
                className="object-contain"
              />
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-[#003366]">IIITDM Kancheepuram</h1>
                <p className="text-xs text-gray-600">Department of Computer Science & Engineering</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <ul className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <NavItem key={item.label} item={item} />
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-[#003366] p-2 rounded-md hover:bg-blue-50"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Update the dropdown styles */}
        <style jsx global>{`
          .nav-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 200px;
            background: white;
            border-radius: 0.375rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
            transition: all 0.2s ease;
          }

          .nav-dropdown.active {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          .nav-subdropdown {
            position: absolute;
            left: 100%;
            top: 0;
            min-width: 200px;
            background: white;
            border-radius: 0.375rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .nav-item:hover > .nav-dropdown {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        `}</style>
      </nav>
      {/* Add a spacer div to prevent content overlap */}
      <div className="h-20"></div>
    </>
  )
}
