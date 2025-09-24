import { MapPin, Navigation, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
            Ubicaciones
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Encuentra fácilmente los lugares de nuestra celebración
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Iglesia */}
          <Card className="shadow-card bg-card border-0 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-gold-light to-champagne relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white/80" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif text-gold mb-4">Ceremonia</h3>
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold font-sans">Iglesia del Sagrado Corazón</h4>
                <p className="text-muted-foreground font-sans">
                  Av. Principal #123<br />
                  Centro Histórico<br />
                  Ciudad
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                onClick={() => window.open('https://maps.google.com/?q=Iglesia+Sagrado+Corazón', '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Ver en Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Recepción */}
          <Card className="shadow-card bg-card border-0 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-sage to-champagne relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white/80" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif text-gold mb-4">Recepción</h3>
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold font-sans">Jardín Los Rosales</h4>
                <p className="text-muted-foreground font-sans">
                  Carretera Norte Km 15<br />
                  Salón de Eventos Principal<br />
                  Ciudad
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 987-6543</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                onClick={() => window.open('https://maps.google.com/?q=Jardín+Los+Rosales', '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Ver en Google Maps
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gold/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-serif text-lg text-gold mb-2">Información Importante</h4>
            <p className="text-sm text-muted-foreground font-sans">
              Habrá servicio de transporte gratuito desde la iglesia hasta el lugar de la recepción. 
              El transporte partirá a las 6:30 PM desde la entrada principal de la iglesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;