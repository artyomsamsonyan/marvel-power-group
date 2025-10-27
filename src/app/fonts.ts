import localFont from 'next/font/local';
import { Alata } from 'next/font/google';

export const alata = Alata({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alata',
});

export const sofiaProLight = localFont({
  src: '../../public/fonts/SofiaPro-Light.otf',
  weight: '300',
  style: 'normal',
  variable: '--font-sofia-light',
});

export const sofiaProNormal = localFont({
  src: '../../public/fonts/SofiaPro-Normal.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-sofia-normal',
});

export const sofiaProSemiBold = localFont({
  src: '../../public/fonts/SofiaPro-Light.otf',
  weight: '600',
  style: 'normal',
  variable: '--font-sofia-semibold',
});

export const sofiaProBold = localFont({
  src: '../../public/fonts/SofiaPro-Light.otf',
  weight: '700',
  style: 'normal',
  variable: '--font-sofia-bold',
});
