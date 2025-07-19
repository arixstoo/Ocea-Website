"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  Wifi,
  Database,
  Settings,
} from "lucide-react"

export function FeaturesPage() {
  const categories = [
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of critical water parameters",
      features: [
        {
          icon: Thermometer,
          title: "Temperature Monitoring",
          description: "Precise temperature tracking with alerts for optimal fish health",
          benefits: ["±0.1°C accuracy", "24/7 monitoring", "Historical trends"],
        },
        {
          icon: Droplets,
          title: "Water Quality Analysis",
          description: "Complete water chemistry monitoring and analysis",
          benefits: ["pH, DO, turbidity", "Chemical levels", "Quality scoring"],
        },
        {
          icon: Activity,
          title: "Fish Health Indicators",
          description: "Monitor fish behavior and health through water parameters",
          benefits: ["Stress detection", "Health alerts", "Growth optimization"],
        },
      ],
    },
    {
      title: "Smart Alerts & Automation",
      description: "Intelligent notifications and automated responses",
      features: [
        {
          icon: AlertTriangle,
          title: "Smart Alert System",
          description: "AI-powered alerts that learn your farm's patterns",
          benefits: ["Predictive alerts", "Custom thresholds", "Multi-channel delivery"],
        },
        {
          icon: Settings,
          title: "Automated Controls",
          description: "Automatic equipment control based on sensor data",
          benefits: ["Aerator control", "Feeder automation", "Emergency response"],
        },
        {
          icon: Wifi,
          title: "IoT Integration",
          description: "Seamless connection with existing farm equipment",
          benefits: ["Wireless sensors", "Cloud connectivity", "Remote access"],
        },
      ],
    },
    {
      title: "Analytics & Insights",
      description: "Powerful analytics to optimize your operations",
      features: [
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          description: "Comprehensive data analysis and visualization",
          benefits: ["Trend analysis", "Performance metrics", "Yield prediction"],
        },
        {
          icon: Database,
          title: "Historical Data",
          description: "Long-term data storage and analysis capabilities",
          benefits: ["Multi-year history", "Pattern recognition", "Seasonal analysis"],
        },
        {
          icon: Clock,
          title: "Predictive Insights",
          description: "AI-powered predictions for proactive management",
          benefits: ["Disease prediction", "Optimal harvest time", "Cost optimization"],
        },
      ],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">🚀 Comprehensive Platform</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-blue-600 block">Smart Aquaculture</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how OCEA's comprehensive monitoring platform provides everything you need to optimize your
              aquaculture operations, from real-time monitoring to predictive analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.features.map((feature, featureIndex) => (
                <Card
                  key={featureIndex}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center justify-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Platform Overview */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Complete Platform Integration</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                OCEA brings together all aspects of aquaculture monitoring in one unified platform. From sensor data
                collection to predictive analytics, everything works seamlessly together.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-200" />
                  <span className="text-blue-100">Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-blue-200" />
                  <span className="text-blue-100">Multi-language support</span>
                </div>
              </div>

              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
            </div>

            <div className="relative">
              {/* Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">OCEA Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Temperature</div>
                    <div className="text-lg font-bold text-blue-600">24.5°C</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Oxygen</div>
                    <div className="text-lg font-bold text-green-600">7.2 mg/L</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">pH Level</div>
                    <div className="text-lg font-bold text-purple-600">7.1</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Alerts</div>
                    <div className="text-lg font-bold text-yellow-600">2</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg h-24 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Experience OCEA?</h2>
          <p className="text-xl text-gray-600 mb-8">
            See how our comprehensive monitoring platform can transform your aquaculture operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
