import { featured } from '../../../data/art';
import { Card } from '../../ui/Card';

export function FeaturedPiece() {
  return (
    <section className="section-shell">
      <Card className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-wide text-white/60">Featured</p>
        <h2 className="text-2xl font-display">{featured.title}</h2>
        <p className="text-white/70">{featured.description}</p>
        <div className="mt-2 h-32 rounded-xl bg-gradient-to-r from-horizon-blue/30 via-horizon-orange/20 to-horizon-mint/25 animate-float" />
      </Card>
    </section>
  );
}
