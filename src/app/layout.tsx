import { CSSReset } from '@chakra-ui/react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

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
        <Script
          id="microsoft-clarity"
          type="text/javascript"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "nu5pcrh6c8");
            `,
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
