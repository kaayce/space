import { Box, Flex } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <Flex as="header" width="full" align="center">
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Nav;
