import {
  IconUsersGroup,
  IconClockHour3,
  IconCpu,
  IconCalendarCheck,
} from '@tabler/icons-react'
import type { StatData } from '@/types'

export const STATS: StatData[] = [
  {
    icon: IconUsersGroup,
    prefix: '+',
    target: 1000,
    label: 'Pacienți mulțumiți care ne-au încredințat zâmbetul lor.',
  },
  {
    icon: IconClockHour3,
    suffix: 'ani',
    target: 4,
    label: 'De experiență clinică și învățare continuă în stomatologie.',
  },
  {
    icon: IconCpu,
    suffix: '%',
    target: 100,
    label: 'Echipamente de ultimă generație, digitale și certificate CE.',
  },
  {
    icon: IconCalendarCheck,
    suffix: 'h',
    target: 24,
    label: 'Programare confirmată — răspundem la cererea ta în maxim o zi.',
  },
]
