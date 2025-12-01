import { timeline } from '../../../data/companies';
import { Card } from '../../ui/Card';

export function Timeline() {
  return (
    <section className="section-shell">
      <h2 className="text-xl font-display mb-4">Companies</h2>
      <div className="space-y-4">
        {timeline.map((item) => (
          <Card key={item.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display">{item.name}</h3>
              <span className="text-sm text-white/60">{item.year}</span>
            </div>
            <span className="text-sm text-horizon-gold">{item.role}</span>
            <ul className="text-sm text-white/70 list-disc pl-5 space-y-1">
              {item.milestones.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
