'use client'

import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface AnimatedCounterProps {
  target: number
  duration?: number
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3)

export function AnimatedCounter({ target, duration = 1800 }: AnimatedCounterProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.5,
  })
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!isIntersecting || started) return
    setStarted(true)

    const startTime = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration)
      setCount(Math.round(target * ease(t)))
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isIntersecting, started, target, duration])

  return <span ref={ref}>{count.toLocaleString('ro-RO')}</span>
}
