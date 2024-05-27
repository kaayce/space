import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

type CombinedLinkProps = NextLinkProps & ChakraLinkProps;

const CustomLink: React.FC<CombinedLinkProps> = (props) => {
  return <ChakraLink as={NextLink} {...props} />;
};

export default CustomLink;
