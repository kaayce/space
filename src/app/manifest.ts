import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  short_name: 'Patrick Nzediegwu',
  name: 'Patrick Nzediegwu',
  lang: 'en',
  start_url: '/',
  background_color: '#05051e',
  theme_color: '#FFFFFF',
  dir: 'ltr',
  display: 'standalone',
  prefer_related_applications: false,
  icons: [
    {
      src: '/favicon.ico',
      purpose: 'any',
      type: 'image/x-icon',
      sizes: '48x48 72x72 96x96 128x128 256x256',
    },
  ],
});

export default manifest;
