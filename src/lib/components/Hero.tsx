import { Box, Text, VStack, Circle } from '@chakra-ui/react';

const Hero = () => {
  return (
    <VStack align="start" spacing={4}>
      <Box position="relative" width="full" textAlign="center">
        <Text
          position="absolute"
          left="0"
          top="0"
          transform="rotate(-15deg)"
          fontSize="xl"
          fontWeight="bold"
        >
          Hello👋🏿
        </Text>
        <Circle
          size="100px"
          borderWidth={2}
          borderColor="green.400"
          position="absolute"
          left="5%"
          top="15%"
        />
      </Box>
      <Text fontSize="xl">
        Since 2016, I have been developing software and leading collaborative
        teams to deliver successful product launches for startups and
        enterprises. With expertise in JavaScript, TypeScript, Java, SQL, and
        Python, I have built software for advertising agencies, startups,
        corporations, and digital product studios.
      </Text>
      <Text fontSize="xl">
        When I am not at the computer, I am usually rock climbing, reading,
        hanging out with my wife and two cats, or running around Hyrule
        searching for Korok seeds.
      </Text>
    </VStack>
  );
};

export default Hero;
