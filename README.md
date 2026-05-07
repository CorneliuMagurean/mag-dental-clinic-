# Mag Dental Clinic

Landing page premium pentru o clinică stomatologică din Chișinău, Moldova.

## Tech stack

- **Next.js 15** — App Router, Server Components
- **TypeScript** — tipuri stricte end-to-end
- **Tailwind CSS 3** — utility-first styling
- **@tabler/icons-react** — iconițe SVG tree-shakeable
- **next/font** — Cormorant Garamond + DM Sans fără layout shift
- **class-variance-authority** — variante Button type-safe
- **clsx + tailwind-merge** — utilitar `cn()` pentru clase condiționale

## Structură

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonturi, metadata SEO
│   ├── page.tsx                # Pagina principală
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Nav.tsx             # Navigație fixă cu scroll + mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── CtaStrip.tsx
│   └── ui/
│       ├── Button.tsx          # CVA variants: primary / gold / ghost / outline-gold
│       ├── Eyebrow.tsx
│       ├── SectionHead.tsx
│       ├── RevealSection.tsx   # Animație scroll (IntersectionObserver)
│       └── AnimatedCounter.tsx # Contor animat la scroll
├── hooks/
│   └── use-intersection-observer.ts
├── lib/
│   ├── utils.ts                # cn() helper
│   └── data/
│       ├── services.ts
│       ├── testimonials.ts
│       └── stats.ts
└── types/
    └── index.ts
```

## Instalare și rulare

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Build pentru producție

```bash
npm run build
npm start
```

## Secțiuni

- **Hero** — tagline, CTA dublu, statistici rapide, visual decorativ
- **Despre noi** — misiune, 3 carduri de valori cheie
- **Servicii** — grid 6 carduri cu hover effects
- **De ce noi** — 4 statistici cu animație de numărare la scroll
- **Testimoniale** — 3 recenzii pacienți
- **CTA** — card de conversie cu număr de telefon
- **Footer** — adresă, program, contact, social media
