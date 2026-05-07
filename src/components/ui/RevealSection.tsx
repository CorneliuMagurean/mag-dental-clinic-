'use client'

import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}

export function RevealSection({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: RevealSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700',
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {children}
    </Tag>
  )
}
