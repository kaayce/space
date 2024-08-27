import { Box, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import type { ReactNode } from 'react';

import MotionBox from '~/lib/components/motion/Box';
import Nav from '~/lib/layout/Nav';

const Wrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    minHeight: '100dvh',
    width: '100%',
    mx: 'auto',
    maxW: '1280px',
    flexWrap: 'wrap',
    flex: 1,
    py: 4,
  },
});

const ContentItem = chakra(MotionBox, {
  baseStyle: {
    maxW: '1280px',
    px: { base: 4, md: 6, lg: 8 },
    flex: '1 1 auto',
  },
});

function NoNavTemplate({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Wrapper>
      <Nav />
      <ContentItem>{children}</ContentItem>
      <Box position="fixed" top={0} right={0} zIndex={-1} overflow="hidden">
        <Image
          src="/bg-grid-lighter.svg"
          alt="Background grid"
          width={500}
          height={500}
          style={{ opacity: 0.7 }}
        />
      </Box>
    </Wrapper>
  );
}

export default NoNavTemplate;
