'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">CloudAcademy</h3>
            <p className="text-gray-300 mb-4">
              Leading platform for cloud technology interview preparation and certifications.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-300 hover:text-indigo-400 transition-colors">Courses</Link></li>
              <li><Link href="/certifications" className="text-gray-300 hover:text-indigo-400 transition-colors">Certifications</Link></li>
              <li><Link href="/interview-questions" className="text-gray-300 hover:text-indigo-400 transition-colors">Interview Questions</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-indigo-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Mail size={18} className="text-indigo-400" />
                <a href="mailto:support@cloudacademy.com" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  support@cloudacademy.com
                </a>
              </div>
              <div className="flex gap-2">
                <Phone size={18} className="text-indigo-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin size={18} className="text-indigo-400" />
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CloudAcademy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Built with ❤️ for cloud engineers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
