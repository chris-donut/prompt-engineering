import { Hero } from '../components/sections/home/Hero';
import { Signals } from '../components/sections/home/Signals';
import { FeaturedThesis } from '../components/sections/home/FeaturedThesis';
import { InvestmentsPreview } from '../components/sections/home/InvestmentsPreview';
import { CompaniesPreview } from '../components/sections/home/CompaniesPreview';
import { ArtPreview } from '../components/sections/home/ArtPreview';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Hero />
      <Signals />
      <FeaturedThesis />
      <InvestmentsPreview />
      <CompaniesPreview />
      <ArtPreview />
    </div>
  );
}
