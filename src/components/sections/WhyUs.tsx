import { RevealSection } from '@/components/ui/RevealSection'
import { SectionHead } from '@/components/ui/SectionHead'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/data/stats'

export function WhyUs() {
  return (
    <section
      id="dece"
      className="py-[120px] bg-navy text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(900px 500px at 100% 0%, rgba(201,168,76,.18), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(201,168,76,.08), transparent 60%)',
        }}
      />

      <div className="max-w-container mx-auto px-7 relative">
        <RevealSection>
          <SectionHead
            eyebrow="De ce Mag Dental"
            title={
              <>
                Cifre care reflectă{' '}
                <em className="italic text-gold font-normal">încredere.</em>
              </>
            }
            lead="Pacienții noștri sunt cea mai bună mărturie a calității pe care o oferim — zi de zi, zâmbet după zâmbet."
            center
            light
          />
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[rgba(201,168,76,0.25)]">
          {STATS.map(({ icon: Icon, prefix, suffix, target, label }, i) => (
            <RevealSection
              key={label}
              delay={i * 100}
              className="px-7 py-12 border-r border-[rgba(201,168,76,0.18)] last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r sm:[&:nth-child(1)]:border-b sm:[&:nth-child(2)]:border-b lg:[&:nth-child(1)]:border-b-0 lg:[&:nth-child(2)]:border-b-0 relative"
            >
              <Icon
                size={22}
                className="absolute top-6 right-6 text-gold/50"
              />
              <div
                className="font-serif text-gold font-medium leading-none tracking-[-0.02em] flex items-baseline"
                style={{ fontSize: 'clamp(56px, 7vw, 88px)' }}
              >
                {prefix && (
                  <span className="text-[0.5em] mr-1.5 text-gold-soft">{prefix}</span>
                )}
                <AnimatedCounter target={target} />
                {suffix && (
                  <span className="text-[0.5em] ml-1.5 text-gold-soft">{suffix}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-white/[0.78] leading-[1.5] max-w-[220px]">{label}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
