import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import { Card } from '@/components/ui/card'
import StatusBadge from '@/components/ui/StatusBadge'
import IndicatorIcon from '@/components/ui/IndicatorIcon'

// Mock data - replace with API call
const getThesis = (id: string) => {
  const theses: Record<string, any> = {
    'MT-2024-08': {
      id: 'MT-2024-08',
      title: 'Federal Reserve Will Pivot to Rate Cuts by Q2 2025',
      description: 'Based on employment trends, inflation data, and historical Fed behavior, we predict the Federal Reserve will begin cutting rates in Q2 2025 (Apr-Jun).',
      confidence: 8.2,
      createdDate: 'August 15, 2024',
      decisionDate: 'June 30, 2025',
      currentScore: 73,
      riskLevel: 'Medium',
      hypothesis: 'Based on employment trends, inflation data, and historical Fed behavior, we predict the Federal Reserve will begin cutting rates in Q2 2025 (Apr-Jun).',
      triggerConditions: [
        'Core inflation < 3.0% for 2 months',
        'Unemployment > 4.5%',
        'Economic growth < 2% annualized'
      ],
      milestones: [
        { name: 'Inflation below 3.5%', date: 'Nov 2024', status: 'met' },
        { name: 'Unemployment above 4.2%', date: 'Dec 2024', status: 'met' },
        { name: 'Fed dovish signals', date: 'Pending', status: 'pending' },
        { name: 'First rate cut announced', date: 'Pending', status: 'pending' }
      ],
      liveIndicators: [
        {
          name: 'FED FUNDS RATE',
          current: '5.25%',
          target: '4.50-5.00%',
          status: 'close'
        },
        {
          name: 'UNEMPLOYMENT',
          current: '4.3%',
          target: '>4.5%',
          status: 'close'
        },
        {
          name: 'CORE INFLATION',
          current: '3.2%',
          target: '<3.0%',
          status: 'close'
        },
        {
          name: 'GDP GROWTH',
          current: '1.8%',
          target: '<2.0%',
          status: 'met'
        }
      ],
      aiAnalysis: {
        lastUpdated: 'Jan 15, 2025, 2:15 PM',
        assessment: 'Thesis probability increased 8% this week due to unemployment data beating expectations. Core inflation trending toward target range, but Fed rhetoric remains hawkish. Historical comparison shows 73% probability of rate cut within 6 months when current conditions persist.',
        risks: [
          { risk: 'Geopolitical tensions could delay Fed action', impact: '15% probability impact' },
          { risk: 'Inflation reacceleration from energy prices', impact: '22% probability impact' },
          { risk: 'Political pressure during election season', impact: '8% probability impact' }
        ],
        historicalScenarios: [
          { scenario: '2019 Rate Cut Cycle', similarity: '85%', outcome: 'Correct prediction' },
          { scenario: '2007 Crisis Response', similarity: '67%', outcome: 'Early by 3 months' }
        ]
      }
    }
  }
  return theses[id] || null
}

export async function generateStaticParams() {
  return [
    { id: 'MT-2024-08' },
    { id: 'MT-2024-09' },
    { id: 'MT-2024-11' },
  ]
}

