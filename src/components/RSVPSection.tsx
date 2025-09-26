import { useState } from 'react';
import { Check, Users, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

type ConfirmationData = {
  name: string;
  email: string;
  phone: string | null;
  confirmation: boolean;
  number_guests: string | null;
  alergies: string | null;
  message: string | null;
};

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    companions: '',
    dietaryRestrictions: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.attendance) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await (supabase as any)
        .from('confirmacion')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          confirmation: formData.attendance === 'yes',
          number_guests: formData.companions || null,
          alergies: formData.dietaryRestrictions || null,
          message: formData.message || null
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Error",
            description: "Este correo ya ha sido registrado.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "¡Confirmación recibida!",
          description: "Gracias por confirmar tu asistencia. Te enviaremos más detalles por email.",
        });
      }
    } catch (error) {
      console.error('Error saving RSVP:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al guardar tu confirmación. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 ">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-gold" />
          </div>
          <h2 className="text-3xl font-serif text-gold mb-4">¡Gracias!</h2>
          <p className="text-lg text-muted-foreground font-sans">
            Hemos recibido tu confirmación. Te contactaremos pronto con más detalles sobre la celebración.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 ">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-8xl md:text-8xl font-serif text-gold mb-4 tangerine-regular">
            Confirma tu Asistencia
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Por favor confirma tu asistencia antes del 1 de marzo de 2025
          </p>
        </div>

        <Card className="shadow-card bg-card border-0">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-foreground">Nombre Completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="border-gold/30 focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-gold/30 focus:border-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-sans text-foreground">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="border-gold/30 focus:border-gold"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-sans text-foreground">¿Asistirás? *</Label>
                  <Select onValueChange={(value) => handleInputChange('attendance', value)}>
                    <SelectTrigger className="border-gold/30 focus:border-gold">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Sí, asistiré con mucho gusto</SelectItem>
                      <SelectItem value="no">Lo siento, no podré asistir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companions" className="font-sans text-foreground flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Número de acompañantes
                  </Label>
                  <Input
                    id="companions"
                    type="number"
                    min="0"
                    max="50"
                    value={formData.companions}
                    onChange={(e) => handleInputChange('companions', e.target.value)}
                    className="border-gold/30 focus:border-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dietary" className="font-sans text-foreground">Restricciones Alimentarias</Label>
                <Input
                  id="dietary"
                  placeholder="Vegetariano, vegano, alergias, etc."
                  value={formData.dietaryRestrictions}
                  onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                  className="border-gold/30 focus:border-gold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-sans text-foreground flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Mensaje para los novios
                </Label>
                <Textarea
                  id="message"
                  placeholder="Déjanos un mensaje especial..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="border-gold/30 focus:border-gold min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white font-sans"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-sans">
            ¿Tienes problemas para enviar el formulario?
            <br />Contacta directamente: <strong>kimberly.oliver.boda@email.com</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;