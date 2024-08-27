import { CSSReset } from '@chakra-ui/react';
// import { ColorModeScript, CSSReset } from '@chakra-ui/react';
import type { Metadata, Viewport } from 'next';
// import { Head } from 'next/document';

import { inter } from '~/app/fonts';
import Providers from '~/app/providers';
import Layout from '~/lib/layout';
// import customTheme from '~/lib/styles/theme/index';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Patrick Nzediegwu';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | Patrick Nzediegwu' },
  description: 'My professional space',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={inter.className}>
      {/* <head>
        <ColorModeScript
          initialColorMode={customTheme.config?.initialColorMode}
          type="cookie"
        />
      </head> */}
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
