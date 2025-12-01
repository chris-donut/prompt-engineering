import { portfolio } from '../../../data/investments';
import { Card } from '../../ui/Card';

export function PortfolioGrid() {
  return (
    <section className="section-shell">
      <h2 className="text-xl font-display mb-4">Portfolio</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.map((company) => (
          <Card key={company.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-display">{company.name}</h3>
              <span className="text-sm text-horizon-gold">{company.role}</span>
            </div>
            <p className="text-sm text-white/70">{company.sector}</p>
            <p className="text-sm text-white/60">{company.metric}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
