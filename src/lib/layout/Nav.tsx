import { Box, Flex } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <Flex as="nav" width="full" p="1em">
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Nav;
