import { CSSReset } from '@chakra-ui/react';
import type { Metadata, Viewport } from 'next';

import { inter } from '~/app/fonts';
import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Patrick Nzediegwu';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Patrick Nzediegwu' },
  description: 'Patrick Nzediegwu | FullStack Developer',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://patricknzediegwu.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    url: 'https://patricknzediegwu.com',
    title: 'Patrick Nzediegwu',
    description: 'My professional space',
    images: {
      url: '/images/graph.png',
      alt: 'patricknze og-image',
    },
  },
  twitter: {
    creator: '@zenandvibes',
    card: 'summary_large_image',
  },
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>
          <CSSReset />
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
