"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Activity, Droplets, Thermometer, AlertTriangle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">🚀 Revolutionary Aquaculture Monitoring</Badge>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Smart Pond
                <span className="text-blue-600 block">Monitoring</span>
                Made Simple
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Monitor water quality, track fish health, and optimize your aquaculture operations with real-time IoT
                sensors and AI-powered analytics. Increase yields while reducing costs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">30%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            {/* Floating Cards */}
            <div className="relative">
              {/* Main Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900">Pond Monitoring Dashboard</h3>
                    <p className="text-sm text-gray-500">Live data from your farm</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Temperature</span>
                    </div>
                    <div className="text-xl font-bold text-blue-600">24.5°C</div>
                    <div className="text-xs text-green-600">Normal</div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">Oxygen</span>
                    </div>
                    <div className="text-xl font-bold text-green-600">7.2 mg/L</div>
                    <div className="text-xs text-green-600">Optimal</div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">pH Level</span>
                    </div>
                    <div className="text-xl font-bold text-purple-600">7.1</div>
                    <div className="text-xs text-green-600">Stable</div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm font-medium text-gray-700">Alerts</span>
                    </div>
                    <div className="text-xl font-bold text-yellow-600">2</div>
                    <div className="text-xs text-yellow-600">Active</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-gray-50 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm text-gray-600">Real-time Analytics</span>
                  </div>
                </div>
              </div>

              {/* Floating Alert Card */}
              <div className="absolute -right-4 -bottom-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-900">Alert</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">pH level slightly high in Pond A</p>
                <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                  View Details
                </Button>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -left-4 top-8 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">12</div>
                  <div className="text-xs text-gray-600">Active Ponds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
