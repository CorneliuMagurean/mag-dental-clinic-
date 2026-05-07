import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function Eyebrow({ children, className, light = false }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 font-sans text-[11px] font-semibold tracking-[0.32em] uppercase mb-[18px]',
        'before:content-[""] before:w-7 before:h-px',
        light ? 'text-gold before:bg-gold' : 'text-gold-2 before:bg-gold',
        className
      )}
    >
      {children}
    </span>
  )
}
