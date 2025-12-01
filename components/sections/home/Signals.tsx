import { signals } from '../../../data/home';
import { Card } from '../../ui/Card';

export function Signals() {
  return (
    <section className="section-shell">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {signals.map((signal) => (
          <Card key={signal.label} className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-white/60">{signal.label}</span>
            <span className="text-2xl font-display text-white">{signal.value}</span>
            <span className="text-sm text-white/70">{signal.detail}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
