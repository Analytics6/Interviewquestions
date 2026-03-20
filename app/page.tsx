'use client'

import Hero from '@/components/Hero'
import ProcessSection from '@/components/ProcessSection'
import FeaturedCourses from '@/components/FeaturedCourses'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ProcessSection />
      <FeaturedCourses />
      <Testimonials />
      <CTASection />
    </div>
  )
}
