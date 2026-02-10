'use client';

import { useState, useEffect } from 'react';
import NextImage from 'next/image';

interface ImageCarouselProps {
    images: string[];
    interval?: number;
    className?: string;
}

export default function ImageCarousel({ images, interval = 5000, className = '' }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    const getFullSrc = (src: string) => {
        return src.startsWith('/') ? `${basePath}${src}` : src;
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <NextImage
                        src={getFullSrc(src)}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover transform scale-105 animate-subtle-zoom"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Overlay for better text readability if used directly, 
                though in our case it's next to the text */}
            <div className="absolute inset-0 bg-black/5 z-20" />

            {/* Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
