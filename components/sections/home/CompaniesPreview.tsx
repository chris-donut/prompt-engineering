import { companies } from '../../../data/home';
import { Card } from '../../ui/Card';

export function CompaniesPreview() {
  return (
    <section className="section-shell">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-display">Companies</h3>
        <span className="text-sm text-white/60">Built and scaled</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {companies.map((company) => (
          <Card key={company.name} className="flex flex-col gap-2">
            <h4 className="text-lg font-display">{company.name}</h4>
            <span className="text-sm text-horizon-gold">{company.role}</span>
            <p className="text-sm text-white/70">{company.blurb}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
