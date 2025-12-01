import { filters } from '../../../data/investments';
import { Pill } from '../../ui/Pill';

export function FilterBar() {
  return (
    <section className="section-shell">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Pill key={filter} className="bg-white/5 text-white/70">
            {filter}
          </Pill>
        ))}
      </div>
    </section>
  );
}
