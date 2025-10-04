import Navbar from '@/components/layout/Navbar'
import { Card } from '@/components/ui/card'
import StatusBadge from '@/components/ui/StatusBadge'

export default function CycleNavigatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-amber-700 to-red-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cycle Navigator
          </h1>
          <p className="text-xl text-orange-100 mb-6 max-w-3xl mx-auto">
            Multi-cycle analysis for strategic asset allocation and timing
          </p>
          <div className="text-sm text-orange-200 mb-8">
            Last Updated: January 15, 2025, 6:00 AM EST | Next Update: Weekly Monday 6:00 AM
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded font-medium transition-colors border border-orange-400">Cycle Methodology</button>
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded font-medium transition-colors border border-orange-400">Historical Analysis</button>
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded font-medium transition-colors border border-orange-400">Asset Allocation Model</button>
            <button className="bg-white text-orange-700 hover:bg-orange-50 px-4 py-2 rounded font-medium transition-colors">Download Report</button>
          </div>
        </div>
      </section>

      {/* Cycle Convergence Status */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">CYCLE CONVERGENCE ANALYSIS</h2>
          
          <div className="text-center mb-8">
            <Card className="bg-white/10 border-white/20 text-white inline-block px-8 py-6">
              <div className="text-3xl font-bold mb-2">MIXED SIGNALS</div>
              <div className="text-lg mb-2">Current Cycle Phase</div>
              <div className="text-sm opacity-80">Conflicting cycle indicators - proceed with caution</div>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-white/10 px-6 py-3 rounded-lg">
              <span className="flex items-center">
                ⚠️ 2 Cycles in Crisis Phase
              </span>
              <span className="flex items-center">
                📊 1 Cycle in Transition
              </span>
              <span className="flex items-center">
                🔄 Next Convergence: Q4 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Cycle Analysis */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">INDIVIDUAL CYCLE ANALYSIS</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Fourth Turning Cycle */}
            <Card className="hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌊</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Fourth Turning</h3>
                <div className="text-sm text-gray-600">Generational Cycle (80-100 years)</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span>Current Phase:</span>
                  <StatusBadge status="red">Crisis (Winter)</StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cycle Year:</span>
                  <span className="font-semibold">Year 16 of ~20</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Started:</span>
                  <span className="text-gray-600">2008 Financial Crisis</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Expected End:</span>
                  <span className="text-gray-600">2028-2030</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-sm mb-2">Phase Characteristics:</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Institutional crisis and rebuilding</div>
                  <div>• Political polarization peaks</div>
                  <div>• Economic system restructuring</div>
                  <div>• Potential for major conflict</div>
                </div>
              </div>

              <div className="text-center">
                <StatusBadge status="red">High Risk Environment</StatusBadge>
              </div>
            </Card>

            {/* Kondratiev Wave */}
            <Card className="hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Kondratiev Wave</h3>
                <div className="text-sm text-gray-600">Long Economic Cycle (45-60 years)</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span>Current Phase:</span>
                  <StatusBadge status="gray">Late Winter</StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cycle Year:</span>
                  <span className="font-semibold">Year 17 of ~50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Started:</span>
                  <span className="text-gray-600">2008 Depression Phase</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Next Phase:</span>
                  <span className="text-gray-600">Spring (2026-2028)</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-sm mb-2">Phase Characteristics:</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Technology disruption accelerating</div>
                  <div>• Infrastructure investment needed</div>
                  <div>• Deflationary pressures weakening</div>
                  <div>• Innovation cycle preparing</div>
                </div>
              </div>

              <div className="text-center">
                <StatusBadge status="gray">Transitional Phase</StatusBadge>
              </div>
            </Card>

            {/* Demographic Cycle */}
            <Card className="hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Demographic Cycle</h3>
                <div className="text-sm text-gray-600">Generational Workforce (20-25 years)</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span>Current Phase:</span>
                  <StatusBadge status="red">Peak Aging</StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Peak Spenders:</span>
                  <span className="font-semibold">Gen X (Late Career)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Rising Force:</span>
                  <span className="text-gray-600">Millennials</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dependency Ratio:</span>
                  <span className="text-gray-600">Rising</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-sm mb-2">Phase Characteristics:</h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Boomer retirement acceleration</div>
                  <div>• Millennial wealth accumulation</div>
                  <div>• Healthcare/senior services boom</div>
                  <div>• Labor shortage pressures</div>
                </div>
              </div>

              <div className="text-center">
                <StatusBadge status="red">Structural Headwinds</StatusBadge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cycle Convergence Timeline */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">CYCLE CONVERGENCE TIMELINE</h2>
          
          <Card className="mb-8">
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-gray-500">
                <div className="text-lg font-semibold mb-2">Multi-Cycle Convergence Chart</div>
                <div className="text-sm">Historical and projected cycle phases 2020-2035</div>
                <div className="text-xs mt-2">(Interactive visualization to be implemented)</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500 mb-2">2025-2027</div>
                <div className="font-semibold mb-1">Peak Crisis</div>
                <div className="text-sm text-gray-600">All cycles in challenging phases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700 mb-2">2028-2030</div>
                <div className="font-semibold mb-1">Transition Period</div>
                <div className="text-sm text-gray-600">Mixed signals, selective opportunities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500 mb-2">2031-2035</div>
                <div className="font-semibold mb-1">New Cycle Begin</div>
                <div className="text-sm text-gray-600">Spring phase emerging across cycles</div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="btn-secondary mr-4">Historical Convergence Analysis</button>
              <button className="btn-primary">Download Cycle Data</button>
            </div>
          </Card>
        </div>
      </section>

      {/* Strategic Asset Allocation */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">CYCLE-BASED ASSET ALLOCATION</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <h3 className="text-xl font-semibold mb-6">CURRENT ALLOCATION RECOMMENDATIONS</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Cash & Short-term</span>
                    <span className="font-bold">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Crisis phase protection</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Defensive Equities</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Utilities, healthcare, staples</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Government Bonds</span>
                    <span className="font-bold">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Safe haven allocation</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Precious Metals</span>
                    <span className="font-bold">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Inflation and crisis hedge</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Growth Equities</span>
                    <span className="font-bold">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Limited exposure for optionality</div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Alternative Investments</span>
                    <span className="font-bold">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Real estate, commodities, crypto</div>
                </div>
              </div>

              <StatusBadge status="gray">Defensive Positioning</StatusBadge>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-6">CYCLE PHASE STRATEGIES</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-500 mb-2">Crisis Phase Strategy (Current)</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Prioritize capital preservation over growth</div>
                    <div>• High cash allocation for opportunities</div>
                    <div>• Defensive sectors and quality assets</div>
                    <div>• Geographic diversification critical</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Transition Phase (2028-2030)</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Begin selective risk-taking</div>
                    <div>• Infrastructure and technology themes</div>
                    <div>• Gradually increase equity exposure</div>
                    <div>• Focus on innovation leaders</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-500 mb-2">Growth Phase (2031+)</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Maximize growth asset allocation</div>
                    <div>• Emerging market opportunities</div>
                    <div>• Technology and productivity themes</div>
                    <div>• Reduce defensive positions</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="btn-primary">
                  Get Personalized Allocation
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cycle Risks and Opportunities */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Card>
            <h3 className="text-2xl font-bold text-center mb-8">CYCLE RISKS & OPPORTUNITIES</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-red-500">Key Risks (2025-2027)</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-sm mb-1">Institutional Crisis</h5>
                    <p className="text-sm text-gray-600">Fourth Turning crisis peak could disrupt markets and political systems</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-sm mb-1">Demographic Drag</h5>
                    <p className="text-sm text-gray-600">Aging workforce and dependency ratios pressure economic growth</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-sm mb-1">Technology Disruption</h5>
                    <p className="text-sm text-gray-600">AI and automation could accelerate job displacement</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-sm mb-1">Geopolitical Tensions</h5>
                    <p className="text-sm text-gray-600">Crisis phase historically coincides with major conflicts</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-500">Emerging Opportunities</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-sm mb-1">Infrastructure Renewal</h5>
                    <p className="text-sm text-gray-600">Kondratiev winter ending creates infrastructure investment wave</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-sm mb-1">Innovation Acceleration</h5>
                    <p className="text-sm text-gray-600">Crisis drives breakthrough technologies and business models</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-sm mb-1">Millennial Prime Years</h5>
                    <p className="text-sm text-gray-600">Peak earning and spending years approaching for largest generation</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-sm mb-1">Asset Repricing</h5>
                    <p className="text-sm text-gray-600">Crisis creates once-in-generation buying opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Investment Thesis Summary</h4>
              <p className="text-sm text-gray-600">
                Current cycle convergence suggests defensive positioning through 2027, followed by selective risk-taking 
                as new cycle phases emerge. The next major bull market likely begins 2031-2035 as all cycles align positively.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}