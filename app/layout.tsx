import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aashiq Farid - MERN Stack & Shopify Developer',
  description: 'Full Stack Developer specializing in MERN stack and Shopify app development. Creating exceptional web applications and e-commerce solutions.',
  keywords: ['MERN Stack Developer', 'Shopify Developer', 'Full Stack Developer', 'React Developer', 'Node.js Developer'],
  authors: [{ name: 'Aashiq Farid' }],
  creator: 'Aashiq Farid',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aashiqfarid.dev',
    title: 'Aashiq Farid - MERN Stack & Shopify Developer',
    description: 'Full Stack Developer specializing in MERN stack and Shopify app development.',
    siteName: 'Aashiq Farid Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aashiq Farid - MERN Stack & Shopify Developer',
    description: 'Full Stack Developer specializing in MERN stack and Shopify app development.',
    creator: '@aashiqfarid',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}