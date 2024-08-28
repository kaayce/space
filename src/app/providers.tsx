'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import CSPostHogProvider from '~/app/PostHogProvider';
import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CSPostHogProvider>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </CSPostHogProvider>
  );
};

export default Providers;
