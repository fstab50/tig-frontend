import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TrendingUp, Activity, Clock } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Macro Intelligence Hub
            </Link>
            
            {/* Quick Stats */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">FFR:</span>
                <span className="text-gray-900 font-medium">5.25%</span>
              </div>
              <div className="flex items-center space-x-1">
                <Activity className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">Regime:</span>
                <span className="text-gray-900 font-medium">Dovish</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">Accuracy:</span>
                <span className="text-gray-900 font-medium">73.2%</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <Link href="/thesis-tracker">Thesis Tracker</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <Link href="/regime-tracker">Regime Tracker</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <Link href="/cycle-navigator">Cycle Navigator</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <Link href="/research">Research</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
