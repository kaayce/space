import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  fontWeights: {
    normal: 400,
    bold: 700,
    extrabold: 900,
    black: 1000,
  },
  semanticTokens: {
    colors: {
      'chakra-body-bg': {
        _dark: '#05051e',
        default: '#05051e',
        _light: '#e6f6e6',
        // _dark: '#05051e',
        // default: '#e6f6e6',
      },
      'chakra-body-text': {
        _dark: '#fff',
        _light: '#000',
      },
      // secondary: {
      //   default: '#009400',
      //   _dark: 'red.700',
      // },
    },
  },
  styles: {
    global: () => ({
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        height: '100%',
      },
      body: {
        width: '100%',
      },
      '#__next': {
        height: '100%',
      },
    }),
  },
  textStyles: {
    button: {
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '1.3333333',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
    body: {
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: 'calc(1em + 6px)',
      letterSpacing: 'max(-1px, ((1rem - 1em) * 0.08))',
    },
    heading: {
      fontWeight: '900',
      fontSize: '16px',
      lineHeight: 'calc(1em + 4px)',
      letterSpacing: 'calc((1rem - 1em) * 0.01)',
      textTransform: 'uppercase',
    },
  },
});

export default customTheme;
