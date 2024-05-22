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
  styles: {
    global: () => ({
      html: {
        height: '100%',
      },
      body: {
        width: '100%',
        backgroundColor: '#0D1724',
        color: 'white',
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
