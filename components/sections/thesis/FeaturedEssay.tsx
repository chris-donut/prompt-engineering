import Link from 'next/link';
import { featuredEssay } from '../../../data/thesis';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

export function FeaturedEssay() {
  return (
    <section className="section-shell">
      <Card className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-white/60">Featured essay</p>
          <h2 className="text-2xl font-display">{featuredEssay.title}</h2>
          <p className="text-white/70 mt-2 max-w-2xl">{featuredEssay.summary}</p>
        </div>
        <Link href={featuredEssay.link}>
          <Button>Read</Button>
        </Link>
      </Card>
    </section>
  );
}
