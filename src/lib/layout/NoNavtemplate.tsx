import { Box, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import type { ReactNode } from 'react';

import MotionBox from '~/lib/components/motion/Box';
// import Nav from '~/lib/layout/Nav';

const Wrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    minHeight: '100dvh',
    width: '100%',
    m: 'auto',
    maxW: '1280px',
    flexWrap: 'wrap',
    flex: 1,
    py: 4,
  },
});

const ContentItem = chakra(MotionBox, {
  baseStyle: {
    maxW: '1280px',
    px: { base: 4, md: 4, lg: 8 },
    py: 8,
    flex: '1 1 auto',
  },
});

function NoNavTemplate({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Wrapper>
      {/* <Nav /> */}
      <ContentItem>{children}</ContentItem>
      <Box position="fixed" top={0} right={0} zIndex={-1} overflow="hidden">
        <Image
          priority
          src="/bg-grid-lighter.svg"
          alt="Background grid"
          width={1000}
          height={1000}
          style={{ opacity: 0.7 }}
        />
      </Box>
      <Box position="absolute" top={0} left="35%" zIndex={-1} overflow="hidden">
        <Image
          priority
          src="/slant-lines.svg"
          alt="Background grid"
          width={150}
          height={150}
          style={{ opacity: 0.7 }}
        />
      </Box>
    </Wrapper>
  );
}

export default NoNavTemplate;
