'use client';

import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';

import Header from '~/lib/layout/Header';
import NoNavTemplate from '~/lib/layout/NoNavtemplate';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  const noNavPaths = pathname === '/';

  if (!noNavPaths) return null;

  return (
    <NoNavTemplate>
      <Header />
      {children}
    </NoNavTemplate>
  );
};

export default Layout;
