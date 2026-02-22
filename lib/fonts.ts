import localFont from 'next/font/local';

export const inter = localFont({
    src: '../public/fonts/Inter-VariableFont.woff2',
    variable: '--font-inter',
    display: 'swap',
});

export const gensen = localFont({
    src: [
        {
            path: '../public/fonts/GenSenRounded2TW-M-01.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/GenSenRounded2TC-M-02.ttf',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-gensen',
});
