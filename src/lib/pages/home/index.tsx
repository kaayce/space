import { VStack } from '@chakra-ui/react';

import Experience from '~/lib/components/Experience';
import Hero from '~/lib/components/Hero';
// import Projects from '~/lib/components/Projects';
import TechStack from '~/lib/components/TechStack';

const Home = () => {
  return (
    <VStack gap={8} width="100%">
      <Hero />
      <TechStack />
      <Experience />
      {/* <Projects /> */}
    </VStack>
  );
};

export default Home;
