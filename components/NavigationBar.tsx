'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold gradient-text">
          CloudAcademy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-indigo-600 transition-colors">
            Courses
          </Link>
          <Link href="/certifications" className="hover:text-indigo-600 transition-colors">
            Certifications
          </Link>
          <Link href="/interview-questions" className="hover:text-indigo-600 transition-colors">
            Interview Questions
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            About
          </Link>
          <Link href="/cart" className="relative">
            <button className="btn-primary">
              Shop
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container flex flex-col gap-4">
            <Link href="/" className="hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/courses" className="hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>
              Courses
            </Link>
            <Link href="/certifications" className="hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>
              Certifications
            </Link>
            <Link href="/interview-questions" className="hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>
              Interview Questions
            </Link>
            <Link href="/about" className="hover:text-indigo-600 transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/cart" onClick={() => setIsOpen(false)}>
              <button className="btn-primary w-full">Shop</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
