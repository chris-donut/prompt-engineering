import { ThesisIntro } from '../../components/sections/thesis/ThesisIntro';
import { FeaturedEssay } from '../../components/sections/thesis/FeaturedEssay';
import { EssayList } from '../../components/sections/thesis/EssayList';

export default function ThesisPage() {
  return (
    <div className="space-y-6">
      <ThesisIntro />
      <FeaturedEssay />
      <EssayList />
    </div>
  );
}
