'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Star, Users, Clock } from 'lucide-react'

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const courses = [
    { id: 1, title: 'AWS Solutions Architect Associate', category: 'AWS', price: 79.99, students: 2500, duration: '8 weeks', rating: 4.9 },
    { id: 2, title: 'AWS Developer Associate', category: 'AWS', price: 74.99, students: 1800, duration: '6 weeks', rating: 4.8 },
    { id: 3, title: 'AWS SysOps Administrator', category: 'AWS', price: 69.99, students: 1200, duration: '6 weeks', rating: 4.7 },
    { id: 4, title: 'Azure Administrator Certified', category: 'Azure', price: 69.99, students: 1600, duration: '6 weeks', rating: 4.8 },
    { id: 5, title: 'Azure Developer Associate', category: 'Azure', price: 74.99, students: 1400, duration: '7 weeks', rating: 4.9 },
    { id: 6, title: 'Azure Solutions Architect', category: 'Azure', price: 84.99, students: 900, duration: '8 weeks', rating: 4.7 },
    { id: 7, title: 'Google Cloud Professional', category: 'GCP', price: 74.99, students: 1200, duration: '7 weeks', rating: 4.7 },
    { id: 8, title: 'Google Cloud Associate', category: 'GCP', price: 64.99, students: 800, duration: '5 weeks', rating: 4.6 },
  ]

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
          <p className="text-xl text-gray-600">Choose from our comprehensive catalog of cloud certification courses</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter size={20} />
              <h3 className="font-semibold">Filter by Platform</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['all', 'AWS', 'Azure', 'GCP'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Platforms' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <Link key={course.id} href={`/course/${course.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
                <div className="h-40 bg-gradient-to-r from-indigo-600 to-pink-600"></div>
                <div className="p-6">
                  <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold mb-4">{course.title}</h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-2xl font-bold text-indigo-600">${course.price}</span>
                    <button className="btn-primary px-4 py-2">Enroll</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
