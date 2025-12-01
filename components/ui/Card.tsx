import { cn } from '../../data/styles/cn';

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('card-surface rounded-2xl p-6', className)}>{children}</div>;
}
