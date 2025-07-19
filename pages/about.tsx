"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

export function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Customer-Centric",
      description:
        "We put our customers at the heart of everything we do, building solutions that truly solve their challenges.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "We constantly push the boundaries of technology to deliver cutting-edge aquaculture monitoring solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in product quality, customer service, and technical support.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We're committed to supporting sustainable aquaculture practices for a healthier planet.",
    },
  ]

  const team = [
    {
      name: "Dr. Maria Santos",
      role: "CEO & Co-Founder",
      bio: "Former marine biologist with 15 years in aquaculture research and sustainable farming practices.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "David Chen",
      role: "CTO & Co-Founder",
      bio: "IoT and sensor technology expert with background in precision agriculture and environmental monitoring.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Scientist",
      bio: "Leading researcher in fish health and water quality management with 20+ publications.",
      image: "/placeholder-user.jpg",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About OCEA</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize aquaculture through intelligent monitoring technology, helping farmers
              worldwide optimize their operations while promoting sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower aquaculture professionals with intelligent monitoring solutions that optimize fish health,
                reduce operational costs, and promote sustainable farming practices for a healthier planet.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where every aquaculture operation has access to real-time insights and data-driven tools to
                maximize efficiency, ensure fish welfare, and contribute to global food security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
