import Navbar from '@/components/layout/Navbar'
import { Card } from '@/components/ui/card'
import StatusBadge from '@/components/ui/StatusBadge'

export default function RegimeTrackerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Interest Rate Regime Tracker
          </h1>
          <p className="text-xl text-teal-100 mb-6 max-w-3xl mx-auto">
            Historical pattern analysis and policy shift prediction through real-time economic monitoring
          </p>
          <div className="text-sm text-teal-200 mb-8">
            Last Update: January 15, 2025 • Next Update: Market Close EST • Sources: FRED, Treasury, ECB
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded font-medium transition-colors border border-teal-400">Historical Data</button>
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded font-medium transition-colors border border-teal-400">Methodology</button>
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded font-medium transition-colors border border-teal-400">Export CSV</button>
            <button className="bg-white text-teal-700 hover:bg-teal-50 px-4 py-2 rounded font-medium transition-colors">Configure Alerts</button>
          </div>
        </div>
      </section>

      {/* Current Regime Dashboard */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Current Regime Status</h2>
            <p className="text-gray-600">Real-time analysis of interest rate environment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="text-center p-4">
              <div className="text-2xl font-bold mb-2 text-gray-900">Dovish Transition</div>
              <div className="text-sm text-gray-600 mb-2">Current Regime</div>
              <StatusBadge status="green">High Confidence</StatusBadge>
            </Card>
            <Card className="text-center p-4">
              <div className="text-3xl font-bold mb-2 text-gray-900">5.25%</div>
              <div className="text-lg font-semibold mb-1 text-gray-900">Fed Funds Rate</div>
              <div className="text-sm text-gray-600">Target: 5.25-5.50%</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-3xl font-bold mb-2 text-gray-900">82%</div>
              <div className="text-lg font-semibold mb-1 text-gray-900">Regime Confidence</div>
              <div className="text-sm text-gray-600">vs Historical Patterns</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-3xl font-bold mb-2 text-gray-900">137</div>
              <div className="text-lg font-semibold mb-1 text-gray-900">Days in Regime</div>
              <div className="text-sm text-gray-600">Since Aug 2024</div>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-white border px-6 py-3 rounded-lg shadow-sm">
              <span className="flex items-center text-gray-700">
                📈 Next Regime: Cutting Cycle (73% probability)
              </span>
              <span className="flex items-center text-gray-700">
                📊 Expected Timing: Q2 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Economic Indicators */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">KEY ECONOMIC INDICATORS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Federal Funds Rate</h3>
                <StatusBadge status="green">Stable</StatusBadge>
              </div>
              <div className="text-2xl font-bold mb-2">5.25%</div>
              <div className="text-sm text-gray-600 mb-2">Target Range: 5.25-5.50%</div>
              <div className="text-sm text-gray-500">Last Change: Jul 2024 (+0.25%)</div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Core PCE Inflation</h3>
                <StatusBadge status="gray">Declining</StatusBadge>
              </div>
              <div className="text-2xl font-bold mb-2">3.2%</div>
              <div className="text-sm text-gray-600 mb-2">Target: 2.0%</div>
              <div className="text-sm text-gray-500">Previous: 3.5% (Dec 2024)</div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Unemployment Rate</h3>
                <StatusBadge status="gray">Rising</StatusBadge>
              </div>
              <div className="text-2xl font-bold mb-2">4.3%</div>
              <div className="text-sm text-gray-600 mb-2">NAIRU Est: 4.0%</div>
              <div className="text-sm text-gray-500">Previous: 4.1% (Dec 2024)</div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">GDP Growth (YoY)</h3>
                <StatusBadge status="red">Slowing</StatusBadge>
              </div>
              <div className="text-2xl font-bold mb-2">1.8%</div>
              <div className="text-sm text-gray-600 mb-2">Trend: 2.1%</div>
              <div className="text-sm text-gray-500">Previous: 2.3% (Q3 2024)</div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">2Y-10Y Yield Curve</h3>
                <StatusBadge status="gray">Steepening</StatusBadge>
              </div>
              <div className="text-2xl font-bold mb-2">+18 bps</div>
              <div className="text-sm text-gray-600 mb-2">Spread Trend: Normalizing</div>
              <div className="text-sm text-gray-500">Previous: +12 bps (Dec 2024)</div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Real Fed Funds Rate</h3>
                <StatusBadge status="green">Restrictive</StatusBadge>
              </div>
              <div className="text-2xl font-bold mb-2">+2.05%</div>
              <div className="text-sm text-gray-600 mb-2">Neutral Est: 0.5%</div>
              <div className="text-sm text-gray-500">Previous: +1.75% (Dec 2024)</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Historical Regime Timeline */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">HISTORICAL REGIME TIMELINE</h2>
          
          <Card className="mb-8">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-gray-500">
                <div className="text-lg font-semibold mb-2">Interactive Regime Timeline</div>
                <div className="text-sm">Historical rate regimes from 1940s to present</div>
                <div className="text-xs mt-2">(Interactive chart component to be implemented)</div>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <button className="btn-secondary mr-4">View Full Timeline</button>
              <button className="btn-primary">Download Historical Data</button>
            </div>
          </Card>

          {/* Recent Regime History */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Current Regime</h3>
                  <StatusBadge status="gray">Aug 2024 - Present</StatusBadge>
                </div>
                <div className="text-lg font-bold mb-2">Dovish Transition</div>
                <div className="text-sm text-gray-600 mb-2">
                  Peak hawkishness reached, Fed signaling potential policy easing
                </div>
                <div className="text-sm text-gray-500">Duration: 5+ months</div>
              </div>
            </Card>

            <Card>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Previous Regime</h3>
                  <StatusBadge status="red">Mar 2022 - Aug 2024</StatusBadge>
                </div>
                <div className="text-lg font-bold mb-2">Aggressive Tightening</div>
                <div className="text-sm text-gray-600 mb-2">
                  Rapid rate increases from 0% to 5.25% to combat inflation
                </div>
                <div className="text-sm text-gray-500">Duration: 29 months</div>
              </div>
            </Card>

            <Card>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Pre-Tightening</h3>
                  <StatusBadge status="green">Mar 2020 - Mar 2022</StatusBadge>
                </div>
                <div className="text-lg font-bold mb-2">Ultra-Accommodative</div>
                <div className="text-sm text-gray-600 mb-2">
                  Emergency response to pandemic with near-zero rates
                </div>
                <div className="text-sm text-gray-500">Duration: 24 months</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Regime Probability Matrix */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">FUTURE REGIME PROBABILITIES</h2>
          
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">73%</div>
                <div className="font-semibold mb-2">Cutting Cycle</div>
                <div className="text-sm text-gray-600">Rate cuts begin Q2 2025</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">18%</div>
                <div className="font-semibold mb-2">Extended Pause</div>
                <div className="text-sm text-gray-600">Rates hold through 2025</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">7%</div>
                <div className="font-semibold mb-2">Further Tightening</div>
                <div className="text-sm text-gray-600">Additional rate hikes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600 mb-2">2%</div>
                <div className="font-semibold mb-2">Crisis Response</div>
                <div className="text-sm text-gray-600">Emergency easing</div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Key Regime Drivers:</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>• Inflation trajectory and Fed's 2% target achievement</div>
                <div>• Labor market cooling and unemployment trends</div>
                <div>• Economic growth momentum and recession risks</div>
                <div>• Financial stability conditions and market stress</div>
                <div>• Geopolitical developments and their economic impact</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* AI Analysis */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Card>
            <h3 className="text-2xl font-bold mb-6">AI REGIME ANALYSIS</h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🤖</span>
                <span className="font-semibold">
                  Current Regime Assessment (Updated: Jan 15, 2025, 4:15 PM):
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The Federal Reserve remains in a dovish transition phase with 82% confidence. Recent unemployment data and continued disinflation support our cutting cycle thesis. Historical pattern matching suggests 73% probability of rate cuts beginning Q2 2025, similar to 1995 and 2019 soft landing scenarios. Key risk remains inflation reacceleration from geopolitical shocks."
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Historical Regime Comparisons:</h4>
                <div className="space-y-2 text-sm">
                  <div>• <strong>1995 Soft Landing:</strong> 85% similarity - Successful preemptive cuts</div>
                  <div>• <strong>2019 Insurance Cuts:</strong> 78% similarity - Preventative policy easing</div>
                  <div>• <strong>2007 Crisis Response:</strong> 34% similarity - Different economic backdrop</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Regime Risks:</h4>
                <div className="space-y-2 text-sm">
                  <div>• <strong>Inflation Reacceleration:</strong> 25% probability, would delay cuts</div>
                  <div>• <strong>Labor Market Strength:</strong> 20% probability, supports higher rates</div>
                  <div>• <strong>Financial Instability:</strong> 15% probability, could force cuts</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 pt-4 border-t border-gray-200">
              <button className="btn-primary">
                View Detailed Regime Model
              </button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}