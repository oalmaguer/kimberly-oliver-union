import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import GuestGallery from "@/pages/GuestGallery";
import image1 from "@/assets/olikim.jpeg";
import image2 from "@/assets/olikim2.jpeg";
import image3 from "@/assets/olikim3.jpeg";
import image4 from "@/assets/olikim4.jpeg";
import image5 from "@/assets/olikim5.jpeg";
import image6 from "@/assets/olikim6.jpeg";
import image7 from "@/assets/olikim7.jpeg";
import image8 from "@/assets/olikim8.jpeg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [showGuestGallery, setShowGuestGallery] = useState(false);

  // Placeholder images - en una implementación real, estas serían las URLs de las fotos reales
  const images = [
    { id: 1, src: image1, alt: "Momento especial 1" },
    { id: 2, src: image2, alt: "Momento especial 2" },
    { id: 3, src: image3, alt: "Momento especial 3" },
    { id: 4, src: image4, alt: "Momento especial 4" },
    { id: 5, src: image5, alt: "Momento especial 5" },
    { id: 6, src: image6, alt: "Momento especial 6" },
    { id: 7, src: image7, alt: "Momento especial 7" },
    { id: 8, src: image8, alt: "Momento especial 8" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === images.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  const handleUpload = async () => {
    if (!file || !name) {
      alert("Please provide a name and select a file.");
      return;
    }

    const { data, error } = await supabase.storage
      .from("guest_gallery")
      .upload(`${name}-${file.name}`, file);

    if (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload the photo.");
    } else {
      alert("Photo uploaded successfully!");
      setIsModalOpen(false);
      setName("");
      setFile(null);
    }
  };

  const toggleGuestGallery = () => {
    setShowGuestGallery((prev) => !prev);
  };

  return (
    <section id="galeria" className="py-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-gold mb-4 old-standard-regular">
            NUESTRA HISTORIA EN IMAGENES
          </h2>
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

        {/* <div className="mt-12 text-center">
          <p className="text-muted-foreground font-sans mb-6">
            ¿Tienes fotos especiales de nosotros que te gustaría compartir?
          </p>
          <Button
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Compartir Fotos
          </Button>
          <Button
            variant="outline"
            className="ml-4 border-gold text-gold hover:bg-gold hover:text-white"
            onClick={toggleGuestGallery}
          >
            Ver Galería de Invitados
          </Button>
        </div> */}
      </div>

      {showGuestGallery && <GuestGallery />}

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
            onClick={() => navigateImage("prev")}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={() => navigateImage("next")}
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

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Subir Foto</h2>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
              <Button variant="outline" onClick={handleUpload}>
                Subir
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
