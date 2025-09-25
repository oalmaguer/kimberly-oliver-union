import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-warm-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-gold"></div>
            <Heart className="w-6 h-6 text-gold mx-4" />
            <div className="w-12 h-px bg-gold"></div>
          </div>
          <h3 className="text-3xl font-serif text-gold mb-2">Kimberly & Oliver</h3>
          <p className="text-sm font-sans opacity-80">31 de Enero, 2026</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center justify-center">
            <Mail className="w-4 h-4 mr-2 text-gold" />
            <span className="text-sm font-sans">kimberly.oliver.boda@email.com</span>
          </div>
          <div className="flex items-center justify-center">
            <Phone className="w-4 h-4 mr-2 text-gold" />
            <span className="text-sm font-sans">+52 (555) 123-4567</span>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">

          <p className="text-xs font-sans opacity-40 mt-4">
            Con amor, Kimberly & Oliver • 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;