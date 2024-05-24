import { Box, chakra, Container } from '@chakra-ui/react';
import Image from 'next/image';
import type { ReactNode } from 'react';

import MotionBox from '~/lib/components/motion/Box';

const Wrapper = chakra(Container, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxW: '1280',
    position: 'relative',
  },
});

const Main = chakra(MotionBox, {
  baseStyle: (props) => ({
    position: 'relative',
    zIndex: props.theme.zIndices.main,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    margin: '16px',
  }),
});

function NoNavTemplate({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Box position="absolute" top={0} right={2} zIndex={-5}>
        <Image
          src="/bg-grid-lighter.svg"
          alt="Error background image not found"
          width={500}
          height={500}
        />
      </Box>
    </Wrapper>
  );
}

export default NoNavTemplate;
