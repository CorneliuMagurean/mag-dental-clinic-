import { IconStarFilled } from '@tabler/icons-react'
import { RevealSection } from '@/components/ui/RevealSection'
import { SectionHead } from '@/components/ui/SectionHead'
import { TESTIMONIALS } from '@/lib/data/testimonials'

export function Testimonials() {
  return (
    <section id="testimoniale" className="py-[120px] bg-bg">
      <div className="max-w-container mx-auto px-7">
        <RevealSection>
          <SectionHead
            eyebrow="Testimoniale"
            title={
              <>
                Cuvinte din partea{' '}
                <em className="italic text-gold-2 font-normal">pacienților noștri.</em>
              </>
            }
            lead="Recenzii reale, scrise de oameni care au descoperit ce înseamnă o experiență stomatologică cu adevărat diferită."
            center
          />
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ id, text, author, initials, treatment }, i) => (
            <RevealSection key={id} delay={i * 120}>
              <article className="bg-white border border-[rgba(13,27,42,0.08)] rounded-[22px] p-9 flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                <p className="font-serif text-[80px] leading-[0.6] text-gold opacity-45 mb-2 h-[34px]">
                  &ldquo;
                </p>

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <IconStarFilled key={j} size={18} className="text-gold" />
                  ))}
                </div>

                <p className="font-serif text-[21px] leading-[1.45] text-navy flex-1 mb-7 font-medium">
                  {text}
                </p>

                <div className="flex items-center gap-3.5 pt-5 border-t border-[rgba(13,27,42,0.08)]">
                  <div className="w-12 h-12 rounded-full grid place-items-center font-serif font-semibold text-lg text-navy bg-gold-soft shrink-0">
                    {initials}
                  </div>
                  <div>
                    <b className="block font-serif text-[18px] text-navy font-semibold">{author}</b>
                    <span className="text-[13px] text-muted">Pacient · {treatment}</span>
                  </div>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
