/* eslint-disable react/no-unescaped-entities */
import { Box, Text, VStack, Flex, Hide } from '@chakra-ui/react';

import Circle from '~/lib/components/Circle';
import Contact from '~/lib/components/Contact';

const Hero = () => {
  return (
    <Flex align="start" p={4}>
      <Hide below="lg">
        <VStack>
          <Circle />
          <Contact />
        </VStack>
      </Hide>
      <Box width="1px" bg="gray.300" mr={6} alignSelf="stretch" />
      <VStack align="start" spacing={4} fontSize={{ md: 'md', lg: 'lg' }}>
        <Text fontStyle="italic">
          "I'm a versatile software engineer with over 7 years of experience in
          designing and implementing high-traffic, scalable web applications. My
          expertise spans both frontend and backend development, with a focus on
          building resilient and performant applications."
        </Text>
        <Hide below="lg">
          <Text fontStyle="italic">
            "I work with a wide range of technologies including Go, TypeScript,
            React, Node.js, GraphQL, and AWS, among others. Whether it's
            creating micro-frontends architectures, building distributed
            systems, or optimizing CI/CD pipelines, I thrive on solving complex
            problems and driving innovation."
          </Text>
          <Text fontStyle="italic">
            "In addition to my technical skills, I'm passionate about mentoring
            and empowering teams, fostering a collaborative environment where
            everyone can grow and succeed."
          </Text>
        </Hide>
        {/* <Hide below="sm"> */}
        {/* <Contact /> */}
        {/* </Hide> */}
      </VStack>
    </Flex>
  );
};

export default Hero;
