import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '#0D1724',
    800: '',
    900: '',
  },
  gray: {
    600: '#333',
    // 800: '#05051e',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
  // primary: {
  //   dark: 'red',
  //   light: '#05051e',
  // },
  // secondary: '#009400',
  // text: {
  //   dark: '#000',
  //   light: '#fff',
  // },
};
