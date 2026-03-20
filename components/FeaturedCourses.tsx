'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Users, Clock, ArrowRight } from 'lucide-react'

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: 'AWS Solutions Architect Associate',
      category: 'AWS',
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.9,
      students: 2500,
      duration: '8 weeks',
      image: 'https://via.placeholder.com/400x250/FF9900/FFFFFF?text=AWS',
      description: 'Master AWS architecture principles and ace your SAA-C03 certification exam.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 2,
      title: 'Azure Administrator Certified',
      category: 'Azure',
      price: 69.99,
      originalPrice: 119.99,
      rating: 4.8,
      students: 1800,
      duration: '6 weeks',
      image: 'https://via.placeholder.com/400x250/0078D4/FFFFFF?text=Azure',
      description: 'Learn to manage and deploy Azure applications and infrastructure.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Google Cloud Professional',
      category: 'GCP',
      price: 74.99,
      originalPrice: 124.99,
      rating: 4.7,
      students: 1200,
      duration: '7 weeks',
      image: 'https://via.placeholder.com/400x250/EA4335/FFFFFF?text=GCP',
      description: 'Become an expert in Google Cloud Platform architecture and services.',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 4,
      title: 'Multi-Cloud Certification Bundle',
      category: 'All Platforms',
      price: 199.99,
      originalPrice: 349.99,
      rating: 4.95,
      students: 3200,
      duration: '16 weeks',
      image: 'https://via.placeholder.com/400x250/6366F1/FFFFFF?text=Multi-Cloud',
      description: 'Complete bundle covering AWS, Azure, and GCP certifications.',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your certification journey with our most popular courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-20">
                  {course.category.substring(0, 1)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()} enrolled</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-3xl font-bold">${course.price}</span>
                  <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                </div>

                <Link href={`/course/${course.id}`}>
                  <button className="btn-primary w-full flex items-center justify-center gap-2 hover:gap-3 transition-all">
                    Enroll Now <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link href="/courses">
            <button className="btn-outline">
              View All Courses
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
