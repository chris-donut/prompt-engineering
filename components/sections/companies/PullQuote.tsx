import { pullQuote } from '../../../data/companies';
import { Card } from '../../ui/Card';

export function PullQuote() {
  return (
    <section className="section-shell">
      <Card className="text-center text-lg text-white/80">
        “{pullQuote}”
      </Card>
    </section>
  );
}
