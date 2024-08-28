'use client';

import { CacheProvider } from '@chakra-ui/next-js';

import CSPostHogProvider from '~/app/PostHogProvider';
import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <CSPostHogProvider>{children}</CSPostHogProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
