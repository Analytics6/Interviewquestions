'use client'

import Link from 'next/link'
import { Award } from 'lucide-react'

export default function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      name: 'AWS Solutions Architect Associate',
      code: 'SAA-C03',
      platform: 'AWS',
      difficulty: 'Associate',
      exam_fee: 150,
      course_price: 79.99,
      description: 'Design resilient, cost-effective, and secure AWS infrastructure.',
      skills: ['Design', 'Deployment', 'Architecture', 'Cost Optimization'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 2,
      name: 'AWS Developer Associate',
      code: 'DVA-C02',
      platform: 'AWS',
      difficulty: 'Associate',
      exam_fee: 150,
      course_price: 74.99,
      description: 'Build and deploy applications on AWS platforms.',
      skills: ['Development', 'API', 'Lambda', 'Deployment'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 3,
      name: 'Azure Administrator',
      code: 'AZ-104',
      platform: 'Azure',
      difficulty: 'Associate',
      exam_fee: 165,
      course_price: 69.99,
      description: 'Manage Azure subscriptions, secure identities, and manage infrastructure.',
      skills: ['Management', 'Security', 'Networking', 'Storage'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 4,
      name: 'Azure Solutions Architect',
      code: 'AZ-305',
      platform: 'Azure',
      difficulty: 'Expert',
      exam_fee: 165,
      course_price: 84.99,
      description: 'Design Azure infrastructure solutions for enterprise organizations.',
      skills: ['Architecture', 'Migration', 'Security', 'Performance'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 5,
      name: 'Google Cloud Associate',
      code: 'ACE',
      platform: 'GCP',
      difficulty: 'Associate',
      exam_fee: 200,
      course_price: 64.99,
      description: 'Demonstrate cloud computing concepts and basic usage of GCP.',
      skills: ['Cloud Basics', 'Compute', 'Storage', 'Networking'],
      color: 'from-red-500 to-red-600',
    },
    {
      id: 6,
      name: 'Google Cloud Professional',
      code: 'PCA',
      platform: 'GCP',
      difficulty: 'Professional',
      exam_fee: 200,
      course_price: 74.99,
      description: 'Design and manage enterprise cloud solutions on Google Cloud.',
      skills: ['Architecture', 'Security', 'Organization', 'Operations'],
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Certifications</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prepare for and master the world's most in-demand cloud certifications
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Link key={cert.id} href={`/certification/${cert.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{cert.name}</h3>
                    <Award size={24} />
                  </div>
                  <p className="text-sm opacity-90">Exam Code: {cert.code}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                      {cert.difficulty}
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      Exam Fee: ${cert.exam_fee}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Course Price</p>
                      <p className="text-2xl font-bold text-indigo-600">${cert.course_price}</p>
                    </div>
                    <button className="btn-primary px-4 py-2 text-sm">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Certified?</h2>
          <p className="text-lg mb-8 opacity-90">Start your certification journey today with our expert-led courses and comprehensive study materials.</p>
          <Link href="/courses">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Start Learning
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
