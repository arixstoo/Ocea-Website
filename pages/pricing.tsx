"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X as XIcon } from "lucide-react"

export function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small farms getting started with monitoring",
      popular: false,
      features: [
        "Up to 5 ponds",
        "Basic water quality monitoring",
        "Email alerts",
        "7-day data retention",
        "Email support",
      ],
      notIncluded: ["Advanced analytics", "API access", "Custom integrations", "Priority support"],
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Comprehensive monitoring for growing operations",
      popular: true,
      features: [
        "Up to 25 ponds",
        "Full water quality monitoring",
        "SMS + Email alerts",
        "Advanced analytics dashboard",
        "30-day data retention",
        "Automated reports",
        "Phone & email support",
        "Basic API access",
      ],
      notIncluded: ["Custom integrations", "Dedicated account manager", "On-site training"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large-scale operations",
      popular: false,
      features: [
        "Unlimited ponds",
        "Complete monitoring suite",
        "Multi-channel alerts",
        "Advanced AI analytics",
        "Unlimited data retention",
        "Custom reporting",
        "24/7 priority support",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager",
        "On-site training & setup",
        "SLA guarantee",
      ],
      notIncluded: [],
    },
  ]

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer:
        "The 30-day free trial includes full access to all Professional plan features for up to 5 ponds. No credit card required.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.",
    },
    {
      question: "What sensors are compatible?",
      answer:
        "OCEA works with a wide range of industry-standard sensors. We provide a list of certified sensors and can help with compatibility questions.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees for Starter and Professional plans. Enterprise customers receive complimentary setup and training.",
    },
    {
      question: "What about data security?",
      answer:
        "We use enterprise-grade encryption and security measures. Your data is stored securely and never shared with third parties.",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your operation. All plans include our core monitoring features with 30-day free
              trial and no setup fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 ${plan.popular ? "border-blue-500 shadow-xl scale-105" : "border-gray-200 shadow-lg"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 opacity-50">
                        <XIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-3 ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"}`}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    {plan.name === "Enterprise" ? "Custom pricing available" : "No credit card required"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">All Plans Include</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every OCEA plan comes with our essential monitoring features to keep your operation running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Real-time water monitoring",
              "Alert notifications",
              "Data visualization",
              "Historical data access",
              "Multi-language support",
              "Cloud data storage",
              "Regular software updates",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Have questions? We're here to help.</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and see how OCEA can transform your aquaculture operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg bg-transparent"
            >
              Contact Sales
            </Button>
          </div>

          <p className="text-blue-200 text-sm mt-6">30-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
