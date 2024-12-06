import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import { websiteSchema, servicesSchema } from './schema';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elite Strategic Consulting',
  description: 'Transform your business with our expert strategic consulting services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Luxury consulting services for businesses looking to elevate their brand and operations." />
        <meta name="keywords" content="luxury consulting, business strategy, brand elevation, premium services" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Luxury Consulting Services" />
        <meta property="og:description" content="Transform your business with our premium consulting services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [websiteSchema, servicesSchema]
            })
          }}
        />
      </head>
      <body className={`${playfair.className} bg-primary text-accent antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col transition-colors duration-300" data-theme="dark">
            <Navbar />
            {children}
            <ThemeToggle />
            <ScrollToTop />
            <div id="portal-root" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
