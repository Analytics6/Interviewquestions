import Link from 'next/link'
import { CheckCircle, Clock, Award, BookOpen, Zap } from 'lucide-react'

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

export default function CertificationDetailPage({ params }: { params: { id: string } }) {
  // This would be fetched from a database in a real application
  const certification = {
    id: params.id,
    name: 'AWS Solutions Architect Associate',
    code: 'SAA-C03',
    platform: 'AWS',
    difficulty: 'Associate',
    exam_fee: 150,
    course_price: 79.99,
    description: 'Design resilient, cost-effective, and secure AWS infrastructure.',
    skills: ['Design', 'Deployment', 'Architecture', 'Cost Optimization'],
    longDescription: `The AWS Certified Solutions Architect - Associate certification demonstrates knowledge of how to design and deploy dynamically scalable, highly available, and fault-tolerant systems on AWS.

This certification is ideal for individuals who have one or more years of hands-on experience designing available, cost-efficient, fault-tolerant, and secure infrastructure on AWS.`,
    prerequisites: [
      ' 6+ months of hands-on experience with AWS',
      'Understanding of AWS Well-Architected Framework',
      'Knowledge of AWS security practices',
      'Familiarity with networking concepts',
    ],
    examDetails: {
      duration: 130,
      questions: 65,
      passingScore: 720,
      maxScore: 1000,
      type: 'Multiple choice and multiple response questions',
    },
    topics: [
      {
        title: 'Design Resilient Architectures',
        percentage: 30,
        topics: [
          'Design a multi-tier architecture solution',
          'Design high-availability and/or fault-tolerant architectures',
          'Design decoupling mechanisms',
          'Choose appropriate resilient storage',
        ],
      },
      {
        title: 'Design High-Performing Architectures',
        percentage: 28,
        topics: [
          'Identify elastic and scalable compute solutions',
          'Select high-performing and scalable storage solutions',
          'Select high-performing networking solutions',
          'Choose high-performing database solutions',
        ],
      },
      {
        title: 'Design Secure Applications and Architectures',
        percentage: 24,
        topics: [
          'Design secure access to AWS resources',
          'Design secure application tiers',
          'Select appropriate data security options',
        ],
      },
      {
        title: 'Design Cost-Optimized Architectures',
        percentage: 18,
        topics: [
          'Identify cost-effective compute options',
          'Identify cost-effective storage options',
          'Identify cost-effective database options',
          'Analyze and describe right-sizing opportunities',
        ],
      },
    ],
    prepResources: [
      {
        title: 'Complete Course',
        description: 'In-depth video course covering all exam topics',
        icon: '🎓',
      },
      {
        title: '200+ Practice Questions',
        description: 'Real exam-style practice questions with detailed explanations',
        icon: '📝',
      },
      {
        title: 'Mock Exams',
        description: 'Full-length practice exams to test your readiness',
        icon: '🧪',
      },
      {
        title: 'Study Materials',
        description: 'Comprehensive study guides and reference materials',
        icon: '📚',
      },
      {
        title: 'Expert Support',
        description: 'Get help from experienced AWS architects',
        icon: '👨‍🏫',
      },
      {
        title: 'Community Forum',
        description: 'Learn from other students preparing for the exam',
        icon: '💬',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-white/20 text-sm font-semibold px-3 py-1 rounded-full">
              AWS Certification
            </span>
            <span className="text-3xl font-bold">{certification.code}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{certification.name}</h1>
          <p className="text-lg opacity-90 max-w-2xl">{certification.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-3xl font-bold mb-6">About this Certification</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {certification.longDescription}
              </p>

              <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
              <ul className="space-y-2">
                {certification.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam Details */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Exam Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Duration</p>
                  <p className="text-2xl font-bold">{certification.examDetails.duration} min</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Questions</p>
                  <p className="text-2xl font-bold">{certification.examDetails.questions}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Passing Score</p>
                  <p className="text-2xl font-bold">{certification.examDetails.passingScore}/{certification.examDetails.maxScore}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Question Types:</strong> {certification.examDetails.type}
                </p>
              </div>
            </div>

            {/* Exam Topics */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Exam Topics Breakdown</h2>
              <div className="space-y-6">
                {certification.topics.map((topic, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold">{topic.title}</h3>
                      <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-3 py-1 rounded-full">
                        {topic.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${topic.percentage}%` }}
                      ></div>
                    </div>

                    <ul className="space-y-2">
                      {topic.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-1" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Prep Resources */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Preparation Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certification.prepResources.map((resource, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">{resource.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Course Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sticky top-20 shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Get Certified</h3>
              <p className="text-gray-600 mb-6">Complete preparation course included</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">${certification.course_price}</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Exam Fee: ${certification.exam_fee} (separate)</p>
                  <p>Difficulty: {certification.difficulty}</p>
                </div>
              </div>

              <button className="btn-primary w-full mb-3">Enroll in Course</button>
              <button className="btn-outline w-full">Learn More</button>

              <div className="space-y-3 my-8 pb-8 border-b border-gray-200">
                <h4 className="font-bold text-sm">Course Includes:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <BookOpen size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Complete video course</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>200+ practice questions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Mock exams</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={16} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Lifetime access</span>
                  </div>
                </div>
              </div>

              <Link href="/courses">
                <button className="text-indigo-600 font-semibold hover:text-indigo-700 w-full text-center py-2">
                  ← Back to Certifications
                </button>
              </Link>

              <div className="mt-6 p-4 bg-green-50 rounded-lg text-sm text-green-700 text-center">
                ✓ 30-day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
