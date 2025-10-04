import Navbar from '@/components/layout/Navbar'
import { Card } from '@/components/ui/card'
import StatusBadge from '@/components/ui/StatusBadge'
import ThesisCard from '@/components/ui/ThesisCard'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockTheses = [
  {
    id: 'MT-2024-08',
    title: 'Fed Pivot by Q2 2025',
    confidence: 8.2,
    createdDate: 'Aug 15, 2024',
    decisionDate: 'Jun 30, 2025',
    currentScore: 73,
    indicators: [
      { name: 'Fed Funds Rate', status: 'close' as const },
      { name: 'Unemployment', status: 'met' as const },
      { name: 'Inflation', status: 'close' as const }
    ]
  },
  {
    id: 'MT-2024-09',
    title: 'Energy Crisis in Europe',
    confidence: 6.5,
    createdDate: 'Sep 3, 2024',
    decisionDate: 'Mar 1, 2025',
    currentScore: 45,
    indicators: [
      { name: 'Gas Prices', status: 'close' as const },
      { name: 'Storage Levels', status: 'met' as const },
      { name: 'Weather Patterns', status: 'missed' as const }
    ]
  },
  {
    id: 'MT-2024-11',
    title: 'Dollar Weakness Accelerates',
    confidence: 4.2,
    createdDate: 'Nov 12, 2024',
    decisionDate: 'Dec 31, 2025',
    currentScore: 28,
    indicators: [
      { name: 'DXY Index', status: 'missed' as const },
      { name: 'Real Rates', status: 'close' as const },
      { name: 'Trade Balance', status: 'missed' as const }
    ]
  },
  {
    id: 'MT-2025-01',
    title: 'Crypto Regulation Impact',
    confidence: 7.8,
    createdDate: 'Jan 5, 2025',
    decisionDate: 'Jul 1, 2025',
    currentScore: 78,
    indicators: []
  },
  {
    id: 'MT-2025-02',
    title: 'China Reopening Rally',
    confidence: 6.8,
    createdDate: 'Jan 8, 2025',
    decisionDate: 'Dec 31, 2025',
    currentScore: 68,
    indicators: []
  },
  {
    id: 'MT-2025-03',
    title: 'Commercial RE Crisis',
    confidence: 8.5,
    createdDate: 'Jan 12, 2025',
    decisionDate: 'Jun 30, 2026',
    currentScore: 85,
    indicators: []
  }
]

export default function ThesisTrackerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Macro Thesis Tracker
          </h1>
          <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
            Real-time scoring of our economic predictions | Live accuracy tracking
          </p>
          <div className="text-sm text-green-200 mb-8">
            Last Updated: January 15, 2025, 3:42 PM EST | Next Update: Daily 4:00 PM
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded font-medium transition-colors border border-green-400">View Methodology</button>
            <button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded font-medium transition-colors border border-green-400">Export Data</button>
            <button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded font-medium transition-colors border border-green-400">RSS Feed</button>
            <button className="bg-white text-green-700 hover:bg-green-50 px-4 py-2 rounded font-medium transition-colors">Alert Settings</button>
          </div>
        </div>
      </section>

      {/* Live Scorecard */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">LIVE SCORECARD</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-lg font-semibold mb-1">ACTIVE THESES</div>
              <div className="text-sm opacity-80">(3 High Risk)</div>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <div className="text-3xl font-bold mb-2">73.2%</div>
              <div className="text-lg font-semibold mb-1">OVERALL ACCURACY</div>
              <div className="text-sm opacity-80">(Last 24 mos.)</div>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <div className="text-3xl font-bold mb-2">8/11</div>
              <div className="text-lg font-semibold mb-1">THIS QUARTER</div>
              <div className="text-sm opacity-80">(72.7%)</div>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <div className="text-3xl font-bold mb-2">7.8/10</div>
              <div className="text-lg font-semibold mb-1">CONFIDENCE SCORE</div>
              <div className="text-sm opacity-80">(Weighted Avg)</div>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-white/10 px-6 py-3 rounded-lg">
              <span className="flex items-center">
                🔴 2 Theses at Risk
              </span>
              <span className="flex items-center">
                🟡 3 Approaching Decision Point
              </span>
              <span className="flex items-center">
                🟢 7 On Track
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Sort Controls */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="All Theses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Theses</SelectItem>
                  <SelectItem value="active">Active Only</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="status">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="risk">At Risk</SelectItem>
                  <SelectItem value="track">On Track</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="horizon">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Time Horizon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="horizon">Time Horizon</SelectItem>
                  <SelectItem value="short">Short Term (&lt;6mo)</SelectItem>
                  <SelectItem value="medium">Medium Term (6-12mo)</SelectItem>
                  <SelectItem value="long">Long Term (&gt;12mo)</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="risk-level">
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="risk-level">Risk Level</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                  <SelectItem value="med">Medium Risk</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="asset">
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Asset Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asset">Asset Class</SelectItem>
                  <SelectItem value="rates">Rates</SelectItem>
                  <SelectItem value="fx">FX</SelectItem>
                  <SelectItem value="commodities">Commodities</SelectItem>
                  <SelectItem value="equities">Equities</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <Select defaultValue="confidence">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="confidence">Confidence</SelectItem>
                    <SelectItem value="score">Score</SelectItem>
                    <SelectItem value="created">Date Created</SelectItem>
                    <SelectItem value="decision">Decision Date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">View:</span>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">Cards</button>
                <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Table</button>
              </div>
              <Select defaultValue="25">
                <SelectTrigger className="w-[120px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25">25 per page</SelectItem>
                  <SelectItem value="50">50 per page</SelectItem>
                  <SelectItem value="100">100 per page</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Active Theses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">ACTIVE THESES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockTheses.map((thesis) => (
              <ThesisCard key={thesis.id} {...thesis} />
            ))}
          </div>
          
          <div className="text-center">
            <button className="btn-primary">
              Load More Theses
            </button>
          </div>
        </div>
      </section>

      {/* Historical Performance Summary */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">HISTORICAL PERFORMANCE</h2>
          
          <Card className="mb-8">
            <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-gray-500">
                <div className="text-lg font-semibold mb-2">Performance Chart</div>
                <div className="text-sm">Interactive chart showing accuracy over time</div>
                <div className="text-xs mt-2">(Chart component to be implemented with Recharts)</div>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-lg font-semibold mb-4">Recent Notable Results:</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="mr-3">✅</span>
                <span><strong>"Inflation Peak Q4 2024"</strong> - CORRECT (Called July 2024)</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="mr-3">✅</span>
                <span><strong>"Tech Correction Q3 2024"</strong> - CORRECT (Called June 2024)</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="mr-3">❌</span>
                <span><strong>"Energy Rally Q4 2024"</strong> - INCORRECT (Called September 2024)</span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="btn-secondary">
                View Full History
              </button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}