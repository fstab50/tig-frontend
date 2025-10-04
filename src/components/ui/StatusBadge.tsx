import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface StatusBadgeProps {
  status: 'green' | 'gray' | 'red'
  children: React.ReactNode
  className?: string
}

export default function StatusBadge({ status, children, className }: StatusBadgeProps) {
  const variants = {
    green: 'success',
    gray: 'secondary',
    red: 'destructive'
  } as const

  return (
    <Badge 
      variant={variants[status]} 
      className={cn('font-medium', className)}
    >
      {children}
    </Badge>
  )
}