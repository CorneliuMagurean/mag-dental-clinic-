import { IconArrowRight } from '@tabler/icons-react'
import { RevealSection } from '@/components/ui/RevealSection'
import { SectionHead } from '@/components/ui/SectionHead'
import { SERVICES } from '@/lib/data/services'

export function Services() {
  return (
    <section id="servicii" className="py-[120px]">
      <div className="max-w-container mx-auto px-7">
        <RevealSection>
          <SectionHead
            eyebrow="Serviciile noastre"
            title={
              <>
                Tratamente complete,{' '}
                <em className="italic text-gold-2 font-normal">sub același acoperiș.</em>
              </>
            }
            lead="De la consultațiile de rutină la transformări complete ale zâmbetului — fiecare procedură este realizată cu precizie, transparență și grijă."
            center
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {SERVICES.map(({ num, icon: Icon, title, description }, i) => (
            <RevealSection key={num} delay={i * 80}>
              <article className="group relative bg-white border border-[rgba(13,27,42,0.08)] rounded-[22px] p-9 overflow-hidden hover:-translate-y-1.5 hover:shadow-md hover:border-[rgba(201,168,76,0.25)] transition-all duration-300 h-full">
                {/* Top accent bar */}
                <div className="absolute left-0 top-0 w-full h-[3px] bg-gradient-to-r from-gold to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />

                <span className="absolute top-6 right-7 font-serif italic text-[16px] text-gold-2 opacity-70">
                  {num}
                </span>

                <div className="w-16 h-16 rounded-[18px] bg-bg text-navy grid place-items-center mb-6 group-hover:bg-navy group-hover:text-gold transition-all duration-300">
                  <Icon size={32} />
                </div>

                <h3 className="font-serif text-[26px] text-navy font-medium mb-2.5">{title}</h3>
                <p className="text-muted text-[15px] leading-[1.65] mb-[18px]">{description}</p>

                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-navy tracking-[0.04em]">
                  Află mai mult{' '}
                  <IconArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </span>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
