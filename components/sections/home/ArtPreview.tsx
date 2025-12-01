import { artPreviews } from '../../../data/home';
import { Card } from '../../ui/Card';

export function ArtPreview() {
  return (
    <section className="section-shell">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-display">Art</h3>
        <span className="text-sm text-white/60">Visual experiments</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {artPreviews.map((piece) => (
          <Card key={piece.title} className="flex flex-col gap-2">
            <h4 className="text-lg font-display">{piece.title}</h4>
            <p className="text-sm text-white/70">{piece.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
