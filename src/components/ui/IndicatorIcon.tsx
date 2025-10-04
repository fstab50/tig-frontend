import { CheckCircle, AlertCircle, XCircle, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IndicatorIconProps {
  status: 'met' | 'close' | 'missed' | 'pending'
  className?: string
}

export default function IndicatorIcon({ status, className }: IndicatorIconProps) {
  const iconConfig = {
    met: {
      icon: CheckCircle,
      className: 'text-green-500',
    },
    close: {
      icon: AlertCircle,
      className: 'text-gray-600',
    },
    missed: {
      icon: XCircle,
      className: 'text-red-500',
    },
    pending: {
      icon: Clock,
      className: 'text-muted-foreground',
    },
  }

  const { icon: Icon, className: statusClassName } = iconConfig[status]

  return (
    <Icon 
      className={cn('h-4 w-4', statusClassName, className)} 
    />
  )
}