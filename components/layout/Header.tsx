'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/thesis', label: 'Thesis' },
  { href: '/investments', label: 'Investments' },
  { href: '/companies', label: 'Companies' },
  { href: '/art', label: 'Art' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <span className="h-3 w-3 rounded-full bg-horizon-orange shadow-neon" />
          <span>AtomCity</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative py-1">
                <span className="hover:text-horizon-gold transition-colors">{item.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-horizon-orange to-horizon-mint"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
