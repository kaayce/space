import { chakra } from '@chakra-ui/react';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

// https://v2.chakra-ui.com/docs/components/link
// wrap the NextLink with Chakra UI's factory function
const MagicLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
  // add all the required props needed to be forwarded
  shouldForwardProp: (prop) =>
    [
      'href',
      'as',
      'passHref',
      'replace',
      'scroll',
      'shallow',
      'prefetch',
      'locale',
      'target',
      'children',
    ].includes(prop),
});

export default MagicLink;
