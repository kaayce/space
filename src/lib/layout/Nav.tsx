import { Flex } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Nav = () => {
  return (
    <Flex as="nav" width="full" p="1em" h="5em" justifyContent="right">
      <ThemeToggle />
    </Flex>
  );
};

export default Nav;
