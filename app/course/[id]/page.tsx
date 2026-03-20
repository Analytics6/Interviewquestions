import Link from 'next/link'
import { Star, Users, Clock, Award, Download, CheckCircle } from 'lucide-react'

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ]
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // This would be fetched from a database in a real application
  const course = {
    id: params.id,
    title: 'AWS Solutions Architect Associate',
    category: 'AWS',
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.9,
    students: 2500,
    duration: '8 weeks',
    level: 'Associate',
    description: 'Master the fundamentals of AWS architecture and ace your SAA-C03 certification exam.',
    longDescription: `This comprehensive course is designed to teach you everything you need to know to pass the AWS Solutions Architect Associate exam and become proficient in designing resilient, cost-effective, and secure AWS infrastructure.

Throughout the course, you'll learn about:
- AWS Well-Architected Framework
- Design resilient architectures
- Design high-performing architectures
- Design secure applications and architectures
- Design cost-optimized architectures`,
    instructor: 'John Smith',
    instructorBio: 'AWS Certified Solutions Architect with 10+ years of cloud experience',
    includes: [
      'Lifetime access to course materials',
      '50+ video lessons (15+ hours)',
      '200 practice exam questions',
      'Real-world case studies',
      'Downloadable resources',
      'Certificate of completion',
      'Access to private community',
      'Email support',
    ],
    resources: [
      'Course study guide PDF',
      'Exam prep checklists',
      'Architecture diagrams',
      'AWS CLI reference',
      'Sample configurations',
    ],
    sections: [
      {
        title: 'Module 1: AWS Fundamentals',
        lessons: 8,
        duration: '90 minutes',
      },
      {
        title: 'Module 2: Identity and Access Management',
        lessons: 6,
        duration: '75 minutes',
      },
      {
        title: 'Module 3: Networking',
        lessons: 10,
        duration: '120 minutes',
      },
      {
        title: 'Module 4: Storage',
        lessons: 8,
        duration: '100 minutes',
      },
      {
        title: 'Module 5: Databases',
        lessons: 7,
        duration: '85 minutes',
      },
      {
        title: 'Module 6: Mock Exams',
        lessons: 3,
        duration: '240 minutes',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="container">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/20 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              {course.category} {course.level}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg opacity-90">{course.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Stats */}
            <div className="flex flex-wrap gap-6 mb-12 pb-12 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <div>
                  <div className="font-bold">{course.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <div>
                  <div className="font-bold">{course.students.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <div>
                  <div className="font-bold">{course.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} />
                <div>
                  <div className="font-bold">Certification</div>
                  <div className="text-sm text-gray-600">Included</div>
                </div>
              </div>
            </div>

            {/* Instructor */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0 flex items-center justify-center text-white text-3xl font-bold">
                  JS
                </div>
                <div>
                  <h3 className="text-xl font-bold">{course.instructor}</h3>
                  <p className="text-gray-600 mb-4">{course.instructorBio}</p>
                  <p className="text-gray-700 leading-relaxed">
                    With over 10 years of experience in cloud architecture and AWS certifications, our instructor brings real-world knowledge and practical expertise to every lesson.
                  </p>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Course Content</h2>
              <div className="space-y-4">
                {course.sections.map((section, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{section.title}</h3>
                        <p className="text-sm text-gray-600">
                          {section.lessons} lessons • {section.duration}
                        </p>
                      </div>
                      <span className="text-indigo-600 font-semibold">{section.lessons} lessons</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Downloadable Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.resources.map((resource, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Download size={20} className="text-indigo-600" />
                      <span className="font-medium">{resource}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Course Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 sticky top-20 shadow-lg">
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold">${course.price}</span>
                  <span className="text-gray-500 line-through">${course.originalPrice}</span>
                </div>
                <p className="text-green-600 font-semibold">Save ${(course.originalPrice - course.price).toFixed(2)}</p>
              </div>

              <button className="btn-primary w-full mb-3">Enroll Now</button>
              <button className="btn-outline w-full mb-8">Add to Wishlist</button>

              <div className="space-y-4 pb-8 border-b border-gray-200">
                <h3 className="font-bold text-lg">What's included</h3>
                {course.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Link href="/courses">
                  <button className="text-indigo-600 font-semibold hover:text-indigo-700 w-full text-center py-2">
                    ← Back to Courses
                  </button>
                </Link>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 text-center">
                30-day money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