export default async function ThesisDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const thesis = getThesis(resolvedParams.id)
  
  if (!thesis) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Card className="text-center">
            <h1 className="text-2xl font-bold mb-4">Thesis Not Found</h1>
            <p className="text-gray-600 mb-6">The thesis you're looking for doesn't exist or has been removed.</p>
            <Link href="/thesis-tracker" className="btn-primary">
              Back to Thesis Tracker
            </Link>
          </Card>
        </div>
      </div>
    )
  }

  const daysLeft = Math.ceil((new Date(thesis.decisionDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Thesis Detail Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              THESIS DETAIL: #{thesis.id}
            </h1>
            <h2 className="text-xl text-gray-700 mb-4">
              "{thesis.title}"
            </h2>
            <div className="text-gray-600 mb-6">
              Created: {thesis.createdDate} | Decision Date: {thesis.decisionDate} | {daysLeft} days left
            </div>
            <div className="flex space-x-4">
              <Link href="/thesis-tracker" className="btn-secondary">
                ← Back to Tracker
              </Link>
              <button className="btn-secondary">Share</button>
              <button className="btn-secondary">Export</button>
              <button className="btn-secondary">Set Alert</button>
              <button className="btn-primary">Clone Thesis</button>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Overview */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <h3 className="text-xl font-semibold mb-4">THESIS SUMMARY</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Original Hypothesis:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {thesis.hypothesis}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Trigger Conditions:</h4>
                <ul className="space-y-1">
                  {thesis.triggerConditions.map((condition: string, index: number) => (
                    <li key={index} className="text-gray-600 text-sm">• {condition}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4">CURRENT STATUS</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span>Overall Score:</span>
                  <StatusBadge status={thesis.currentScore >= 60 ? 'green' : thesis.currentScore >= 40 ? 'gray' : 'red'}>
                    {thesis.currentScore}% {thesis.currentScore >= 60 ? '🟢' : thesis.currentScore >= 40 ? '🟡' : '🔴'}
                  </StatusBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Confidence Level:</span>
                  <span className="font-semibold">{thesis.confidence}/10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Risk Assessment:</span>
                  <StatusBadge status="gray">{thesis.riskLevel}</StatusBadge>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Milestones:</h4>
                <div className="space-y-2">
                  {thesis.milestones.map((milestone: any, index: number) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>
                        <IndicatorIcon status={milestone.status} /> {milestone.name} ({milestone.date})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="btn-primary flex-1">Update Status</button>
                <button className="btn-secondary">Add Note</button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Indicator Dashboard */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Card>
            <h3 className="text-2xl font-bold text-center mb-8">LIVE INDICATORS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {thesis.liveIndicators.map((indicator: any, index: number) => (
                <Card key={index} className="text-center bg-gray-50">
                  <h4 className="font-semibold text-sm mb-3">{indicator.name}</h4>
                  <div className="text-2xl font-bold mb-2">{indicator.current}</div>
                  <div className="text-sm text-gray-600 mb-2">
                    Target: {indicator.target}
                  </div>
                  <div className="flex items-center justify-center">
                    <IndicatorIcon status={indicator.status} />
                    <span className="ml-2 text-sm capitalize">
                      {indicator.status === 'met' ? 'Met' : 
                       indicator.status === 'close' ? 'Close' : 
                       indicator.status === 'missed' ? 'Off Target' : 'Pending'}
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Progress Timeline */}
            <Card className="bg-white">
              <h4 className="text-lg font-semibold text-center mb-6">PROGRESS TIMELINE</h4>
              <div className="relative">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span>Aug 2024</span>
                  <span>Oct 2024</span>
                  <span>Dec 2024</span>
                  <span>Feb 2025</span>
                  <span>Apr 2025</span>
                  <span>Jun 2025</span>
                </div>
                <div className="relative flex items-center justify-between mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-1 bg-green-500"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-1 bg-green-500"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-300"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-300"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-300"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="text-center">
                    <div>Created</div>
                    <div className="text-green-500">✅</div>
                  </div>
                  <div className="text-center">
                    <div>Inflation</div>
                    <div>Declining</div>
                    <div className="text-green-500">✅</div>
                  </div>
                  <div className="text-center">
                    <div>Unemployment</div>
                    <div>Rising</div>
                    <div className="text-green-500">✅</div>
                  </div>
                  <div className="text-center">
                    <div>Fed Signals</div>
                    <div>(Target)</div>
                    <div className="text-gray-400">⏳</div>
                  </div>
                  <div className="text-center">
                    <div>Rate Cut</div>
                    <div>(Target)</div>
                    <div className="text-gray-400">⏳</div>
                  </div>
                  <div className="text-center">
                    <div>Decision</div>
                    <div>Date</div>
                    <div className="text-gray-400">⏳</div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center mt-6">
              <button className="btn-secondary">
                View Historical Charts
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* AI Analysis Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <Card>
            <h3 className="text-2xl font-bold mb-6">AI ANALYSIS</h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-2">🤖</span>
                <span className="font-semibold">
                  Current Assessment (Updated: {thesis.aiAnalysis.lastUpdated}):
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{thesis.aiAnalysis.assessment}"
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Key Risks Identified:</h4>
                <div className="space-y-2">
                  {thesis.aiAnalysis.risks.map((risk: any, index: number) => (
                    <div key={index} className="text-sm">
                      • <strong>{risk.risk}</strong> ({risk.impact})
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Similar Historical Scenarios:</h4>
                <div className="space-y-2">
                  {thesis.aiAnalysis.historicalScenarios.map((scenario: any, index: number) => (
                    <div key={index} className="text-sm">
                      • <strong>{scenario.scenario}:</strong> {scenario.similarity} similarity (Outcome: {scenario.outcome})
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="btn-primary">
                View Full AI Report
              </button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}