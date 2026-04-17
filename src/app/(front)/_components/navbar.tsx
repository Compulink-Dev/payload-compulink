'use client'
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Services', link: '/services' },
    { name: 'Events', link: '/events' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Blog', link: '/blog' },
    { name: 'Vacancies', link: '/vacancy' },
  ]

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if link is active
  const isActive = (linkPath: string) => {
    // For home page, check exact match
    if (linkPath === '/') {
      return pathname === '/'
    }

    // For other pages, check if pathname starts with the link path
    // This handles nested routes like /services/something
    return pathname.startsWith(linkPath)
  }

  return (
    <>
      {/* Top Bar - Modern Gradient */}
      <div className="hidden md:block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-2.5 px-4 text-xs border-b border-slate-700/30">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
              <Phone size={13} className="text-blue-500" />
              <span>+263 242 494 407</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer">
              <Mail size={13} className="text-blue-500" />
              <span>info@compulink.co.zw</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/search/top/?q=compulink%20holdings"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://x.com/compulinkzw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/compulink_zw/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Modern Glass Effect */}
      <nav
        className={`w-full fixed top-0 md:top-10 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-white/20'
            : 'bg-white/50 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo with Hover Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="inline-block">
                <Image
                  src={'/images/logo.png'}
                  alt="Compulink"
                  height={60}
                  width={180}
                  className="h-8 md:h-12 w-auto"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {links.map((link) => {
                const active = isActive(link.link)
                return (
                  <li key={link.name}>
                    <Link
                      href={link.link}
                      className="relative px-3.5 py-2 text-sm font-medium transition-all duration-300 group"
                    >
                      <span
                        className={`transition-colors duration-300 ${
                          scrolled
                            ? active
                              ? 'text-blue-600'
                              : 'text-gray-700 group-hover:text-blue-600'
                            : active
                              ? 'text-white'
                              : 'text-white/90 group-hover:text-white'
                        }`}
                      >
                        {link.name}
                      </span>
                      {/* Animated Underline */}
                      <motion.span
                        className={`absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full ${
                          scrolled ? 'bg-blue-600' : 'bg-blue-400'
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: active ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 'left' }}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className={`rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    scrolled
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
                  }`}
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20"
            >
              <div className="container mx-auto px-4 py-4">
                <ul className="space-y-2">
                  {links.map((link) => {
                    const active = isActive(link.link)
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={link.link}
                          onClick={() => setOpen(false)}
                          className={`block px-4 py-3 rounded-lg transition-all font-medium ${
                            active
                              ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
                <motion.div
                  className="mt-4 pt-4 border-t"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar
