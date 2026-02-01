'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        instgrm: any;
    }
}

export default function InstagramEmbed() {
    useEffect(() => {
        // Check if the script is already loaded
        if (window.instgrm) {
            window.instgrm.Embeds.process();
            return;
        }

        // Load the script
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };
        document.body.appendChild(script);

        // Safety check: attempt to process again after a short delay to ensure DOM is ready
        const timer = setTimeout(() => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return null; // This component doesn't render anything itself
}
