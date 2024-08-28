import { VStack } from '@chakra-ui/react';

import ClientTechStackCarousel from '~/lib/components/ClientTechStackCarousel';
import Experience from '~/lib/components/Experience';
import Hero from '~/lib/components/Hero';
import Projects from '~/lib/components/Projects';

const Home = () => {
  return (
    <VStack gap={8} width="100%">
      <Hero />
      <ClientTechStackCarousel />
      <Experience />
      <Projects />
    </VStack>
  );
};

export default Home;
