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
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState, useEffect } from 'react';
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
  { label: 'Go', icon: <FaGolang size="40px" /> },
  { label: 'JavaScript', icon: <DiJavascript1 size="40px" /> },
  { label: 'TypeScript', icon: <SiTypescript size="40px" /> },
  { label: 'Python', icon: <SiPython size="40px" /> },
  { label: 'SQL', icon: <SiPostgresql size="40px" /> },
  { label: 'HTML', icon: <SiTypescript size="40px" /> },
  { label: 'CSS', icon: <SiTypescript size="40px" /> },
];

const frontend: CarouselProps[] = [
  { label: 'React', icon: <FaReact size="40px" /> },
  { label: 'Query', icon: <SiReactquery size="40px" /> },
  { label: 'Redux', icon: <SiRedux size="40px" /> },
  { label: 'Next.js', icon: <RiNextjsLine size="40px" /> },
  { label: 'GraphQL', icon: <SiGraphql size="40px" /> },
  { label: 'Apollo', icon: <SiApollographql size="40px" /> },
  { label: 'XState', icon: <SiXstate size="40px" /> },
  { label: 'PlayWright', icon: <SiPlaywright size="40px" /> },
  { label: 'Jest', icon: <SiJest size="40px" /> },
];

const backend: CarouselProps[] = [
  { label: 'Node.js', icon: <FaNodeJs size="40px" /> },
  { label: 'Express', icon: <SiExpress size="40px" /> },
  { label: 'Gin', icon: <SiGin size="40px" /> },
  { label: 'Django', icon: <SiDjango size="40px" /> },
  { label: 'Fastapi', icon: <SiFastapi size="40px" /> },
  { label: 'Spring Boot', icon: <SiSpringboot size="40px" /> },
  { label: 'Redis', icon: <SiRedis size="40px" /> },
  { label: 'PostgreSQL', icon: <SiPostgresql size="40px" /> },
  { label: 'MongoDB', icon: <SiMongodb size="40px" /> },
  { label: 'MySQL', icon: <SiMysql size="40px" /> },
];

const devOps: CarouselProps[] = [
  { label: 'Actions', icon: <FaGithub size="40px" /> },
  { label: 'Docker', icon: <FaDocker size="40px" /> },
  { label: 'Kubernetes', icon: <SiKubernetes size="40px" /> },
  { label: 'Terraform', icon: <SiTerraform size="40px" /> },
  { label: 'Prometheus', icon: <SiPrometheus size="40px" /> },
  { label: 'AWS', icon: <FaAws size="40px" /> },
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
    { loop: true, dragFree: true, align: 'center' },
    [AutoScroll({ playOnInit: true, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, currentSection]);

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
            <Tab key={section}>{section}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.keys(sections).map((section) => (
            <TabPanel key={section}>
              <Box position="relative" width="100%" overflow="hidden">
                <Flex
                  ref={emblaRef}
                  className="embla__container"
                  maxWidth={['30em', '50em']}
                >
                  {sections[section as SectionName].map((item) => (
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
                        <Text mt={2}>{item.label}</Text>
                      </Box>
                    </Box>
                  ))}
                </Flex>
                <IconButton
                  aria-label="Previous slide"
                  icon={<FaChevronLeft />}
                  position="absolute"
                  top="45%"
                  left="10px"
                  transform="translateY(-50%)"
                  onClick={scrollPrev}
                  variant="solid"
                  borderRadius="full"
                />
                <IconButton
                  aria-label="Next slide"
                  icon={<FaChevronRight />}
                  position="absolute"
                  top="45%"
                  right="10px"
                  transform="translateY(-50%)"
                  onClick={scrollNext}
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
