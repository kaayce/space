'use client';

import { Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';

import Scroller from '~/lib/components/blocks/Scroller';
import Header from '~/lib/layout/Header';
import Nav from '~/lib/layout/Nav';
import NoNavTemplate from '~/lib/layout/NoNavtemplate';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [section, setSection] = useState(0);

  const pathname = usePathname();

  const noNavPaths = pathname === '/';

  if (!noNavPaths) return null;

  return (
    <NoNavTemplate>
      <Nav />
      <Box
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ lg: 'space-between' }}
        gap={{ base: 6, lg: 4 }}
      >
        <Header section={section} />
        <Scroller setSection={setSection}>{children}</Scroller>
      </Box>
    </NoNavTemplate>
  );
};

export default Layout;
