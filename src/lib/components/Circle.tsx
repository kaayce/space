import { Box, Text, Circle as ChakraCircle } from '@chakra-ui/react';

const Circle = () => {
  return (
    <Box
      position="relative"
      left="0%"
      top="3%"
      width="200px"
      height="200px"
      alignSelf="start"
    >
      <ChakraCircle
        size="150px"
        borderWidth={2}
        borderColor="green.400"
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
      />
      <Text
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%) rotate(-15deg)"
        fontSize="2xl"
        fontWeight="bold"
        zIndex="1"
      >
        Hello👋🏿
      </Text>
    </Box>
  );
};

export default Circle;
