import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import StatusBadge from '@/components/ui/StatusBadge'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Macro Intelligence Hub
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Real-time macro economic analysis through advanced pattern recognition, historical regime tracking, and predictive thesis monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/thesis-tracker"
              className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded font-medium transition-colors text-center"
            >
              Start Tracking
            </Link>
            <Link
              href="/research"
              className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded font-medium transition-colors border border-blue-400 text-center"
            >
              View Research
            </Link>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Metrics</h2>
            <p className="text-gray-600">Real-time insights into macro economic conditions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
                <div className="text-sm text-gray-600">Active Theses</div>
                <div className="text-xs text-gray-500 mt-1">3 High Risk</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">73.2%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
                <div className="text-xs text-gray-500 mt-1">24M Rolling</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">5.25%</div>
                <div className="text-sm text-gray-600">Fed Funds Rate</div>
                <div className="text-xs text-gray-500 mt-1">Target Range</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">Dovish</div>
                <div className="text-sm text-gray-600">Rate Regime</div>
                <div className="text-xs text-gray-500 mt-1">Transitioning</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">Mixed</div>
                <div className="text-sm text-gray-600">Cycle Status</div>
                <div className="text-xs text-gray-500 mt-1">Convergence</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">Online</div>
                <div className="text-sm text-gray-600">System Status</div>
                <div className="text-xs text-gray-500 mt-1">47/47 Feeds</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analysis Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Analysis Tools
            </h2>
            <p className="text-gray-600">Comprehensive macro economic analysis platform</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Macro Thesis Tracker */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Live</Badge>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <CardTitle>Thesis Tracker</CardTitle>
                <CardDescription>
                  Real-time prediction scoring with live indicator monitoring and confidence intervals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Fed Pivot Probability</span>
                    <span className="font-semibold text-gray-900">73.0%</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Energy Crisis Risk</span>
                    <span className="font-semibold text-gray-900">45.0%</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Dollar Weakness</span>
                    <span className="font-semibold text-gray-900">28.0%</span>
                  </div>
                  <div className="text-center pt-2 text-xs text-gray-500">
                    Accuracy Rate: <span className="text-gray-900 font-medium">73.2%</span> • Active: <span className="text-gray-900 font-medium">12</span>
                  </div>
                </div>
                
                <Link href="/thesis-tracker" className="btn-primary w-full">
                  View Thesis Tracker
                </Link>
              </CardContent>
            </Card>

            {/* Interest Rate Regime Tracker */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Active</Badge>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <CardTitle>Regime Tracker</CardTitle>
                <CardDescription>
                  Historical pattern analysis with policy shift prediction and regime classification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Current Regime</span>
                    <span className="font-semibold text-gray-900">Dovish Transition</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Fed Funds Rate</span>
                    <span className="font-semibold text-gray-900">5.250%</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Confidence Level</span>
                    <span className="font-semibold text-gray-900">82.0%</span>
                  </div>
                  <div className="text-center pt-2 text-xs text-gray-500">
                    Days in Regime: <span className="text-gray-900 font-medium">137</span> • Next Cut: <span className="text-gray-900 font-medium">Q2 2025</span>
                  </div>
                </div>
                
                <Link href="/regime-tracker" className="btn-primary w-full">
                  View Regime Tracker
                </Link>
              </CardContent>
            </Card>

            {/* Cycle Navigator */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Analysis</Badge>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <CardTitle>Cycle Navigator</CardTitle>
                <CardDescription>
                  Multi-cycle analysis with asset allocation signals and convergence tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Fourth Turning</span>
                    <span className="font-semibold text-gray-900">Crisis</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Kondratiev Wave</span>
                    <span className="font-semibold text-gray-900">Late Winter</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Demographic Cycle</span>
                    <span className="font-semibold text-gray-900">Aging</span>
                  </div>
                  <div className="text-center pt-2 text-xs text-gray-500">
                    Convergence: <span className="text-gray-900 font-medium">Mixed</span> • Next Align: <span className="text-gray-900 font-medium">Q4 2025</span>
                  </div>
                </div>
                
                <Link href="/cycle-navigator" className="btn-primary w-full">
                  View Cycle Navigator
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Research */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Recent Research</h2>
              <p className="text-gray-600 mt-2">Latest analysis and market insights</p>
            </div>
            <Link href="/research" className="btn-primary">
              View All Research
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-500">Jan 15, 2025</div>
                  <Badge variant="secondary">High Confidence</Badge>
                </div>
                <CardTitle>Fed Pivot Analysis</CardTitle>
                <CardDescription>
                  Updated analysis of Fed rate cut probabilities with employment data integration and inflation trend analysis. Model confidence: 73%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-500">Read Time: 5 min</div>
                  <div className="text-gray-900 font-medium">Accuracy: 89%</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-500">Jan 12, 2025</div>
                  <Badge variant="secondary">Medium Risk</Badge>
                </div>
                <CardTitle>European Energy Crisis Update</CardTitle>
                <CardDescription>
                  Analysis of natural gas storage levels, weather pattern correlation, and geopolitical risk assessment. Mixed signals detected in market.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-500">Read Time: 3 min</div>
                  <div className="text-gray-900 font-medium">Watch List</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-500">Jan 10, 2025</div>
                  <Badge variant="secondary">Revision</Badge>
                </div>
                <CardTitle>USD Weakness Reassessment</CardTitle>
                <CardDescription>
                  Major revision to dollar weakness thesis. Central bank divergence impact and trade data analysis show confidence reduced to 28%.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-500">Read Time: 7 min</div>
                  <div className="text-gray-900 font-medium">Thesis Revision</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
