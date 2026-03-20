'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'AWS Solutions Architect',
      image: 'https://via.placeholder.com/60x60/6366F1/FFFFFF?text=SJ',
      rating: 5,
      text: 'CloudAcademy helped me pass my AWS certification on the first attempt. The interview questions were incredibly helpful!',
      company: 'Tech Innovations Inc.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Azure Administrator',
      image: 'https://via.placeholder.com/60x60/0078D4/FFFFFF?text=MC',
      rating: 5,
      text: 'The multi-cloud bundle is a game-changer. Clear explanations and hands-on practice scenarios made all the difference.',
      company: 'Cloud Solutions Ltd.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'GCP Professional Engineer',
      image: 'https://via.placeholder.com/60x60/EA4335/FFFFFF?text=ER',
      rating: 5,
      text: 'I landed my dream job at Google after using CloudAcademy. The structured learning path and mock interviews were excellent.',
      company: 'Google Cloud',
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      image: 'https://via.placeholder.com/60x60/F97316/FFFFFF?text=JW',
      rating: 5,
      text: 'Finally found a platform that covers all three major cloud providers comprehensively. Worth every penny!',
      company: 'DevOps Masters',
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied students who have advanced their cloud careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">10K+</div>
            <p className="text-lg">Active Students</p>
          </div>
          <div className="text-center border-l border-r border-white/30">
            <div className="text-5xl font-bold mb-2">95%</div>
            <p className="text-lg">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">500+</div>
            <p className="text-lg">Question Bank</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
