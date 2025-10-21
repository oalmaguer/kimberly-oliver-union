import { useState } from 'react';
import { Gift, CreditCard, MapPin, Clipboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('Texto copiado al portapapeles');
  });
};

const GiftsSection = () => {
  const [modalContent, setModalContent] = useState('');


  const handleOpenModal = (content) => {
    setModalContent(content);
  };

  return (
    <section id="regalos" className=" ">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-5xl md:text-8xl font-serif text-gold mb-4 old-standard-regular">
            LISTA DE REGALOS
          </h2>
          <p className="text-lg text-muted-foreground raleway max-w-2xl mx-auto">
            Tu presencia es nuestro mayor regalo, pero si deseas obsequiarnos algo,
            aquí tienes algunas opciones que nos ayudarán a comenzar nuestra nueva vida juntos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Mesa de Regalos */}
          <Card className="shadow-card  border-0 text-center">
            <CardContent className="">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl lora font-serif text-gold mb-2">Mesa de Regalos</h3>
              <p className="text-lg text-muted-foreground font-sans mb-4 raleway">
                Liverpool & El Palacio de Hierro
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-gold text-gold hover:bg-gold hover:text-white"
                onClick={() => window.open('https://mesaderegalos.liverpool.com.mx/milistaderegalos/51806107', '_blank')}
              >
                Ver Lista
              </Button>
            </CardContent>
          </Card>

          {/* Transferencia */}
          <Card className="shadow-card  border-0 text-center">
            <CardContent className="">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl lora font-serif text-gold mb-2">Transferencia</h3>
              <p className="text-lg text-muted-foreground font-sans mb-4 raleway">
                Para contribuir a nuestros sueños
              </p>
              <div className="tarjeta text-md text-muted-foreground font-sans mb-4 flex flex-col gap-2">
                <p className='raleway '>Deposito a cuenta Santander</p>
                <p className='raleway'>Tarjeta: <span className="cursor-pointer text-gold hover:text-gold-dark underline " onClick={() => copyToClipboard('5579 1003 9392 9011')}>5579 1003 9392 9011</span></p>
                <p className='raleway'>Nombre: Oliver Almaguer Tostado</p>

              </div>

            </CardContent>
          </Card>

          {/* Luna de Miel */}
          <Card className="shadow-card  border-0 text-center">
            <CardContent className="">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl lora font-serif text-gold mb-2">Luna de Miel</h3>
              <p className="text-lg text-muted-foreground font-sans mb-4 raleway">
                Ayúdanos a crear recuerdos únicos
              </p>
              <div className="tarjeta text-md text-muted-foreground font-sans mb-4 flex flex-col gap-2">
                <p className="raleway ">Deposito a cuenta BBVA</p>
                <p className="raleway">
                  Tarjeta:{" "}
                  <span
                    className="cursor-pointer text-gold hover:text-gold-dark underline "
                    onClick={() => copyToClipboard("4152 3144 0672 9254")}
                  >
                    4152 3144 0672 9254
                  </span>
                </p>

                <p className="raleway">Nombre: Kimberly Covarrubias</p>
              </div>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
};

export default GiftsSection;