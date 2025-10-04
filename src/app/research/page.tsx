import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import { Card } from '@/components/ui/card'
import StatusBadge from '@/components/ui/StatusBadge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockArticles = [
  {
    id: 'fed-pivot-analysis-jan-2025',
    title: 'Fed Pivot Probability Analysis: Updated Framework for Rate Cut Timing',
    excerpt: 'Comprehensive analysis of Federal Reserve rate cut probabilities using updated employment data, inflation trends, and historical regime patterns. Our model shows 73% probability of cuts beginning Q2 2025.',
    publishedDate: 'January 15, 2025',
    readTime: '8 min read',
    tags: ['Federal Reserve', 'Interest Rates', 'Monetary Policy'],
    status: 'high-confidence',
    author: 'Macro Intelligence Team',
    category: 'Central Banking'
  },
  {
    id: 'european-energy-crisis-update',
    title: 'European Energy Crisis: Storage Levels and Weather Pattern Analysis',
    excerpt: 'Analysis of European natural gas storage levels, weather forecasts, and geopolitical developments affecting our energy crisis thesis. Mixed signals emerging from recent data.',
    publishedDate: 'January 12, 2025',
    readTime: '6 min read',
    tags: ['Europe', 'Energy', 'Natural Gas', 'Geopolitics'],
    status: 'medium-risk',
    author: 'Energy Markets Desk',
    category: 'Commodities'
  },
  {
    id: 'dollar-weakness-thesis-revision',
    title: 'Dollar Strength Reassessment: Revising Our Weakness Thesis',
    excerpt: 'Major revision to our dollar weakness prediction based on central bank policy divergence, trade data, and safe-haven demand. Thesis confidence reduced to 28% from previous 65%.',
    publishedDate: 'January 10, 2025',
    readTime: '7 min read',
    tags: ['USD', 'Currency', 'Central Banks', 'Thesis Update'],
    status: 'thesis-revision',
    author: 'FX Strategy Team',
    category: 'Foreign Exchange'
  },
  {
    id: 'fourth-turning-crisis-phase-2025',
    title: 'Fourth Turning Crisis Phase: 2025 Institutional Breakdown Risks',
    excerpt: 'Deep dive into the current Fourth Turning crisis phase, examining historical patterns and predicting institutional challenges ahead. Political polarization and social tensions reaching critical levels.',
    publishedDate: 'January 8, 2025',
    readTime: '12 min read',
    tags: ['Fourth Turning', 'Crisis', 'Political Risk', 'History'],
    status: 'high-confidence',
    author: 'Cyclical Analysis Team',
    category: 'Cycles & Trends'
  },
  {
    id: 'kondratiev-winter-ending-signals',
    title: 'Kondratiev Winter Ending: Technology Innovation Cycle Beginning',
    excerpt: 'Analysis of long-wave economic cycle suggesting the end of the current Kondratiev winter phase. AI and technology innovations signaling the beginning of a new spring phase by 2027-2028.',
    publishedDate: 'January 5, 2025',
    readTime: '10 min read',
    tags: ['Kondratiev', 'Technology', 'Innovation', 'Long Cycles'],
    status: 'high-confidence',
    author: 'Long-term Strategy Team',
    category: 'Cycles & Trends'
  },
  {
    id: 'crypto-regulation-impact-thesis',
    title: 'Cryptocurrency Regulation Impact: New Framework Analysis',
    excerpt: 'Comprehensive analysis of proposed cryptocurrency regulations and their impact on digital asset markets. Our thesis suggests positive regulatory clarity will drive institutional adoption.',
    publishedDate: 'January 3, 2025',
    readTime: '9 min read',
    tags: ['Cryptocurrency', 'Regulation', 'Digital Assets', 'Policy'],
    status: 'high-confidence',
    author: 'Digital Assets Team',
    category: 'Alternative Assets'
  }
]

const categories = [
  'All Categories',
  'Central Banking', 
  'Cycles & Trends',
  'Foreign Exchange',
  'Commodities',
  'Alternative Assets',
  'Equities',
  'Fixed Income',
  'Geopolitics'
]

const tags = [
  'Federal Reserve', 'Interest Rates', 'Inflation', 'USD', 'Energy', 
  'Fourth Turning', 'Kondratiev', 'Technology', 'Regulation', 'China'
]

