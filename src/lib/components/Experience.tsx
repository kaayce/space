'use client';

import {
  Box,
  HStack,
  Badge,
  VStack,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

import Link from '~/lib/components/blocks/Link';
import MotionBox from '~/lib/components/motion/Box';

type JobProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

const jobs: JobProps[] = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Samsung',
    period: '2024 - Present',
    description:
      'Aliquam erat volutpat. Cras at pharetra leo, nec molestie nisi. Proin eget ornare eros',
    skills: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
  {
    title: 'Lead Engineer',
    company: 'Microsoft',
    period: '2018 - 2024',
    description:
      'Aliquam erat volutpat. Cras at pharetra leo, nec molestie nisi. Proin eget ornare eros v',
    skills: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
  {
    title: 'Sr. UI/UX Engineer',
    company: 'Apple',
    period: '2016 - 2017',
    description:
      'Aliquam erat volutpat. Cras at pharetra leo, nec molestie nisi. Proin eget ornare eros vivamus iaculis.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
  {
    title: 'Jr. UI/UX Designer',
    company: 'Google',
    period: '2016 - 2017',
    description:
      'Aliquam erat volutpat. Cras at pharetra leo, nec molestie nisi. Proin eget ornare eros vivamus iaculis.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
];

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
const Job = ({ title, company, period, description, skills }: JobProps) => {
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
      transition={{ enter: { duration: 0.4 } }}
      cursor="pointer"
    >
      <Text fontSize="sm" color={secondaryTextColor}>
        {period}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        {title}{' '}
        <Text as="span" color={secondaryTextColor}>
          &#8226;
        </Text>{' '}
        {company} <FiExternalLinkIcon />
      </Text>

      <Text mt={2} color={secondaryTextColor}>
        {description}
      </Text>

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
    </MotionBox>
  );
};

const Experience = () => {
  const linkColor = useColorModeValue('gray.600', 'blue.300');

  return (
    <Box>
      <VStack spacing={2}>
        {jobs.map((job, index) => (
          <Job
            key={index.toString() + 1}
            title={job.title}
            company={job.company}
            period={job.period}
            description={job.description}
            skills={job.skills}
          />
        ))}
      </VStack>
      {/* TODO: comeback to fix */}
      <Link href="/resume" color={linkColor} isExternal alignSelf="start">
        View Full Resume <FiExternalLinkIcon />
      </Link>
    </Box>
  );
};

export default Experience;
