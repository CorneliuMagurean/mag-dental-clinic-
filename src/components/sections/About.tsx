import { IconAward, IconMicroscope, IconHeartHandshake } from '@tabler/icons-react'
import { RevealSection } from '@/components/ui/RevealSection'
import { SectionHead } from '@/components/ui/SectionHead'

const VALUES = [
  {
    icon: IconAward,
    title: 'Experiență dovedită',
    description:
      'Peste 4 ani de practică clinică și sute de cazuri tratate cu succes — de la rutină la reconstrucții complexe.',
  },
  {
    icon: IconMicroscope,
    title: 'Tehnologie de top',
    description:
      'Echipamente digitale CBCT, scanner intraoral 3D, microscop operator și fluxuri CAD/CAM pentru precizie absolută.',
  },
  {
    icon: IconHeartHandshake,
    title: 'Îngrijire personalizată',
    description:
      'Fiecare plan de tratament este construit împreună cu tine — în ritmul, bugetul și obiectivele tale estetice.',
  },
]

export function About() {
  return (
    <section id="despre" className="py-[120px] bg-bg">
      <div className="max-w-container mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start">
        <RevealSection>
          <SectionHead
            eyebrow="Despre noi"
            title={
              <>
                O clinică unde <em className="italic text-gold-2 font-normal">știința</em>
                <br />
                întâlnește grija autentică.
              </>
            }
          />
          <p className="text-[17px] text-muted leading-[1.8] mt-[18px]">
            Mag Dental Clinic este un spațiu dedicat sănătății dentare la cel mai înalt standard.
            De peste 4 ani, echipa noastră de medici stomatologi îmbină expertiza profesională cu
            o abordare profund umană — pentru ca fiecare pacient să se simtă ascultat, înțeles și
            îngrijit.
          </p>
          <p className="text-[17px] text-muted leading-[1.8] mt-[18px]">
            Misiunea noastră este simplă: să oferim tratamente precise, confortabile și de durată,
            într-un mediu rafinat, modern și sigur. Pentru că zâmbetul tău merită experiența unei
            clinici premium.
          </p>
          <div className="flex items-center gap-3.5 mt-8 text-navy">
            <span className="font-serif text-[22px] italic">Dr. Artiom Mutavci</span>
            <span className="flex-1 h-px bg-gold max-w-[90px]" />
            <span className="text-xs text-muted tracking-[0.18em] uppercase">
              Medic-șef · Fondator
            </span>
          </div>
        </RevealSection>

        <div className="grid gap-[18px]">
          {VALUES.map(({ icon: Icon, title, description }, i) => (
            <RevealSection key={title} delay={i * 100}>
              <div className="bg-white border border-[rgba(13,27,42,0.08)] rounded-[14px] p-7 grid grid-cols-[auto_1fr] gap-[22px] items-start hover:-translate-y-1 hover:shadow-md hover:border-[rgba(201,168,76,0.25)] transition-all duration-300">
                <div className="w-[54px] h-[54px] rounded-[14px] grid place-items-center text-[26px] bg-gradient-to-br from-[#fbf3dc] to-[#f1e3ad] text-gold-2">
                  <Icon size={26} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-navy font-medium mb-1.5">{title}</h3>
                  <p className="text-muted text-[15px] leading-[1.65]">{description}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
