import { Users, Palette, Info, Sparkles } from 'lucide-react';
import womenImage from '@/assets/dresswomen.jpeg';
import menImage from '@/assets/dresscmen.jpeg';

import dressImg from '@/assets/dress.png';
import suitImg from '@/assets/suit.png';
const DressCodeSection = () => {
  return (
    <section id="vestimenta" className="py-20 bg-creamw">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-8xl font-serif text-gold mb-4 old-standard-regular">
            DRESSCODE
          </h2>
          <div className="suit-dress flex gap-4 justify-center m-6">
            <img src={dressImg} className="w-1/4" alt="Inspiración de vestidos elegantes" />
            <img src={suitImg} className="w-1/4" alt="Inspiración de trajes elegantes" />
          </div>
          <p className="text-2xl font-serif text-muted-foreground old-standard-regular mb-2">ETIQUETA</p>
          <p className="text-lg text-muted-foreground font-sans raleway">
            Ayúdanos a crear un ambiente elegante y armonioso
          </p>
        </div>

        {/* Women's Style Image */}
        <div className="mb-16">
          <h3 className="text-5xl font-serif text-gold mb-6 text-center tangerine-regular">Para Ellas</h3>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl ring-1 ring-gold/20 shadow-md">
            {/* Replace src with the women's collage image path */}
            <img
              src={womenImage}
              alt="Inspiración de vestidos elegantes"
              className="w-full h-[700px] object-contain rounded-xl drop-shadow-xl "
              loading="lazy"
            />
          </div>
        </div>

        {/* Men's Style Image */}
        <div className="mb-16">
          <h3 className="text-5xl font-serif text-gold mb-6 text-center tangerine-regular">Para Ellos</h3>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl ring-1 ring-gold/20 shadow-md">
            {/* Replace src with the men's collage image path */}
            <img
              src={menImage}
              alt="Inspiración de trajes elegantes"
              className="w-full h-[700px] object-contain rounded-xl drop-shadow-xl "
              loading="lazy"
            />
          </div>
        </div>

        {/* Color Palette Guide */}


        <div className="bg-cream rounded-lg p-8">
          <div className="mt-8 p-4 bg-gold/10 rounded-lg">
            <p className="text-center text-sm font-sans text-gold-dark">
              <strong>Recuerda:</strong> La ceremonia será al aire libre. Te sugerimos considerar
              el clima y usar calzado apropiado para caminar en jardín.
            </p>
            <p className="text-center mt-4 text-sm font-sans ">
              <strong>No Niños:</strong> La ceremonia será un evento para adultos.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default DressCodeSection;