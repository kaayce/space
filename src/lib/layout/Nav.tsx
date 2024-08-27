import { Box, Flex } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <Flex as="nav" width="full" p="1em" h="5em" textAlign="right">
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Nav;
