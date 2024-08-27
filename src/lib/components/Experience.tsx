'use client';

import {
  Box,
  HStack,
  Badge,
  VStack,
  Text,
  useColorModeValue,
  Icon,
  Flex,
  Center,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

import Link from '~/lib/components/blocks/Link';
import MotionBox from '~/lib/components/motion/Box';

type JobProps = {
  title: string;
  company: string;
  period: string;
  url: string;
  imageUrl?: string;
  description: string;
  skills: string[];
};

const softEngineer = 'Software Engineer';
const jobs: JobProps[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Atimi',
    period: 'Oct 2023 - July 2024',
    url: 'https://www.flagstar.com/personal/borrow/home-loans/myloans.html',
    imageUrl: '/images/flagstar.webp',
    description:
      'Developed proof-of-concepts and set up micro-frontends architecture. Created UI component libraries and integrated third-party APIs. Conducted interviews and developed coding standards and training programs.',
    skills: [
      'TypeScript',
      'React',
      'React Query',
      'Zustand',
      'Java',
      'Spring Boot',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Dapper Labs',
    period: 'Aug 2022 - Jul 2023',
    url: 'https://nbatopshot.com/',
    imageUrl: '/images/nbatopshot.webp',
    description:
      'Developed GraphQL CRUD services for web3 applications. Managed blockchain transactions and optimized CI/CD pipeline. Built high-traffic features and implemented ML-driven onboarding flows.',
    skills: [
      'Go',
      'Node.js',
      'TypeScript',
      'React',
      'Next.js',
      'XState',
      'GraphQL',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'SkipTheDishes',
    period: 'Sep 2021 - Jul 2022',
    url: 'https://www.skipthedishes.com/vancouver/restaurants',
    imageUrl: '/images/skip.webp',
    description:
      'Redesigned restaurant portal and migrated to micro-frontends. Enhanced testing suite and used functional programming with fp-ts. Conducted process experiments and mentored junior engineers.',
    skills: [
      'TypeScript',
      'React',
      'React Router',
      'RTK Query',
      'fp-ts',
      'io-ts',
    ],
  },
  {
    title: softEngineer,
    company: 'Playgon Games',
    period: 'Oct 2019 - Aug 2021',
    url: 'https://fl.vegaslounge.live/?client_id=vegaslounge',
    imageUrl: '/images/playgon.webp',
    description:
      'Developed UI and video streaming functionalities for mobile games. Implemented gameplay features and real-time video streaming. Created reusable UI components to improve development efficiency.',
    skills: [
      'TypeScript',
      'React',
      'Redux',
      'Konva.js',
      'Node.js',
      'Java',
      'Spring Boot',
    ],
  },
  {
    title: softEngineer,
    company: 'Ethnos',
    period: 'Jan 2019 - Jul 2019',
    url: 'https://ethnos.com.ng/',
    imageUrl: '/images/ethnos.webp',
    description:
      'Developed and maintained backend services using Node.js and Express.',
    skills: ['Node.js', 'Express', 'React', 'Next.js', 'TypeScript', 'Prisma'],
  },
  {
    title: softEngineer,
    company: 'Metzger',
    url: 'https://www.atmetzger.com/',
    period: 'Feb 2016 - Dec 2018',
    description: 'Developed web applications using JavaScript and PostgreSQL.',
    skills: ['C#', 'ASP.NET', 'JavaScript', 'PostgreSQL'],
  },
];

const formatDescription = (description: string, txtColor: string) => {
  const sentences = description.split('. ').filter(Boolean);
  return (
    <ul>
      {sentences.map((sentence) => (
        <li key={sentence.slice(0, 3)}>
          <Text mt={2} color={txtColor}>
            {sentence.trim()}.
          </Text>
        </li>
      ))}
    </ul>
  );
};

const FiExternalLinkIcon = () => (
  <MotionBox
    initial={{ transform: 'translateY(1px)' }}
    _hover={{ transform: 'translateY(-6px)' }}
    transition={{ duration: 0.4 }}
    ml="1"
    display="inline-flex"
  >
    <Icon fontSize="sm" as={FiExternalLink} />
  </MotionBox>
);

const Job = ({
  title,
  company,
  period,
  description,
  skills,
  imageUrl,
  url,
}: JobProps) => {
  const secondaryTextColor = useColorModeValue('gray.600', 'blue.300');
  const badgeColorScheme = useColorModeValue('green', 'blue');
  const hoverBg = useColorModeValue('gray.100', 'blue.900');

  return (
    <MotionBox
      p={4}
      borderRadius="md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      _hover={{ bg: hoverBg }}
      transition={{ enter: { duration: 0.1 } }}
      cursor="pointer"
      width="100%"
    >
      <Flex gap={16}>
        {imageUrl && (
          <Center
            display={{ base: 'none', lg: 'block' }}
            w="150px"
            h="150px"
            alignContent="center"
            flexShrink={0}
          >
            <Image
              src={imageUrl}
              alt={`${company} logo`}
              objectFit="cover"
              width={150}
              height={150}
            />
          </Center>
        )}
        <Box>
          <Box>
            <Text as="span" fontSize="xl" fontWeight="bold">
              {title}
            </Text>{' '}
            <Text as="span" color={secondaryTextColor}>
              &#8226;
            </Text>{' '}
            <Text as="span" fontSize="xl" fontWeight="bold">
              <Link
                href={url}
                isExternal
                display="inline-flex"
                alignItems="center"
                gap={2}
              >
                {company}
                <FiExternalLink size="1em" />
              </Link>
            </Text>
          </Box>
          <Text fontSize="sm" color={secondaryTextColor}>
            {period}
          </Text>
          {formatDescription(description, secondaryTextColor)}

          <HStack spacing={2} mt={2}>
            {skills.map((skill) => (
              <Badge
                key={skill}
                colorScheme={badgeColorScheme}
                px={3}
                py={1}
                borderRadius="8px"
              >
                {skill}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Flex>
    </MotionBox>
  );
};

const Experience = () => {
  const linkColor = useColorModeValue('gray.600', 'blue.300');

  return (
    <Flex align="start" p={4} direction="column" width="100%">
      <Box position="absolute" top={0} right={10} zIndex={-1} overflow="hidden">
        <Image
          priority
          src="/semi.svg"
          alt="Background grid"
          width={50}
          height={50}
          style={{ opacity: 0.5 }}
        />
      </Box>
      <Text textAlign="center" fontSize="4xl" fontWeight="bold" mb={4}>
        Experience
      </Text>
      <VStack spacing={2} mb={6} m="auto" maxWidth={900}>
        {jobs.map((job) => (
          <Job
            key={job.company}
            title={job.title}
            company={job.company}
            period={job.period}
            description={job.description}
            skills={job.skills}
            url={job.url}
            imageUrl={job.imageUrl}
          />
        ))}
      </VStack>
      <Link
        href="/resume/me.pdf"
        color={linkColor}
        isExternal
        alignSelf="start"
        fontWeight="bold"
      >
        View Full Resume <FiExternalLinkIcon />
      </Link>
    </Flex>
  );
};

export default Experience;
