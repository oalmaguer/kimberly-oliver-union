import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - en una implementación real, estas serían las URLs de las fotos reales
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Momento especial 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80', alt: 'Momento especial 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80', alt: 'Momento especial 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1594736797933-d0d83ba97cfc?w=800&q=80', alt: 'Momento especial 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', alt: 'Momento especial 5' },
    { id: 6, src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', alt: 'Momento especial 6' },
    { id: 7, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', alt: 'Momento especial 7' },
    { id: 8, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80', alt: 'Momento especial 8' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-4">
            Nuestra Historia en Imágenes
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Algunos de nuestros momentos más especiales juntos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg shadow-card cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-sans mb-6">
            ¿Tienes fotos especiales de nosotros que te gustaría compartir?
          </p>
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-white"
          >
            Compartir Fotos
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="max-w-4xl max-h-[90vh] flex items-center justify-center">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;