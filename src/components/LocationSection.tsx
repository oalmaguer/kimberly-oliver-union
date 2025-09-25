import { MapPin, Navigation, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import iglesiaImage from '@/assets/sagradafam.jpg';
import cerritosImage from '@/assets/cerritosres.jpg';
import handsImage from '@/assets/olikim10.jpeg';
const LocationSection = () => {
  return (
    <section id="ubicacion" className="bg-cream">
      <img className='w-full object-cover h-[650px] mb-10 object-[10%_43%]' src={handsImage} alt="" />
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-8xl md:text-8xl font-serif tangerine-regular text-gold mb-4">
            Ubicaciones
          </h2>
          <p className="text-lg text-muted-foreground playfair">
            Encuentra fácilmente los lugares de nuestra celebración
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Iglesia */}
          <Card className="shadow-card bg-card border-0 overflow-hidden w-[450px] mx-auto">

            <CardContent className="p-6">
              <h3 className="text-2xl font-serif text-gold mb-4">Ceremonia</h3>
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold font-sans">Iglesia Sagrada Familia</h4>
                <p className="text-muted-foreground font-sans">
                  Calle Río de la Plata & Del Cisne.<br />
                  Gaviotas, 82110, Mazatlán, Sin<br />
                </p>

              </div>
              <Button
                variant="outline"
                className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                onClick={() => window.open('https://www.google.com/maps/place/Parroquia+De+La+Sagrada+Familia/@23.2462385,-106.4527355,17z/data=!3m1!4b1!4m6!3m5!1s0x1407af1682c8e89f:0x9b0c19a3e88700a3!8m2!3d23.2462385!4d-106.4501606!16s%2Fg%2F11rqx6jpn?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Ver en Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Recepción */}
          <Card className="shadow-card bg-card border-0 overflow-hidden w-[450px] mx-auto">

            <CardContent className="p-6">
              <h3 className="text-2xl font-serif text-gold mb-4">Recepción</h3>
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold font-sans">Cerritos Resort</h4>
                <p className="text-muted-foreground font-sans">
                  Camino a Cerritos<br />
                  Antes de llegar a Baraka
                </p>

              </div>
              <Button
                variant="outline"
                className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                onClick={() => window.open('https://www.google.com/maps/place/Cerritos+Resort,+82112+Mazatl%C3%A1n,+Sin./@23.299361,-106.4859465,17z/data=!3m1!4b1!4m6!3m5!1s0x8698ab03dfd91e79:0x36176a1dff053418!8m2!3d23.2990776!4d-106.4836574!16s%2Fg%2F1tfzsb_p?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Ver en Google Maps
              </Button>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
};

export default LocationSection;