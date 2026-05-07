import {
  IconDental,
  IconDentalBroken,
  IconBraces,
  IconSparkles,
  IconBulb,
  IconEmergencyBed,
} from '@tabler/icons-react'
import type { ServiceData } from '@/types'

export const SERVICES: ServiceData[] = [
  {
    num: '01',
    icon: IconDental,
    title: 'Stomatologie generală',
    description:
      'Consultații, profilaxie, tratamente carie, detartraj cu ultrasunete și controale periodice pentru o sănătate orală impecabilă.',
  },
  {
    num: '02',
    icon: IconDentalBroken,
    title: 'Implantologie',
    description:
      'Implanturi dentare premium, încărcare imediată și soluții all-on-4 / all-on-6 pentru reabilitări complete și de durată.',
  },
  {
    num: '03',
    icon: IconBraces,
    title: 'Ortodonție',
    description:
      'Aparate dentare metalice, ceramice și aligneri transparenți Invisalign — pentru o aliniere discretă și eficientă.',
  },
  {
    num: '04',
    icon: IconSparkles,
    title: 'Estetică dentară',
    description:
      'Fațete ceramice, coroane all-ceramic și design digital al zâmbetului (DSD) pentru rezultate naturale și armonioase.',
  },
  {
    num: '05',
    icon: IconBulb,
    title: 'Albire profesională',
    description:
      'Sisteme de albire ZOOM și BlancOne — rezultate vizibile imediat, în siguranță și fără sensibilitate post-tratament.',
  },
  {
    num: '06',
    icon: IconEmergencyBed,
    title: 'Urgențe stomatologice',
    description:
      'Intervenții rapide pentru dureri acute, traumatisme sau abcese — programări în aceeași zi, cu echipă pregătită.',
  },
]
