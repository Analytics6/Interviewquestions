'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Check } from 'lucide-react'

export default function CTASection() {
  const benefits = [
    'Lifetime access to all course materials',
    '500+ hand-picked interview questions',
    'Detailed explanations for every answer',
    'Monthly updates with new content',
    'Expert instructor support',
    'Certification exam discounts',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 left-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Transform</span> Your Career?
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of successful cloud engineers who have used CloudAcademy to land their dream jobs and advance their careers.
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">What You'll Get:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Check className="text-indigo-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link href="/courses">
                <button className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 hover:scale-105 transition-transform">
                  <Zap size={24} />
                  Start Your Journey Today
                </button>
              </Link>
            </motion.div>

            <p className="text-gray-400 text-sm mt-6">
              30-day money-back guarantee • No credit card required for free trial
            </p>
          </motion.div>

          {/* Right Content - Pricing Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 md:p-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">Premium Bundle</h3>
              <p className="text-gray-300 mb-8">All three cloud platforms</p>

              <div className="mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold">$199.99</span>
                  <span className="text-gray-400 line-through">$349.99</span>
                </div>
                <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Save 43%
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Get lifetime access to all AWS, Azure, and GCP certification courses.
              </p>

              <Link href="/checkout/bundle" className="w-full">
                <button className="btn-secondary w-full mb-4 py-3 text-lg font-semibold hover:scale-105 transition-transform">
                  Claim Your Spot
                </button>
              </Link>

              <button className="btn-outline w-full py-3 text-lg font-semibold hover:scale-105 transition-transform">
                Start Free Trial
              </button>

              <p className="text-gray-400 text-sm mt-6">
                Limited time offer • 7-day free trial included
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-10 pt-10 border-t border-white/20 space-y-3">
              {['AWS Courses', 'Azure Courses', 'GCP Courses', 'Interview Questions', '24/7 Support'].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-indigo-400 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
