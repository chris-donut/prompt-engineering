import { thesisIntro } from '../../../data/thesis';
import { Card } from '../../ui/Card';

export function ThesisIntro() {
  return (
    <section className="section-shell">
      <Card className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-wide text-white/60">Thesis</p>
        <h1 className="text-3xl font-display">{thesisIntro.headline}</h1>
        <p className="text-white/70">{thesisIntro.description}</p>
      </Card>
    </section>
  );
}
