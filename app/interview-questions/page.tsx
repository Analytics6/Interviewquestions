'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Lock } from 'lucide-react'

export default function InterviewQuestionsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const questions = [
    {
      id: 1,
      question: 'What is the difference between RDS and DynamoDB?',
      category: 'AWS',
      level: 'Beginner',
      premium: false,
      answer: 'RDS is a relational database service supporting SQL, while DynamoDB is a NoSQL document database. RDS is better for structured data with complex queries, while DynamoDB excels at high-speed, low-latency operations at scale.',
    },
    {
      id: 2,
      question: 'How would you design a highly available application on AWS?',
      category: 'AWS',
      level: 'Advanced',
      premium: true,
      answer: 'Use multiple availability zones with load balancers, CloudFront for CDN, auto-scaling groups, RDS multi-AZ deployment, and implement health checks. Use Route 53 for DNS failover and ensure proper backup strategies.',
    },
    {
      id: 3,
      question: 'What is the purpose of Azure DevOps?',
      category: 'Azure',
      level: 'Beginner',
      premium: false,
      answer: 'Azure DevOps provides tools for planning, developing, deploying, and operating solutions. It includes services like Repos, Pipelines, Test Plans, and Artifacts to enable CI/CD and project management.',
    },
    {
      id: 4,
      question: 'Explain the Azure Resource Manager (ARM) model.',
      category: 'Azure',
      level: 'Intermediate',
      premium: true,
      answer: 'ARM is Azure\'s deployment and management framework. It allows you to create, update, and delete resources as a group (resource groups). ARM provides role-based access control and supports infrastructure as code through ARM templates.',
    },
    {
      id: 5,
      question: 'What is Google Cloud Pub/Sub?',
      category: 'GCP',
      level: 'Beginner',
      premium: false,
      answer: 'Pub/Sub is a messaging service for asynchronous event processing. Publishers send messages to topics, and subscribers receive messages from subscriptions. It decouples services and ensures reliable message delivery.',
    },
    {
      id: 6,
      question: 'How does BigQuery handle large-scale analytics?',
      category: 'GCP',
      level: 'Advanced',
      premium: true,
      answer: 'BigQuery is a serverless data warehouse using Dremel technology for fast SQL queries. It auto-scales, uses columnar storage for compression, and supports federated queries across different cloud providers.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interview Questions</h1>
          <p className="text-xl text-gray-600">Master 500+ carefully curated interview questions across AWS, Azure, and GCP</p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                className="w-full ps-6 pr-6 py-4 flex items-start justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      q.category === 'AWS' ? 'bg-orange-100 text-orange-700' :
                      q.category === 'Azure' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {q.category}
                    </span>
                    <span className={`text-xs font-semibold ${
                      q.level === 'Beginner' ? 'text-green-600' :
                      q.level === 'Intermediate' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {q.level}
                    </span>
                    {q.premium && (
                      <Lock size={14} className="text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{q.question}</h3>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                    expandedId === q.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === q.id && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  {q.premium ? (
                    <div className="text-center py-4">
                      <p className="text-gray-600 mb-4">This is a premium question</p>
                      <Link href="/courses">
                        <button className="btn-primary">
                          Unlock All Questions
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Answer:</h4>
                      <p className="text-gray-700 leading-relaxed">{q.answer}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want access to all 500+ questions?</h2>
          <p className="text-lg mb-6 opacity-90">Get lifetime access to our complete question bank with detailed explanations</p>
          <Link href="/courses">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Enroll in a Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