export default function ResearchPage() {
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'high-confidence':
        return { badge: 'green', text: 'High Confidence' }
      case 'medium-risk':
        return { badge: 'gray', text: 'Medium Risk' }
      case 'thesis-revision':
        return { badge: 'red', text: 'Thesis Update' }
      default:
        return { badge: 'gray', text: 'Research' }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Research Hub
          </h1>
          <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
            In-depth analysis, thesis updates, and macro economic insights
          </p>
          <div className="text-sm text-purple-200 mb-8">
            Latest insights from our research team | Updated regularly
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded font-medium transition-colors border border-purple-400">RSS Feed</button>
            <button className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded font-medium transition-colors border border-purple-400">Email Alerts</button>
            <button className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded font-medium transition-colors border border-purple-400">Research Methodology</button>
            <button className="bg-white text-purple-700 hover:bg-purple-50 px-4 py-2 rounded font-medium transition-colors">Subscribe to Premium</button>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">47</div>
              <div className="text-sm opacity-90">Research Articles</div>
              <div className="text-xs opacity-70">This Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">73.2%</div>
              <div className="text-sm opacity-90">Thesis Accuracy</div>
              <div className="text-xs opacity-70">Last 24 Months</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">12</div>
              <div className="text-sm opacity-90">Active Theses</div>
              <div className="text-xs opacity-70">Currently Tracking</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">3,247</div>
              <div className="text-sm opacity-90">Research Subscribers</div>
              <div className="text-xs opacity-70">Growing Monthly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 mb-6">
            <div className="flex flex-wrap items-end gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Category:</label>
                <Select defaultValue="All Categories">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Status:</label>
                <Select defaultValue="All Status">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Status">All Status</SelectItem>
                    <SelectItem value="High Confidence">High Confidence</SelectItem>
                    <SelectItem value="Medium Risk">Medium Risk</SelectItem>
                    <SelectItem value="Thesis Updates">Thesis Updates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Time Period:</label>
                <Select defaultValue="Last 30 Days">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Last 30 Days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
                    <SelectItem value="Last 90 Days">Last 90 Days</SelectItem>
                    <SelectItem value="Last 6 Months">Last 6 Months</SelectItem>
                    <SelectItem value="Last Year">Last Year</SelectItem>
                    <SelectItem value="All Time">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Sort by:</label>
                <Select defaultValue="Latest First">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Latest First" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Latest First">Latest First</SelectItem>
                    <SelectItem value="Most Popular">Most Popular</SelectItem>
                    <SelectItem value="Highest Impact">Highest Impact</SelectItem>
                    <SelectItem value="By Category">By Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">Popular Tags:</div>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button
                  key={tag}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Analysis</h2>
            <div className="text-gray-600">Our most important research this week</div>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <StatusBadge status="green">Featured</StatusBadge>
                  <StatusBadge status="green">High Confidence</StatusBadge>
                  <span className="text-sm text-gray-500">Central Banking</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Fed Pivot Probability Analysis: Updated Framework for Rate Cut Timing
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive analysis of Federal Reserve rate cut probabilities using updated employment data, 
                  inflation trends, and historical regime patterns. Our model shows 73% probability of cuts 
                  beginning Q2 2025, supported by deteriorating labor market conditions and continued disinflation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>January 15, 2025</span>
                    <span>•</span>
                    <span>8 min read</span>
                    <span>•</span>
                    <span>Macro Intelligence Team</span>
                  </div>
                  <Link 
                    href="/research/fed-pivot-analysis-jan-2025"
                    className="btn-primary inline-block"
                  >
                    Read Full Analysis
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="h-48 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="text-lg font-semibold">Fed Rate Cuts</div>
                    <div className="text-sm opacity-90">73% Probability</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Research Articles Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Recent Research</h2>
            <div className="text-sm text-gray-500">
              Showing {mockArticles.length} articles
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockArticles.slice(1).map((article) => {
              const statusInfo = getStatusInfo(article.status)
              return (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <StatusBadge status={statusInfo.badge as any}>
                        {statusInfo.text}
                      </StatusBadge>
                      <span className="text-xs text-gray-500">{article.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{article.publishedDate}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.author}</span>
                    <Link 
                      href={`/research/${article.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <button className="btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead of Market Moves
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get our latest research and thesis updates delivered to your inbox. 
            Join 3,247+ subscribers receiving actionable macro intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              Subscribe Free
            </button>
          </div>
          
          <div className="text-sm text-gray-400 mt-4">
            Free tier: Weekly summaries • Premium: Daily insights + thesis alerts
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Card>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Research Methodology</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our analysis combines quantitative models with qualitative insights, 
                drawing from multiple data sources and historical patterns to generate actionable intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📊</span>
                </div>
                <h3 className="font-semibold mb-2">Data-Driven Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Real-time economic indicators, market data, and alternative datasets 
                  processed through proprietary algorithms.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🧠</span>
                </div>
                <h3 className="font-semibold mb-2">AI-Enhanced Insights</h3>
                <p className="text-gray-600 text-sm">
                  Machine learning models identify patterns and correlations 
                  across historical cycles and market regimes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✅</span>
                </div>
                <h3 className="font-semibold mb-2">Track Record Transparency</h3>
                <p className="text-gray-600 text-sm">
                  All predictions tracked publicly with accuracy metrics 
                  and thesis performance history available.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}