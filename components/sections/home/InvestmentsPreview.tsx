import { highlightedInvestments } from '../../../data/home';
import { Card } from '../../ui/Card';
import { Pill } from '../../ui/Pill';

export function InvestmentsPreview() {
  return (
    <section className="section-shell">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-display">Investments</h3>
        <Pill className="bg-white/5 text-white/70">AI + Infra bias</Pill>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {highlightedInvestments.map((investment) => (
          <Card key={investment.name} className="flex flex-col gap-2">
            <span className="text-sm text-horizon-gold">{investment.sector}</span>
            <h4 className="text-lg font-display">{investment.name}</h4>
            <p className="text-sm text-white/70">{investment.note}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
