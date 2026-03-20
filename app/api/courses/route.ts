export async function GET() {
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
      level: 'Associate',
      description: 'Master the fundamentals of AWS architecture and ace your SAA-C03 certification exam.',
    },
    {
      id: 2,
      title: 'AWS Developer Associate',
      category: 'AWS',
      price: 74.99,
      originalPrice: 124.99,
      rating: 4.8,
      students: 1800,
      duration: '6 weeks',
      level: 'Associate',
      description: 'Learn to build and deploy applications on AWS platforms.',
    },
    {
      id: 3,
      title: 'Azure Administrator Certified',
      category: 'Azure',
      price: 69.99,
      originalPrice: 119.99,
      rating: 4.8,
      students: 1600,
      duration: '6 weeks',
      level: 'Associate',
      description: 'Master the fundamentals of Azure administration and infrastructure management.',
    },
    {
      id: 4,
      title: 'Google Cloud Professional',
      category: 'GCP',
      price: 74.99,
      originalPrice: 124.99,
      rating: 4.7,
      students: 1200,
      duration: '7 weeks',
      level: 'Professional',
      description: 'Become an expert in Google Cloud Platform architecture and services.',
    },
  ]

  return Response.json(courses)
}
