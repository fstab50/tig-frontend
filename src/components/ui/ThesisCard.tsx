import Link from 'next/link'
import { Card } from './card'
import StatusBadge from './StatusBadge'
import IndicatorIcon from './IndicatorIcon'

interface ThesisCardProps {
  id: string
  title: string
  confidence: number
  createdDate: string
  decisionDate: string
  currentScore: number
  indicators: Array<{
    name: string
    status: 'met' | 'close' | 'missed' | 'pending'
  }>
}

export default function ThesisCard({ 
  id, 
  title, 
  confidence, 
  createdDate, 
  decisionDate, 
  currentScore, 
  indicators 
}: ThesisCardProps) {
  const getStatusColor = (score: number): 'green' | 'gray' | 'red' => {
    if (score >= 60) return 'green'
    if (score >= 40) return 'gray'
    return 'red'
  }

  const getStatusEmoji = (score: number): string => {
    if (score >= 60) return '🟢'
    if (score >= 40) return '🟡'
    return '🔴'
  }

  const daysLeft = Math.ceil((new Date(decisionDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-2">THESIS #{id}</div>
        <h3 className="text-lg font-semibold mb-3">"{title}"</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span>Confidence:</span>
            <StatusBadge status={getStatusColor(confidence * 10)}>
              {confidence}/10 {getStatusEmoji(confidence * 10)}
            </StatusBadge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Created:</span>
            <span className="text-gray-600">{createdDate}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Decision:</span>
            <span className="text-gray-600">{decisionDate}</span>
          </div>
        </div>
      </div>

      {indicators.length > 0 && (
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">Key Indicators:</div>
          <div className="space-y-1">
            {indicators.slice(0, 3).map((indicator, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">• {indicator.name}:</span>
                <IndicatorIcon status={indicator.status} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-1">
          <span>Current Score:</span>
          <span className="font-semibold">{currentScore}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${
              currentScore >= 60 ? 'bg-green-500' : 
              currentScore >= 40 ? 'bg-gray-500' : 'bg-red-500'
            }`}
            style={{ width: `${currentScore}%` }}
          ></div>
        </div>
      </div>

      <div className="flex space-x-2">
        <Link 
          href={`/thesis-tracker/${id}`} 
          className="flex-1 text-center py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
        >
          View Details
        </Link>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Update
        </button>
      </div>

      {daysLeft > 0 && (
        <div className="mt-3 text-center text-sm text-gray-500">
          {daysLeft} days left
        </div>
      )}
    </Card>
  )
}