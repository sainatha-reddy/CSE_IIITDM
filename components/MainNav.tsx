"use client"

import { useState, useEffect, useRef } from "react"
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
      { label: "Curriculum", href: "https://www.iiitdm.ac.in/students/existing-students/curriculum-info",target:"__blank" },
      { label: "Online Electives", href: "/teaching/online-electives" },
      { label: "Time Table", href: "https://www.iiitdm.ac.in/students/existing-students/time-table",target:"__blank" },
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
      { label: "Research Scholars", href: "https://www.iiitdm.ac.in/people/research-scholars/cse" ,target:"__blank"},
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
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null)
  const subDropdownTimerRef = useRef<NodeJS.Timeout | null>(null)

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
    const hasSubItems = item.subItems && item.subItems.length > 0
    const isActive = isActivePath(item.href)
    const [isHovered, setIsHovered] = useState(false)
    const itemRef = useRef(null)

    // Check if any subitem is active
    const hasActiveChild =
      hasSubItems &&
      item.subItems.some(
        (subItem) =>
          isActivePath(subItem.href) ||
          (subItem.subItems && subItem.subItems.some((grandChild) => isActivePath(grandChild.href))),
      )

    // Determine if dropdown should be open
    const isDropdownOpen = mobile
      ? activeDropdown === item.label
      : (level === 0 ? isHovered : activeDropdown === item.label) || (hasActiveChild && level === 0 && !mobile)

    const handleMouseEnter = () => {
      if (!mobile && level === 0) {
        if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
        setIsHovered(true)
      }
    }

    const handleMouseLeave = () => {
      if (!mobile && level === 0) {
        dropdownTimerRef.current = setTimeout(() => {
          // Only close if we're still not hovering over the item or its dropdown
          if (itemRef.current && !itemRef.current.matches(":hover")) {
            setIsHovered(false)
          }
        }, 100) // Reduce from 300ms to 100ms for faster response
      }
    }

    return (
      <li
        className={`relative ${mobile ? "w-full" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={itemRef}
      >
        {hasSubItems ? (
          <div className="w-full">
            <button
              onClick={() => handleDropdownToggle(item.label)}
              className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium ${
                isActive || hasActiveChild
                  ? "text-white bg-[#003366]"
                  : "text-[#003366] hover:text-[#6495ED] hover:bg-blue-50"
              } rounded-md transition-all duration-300 ${mobile ? "px-4" : ""}`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              {item.label}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -5, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${
                    mobile
                      ? "mt-1 ml-4 overflow-hidden"
                      : "absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-[#B0B0B0] overflow-hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  onMouseEnter={() => {
                    if (!mobile && level === 0) {
                      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
                      setIsHovered(true)
                    }
                  }}
                  onMouseLeave={() => {
                    if (!mobile && level === 0) {
                      dropdownTimerRef.current = setTimeout(() => {
                        setIsHovered(false)
                      }, 100) // Reduce from 300ms to 100ms
                    }
                  }}
                >
                  {item.subItems.map((subItem) =>
                    subItem.subItems && subItem.subItems.length > 0 ? (
                      <SubNavItem
                        key={subItem.label}
                        item={subItem}
                        mobile={mobile}
                        level={level + 1}
                        parentOpen={isDropdownOpen}
                      />
                    ) : (
                      <li key={subItem.label} role="none">
                        <Link
                          href={subItem.href}
                          className={`block px-3 py-2 text-sm font-medium ${
                            isActivePath(subItem.href)
                              ? "text-white bg-[#003366]"
                              : "text-[#003366] hover:text-[#6495ED] hover:bg-blue-50"
                          } rounded-md transition-all duration-300 ${mobile ? "px-4" : ""}`}
                          role="menuitem"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ),
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
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

  const SubNavItem = ({ item, mobile = false, level = 1, parentOpen = false }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0
    const isActive = isActivePath(item.href)
    const [isHovered, setIsHovered] = useState(false)
    const itemRef = useRef(null)

    // Check if any subitem is active
    const hasActiveChild = hasSubItems && item.subItems.some((subItem) => isActivePath(subItem.href))

    // Determine if dropdown should be open
    const isDropdownOpen = mobile ? activeSubDropdown === item.label : isHovered || (hasActiveChild && !mobile)

    const handleMouseEnter = () => {
      if (!mobile) {
        if (subDropdownTimerRef.current) clearTimeout(subDropdownTimerRef.current)
        setIsHovered(true)
      }
    }

    const handleMouseLeave = () => {
      if (!mobile) {
        subDropdownTimerRef.current = setTimeout(() => {
          // Only close if we're still not hovering over the item or its dropdown
          if (itemRef.current && !itemRef.current.matches(":hover")) {
            setIsHovered(false)
          }
        }, 100) // Reduce from 300ms to 100ms
      }
    }

    return (
      <li
        className={`relative ${mobile ? "w-full" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={itemRef}
      >
        {hasSubItems ? (
          <div className="w-full">
            <button
              onClick={() => handleSubDropdownToggle(item.label)}
              className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium ${
                isActive || hasActiveChild
                  ? "text-white bg-[#003366]"
                  : "text-[#003366] hover:text-[#6495ED] hover:bg-blue-50"
              } rounded-md transition-all duration-300 ${mobile ? "px-4" : ""}`}
            >
              {item.label}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, x: -5, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${
                    mobile
                      ? "mt-1 ml-4 overflow-hidden"
                      : "absolute left-full top-0 w-48 bg-white rounded-md shadow-lg py-1 z-30 border border-[#B0B0B0] overflow-hidden"
                  }`}
                  onMouseEnter={() => {
                    if (!mobile) {
                      if (subDropdownTimerRef.current) clearTimeout(subDropdownTimerRef.current)
                      setIsHovered(true)
                    }
                  }}
                  onMouseLeave={() => {
                    if (!mobile) {
                      subDropdownTimerRef.current = setTimeout(() => {
                        setIsHovered(false)
                      }, 100) // Reduce from 300ms to 100ms
                    }
                  }}
                >
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
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
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

  // Add this useEffect for proper cleanup
  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
      if (subDropdownTimerRef.current) clearTimeout(subDropdownTimerRef.current)
    }
  }, [])

  return (
    <nav className="relative z-10" ref={navRef}>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <ul className="flex space-x-1 items-center">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-[#003366] hover:text-[#6495ED] focus:outline-none transition-colors duration-300 p-2 rounded-md"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-20 left-0 bottom-0 w-72 bg-white shadow-lg overflow-y-auto border-r border-[#B0B0B0] z-50"
            >
              <div className="py-4 px-2">
                <div className="flex items-center justify-between px-4 mb-4">
                  <h3 className="text-[#003366] font-bold text-lg">Menu</h3>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#003366] hover:text-[#6495ED] focus:outline-none transition-colors duration-300"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="border-b border-[#B0B0B0] mb-4"></div>
                <ul className="py-2 px-2 space-y-1">
                  {navItems.map((item) => (
                    <NavItem key={item.label} item={item} mobile={true} />
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay to close mobile menu when clicking outside */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}

