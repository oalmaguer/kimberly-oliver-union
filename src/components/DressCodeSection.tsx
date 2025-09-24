import { Users, Palette, Info } from 'lucide-react';

const DressCodeSection = () => {
  return (
    <section id="vestimenta" className="py-20 bg-warm-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
            Código de Vestimenta
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Ayúdanos a crear un ambiente elegante y armonioso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Dress Code */}
          <div className="text-center">
            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-xl font-serif text-gold mb-2">Formal</h3>
            <p className="text-muted-foreground font-sans text-sm">
              Vestimenta elegante y formal para la ocasión especial
            </p>
          </div>

          {/* Colors */}
          <div className="text-center">
            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-xl font-serif text-gold mb-2">Colores</h3>
            <p className="text-muted-foreground font-sans text-sm">
              Tonos pasteles, dorados, beige y colores tierra
            </p>
          </div>

          {/* Notes */}
          <div className="text-center">
            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-xl font-serif text-gold mb-2">Notas</h3>
            <p className="text-muted-foreground font-sans text-sm">
              Evitar blanco, negro y colores muy brillantes
            </p>
          </div>
        </div>

        <div className="bg-cream rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Para Ellas */}
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

            {/* Para Ellos */}
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
          </div>

          <div className="mt-8 p-4 bg-gold/10 rounded-lg">
            <p className="text-center text-sm font-sans text-gold-dark">
              <strong>Recuerda:</strong> La ceremonia será al aire libre. Te sugerimos considerar 
              el clima y usar calzado apropiado para caminar en jardín.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;