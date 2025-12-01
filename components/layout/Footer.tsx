import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/60 py-10">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/70">
        <div className="flex flex-col gap-2">
          <span className="font-display text-base text-white">Signal in the Noise</span>
          <span>Retro-futurist personal site scaffold for a tech entrepreneur.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://x.com" className="hover:text-horizon-gold">X</Link>
          <Link href="mailto:founder@example.com" className="hover:text-horizon-gold">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
