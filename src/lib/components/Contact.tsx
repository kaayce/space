'use client';

import {
  Divider,
  Flex,
  Link,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const dividerColor = useColorModeValue('gray.900', 'primary.text');
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      maxW="1200px"
      mx="auto"
      p={4}
      width="100%"
    >
      <Flex align="center" w="full" mb={[4, 0]}>
        <Divider borderColor={dividerColor} flex={1} />
        <Link href="https://linkedin.com/in/patricknzediegwu" isExternal mx={2}>
          <Flex align="center">
            <Icon as={FaLinkedinIn} w={6} h={6} m={1} />
            <Text>LinkedIn</Text>
          </Flex>
        </Link>
        <Link href="https://github.com/kaayce" isExternal mx={2}>
          <Flex align="center">
            <Icon as={FaGithub} w={6} h={6} m={1} />
            <Text>Github</Text>
          </Flex>
        </Link>
        <Divider borderColor={dividerColor} flex={2} />
      </Flex>
      <Flex align="center" w="full">
        <Divider borderColor={dividerColor} flex={1} />
        <Link href="email:pat.nzediegwu@gmail.com" mx={2}>
          <Flex align="center">
            <Icon as={FaEnvelope} w={6} h={6} m={1} />
            <Text>Email</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Contact;
