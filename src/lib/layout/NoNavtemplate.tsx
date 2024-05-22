import { Box, chakra } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import MotionBox from '~/lib/components/motion/Box';

const Wrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});

const Main = chakra(MotionBox, {
  baseStyle: (props) => ({
    position: 'relative',
    zIndex: props.theme.zIndices.main,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
  }),
});

function NoNavTemplate({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
}

export default NoNavTemplate;
