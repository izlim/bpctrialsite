'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/components/LocaleProvider';

interface ImageLightboxProps {
    src: string;
    alt: string;
    className?: string;
}

export default function ImageLightbox({ src, alt, className = '' }: ImageLightboxProps) {
    const { t } = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const fullSrc = `${basePath}${src}`;

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={t.events.viewImage}
                className={`block w-full cursor-zoom-in ${className}`}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={fullSrc} alt={alt} className="w-full h-auto rounded-lg" />
            </button>

            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={alt}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
                >
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label={t.events.closeImage}
                        autoFocus
                        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={fullSrc}
                        alt={alt}
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-full max-w-full object-contain rounded-lg"
                    />
                </div>
            )}
        </>
    );
}
