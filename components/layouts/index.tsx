import React from 'react';
import Head from 'next/head';

import { AksaraReset } from 'components/foundations';
import Layout from '../layout';
import { Navigation } from 'components/layout/Navigation';
import { Overlay } from 'components/layout/Overlay';

import { NavigationContextProvider } from 'components/layout/Navigation/NavigationContext';

interface IndexLayoutProps {
  navHidden?: boolean;
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ children, navHidden }) => {
  // React.useEffect(() => {
  //   if (window) {
  //     const pathname = window.location.pathname;
  //     if (pathname.includes('kata-omnichat')) {
  //       setSection(omnichatNavigationMenus.edges);
  //     } else if (pathname.includes('business-dashboard')) {
  //       setSection(businessDashboardMenus.edges);
  //     } else if (pathname.includes('qios')) {
  //       setSection(qiosMenus.edges);
  //     } else {
  //       setSection(navigationMenus.edges);
  //     }
  //   }
  // }, [section]);

  return (
    <NavigationContextProvider>
      <AksaraReset>
        <Layout>
          <Overlay />
          <Navigation navHidden={navHidden} />
          {children}
        </Layout>
      </AksaraReset>
    </NavigationContextProvider>
  );
};

export default IndexLayout;
