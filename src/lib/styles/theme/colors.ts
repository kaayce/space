import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    700: '#0D1724',
  },
  blue: {
    300: '#99AABF',
    800: '#1B2C43',
    900: '#1A2B41',
  },
  gray: {
    600: '#333',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
  primary: {
    dark: '#05051e',
    light: '#fff',
  },
  secondary: '#79B949',
  text: {
    dark: '#000',
    light: '#DBDBDB',
  },
};
