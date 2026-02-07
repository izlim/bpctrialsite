import Image from 'next/image';

interface ImagePlaceholderProps {
    className?: string;
    text?: string;
    icon?: React.ReactNode;
    src?: string;
    alt?: string;
}

export default function ImagePlaceholder({ className = '', text, icon, src, alt }: ImagePlaceholderProps) {
    if (src) {
        // Prepend basePath for absolute paths (needed for GitHub Pages deployment)
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
        const fullSrc = src.startsWith('/') ? `${basePath}${src}` : src;

        return (
            <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
                <img
                    src={fullSrc}
                    alt={alt || text || 'Image'}
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }

    return (
        <div className={`bg-gray-200 flex flex-col items-center justify-center text-gray-400 ${className}`}>
            {icon || (
                <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )}
            {text && <span className="text-sm font-medium">{text}</span>}
        </div>
    );
}
