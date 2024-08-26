import { Box, HStack, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box id="header" as="header" py={{ base: 4, md: 6, lg: 4 }}>
      <Box>
        <Text fontSize="4xl" fontWeight="bold">
          Patrick Nzediegwu
        </Text>
        <HStack>
          <Text fontSize="xl" fontWeight="semibold">
            FullStack Developer ✨
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
