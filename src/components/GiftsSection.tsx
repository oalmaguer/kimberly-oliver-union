import { Gift, CreditCard, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GiftsSection = () => {
  return (
    <section id="regalos" className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
            Lista de Regalos
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Tu presencia es nuestro mayor regalo, pero si deseas obsequiarnos algo, 
            aquí tienes algunas opciones que nos ayudarán a comenzar nuestra nueva vida juntos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Mesa de Regalos */}
          <Card className="shadow-card bg-card border-0 text-center">
            <CardContent className="p-6">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-serif text-gold mb-2">Mesa de Regalos</h3>
              <p className="text-sm text-muted-foreground font-sans mb-4">
                Liverpool & El Palacio de Hierro
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gold text-gold hover:bg-gold hover:text-white"
              >
                Ver Lista
              </Button>
            </CardContent>
          </Card>

          {/* Transferencia */}
          <Card className="shadow-card bg-card border-0 text-center">
            <CardContent className="p-6">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-serif text-gold mb-2">Transferencia</h3>
              <p className="text-sm text-muted-foreground font-sans mb-4">
                Para contribuir a nuestros sueños
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gold text-gold hover:bg-gold hover:text-white"
              >
                Ver Datos
              </Button>
            </CardContent>
          </Card>

          {/* Luna de Miel */}
          <Card className="shadow-card bg-card border-0 text-center">
            <CardContent className="p-6">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-serif text-gold mb-2">Luna de Miel</h3>
              <p className="text-sm text-muted-foreground font-sans mb-4">
                Ayúdanos a crear recuerdos únicos
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-gold text-gold hover:bg-gold hover:text-white"
              >
                Contribuir
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-warm-white rounded-lg p-8 text-center">
          <h4 className="text-xl font-serif text-gold mb-4">Información de Contacto</h4>
          <p className="text-muted-foreground font-sans mb-6">
            Para más detalles sobre las opciones de regalo, puedes contactarnos directamente:
          </p>
          <div className="space-y-2 text-sm font-sans">
            <p><strong>Kimberly:</strong> +52 (555) 123-4567</p>
            <p><strong>Oliver:</strong> +52 (555) 987-6543</p>
            <p><strong>Email:</strong> kimberly.oliver.boda@email.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;