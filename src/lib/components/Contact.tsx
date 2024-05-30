'use client';

import {
  Divider,
  Flex,
  Link,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { CiMail } from 'react-icons/ci';
import { FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const dividerColor = useColorModeValue('gray.900', 'primary.text');
  return (
    <Flex
      direction={['column', 'row']}
      align="center"
      justify="space-between"
      maxW="1200px"
      mx="auto"
      p={4}
      width="full"
    >
      <Flex align="center" w="full" mb={[4, 0]}>
        <Divider borderColor={dividerColor} flex={1} />
        <Link href="https://linkedin.com/patricknzediegwu" isExternal mx={2}>
          <Flex align="center">
            <Icon as={FaLinkedinIn} w={6} h={6} m={1} />
            <Text>LinkedIn</Text>
          </Flex>
        </Link>
        <Divider borderColor={dividerColor} flex={2} />
      </Flex>
      <Flex align="center" w="full">
        <Divider borderColor="gray.400" flex={1} />
        <Flex align="center" mx={2}>
          <Icon as={CiMail} w={6} h={6} m={1} />
          <Text>info@example.com</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
