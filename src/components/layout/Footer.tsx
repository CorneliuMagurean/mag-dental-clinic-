import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconEmergencyBed,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandYoutube,
} from '@tabler/icons-react'

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-navy text-white/75 pt-20 pb-8 relative before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/40 before:to-transparent"
    >
      <div className="max-w-container mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <a
              href="#top"
              aria-label="Mag Dental Clinic"
              className="flex items-center gap-3 font-serif text-2xl text-white tracking-[0.01em]"
            >
              <span className="w-10 h-10 rounded-full grid place-items-center bg-gradient-to-br from-gold to-gold-2 text-white shadow-gold font-semibold text-lg italic shrink-0">
                M
              </span>
              <span className="flex flex-col leading-none">
                <b className="font-semibold tracking-[0.02em]">Mag Dental Clinic</b>
                <small className="font-sans text-[9px] font-medium tracking-[0.32em] uppercase text-gold-2 mt-1">
                  Premium Dental Care
                </small>
              </span>
            </a>
            <p className="mt-[18px] text-white/60 text-sm leading-[1.7] max-w-[320px]">
              Clinică stomatologică premium dedicată sănătății, esteticii și confortului zâmbetului
              tău. Cu rafinament, precizie și grijă autentică.
            </p>
            <div className="flex gap-2.5 mt-6">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-[38px] h-[38px] rounded-full border border-white/[0.18] grid place-items-center text-white/80 hover:bg-gold hover:text-navy hover:border-gold hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.24em] uppercase text-white mb-5">
              Contact
            </h4>
            <ContactItem icon={IconMapPin}>
              <b>Adresă</b>
              str. Ștefan cel Mare 73
              <br />
              Chișinău, MD-2001
              <br />
              Republica Moldova
            </ContactItem>
            <ContactItem icon={IconPhone}>
              <b>Telefon</b>
              +373 22 000 000
              <br />
              +373 69 123 456
            </ContactItem>
            <ContactItem icon={IconMail}>
              <b>Email</b>
              contact@magdental.md
            </ContactItem>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.24em] uppercase text-white mb-5">
              Program
            </h4>
            <ContactItem icon={IconClock}>
              <b>Luni — Vineri</b>09:00 — 20:00
            </ContactItem>
            <ContactItem icon={IconClock}>
              <b>Sâmbătă</b>10:00 — 16:00
            </ContactItem>
            <ContactItem icon={IconEmergencyBed}>
              <b>Urgențe</b>24/7 la cerere
            </ContactItem>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.24em] uppercase text-white mb-5">
              Navigație
            </h4>
            <ul className="flex flex-col gap-3">
              {['#despre', '#servicii', '#dece', '#testimoniale', '#contact'].map((href) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {LINK_LABELS[href]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-7 flex flex-wrap justify-between items-center gap-4 text-[13px] text-white/50">
          <span>© 2026 Mag Dental Clinic. Toate drepturile rezervate.</span>
          <span>
            Creat cu{' '}
            <em className="font-serif italic text-gold not-italic">grijă</em> în Chișinău, Moldova.
          </span>
        </div>
      </div>
    </footer>
  )
}

function ContactItem({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ size?: number }>
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-3 items-start text-sm text-white/70 mb-[14px] leading-[1.5] [&_b]:text-white [&_b]:font-medium [&_b]:block">
      <Icon size={18} className="text-gold mt-0.5 shrink-0" />
      <div>{children}</div>
    </div>
  )
}

const SOCIALS = [
  { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
  { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  { label: 'TikTok', icon: IconBrandTiktok, href: '#' },
  { label: 'YouTube', icon: IconBrandYoutube, href: '#' },
]

const LINK_LABELS: Record<string, string> = {
  '#despre': 'Despre noi',
  '#servicii': 'Servicii',
  '#dece': 'De ce noi',
  '#testimoniale': 'Testimoniale',
  '#contact': 'Contact',
}
