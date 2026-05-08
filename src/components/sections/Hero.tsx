import { IconCalendarHeart, IconStethoscope } from '@tabler/icons-react'
import { RevealSection } from '@/components/ui/RevealSection'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden pt-[160px] pb-[120px]"
      style={{
        background:
          'radial-gradient(1100px 600px at 85% -10%, rgba(201,168,76,.16), transparent 60%), radial-gradient(900px 500px at -10% 110%, rgba(13,27,42,.05), transparent 60%), #FFFFFF',
      }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none hero-grid-pattern" />

      <div className="max-w-container mx-auto px-7 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[80px] items-center relative">
        <RevealSection>
          <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.32em] uppercase text-gold-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Clinică stomatologică premium · Chișinău
          </span>

          <h1
            className="font-serif font-medium leading-none tracking-[-0.02em] mb-7"
            style={{ fontSize: 'clamp(46px, 6.4vw, 84px)' }}
          >
            Zâmbetul tău,
            <em className="block font-serif italic text-gold-2 font-normal not-italic" style={{ fontStyle: 'italic' }}>
              arta noastră.
            </em>
          </h1>

          <p className="text-[18px] text-muted max-w-[480px] leading-[1.7] mb-9">
            La Mag Dental Clinic îmbinăm precizia tehnologiei moderne cu rafinamentul îngrijirii
            personalizate. Fiecare zâmbet este o operă, modelată cu atenție, răbdare și pasiune.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-12">
            <Button href="#contact" variant="primary">
              <IconCalendarHeart size={18} />
              Programează o consultație
            </Button>
            <Button href="#servicii" variant="outline-gold">
              <IconStethoscope size={18} />
              Descoperă serviciile
            </Button>
          </div>

          <div className="flex flex-wrap gap-9 pt-8 border-t border-[rgba(13,27,42,0.08)]">
            {HERO_META.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <strong className="font-serif text-[32px] font-semibold text-navy leading-none">
                  {value}
                </strong>
                <span className="text-xs text-muted tracking-[0.06em] uppercase">{label}</span>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection delay={150}>
          <HeroVisual />
        </RevealSection>
      </div>
    </header>
  )
}

function HeroVisual() {
  return (
    <div
      className="relative overflow-hidden shadow-md"
      style={{
        aspectRatio: '4/5',
        borderRadius: '280px 280px 28px 28px',
        background:
          'radial-gradient(circle at 30% 30%, rgba(255,255,255,.5), transparent 50%), linear-gradient(160deg, #0D1B2A 0%, #1c3450 100%)',
      }}
      aria-hidden="true"
    >
      {/* Inner glow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 80%, rgba(201,168,76,.35), transparent 55%), radial-gradient(circle at 20% 20%, rgba(255,255,255,.08), transparent 60%)',
        }}
      />

      {/* Decorative rings */}
      <div className="absolute border border-[rgba(201,168,76,.45)] rounded-full" style={{ width: '70%', aspectRatio: '1', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute border border-dashed border-[rgba(201,168,76,.45)] rounded-full opacity-35" style={{ width: '55%', aspectRatio: '1', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />

      {/* Tooth SVG */}
      <svg
        className="absolute text-gold"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          filter: 'drop-shadow(0 20px 40px rgba(201,168,76,.4))',
        }}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 8c-6 0-10 4-10 10 0 6 2 10 4 16 1.5 4 2 10 3.5 16 1 4 3 6 5 6 2.5 0 3.5-3 4.5-9 .5-3 1.5-5 5-5s4.5 2 5 5c1 6 2 9 4.5 9 2 0 4-2 5-6 1.5-6 2-12 3.5-16 2-6 4-10 4-16 0-6-4-10-10-10-4 0-6 2-10 2s-6-2-10-2z" />
        <path d="M22 18c2-2 4-3 7-3" opacity=".5" />
      </svg>
    </div>
  )
}

const HERO_META = [
  { value: '4+', label: 'Ani de experiență' },
  { value: '1000+', label: 'Pacienți mulțumiți' },
  { value: '4.9★', label: 'Recenzii Google' },
]
