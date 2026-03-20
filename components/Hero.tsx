'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Award, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Master Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Technologies</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Prepare for AWS, Azure, and GCP certifications with our comprehensive interview questions and expert-crafted certification programs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/courses">
                <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105 transition-transform">
                  Explore Courses <ArrowRight size={20} />
                </button>
              </Link>
              <Link href="/interview-questions">
                <button className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105 transition-transform">
                  Try Free Questions
                </button>
              </Link>
            </motion.div>

            <motion.div
              className="flex gap-8 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Users size={20} className="text-indigo-400" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-pink-400" />
                <span>500+ Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud size={20} className="text-indigo-400" />
                <span>3 Cloud Platforms</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Animated Cards */}
          <motion.div
            className="relative h-full min-h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* AWS Card */}
              <motion.div
                className="absolute bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-2xl w-60 h-48"
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ top: '0%', left: '0%' }}
              >
                <h3 className="text-2xl font-bold mb-2">AWS</h3>
                <p className="text-sm text-gray-100">Solutions Architect & Developer</p>
                <div className="mt-4 text-3xl font-bold">200+</div>
                <p className="text-xs text-gray-100">Interview Questions</p>
              </motion.div>

              {/* Azure Card */}
              <motion.div
                className="absolute bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-2xl w-60 h-48"
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ top: '40%', right: '10%' }}
              >
                <h3 className="text-2xl font-bold mb-2">Azure</h3>
                <p className="text-sm text-gray-100">Administrator & Developer</p>
                <div className="mt-4 text-3xl font-bold">180+</div>
                <p className="text-xs text-gray-100">Interview Questions</p>
              </motion.div>

              {/* GCP Card */}
              <motion.div
                className="absolute bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-2xl w-60 h-48"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ bottom: '10%', left: '20%' }}
              >
                <h3 className="text-2xl font-bold mb-2">Google Cloud</h3>
                <p className="text-sm text-gray-100">Associate & Professional</p>
                <div className="mt-4 text-3xl font-bold">150+</div>
                <p className="text-xs text-gray-100">Interview Questions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
