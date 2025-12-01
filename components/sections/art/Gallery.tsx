import { gallery } from '../../../data/art';
import { Card } from '../../ui/Card';

export function Gallery() {
  return (
    <section className="section-shell">
      <h2 className="text-xl font-display mb-4">Gallery</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {gallery.map((piece) => (
          <Card key={piece.title} className="flex flex-col gap-2">
            <h3 className="text-lg font-display">{piece.title}</h3>
            <p className="text-sm text-white/70">{piece.caption}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
