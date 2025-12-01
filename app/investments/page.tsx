import { FilterBar } from '../../components/sections/investments/FilterBar';
import { PortfolioGrid } from '../../components/sections/investments/PortfolioGrid';
import { Spotlights } from '../../components/sections/investments/Spotlights';

export default function InvestmentsPage() {
  return (
    <div className="space-y-6">
      <FilterBar />
      <PortfolioGrid />
      <Spotlights />
    </div>
  );
}
