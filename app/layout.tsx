import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Inter } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://teampulse18.netlify.app/'),
  title: 'TeamPulse - Next.js/Shadcn Dashboard',
  description: 'Sophisticated dashboard built with Next.js 14 and Shadcn UI components for efficient team management and productivity tracking.',
  keywords: 'dashboard, Next.js, Shadcn UI, team management, productivity tracking, analytics, project management, collaboration',
  openGraph: {
    type: 'website',
    url: 'https://teampulse18.netlify.app/',
    title: 'TeamPulse - Advanced Next.js Dashboard Solution',
    description: 'Empower your team with TeamPulse, a cutting-edge dashboard built on Next.js 14 and Shadcn UI. Track productivity, manage projects, and boost collaboration.',
    siteName: 'TeamPulse',
    images: [
      {
        url: 'https://teampulse18.netlify.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'TeamPulse Dashboard Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeamPulse - Advanced Next.js Dashboard Solution',
    description: `Elevate your team's performance with TeamPulse, featuring state- of - the - art analytics and project management tools.`,
    images: ['https://teampulse18.netlify.app/opengraph-image.png']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  alternates: {
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES'
    },
    canonical: 'https://teampulse18.netlify.app/'
  },
  authors: [{ name: 'Manjunath R' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  applicationName: 'TeamPulse',
  category: 'Business, Productivity, Team Management, Analytics, Next.js Dashboard, Next.js Starter Template, Next-TS-Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-hidden `}
        suppressHydrationWarning={true}
      >
        <NextTopLoader showSpinner={false} />
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
