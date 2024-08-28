'use client';

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')} mt={16}>
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text ml="auto">
          © {new Date().getFullYear()} Patrick Nzediegwu ❤️
        </Text>
      </Container>
    </Box>
  );
}
