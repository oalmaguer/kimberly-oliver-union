import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DetailsSection = () => {
  return (
    <section id="detalles" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
            Detalles del Evento
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Acompáñanos en estos dos momentos especiales que marcarán el inicio
            de nuestra vida juntos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ceremonia */}
          <Card className="shadow-card bg-card border-0 overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-gold mb-2">
                  Ceremonia Religiosa
                </h3>
                <div className="w-12 h-px bg-gold/30 mx-auto"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-sans">Sábado, 31 de Enero 2026</span>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-sans">4:00 PM</span>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <div className="font-sans">
                    <div className="font-medium">Iglesia Sagrada Familia</div>
                    <div className="text-sm text-muted-foreground">
                      Calle Río de la Plata & Del Cisne.
                      <br />Gaviotas, 82110, Mazatlán, Sin{" "}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recepción */}
          <Card className="shadow-card bg-card border-0 overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-gold mb-2">
                  Recepción
                </h3>
                <div className="w-12 h-px bg-gold/30 mx-auto"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-sans">Sábado, 31 de Enero 2026</span>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-sans">5:00 PM - 1:00 AM</span>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <div className="font-sans">
                    <div className="font-medium">Cerritos Resort</div>
                    <div className="text-sm text-muted-foreground">
                      Cerritos Resort
                      <br />
                      
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
