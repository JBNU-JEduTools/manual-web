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
  const [imageUrl, setImageUrl] = React.useState('docs');
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
      setImageUrl('kata-platform');
      setNavigation(jsonNavigation);
    } else if (isQios) {
      jsonNavigation = require(`docs/toc-qios.json`);
      setImageUrl('qios');
      setNavigation(jsonNavigation);
    } else if (isBusinessDashboard) {
      jsonNavigation = require(`docs/toc-business-dashboard.json`);
      setImageUrl('business-dashboard');
      setNavigation(jsonNavigation);
    } else if (isKataOmnichat) {
      jsonNavigation = require(`docs/toc-kata-omnichat.json`);
      setImageUrl('kata-omnichat');
      setNavigation(jsonNavigation);
    }
  }, [router, navigation, setNavigation]);

  return (
    <NavigationContextProvider>
      <AksaraReset>
        <div id="#">
          <Layout imageOrigin={imageUrl}>
            <Overlay />
            <Navigation navigation={navigation} navHidden={navHidden} />
            {children}
          </Layout>
        </div>
      </AksaraReset>
    </NavigationContextProvider>
  );
};

export default IndexLayout;

export async function getStaticProps() {}
