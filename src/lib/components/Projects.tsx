'use client';

import {
  Box,
  VStack,
  Text,
  Link,
  useColorModeValue,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

type ProjectProps = {
  title: string;
  description: string;
  url: string;
};

const projects: ProjectProps[] = [
  {
    title: 'E-Commerce Nextjs App',
    description:
      'E-Commerce application using Next.js, React.js, Prisma & Node.js',
    url: 'https://github.com/kaayce/nextjs-ecommerce-app',
  },
  {
    title: 'FastAPI Inventory Microservice',
    description:
      'FastAPI microservice for managing orders with Redis, featuring endpoints for creating, retrieving, and asynchronously processing orders.',
    url: 'https://github.com/kaayce/ecommerce-microservice',
  },
  {
    title: 'ZenBank',
    description:
      'Full featured bank application backend [Golang + Postgres + Kubernetes + gRPC]',
    url: 'https://github.com/kaayce/zen-bank',
  },
  {
    title: 'RSS Aggregator API',
    description:
      'Fully functional RSS aggregator built using Go and Chi Router.',
    url: 'https://github.com/kaayce/rss-aggregator',
  },
];

const ProjectCard = ({ title, description, url }: ProjectProps) => {
  const hoverBg = useColorModeValue('gray.100', 'blue.900');

  return (
    <Flex
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      _hover={{ bg: hoverBg }}
      transition="background-color 0.3s"
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'start', md: 'center' }}
    >
      <VStack align="start" spacing={2} flex="1">
        <Link
          href={url}
          isExternal
          fontWeight="bold"
          fontSize="lg"
          display="flex"
          alignItems="center"
        >
          {title} <FiExternalLink style={{ marginLeft: '8px' }} />
        </Link>

        <Text>{description}</Text>
      </VStack>
    </Flex>
  );
};

const Projects = () => {
  return (
    <Flex
      align="start"
      p={4}
      direction="column"
      width="100%"
      position="relative"
    >
      <Box position="absolute" top={0} right={0} zIndex={-1} overflow="hidden">
        <Image
          priority
          src="/lines.svg"
          alt="Background grid"
          width={50}
          height={50}
          style={{ opacity: 0.7 }}
        />
      </Box>
      <Text textAlign="center" fontSize="4xl" fontWeight="bold" mb={4}>
        Projects
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} px={[4, 8]}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </SimpleGrid>
      {/* <Box textAlign="center" mt={8}>
        <Flex justify="center" align="center">
          <Link href="/projects" fontWeight="bold" fontSize="lg">
            See all
          </Link>
          <FiExternalLink style={{ marginLeft: '8px' }} />
        </Flex>
      </Box> */}
    </Flex>
  );
};

export default Projects;
