import React from 'react';

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
  const [searchData, setSearchData] = React.useState();
  const router = useRouter();
  const [imageUrl, setImageUrl] = React.useState('docs');
  const isTutorial = router.route.split('/')[1] === 'tutorials';
  const isKataPlatform = router.route.split('/')[1] === 'kata-platform';
  const isKataOmnichat = router.route.split('/')[1] === 'kata-omnichat';
  const isBusinessDashboard = router.route.split('/')[1] === 'business-dashboard';
  const isQios = router.route.split('/')[1] === 'qios';

  React.useEffect(() => {
    let jsonNavigation, jsonSearchData;
    if (isTutorial && router.query.slug) {
      jsonNavigation = require(`docs/navigation/tutorials/${router.query.slug[0]}.json`);
      jsonSearchData = require('markdown-to-json/outputs/tutorials.json');
      setNavigation(jsonNavigation);
      setSearchData(jsonSearchData);
    } else if (isKataPlatform) {
      jsonNavigation = require(`docs/toc-kata-platform.json`);
      setImageUrl('kata-platform');
      jsonSearchData = require('markdown-to-json/outputs/kata-platform.json');
      setNavigation(jsonNavigation);
      setSearchData(jsonSearchData);
    } else if (isQios) {
      jsonNavigation = require(`docs/toc-qios.json`);
      setImageUrl('qios');
      jsonSearchData = require('markdown-to-json/outputs/qios.json');
      setNavigation(jsonNavigation);
      setSearchData(jsonSearchData);
    } else if (isBusinessDashboard) {
      jsonNavigation = require(`docs/toc-business-dashboard.json`);
      setImageUrl('business-dashboard');
      jsonSearchData = require('markdown-to-json/outputs/business-dashboard.json');
      setNavigation(jsonNavigation);
      setSearchData(jsonSearchData);
    } else if (isKataOmnichat) {
      jsonNavigation = require(`docs/toc-kata-omnichat.json`);
      setImageUrl('kata-omnichat');
      jsonSearchData = require('markdown-to-json/outputs/kata-omnichat.json');
      setNavigation(jsonNavigation);
      setSearchData(jsonSearchData);
    } else {
      jsonSearchData = require('markdown-to-json/outputs/global.json');
      setSearchData(jsonSearchData);
    }
  }, [router]);

  return (
    <NavigationContextProvider>
      <AksaraReset>
        <Layout imageOrigin={imageUrl} searchData={searchData}>
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
