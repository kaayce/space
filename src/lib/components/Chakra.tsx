import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from '@chakra-ui/react';

import customTheme from '~/lib/styles/theme/index';

type ChakraProps = {
  children: React.ReactNode;
  cookies?: string;
};

export const Chakra = ({ children, cookies }: ChakraProps) => {
  const colorModeManager = cookieStorageManagerSSR(cookies || '');

  return (
    <>
      <ColorModeScript
        initialColorMode={customTheme.config?.initialColorMode}
        type="cookie"
      />
      <ChakraProvider colorModeManager={colorModeManager} theme={customTheme}>
        {children}
      </ChakraProvider>
    </>
  );
};
