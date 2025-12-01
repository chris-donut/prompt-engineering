import { FeaturedPiece } from '../../components/sections/art/FeaturedPiece';
import { Gallery } from '../../components/sections/art/Gallery';

export default function ArtPage() {
  return (
    <div className="space-y-6">
      <FeaturedPiece />
      <Gallery />
    </div>
  );
}
