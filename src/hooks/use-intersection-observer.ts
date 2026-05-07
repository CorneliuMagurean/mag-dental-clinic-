'use client'

import { useEffect, useRef, useState } from 'react'

interface Options extends IntersectionObserverInit {
  once?: boolean
}

export function useIntersectionObserver<T extends Element>(options: Options = {}) {
  const { once = true, threshold = 0.12, rootMargin = '0px 0px -40px 0px', ...rest } = options
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsIntersecting(false)
        }
      },
      { threshold, rootMargin, ...rest }
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once, threshold, rootMargin])

  return { ref, isIntersecting }
}
