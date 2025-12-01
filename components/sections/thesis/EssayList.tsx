import { essays } from '../../../data/thesis';
import { Card } from '../../ui/Card';
import { Pill } from '../../ui/Pill';

export function EssayList() {
  return (
    <section className="section-shell">
      <div className="grid gap-4 md:grid-cols-3">
        {essays.map((essay) => (
          <Card key={essay.title} className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Pill className="bg-white/5 text-white/70">{essay.tag}</Pill>
              <span>{essay.length}</span>
            </div>
            <h3 className="text-lg font-display">{essay.title}</h3>
            <a className="text-sm text-horizon-gold" href={essay.link}>
              Read →
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
