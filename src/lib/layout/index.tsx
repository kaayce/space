'use client';

import { Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import NoNavTemplate from '~/lib/layout/NoNavtemplate';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  const noNavPaths = pathname === '/';

  if (!noNavPaths) return null;

  return (
    // <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
    <NoNavTemplate>
      <Box margin="8">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </NoNavTemplate>
  );
};

export default Layout;
