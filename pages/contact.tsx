"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Clock, MessageSquare, Users, Headphones } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Sales Inquiries",
      description: "Get pricing information and schedule a demo",
      contact: "sales@ocea.com",
      available: "Mon-Fri, 9 AM - 6 PM PST",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with your OCEA platform",
      contact: "support@ocea.com",
      available: "24/7 Support Available",
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Explore partnership opportunities",
      contact: "partners@ocea.com",
      available: "Mon-Fri, 9 AM - 5 PM PST",
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 400",
      zipcode: "San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
    },
    {
      city: "Seattle",
      address: "456 Tech Boulevard, Floor 12",
      zipcode: "Seattle, WA 98101",
      phone: "+1 (555) 987-6543",
    },
    {
      city: "Miami",
      address: "789 Ocean View Plaza, Suite 200",
      zipcode: "Miami, FL 33101",
      phone: "+1 (555) 456-7890",
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about OCEA? Want to schedule a demo? Our team is here to help you optimize your aquaculture
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 mx-auto">
                    <method.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium text-blue-600">{method.contact}</p>
                    <p className="text-sm text-gray-500">{method.available}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to See OCEA in Action?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a personalized demo and see how OCEA can optimize your aquaculture operation.
          </p>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Schedule Demo
          </Button>
        </div>
      </section>
    </div>
  )
}
