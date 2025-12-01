import { cn } from '../../data/styles/cn';

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn('pill text-xs uppercase tracking-wide text-white/70', className)}>{children}</span>;
}
