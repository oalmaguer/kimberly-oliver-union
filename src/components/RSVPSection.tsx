import { useEffect, useState, useRef } from "react";
import { Check, Users, MessageCircle } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
    name: "",
    email: "",
    phone: "",
    attendance: "",
    companions: "",
    dietaryRestrictions: "",
    message: "",
  });
  const [allConfirmations, setAllConfirmations] = useState<any[]>([]);
  const [nameSuggestions, setNameSuggestions] = useState<any[]>([]);
  const [openPopover, setOpenPopover] = useState(false);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.attendance) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let error: any = null;
      const payload = {
        name: formData.name,
        confirmation: formData.attendance === "yes",
        number_guests: formData.companions ? Number(formData.companions) : null,
        message: formData.message || null,
      };

      if (selectedUserId) {
        const res = await (supabase as any)
          .from("confirmacion")
          .update(payload)
          .eq("id", selectedUserId);
        error = res.error;
      } else {
        const res = await (supabase as any)
          .from("confirmacion")
          .insert(payload);
        error = res.error;
      }

      if (error) {
        if (error.code === "23505") {
          // Unique constraint violation
          toast({
            title: "Error",
            description: "Este correo ya ha sido registrado.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "¡Confirmación recibida!",
          description: "Gracias por confirmar tu asistencia!",
        });
      }
    } catch (error) {
      console.error("Error saving RSVP:", error);
      toast({
        title: "Error",
        description:
          "Hubo un problema al guardar tu confirmación. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (!value.length) {
      setSelectedUserId(null);
      //reset form data
      setFormData((prev) => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
        attendance: "",
        companions: "",
        dietaryRestrictions: "",
        message: "",
      }));
    }
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Fetch all confirmations on mount and cache them
  useEffect(() => {
    let mounted = true;
    const fetchAll = async () => {
      try {
        const { data, error } = await (supabase as any)
          .from("confirmacion")
          .select("id, name, number_guests, confirmation");

        const filteredData = data?.filter(
          (item: ConfirmationData) => item.confirmation === null
        );
        if (error) {
          console.error("Error fetching confirmations:", error);
        } else if (mounted) {
          setAllConfirmations(filteredData || []);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchAll();
    return () => {
      mounted = false;
    };
  }, []);

  // Update suggestions when name input changes
  useEffect(() => {
    if (selectedUserId) {
      return;
    }
    const q = formData.name.trim().toLowerCase();
    if (!q && q.length < 2) {
      setNameSuggestions([]);
      setOpenPopover(false);
      return;
    }

    if (q.length < 3) {
      return;
    }
    const matches = allConfirmations.filter(
      (c) =>
        c.name && c.name.toLowerCase().includes(q) && c.confirmation === null
    );
    setNameSuggestions(matches.slice(0, 8));
    setOpenPopover(matches.length > 0);
    setTimeout(() => nameInputRef.current?.focus(), 0);
  }, [formData.name, allConfirmations]);

  const handleChooseSuggestion = (sugg: any) => {
    setFormData((prev) => ({
      ...prev,
      name: sugg.name,
      companions:
        sugg.number_guests != null
          ? String(sugg.number_guests)
          : prev.companions,
    }));
    setOpenPopover(false);
    setSelectedUserId(sugg.id);
    nameInputRef.current?.focus();
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className=" ">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-gold" />
          </div>
          <h2 className="text-3xl font-serif text-gold mb-4">¡Gracias!</h2>
          <p className="text-lg text-muted-foreground font-sans">
            Hemos recibido tu confirmación. Te contactaremos pronto con más
            detalles sobre la celebración.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="pb-10 ">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-6xl md:text-6xl font-serif text-gold mb-4 old-standard-regular">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground raleway">
            Por favor confirma tu asistencia antes del{" "}
            <strong>1 de Diciembre de 2025</strong>
          </p>
        </div>

        <Card className="shadow-card border-0">
          <CardContent className="p-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid  gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans text-foreground">
                    Nombre Completo *
                  </Label>
                  <Popover open={openPopover} onOpenChange={setOpenPopover}>
                    <PopoverTrigger asChild>
                      <div>
                        <Input
                          id="name"
                          required
                          ref={nameInputRef}
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="border-gold/30 focus:border-gold"
                          autoComplete="off"
                        />
                      </div>
                    </PopoverTrigger>

                    {nameSuggestions.length > 0 && (
                      <PopoverContent>
                        <div className="space-y-1">
                          {nameSuggestions.map((s) => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => handleChooseSuggestion(s)}
                              className="w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                            >
                              {s.name}{" "}
                              {s.email ? (
                                <span className="text-xs text-muted-foreground">
                                  — {s.email}
                                </span>
                              ) : null}
                            </button>
                          ))}
                        </div>
                      </PopoverContent>
                    )}
                  </Popover>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 items-end">
                <div className="space-y-2">
                  <Label className="font-sans text-foreground">
                    ¿Asistirás? *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("attendance", value)
                    }
                  >
                    <SelectTrigger className="border-gold/30 focus:border-gold">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">
                        Sí, asistiré con mucho gusto
                      </SelectItem>
                      <SelectItem value="no">
                        Lo siento, no podré asistir
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="companions"
                    className="font-sans text-foreground flex items-center"
                  >
                    <Users className="w-4 h-4 mr-1" />
                    Número de pases
                  </Label>
                  <Input
                    id="companions"
                    type="number"
                    min="0"
                    max="50"
                    value={formData.companions}
                    onChange={(e) =>
                      handleInputChange("companions", e.target.value)
                    }
                    className="border-gold/30 focus:border-gold"
                    disabled={true}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="font-sans text-foreground flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Mensaje para los novios
                </Label>
                <Textarea
                  id="message"
                  placeholder="Déjanos un mensaje especial..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="border-gold/30 focus:border-gold min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-800 text-white font-sans"
                size="lg"
                disabled={
                  isSubmitting ||
                  !selectedUserId ||
                  !formData.attendance ||
                  !formData.companions
                }
              >
                {isSubmitting ? "Enviando..." : "Confirmar Asistencia"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-sans raleway">
            ¿Tienes problemas para enviar el formulario?
            <br />
            Contacta directamente: <strong>+52 6692 77 61 29</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
