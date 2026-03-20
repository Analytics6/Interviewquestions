'use client'

import { motion } from 'framer-motion'
import { BookOpen, Zap, Target, Trophy } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      icon: BookOpen,
      title: 'Learn',
      description: 'Access comprehensive interview questions and detailed explanations for all cloud platforms.',
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      icon: Zap,
      title: 'Practice',
      description: 'Practice with real-world scenario questions and timed mock interviews.',
      color: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      icon: Target,
      title: 'Master',
      description: 'Track your progress and master concepts with our adaptive learning system.',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: Trophy,
      title: 'Excel',
      description: 'Get certified and land your dream cloud engineering role.',
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Path to <span className="gradient-text">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our proven four-step process to master cloud technologies and advance your career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className={`${step.color} rounded-full w-20 h-20 flex items-center justify-center relative`}>
                    <Icon className={`${step.iconColor} w-10 h-10`} />
                    <div className="absolute -top-3 -right-3 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-12 w-8 h-1 bg-gradient-to-r from-indigo-600 to-pink-600 transform translate-x-full"></div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
