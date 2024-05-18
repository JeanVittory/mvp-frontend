import { Playfair_Display } from 'next/font/google';
import { Urbanist } from 'next/font/google';

const playfairInit = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-play-fair',
});

const urbanistInit = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-urbanist',
});

export const playfair_display = playfairInit.className;
export const urbanist = urbanistInit.className;
