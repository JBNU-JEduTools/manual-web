import React from 'react';
import Head from 'next/head';

import { AksaraReset } from 'components/foundations';
import Layout from '../layout';
import { useRouter } from 'next/router';
import { Navigation } from 'components/layout/Navigation';
import { Overlay } from 'components/layout/Overlay';

import { NavigationContextProvider } from 'components/layout/Navigation/NavigationContext';

interface IndexLayoutProps {
  navHidden?: boolean;
}

const IndexLayout: React.FC<IndexLayoutProps> = ({ children, navHidden }) => {
  const [navigation, setNavigation] = React.useState();
  const router = useRouter();
  const isTutorial = router.route.split('/')[1] === 'tutorials';
  const isKataPlatform = router.route.split('/')[1] === 'kata-platform';
  const isKataOmnichat = router.route.split('/')[1] === 'kata-omnichat';
  const isBusinessDashboard = router.route.split('/')[1] === 'business-dashboard';
  const isQios = router.route.split('/')[1] === 'qios';

  React.useEffect(() => {
    let jsonNavigation;
    if (isTutorial && router.query.slug) {
      jsonNavigation = require(`docs/navigation/tutorials/${router.query.slug[0]}.json`);
      setNavigation(jsonNavigation);
    } else if (isKataPlatform) {
      jsonNavigation = require(`docs/toc-kata-platform.json`);
      setNavigation(jsonNavigation);
    } else if (isQios) {
      jsonNavigation = require(`docs/toc-qios.json`);
      setNavigation(jsonNavigation);
    } else if (isBusinessDashboard) {
      jsonNavigation = require(`docs/toc-business-dashboard.json`);
      setNavigation(jsonNavigation);
    }
  }, [router, navigation, setNavigation]);

  return (
    <NavigationContextProvider>
      <AksaraReset>
        <Layout>
          <Overlay />
          <Navigation navigation={navigation} navHidden={navHidden} />
          {children}
        </Layout>
      </AksaraReset>
    </NavigationContextProvider>
  );
};

export default IndexLayout;

export async function getStaticProps() {}
