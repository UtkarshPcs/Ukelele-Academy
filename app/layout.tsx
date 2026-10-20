import type {Metadata} from 'next';
import {Fraunces, Figtree, DM_Mono} from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  axes: ['SOFT', 'opsz'],
  display: 'swap',
  variable: '--font-display',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Ukulele Academy',
  description:
    'An interactive, step-by-step ukulele learning platform and AI tutor designed to take complete beginners with zero musical experience to confidently playing real songs.',
  openGraph: {
    title: 'Ukulele Academy',
    description:
      'An interactive, step-by-step ukulele learning platform and AI tutor designed to take complete beginners with zero musical experience to confidently playing real songs.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ukulele Academy',
    description:
      'An interactive, step-by-step ukulele learning platform and AI tutor designed to take complete beginners with zero musical experience to confidently playing real songs.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${figtree.variable} ${dmMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#FFF7E8] text-[#12343B] antialiased selection:bg-[#FFC857]/40 selection:text-[#12343B]"
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: '18px',
          lineHeight: 1.65,
        }}
      >
        {children}
      </body>
    </html>
  );
}
