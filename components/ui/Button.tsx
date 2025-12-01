import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../data/styles/cn';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      intent: {
        primary: 'bg-gradient-to-r from-horizon-orange to-horizon-gold text-black shadow-neon hover:-translate-y-0.5',
        ghost: 'bg-white/5 text-white border border-white/10 hover:bg-white/10',
      },
      size: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-sm',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>;

export function Button({ intent, size, className, ...props }: ButtonProps) {
  return <button className={cn(buttonStyles({ intent, size }), className)} {...props} />;
}
