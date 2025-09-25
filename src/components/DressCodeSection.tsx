import { Users, Palette, Info, Sparkles } from 'lucide-react';
import womenImage from '@/assets/dresswomen.jpeg';
import menImage from '@/assets/dresscmen.jpeg';
const DressCodeSection = () => {
  return (
    <section id="vestimenta" className="py-20 bg-creamw">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-serif text-gold mb-4 tangerine-regular">
            Código de Vestimenta
          </h2>
          <p className="text-lg text-muted-foreground font-sans playfair">
            Ayúdanos a crear un ambiente elegante y armonioso
          </p>
        </div>

        {/* Style Guide Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-gold font-serif text-lg">Inspírate con estos looks</span>
          </div>
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
          {/* <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-serif text-gold mb-4">Para Ellas</h4>
              <ul className="space-y-2 font-sans text-muted-foreground">
                <li>• Vestidos largos o midi elegantes</li>
                <li>• Colores suaves: nude, champagne, blush, sage</li>
                <li>• Tacones cómodos (ceremonia en jardín)</li>
                <li>• Accesorios dorados o en tonos tierra</li>
                <li>• Bolero o chal para la iglesia</li>
              </ul>
            </div>

          <div>
            <h4 className="text-2xl font-serif text-gold mb-4">Para Ellos</h4>
            <ul className="space-y-2 font-sans text-muted-foreground">
              <li>• Traje completo en tonos oscuros</li>
              <li>• Camisa blanca o en tonos claros</li>
              <li>• Corbata o moño en colores complementarios</li>
              <li>• Zapatos de vestir</li>
              <li>• Saco obligatorio para la ceremonia</li>
            </ul>
          </div>
        </div> */}

          <div className="mt-8 p-4 bg-gold/10 rounded-lg">
            <p className="text-center text-sm font-sans text-gold-dark">
              <strong>Recuerda:</strong> La ceremonia será al aire libre. Te sugerimos considerar
              el clima y usar calzado apropiado para caminar en jardín.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default DressCodeSection;