'use client'

import { useEffect, useState } from 'react'
import { IconCalendarPlus, IconMenu2, IconX } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import type { NavLink } from '@/types'

const NAV_LINKS: NavLink[] = [
  { href: '#despre', label: 'Despre noi' },
  { href: '#servicii', label: 'Servicii' },
  { href: '#dece', label: 'De ce noi' },
  { href: '#testimoniale', label: 'Testimoniale' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/[0.92] backdrop-blur-[14px] shadow-[0_1px_0_rgba(13,27,42,0.08)] py-[14px]'
          : 'py-[22px]'
      )}
    >
      <div className="max-w-container mx-auto px-7 flex items-center justify-between gap-6">
        <Brand />

        <div className="hidden lg:flex gap-9">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={cn(
                'text-sm font-medium text-ink transition-colors hover:text-navy',
                'relative after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px',
                'after:bg-gold after:scale-x-0 after:origin-left',
                'hover:after:scale-x-100 after:transition-transform after:duration-300'
              )}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-[26px] py-[14px] bg-gold text-navy rounded-full text-sm font-semibold shadow-gold hover:bg-gold-2 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            <IconCalendarPlus size={18} />
            <span className="hidden sm:inline">Programează</span>
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Închide meniu' : 'Deschide meniu'}
            className="lg:hidden w-10 h-10 rounded-full grid place-items-center bg-navy text-white"
          >
            {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-white border-t border-[rgba(13,27,42,0.06)]">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block px-7 py-4 text-sm font-medium text-ink hover:text-gold-2 border-b border-[rgba(13,27,42,0.06)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Brand() {
  return (
    <a
      href="#top"
      aria-label="Mag Dental Clinic"
      className="flex items-center gap-3 font-serif text-2xl text-navy tracking-[0.01em]"
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
  )
}
