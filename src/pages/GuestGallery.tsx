import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const supabase = createClient(
    'https://sexrpfwmzmnsukyoksmg.storage.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNleHJwZndtem1uc3VreW9rc21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2NzY4MTgsImV4cCI6MjA3NDI1MjgxOH0.lfFoLhZ_rh9OLMBuwVp3Yj5jk3IwW0Hv9f4xliNEM48'
);

const GuestGallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage.from('guest_gallery').list('', {
                limit: 1000,
            });

            if (error) {
                console.error('Error fetching images:', error);
                return;
            }

            const imageUrls = await Promise.all(
                data.map(async (file) => {
                    const { data: urlData } = await supabase.storage.from('guest_gallery').getPublicUrl(file.name);
                    return urlData.publicUrl;
                })
            );

            setImages(imageUrls);
        };

        fetchImages();
    }, []);

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        if (selectedImage === null) return;

        if (direction === 'prev') {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        } else {
            setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
        }
    };

    return (
        <div className="min-h-screen  flex flex-col">
            <Navigation />
            <div className="min-h-screen ">
                <h1 className="text-4xl font-bold text-center mt-8">Galería de Invitados</h1>
                <p className="text-center text-gray-600 mt-4">Comparte tus recuerdos con nosotros!</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
                    {images.length > 0 ? (
                        images.map((src, index) => (
                            <div
                                key={index}
                                className="bg-gray-300 h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-card cursor-pointer"
                                onClick={() => setSelectedImage(index)}
                            >
                                <img src={src} alt={`Guest image ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full">No images to display</p>
                    )}
                </div>
            </div>

            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button
                        className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full"
                        onClick={closeLightbox}
                    >
                        <X className="h-6 w-6" />
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-2 rounded-full"
                        onClick={() => navigateImage('prev')}
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>

                    <div className="max-w-4xl max-h-[90vh] flex items-center justify-center">
                        <img
                            src={images[selectedImage]}
                            alt={`Guest image ${selectedImage + 1}`}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 p-2 rounded-full"
                        onClick={() => navigateImage('next')}
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default GuestGallery;