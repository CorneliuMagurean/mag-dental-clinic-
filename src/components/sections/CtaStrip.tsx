import { IconPhone, IconCalendarPlus } from '@tabler/icons-react'
import { RevealSection } from '@/components/ui/RevealSection'
import { Button } from '@/components/ui/Button'

export function CtaStrip() {
  return (
    <section
      className="py-20"
      style={{
        background:
          'radial-gradient(800px 400px at 80% 50%, rgba(201,168,76,.18), transparent 60%), #FFFFFF',
      }}
    >
      <div className="max-w-container mx-auto px-7">
        <RevealSection>
          <div className="bg-navy rounded-[32px] p-16 text-white grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center relative overflow-hidden">
            {/* Glow orb */}
            <div
              className="absolute -right-24 -top-24 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(201,168,76,.25), transparent 70%)',
              }}
            />

            <div>
              <h2
                className="font-serif font-medium text-white leading-[1.1] tracking-[-0.01em] mb-3.5"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
              >
                Pregătit pentru{' '}
                <em className="italic text-gold font-normal">zâmbetul</em> pe care îl meriți?
              </h2>
              <p className="text-white/75 text-[16px] max-w-[480px]">
                Programează acum o consultație inițială și descoperă cum poate arăta zâmbetul tău
                cu un plan personalizat, conceput exclusiv pentru tine.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-start lg:justify-self-end relative z-10">
              <a
                href="tel:+37369624315"
                className="font-serif text-[36px] text-gold flex items-center gap-3.5 hover:text-gold-soft transition-colors"
              >
                <IconPhone size={28} />
                0696 24 315
              </a>
              <Button href="#contact" variant="gold">
                <IconCalendarPlus size={18} />
                Rezervă o consultație
              </Button>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
