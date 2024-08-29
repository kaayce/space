'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { CSSReset } from '@chakra-ui/react';

import CSPostHogProvider from '~/app/PostHogProvider';
import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <CSSReset />
        <CSPostHogProvider>{children}</CSPostHogProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
