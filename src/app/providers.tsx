'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { CSSReset } from '@chakra-ui/react';

import CSPostHogProvider from '~/app/PostHogProvider';
import { Chakra as ChakraProvider } from '~/lib/components/Chakra';

const Providers = ({
  children,
  cookies,
}: {
  children: React.ReactNode;
  cookies?: string;
}) => {
  return (
    <CacheProvider>
      <ChakraProvider cookies={cookies}>
        <CSSReset />
        <CSPostHogProvider>{children}</CSPostHogProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
