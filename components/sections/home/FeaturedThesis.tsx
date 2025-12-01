import Link from 'next/link';
import { featuredThesis } from '../../../data/home';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

export function FeaturedThesis() {
  return (
    <section className="section-shell">
      <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-wide text-white/60">Thesis</p>
          <h3 className="text-2xl font-display">{featuredThesis.title}</h3>
          <p className="text-white/70 mt-2">{featuredThesis.summary}</p>
        </div>
        <Link href={featuredThesis.link}>
          <Button>Open</Button>
        </Link>
      </Card>
    </section>
  );
}
