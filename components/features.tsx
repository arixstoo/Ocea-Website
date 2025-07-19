"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  Droplets,
  Thermometer,
  AlertTriangle,
  Smartphone,
  BarChart3,
  Shield,
  Clock,
  Globe,
} from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description:
        "Monitor water quality parameters 24/7 with IoT sensors and get instant alerts when conditions change.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Droplets,
      title: "Water Quality Analysis",
      description:
        "Track pH, dissolved oxygen, temperature, turbidity, and chemical levels with laboratory-grade precision.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: AlertTriangle,
      title: "Smart Alerts",
      description:
        "Receive intelligent notifications via SMS, email, or mobile app when parameters exceed safe thresholds.",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Visualize trends, generate reports, and make data-driven decisions with comprehensive analytics tools.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security protocols ensure your farm data is always protected and private.",
      gradient: "from-gray-600 to-gray-700",
    },
    {
      icon: Clock,
      title: "Historical Data",
      description:
        "Access months of historical data to identify patterns, optimize feeding schedules, and improve yields.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Available in multiple languages with localized support to serve aquaculture operations worldwide.",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Thermometer,
      title: "Environmental Control",
      description:
        "Automated environmental controls integration to maintain optimal conditions for fish health and growth.",
      gradient: "from-red-500 to-red-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Optimize Your Farm
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive aquaculture monitoring platform provides all the tools you need to maintain optimal water
            conditions, ensure fish health, and maximize your operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
