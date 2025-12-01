import { spotlights } from '../../../data/investments';
import { Card } from '../../ui/Card';

export function Spotlights() {
  return (
    <section className="section-shell">
      <h2 className="text-xl font-display mb-4">Spotlights</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {spotlights.map((spotlight) => (
          <Card key={spotlight.title} className="flex flex-col gap-2">
            <h3 className="text-lg font-display">{spotlight.title}</h3>
            <p className="text-sm text-white/70">{spotlight.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
