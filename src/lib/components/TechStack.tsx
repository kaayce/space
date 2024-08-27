'use client';

import {
  Box,
  Flex,
  IconButton,
  Text,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
} from '@chakra-ui/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState } from 'react';
import { DiJavascript1 } from 'react-icons/di';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { RiNextjsLine } from 'react-icons/ri';
import {
  SiReactquery,
  SiTypescript,
  SiPython,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiApollographql,
  SiGraphql,
  SiTerraform,
  SiPrometheus,
  SiAmazonaws,
  SiPlaywright,
  SiJest,
  SiXstate,
  SiMysql,
  SiSpringboot,
  SiFastapi,
  SiExpress,
  SiGin,
  SiDjango,
} from 'react-icons/si';

interface CarouselProps {
  label: string;
  icon: React.ReactNode;
}

const languages: CarouselProps[] = [
  { label: 'Go', icon: <FaGolang size="40px" color="white" /> },
  { label: 'JavaScript', icon: <DiJavascript1 size="40px" color="white" /> },
  { label: 'TypeScript', icon: <SiTypescript size="40px" color="white" /> },
  { label: 'Python', icon: <SiPython size="40px" color="white" /> },
  { label: 'SQL', icon: <SiPostgresql size="40px" color="white" /> },
  { label: 'HTML', icon: <FaNodeJs size="40px" color="white" /> },
  { label: 'CSS', icon: <FaNodeJs size="40px" color="white" /> },
];

const frontend: CarouselProps[] = [
  { label: 'React', icon: <FaReact size="40px" color="white" /> },
  { label: 'React Query', icon: <SiReactquery size="40px" color="white" /> },
  { label: 'Redux', icon: <SiRedux size="40px" color="white" /> },
  { label: 'Next.js', icon: <RiNextjsLine size="40px" color="white" /> },
  { label: 'GraphQL', icon: <SiGraphql size="40px" color="white" /> },
  { label: 'Apollo', icon: <SiApollographql size="40px" color="white" /> },
  { label: 'XState', icon: <SiXstate size="40px" color="white" /> },
  { label: 'PlayWright', icon: <SiPlaywright size="40px" color="white" /> },
  { label: 'Jest', icon: <SiJest size="40px" color="white" /> },
];

const backend: CarouselProps[] = [
  { label: 'Node.js', icon: <FaNodeJs size="40px" color="white" /> },
  { label: 'Express', icon: <SiExpress size="40px" color="white" /> },
  { label: 'Gin', icon: <SiGin size="40px" color="white" /> },
  { label: 'Django', icon: <SiDjango size="40px" color="white" /> },
  { label: 'Fastapi', icon: <SiFastapi size="40px" color="white" /> },
  { label: 'Spring Boot', icon: <SiSpringboot size="40px" color="white" /> },
  { label: 'Redis', icon: <SiRedis size="40px" color="white" /> },
  { label: 'PostgreSQL', icon: <SiPostgresql size="40px" color="white" /> },
  { label: 'MongoDB', icon: <SiMongodb size="40px" color="white" /> },
  { label: 'MySQL', icon: <SiMysql size="40px" color="white" /> },
];

const devOps: CarouselProps[] = [
  { label: 'GitHub Actions', icon: <FaGithub size="40px" color="white" /> },
  { label: 'Docker', icon: <FaDocker size="40px" color="white" /> },
  { label: 'Kubernetes', icon: <SiKubernetes size="40px" color="white" /> },
  { label: 'Terraform', icon: <SiTerraform size="40px" color="white" /> },
  { label: 'Prometheus', icon: <SiPrometheus size="40px" color="white" /> },
  { label: 'AWS', icon: <FaAws size="40px" color="white" /> },
  { label: 'IAM', icon: <SiAmazonaws size="40px" color="white" /> },
];

type SectionName = 'Languages' | 'Frontend' | 'Backend' | 'DevOps';

const sections: Record<SectionName, CarouselProps[]> = {
  Languages: languages,
  Frontend: frontend,
  Backend: backend,
  DevOps: devOps,
};

const Carousel = () => {
  const [currentSection, setCurrentSection] =
    useState<SectionName>('Languages');
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const items = sections[currentSection];

  return (
    <Flex align="start" p={4} direction="column" width="100%">
      <Text
        textAlign="center"
        fontSize="4xl"
        fontWeight="bold"
        color="white"
        mb={4}
      >
        Tech Stack
      </Text>
      <Tabs
        isLazy
        mx="auto"
        onChange={(index) => {
          const sectionNames = Object.keys(sections) as SectionName[];
          setCurrentSection(sectionNames[index]);
        }}
        variant="soft-rounded"
        colorScheme="teal"
      >
        <TabList justifyContent="center" mb={4}>
          {Object.keys(sections).map((section) => (
            <Tab key={section} color="white">
              {section}
            </Tab>
          ))}
        </TabList>
        <TabPanels maxWidth="50em" mx="auto">
          {Object.keys(sections).map((section) => (
            <TabPanel key={section}>
              <Box position="relative" width="100%" overflow="hidden">
                <Flex ref={emblaRef} className="embla__container">
                  {items.map((item) => (
                    <Box
                      key={item.label}
                      flexShrink={0}
                      minWidth="120px"
                      aspectRatio="1"
                      className="embla__slide"
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        border="thin solid #1A1E39"
                        p={4}
                        borderRadius="md"
                        mx="8px"
                      >
                        {item.icon}
                        <Text mt={2} color="white">
                          {item.label}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </Flex>
                <IconButton
                  aria-label="Previous slide"
                  icon={<FaChevronLeft />}
                  position="absolute"
                  top="50%"
                  left="10px"
                  transform="translateY(-50%)"
                  onClick={scrollPrev}
                  colorScheme="teal"
                  variant="solid"
                  borderRadius="full"
                />
                <IconButton
                  aria-label="Next slide"
                  icon={<FaChevronRight />}
                  position="absolute"
                  top="50%"
                  right="10px"
                  transform="translateY(-50%)"
                  onClick={scrollNext}
                  colorScheme="teal"
                  variant="solid"
                  borderRadius="full"
                />
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Carousel;
