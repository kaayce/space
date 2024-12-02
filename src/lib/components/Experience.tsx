'use client';

import {
  Box,
  HStack,
  Badge,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Center,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

import Link from '~/lib/components/blocks/Link';

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
// const jobs: JobProps[] = [
//   {
//     title: 'Senior Full Stack Developer',
//     company: 'Atimi Software',
//     period: 'Oct 2023 - July 2024',
//     url: 'https://www.flagstar.com/personal/borrow/home-loans/myloans.html',
//     imageUrl: '/images/flagstar.webp',
//     description:
//       'Developed proof-of-concepts, migrated legacy React app to micro-frontends architecture. Fostered best practices to ensure code consistency, maintanability and reduce technical debt. Leveraged MUI to create UI component libraries, hooks, and state stores. Utilized React Hook Form to efficiently manage complex form states, validations, and submissions',
//     skills: ['TypeScript', 'React', 'React Query', 'Zustand'],
//   },
//   {
//     title: 'Senior Software Engineer',
//     company: 'Dapper Labs',
//     period: 'Aug 2022 - Jul 2023',
//     url: 'https://nbatopshot.com/',
//     imageUrl: '/images/nbatopshot.webp',
//     description:
//       'Developed GraphQL CRUD services for web3 gaming and digital collectibles. Managed blockchain transactions using XState, including wallet verification and token management. Built high-traffic features using Next.js, React, and GraphQL. Implemented machine learning-driven onboarding flows, increasing user conversions by 12%',
//     skills: [
//       'Go',
//       'Node.js',
//       'TypeScript',
//       'React',
//       'Next.js',
//       'XState',
//       'GraphQL',
//     ],
//   },
//   {
//     title: 'Senior Frontend Developer',
//     company: 'SkipTheDishes',
//     period: 'Sep 2021 - Jul 2022',
//     url: 'https://www.skipthedishes.com/vancouver/restaurants',
//     imageUrl: '/images/skip.webp',
//     description:
//       'Shipped a redesigned restaurant portal serving over 20 million users. Migrated monolithic codebases to micro-frontends, boosting developer productivity by 40%. Upgraded the testing suite to use React Testing Library and utilized fp-ts for functional programming. Conducted process experiments and mentored engineers',
//     skills: [
//       'TypeScript',
//       'React',
//       'React Router',
//       'RTK Query',
//       'fp-ts',
//       'io-ts',
//     ],
//   },
//   {
//     title: softEngineer,
//     company: 'Playgon Games',
//     period: 'Oct 2019 - Aug 2021',
//     url: 'https://fl.vegaslounge.live/?client_id=vegaslounge',
//     imageUrl: '/images/playgon.webp',
//     description:
//       'Developed UI, animations, and video streaming functionalities for mobile and HTML5 casino games. Implemented gameplay features like baccarat roads, roulette wheel spin, and chip selection.  Developed real-time video streaming using WebRTC, enhancing video quality and bandwidth efficiency. Created a reusable UI breakpoint system, reducing new game creation time by 80 hours',
//     skills: ['TypeScript', 'React', 'Redux', 'Konva.js', 'Node.js'],
//   },
//   {
//     title: softEngineer,
//     company: 'Ethnos',
//     period: 'Jan 2019 - Jul 2019',
//     url: 'https://ethnos.com.ng/',
//     imageUrl: '/images/ethnos.webp',
//     description:
//       'Developed and maintained backend services using Node.js and Express. Contributed to frontend development with React and Next.js',
//     skills: ['Node.js', 'Express', 'React', 'Next.js', 'TypeScript', 'Prisma'],
//   },
//   {
//     title: softEngineer,
//     company: 'Metzger',
//     period: 'Feb 2016 - Dec 2018',
//     url: 'https://www.atmetzger.com/',
//     imageUrl: '/images/metzger.webp',
//     description:
//       'Developed web applications using JavaScript and PostgreSQL. Built and maintained server-side applications and integrated frontend interfaces',
//     skills: ['JavaScript', 'PostgreSQL', 'C#', 'ASP.NET'],
//   },
// ];

const jobs: JobProps[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Atimi Software',
    period: 'Oct 2023 - Present',
    url: 'https://www.flagstar.com/personal/borrow/home-loans/myloans.html',
    imageUrl: '/images/flagstar.webp',
    description:
      'Developed proof-of-concepts, migrated legacy React app to micro-frontends architecture. Fostered best practices to ensure code consistency, maintanability and reduce technical debt. Leveraged MUI to create UI component libraries, hooks, and state stores. Utilized React Hook Form to efficiently manage complex form states, validations, and submissions',
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
      'Developed GraphQL CRUD services for web3 gaming and digital collectibles. Managed blockchain transactions using XState, including wallet verification and token management. Built high-traffic features using Next.js, React, and GraphQL. Implemented machine learning-driven onboarding flows, increasing user conversions by 12%',
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
    period: 'Jan 2019 - Jul 2022',
    url: 'https://www.skipthedishes.com/vancouver/restaurants',
    imageUrl: '/images/skip.webp',
    description:
      'Shipped a redesigned restaurant portal serving over 20 million users. Migrated monolithic codebases to micro-frontends, boosting developer productivity by 40%. Upgraded the testing suite to use React Testing Library and utilized fp-ts for functional programming. Conducted process experiments and mentored engineers',
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
    company: 'Ethnos',
    period: 'Jan 2016 - Dec 2018',
    url: 'https://ethnos.com.ng/',
    imageUrl: '/images/ethnos.webp',
    description:
      'Developed UI, animations, and video streaming functionalities for mobile and HTML5 casino games. Implemented gameplay features like baccarat roads, roulette wheel spin, and chip selection.  Developed real-time video streaming using WebRTC, enhancing video quality and bandwidth efficiency. Created a reusable UI breakpoint system, reducing new game creation time by 80 hours',
    skills: [
      'Node.js',
      'Express',
      'React',
      'Redux',
      'Konva.js',
      'Next.js',
      'TypeScript',
      'Prisma',
    ],
  },
];

const formatDescription = (description: string, txtColor: string) => {
  const sentences = description.split('. ').filter(Boolean);
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
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
    <Box
      p={4}
      borderRadius="md"
      _hover={{ bg: hoverBg }}
      cursor="pointer"
      width="100%"
      style={{ transform: 'translateZ(0)' }}
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
              width={150}
              height={150}
              style={{ opacity: 0.7, width: '100%', height: 'auto' }}
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
    </Box>
  );
};

const Experience = () => {
  // const linkColor = useColorModeValue('gray.600', 'blue.300');

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
      <VStack spacing={2} mb={6} m="auto" maxWidth={1000}>
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
      {/* <Link
        href="/resume/me.pdf"
        color={linkColor}
        isExternal
        alignSelf="start"
        fontWeight="bold"
      >
        View Full Resume <FiExternalLinkIcon />
      </Link> */}
    </Flex>
  );
};

export default Experience;
