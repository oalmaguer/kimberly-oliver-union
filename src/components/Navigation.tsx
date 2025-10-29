import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Bienvenida", href: "#bienvenida" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Itinerario", href: "#itinerario" },
    { name: "Vestimenta", href: "#vestimenta" },
    { name: "Regalos", href: "#regalos" },
    { name: "RSVP", href: "#rsvp" },
    { name: "Galería", href: "#galeria" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-warm-white/95 backdrop-blur-md shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-semibold text-gold">
              K & O
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <HashLink
                  key={item.name}
                  smooth
                  to={`/${item.href}`} // React Router HashLink
                  className="text-foreground hover:text-gold transition-colors duration-300 playfair text-sm font-medium"
                >
                  {item.name}
                </HashLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-gold"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <HashLink
                  key={item.name}
                  smooth
                  to={`/${item.href}`}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-gold transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </HashLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
