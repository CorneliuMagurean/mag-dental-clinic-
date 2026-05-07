import type { Icon } from '@tabler/icons-react'

export interface ServiceData {
  num: string
  icon: Icon
  title: string
  description: string
}

export interface TestimonialData {
  id: number
  text: string
  author: string
  initials: string
  treatment: string
}

export interface StatData {
  icon: Icon
  prefix?: string
  suffix?: string
  target: number
  label: string
}

export interface NavLink {
  href: string
  label: string
}
