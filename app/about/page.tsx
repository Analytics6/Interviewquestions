'use client'

import Link from 'next/link'
import { Users, Target, Zap, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CloudAcademy</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Empowering cloud engineers to master modern technologies and advance their careers.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            CloudAcademy was founded by cloud engineers who recognized a gap in the market. We struggled to find comprehensive, up-to-date resources for preparing software engineers for cloud certification exams and technical interviews.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            In 2024, we launched CloudAcademy with a mission: to provide world-class education for cloud technologies, making it accessible to everyone regardless of their background or location.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, we've helped over 10,000 engineers successfully pass their certifications and land their dream jobs in cloud computing.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student-First</h3>
              <p className="text-gray-600">Everything we do is centered around our students' success and satisfaction.</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">We maintain the highest standards in quality, accuracy, and expertise.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously update our content with the latest cloud technologies.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-600">We believe quality cloud education should be available to everyone.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { name: 'Alex Johnson', role: 'Founder & CEO', expertise: 'AWS Architect' },
            { name: 'Sarah Chen', role: 'CTO', expertise: 'Azure Expert' },
            { name: 'Marcus Williams', role: 'Head of Content', expertise: 'GCP Specialist' },
          ].map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-sm text-indigo-600 font-semibold">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-pink-600 py-16">
        <div className="container text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Become part of a thriving community of cloud professionals learning and growing together.
          </p>
          <Link href="/courses">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start Learning Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
