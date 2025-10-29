import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-warm-white ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-gold"></div>
            <Heart className="w-6 h-6 text-gold mx-4" />
            <div className="w-12 h-px bg-gold"></div>
          </div>
          <h3 className="text-4xl font-serif text-gold mb-2 great-vibes-regular">
            Kimberly & Oliver
          </h3>
          <p className="text-md font-sans opacity-80 raleway">
            31 de Enero, 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
