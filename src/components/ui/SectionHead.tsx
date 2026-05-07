import { cn } from '@/lib/utils'
import { Eyebrow } from './Eyebrow'

interface SectionHeadProps {
  eyebrow: string
  title: React.ReactNode
  lead?: string
  center?: boolean
  light?: boolean
  className?: string
}

export function SectionHead({ eyebrow, title, lead, center, light, className }: SectionHeadProps) {
  return (
    <div
      className={cn(
        'mb-16 max-w-[760px]',
        center && 'mx-auto text-align-center',
        className
      )}
      style={center ? { textAlign: 'center' } : undefined}
    >
      <Eyebrow light={light} className={center ? 'justify-center' : ''}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          'font-serif font-medium leading-[1.1] tracking-[-0.01em] mb-[18px]',
          'text-[clamp(36px,5vw,56px)]',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'text-[17px] leading-[1.7] max-w-[620px]',
            center && 'mx-auto',
            light ? 'text-white/70' : 'text-muted'
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
