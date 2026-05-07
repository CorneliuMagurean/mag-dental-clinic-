import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center gap-2.5 px-[26px] py-[14px] font-sans text-sm font-semibold tracking-[0.02em] rounded-full transition-all duration-200 whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:
          'bg-navy text-white shadow-[0_8px_22px_-10px_rgba(13,27,42,.55)] hover:bg-navy-2 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(13,27,42,.6)]',
        gold: 'bg-gold text-navy shadow-gold hover:bg-gold-2 hover:text-white hover:-translate-y-0.5',
        ghost: 'bg-transparent text-navy border border-navy hover:bg-navy hover:text-white',
        'outline-gold':
          'bg-transparent text-navy border border-gold hover:bg-gold hover:text-navy',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string
  children: React.ReactNode
}

export function Button({ href, variant, className, children, ...props }: ButtonProps) {
  return (
    <a href={href} className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
    </a>
  )
}
