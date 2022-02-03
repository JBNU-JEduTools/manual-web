import { theme, UnstyledAnchor } from '@aksara-ui/react';
import { breakpoints } from 'utils/variables';
import { Header, HeaderInner, HeaderLogo, HeaderRight } from './layout/Header';
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import SearchBox from './search/SearchBox';
import SearchIcon from './layout/Header/SearchIcon';
import Head from 'next/head';
import { NavButton } from './layout/Navigation';
import { useRouter } from 'next/router';
import { NavigationActionTypes, NavigationContext } from './layout/Navigation/NavigationContext';

const StyledLayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  min-height: 100vh;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

const LogoWrapper = styled('div')<{ isPost?: boolean }>`
  display: flex;
  align-items: ${(props) => (props.isPost ? 'center' : 'flex-start')};
  justify-content: ${(props) => (props.isPost ? 'center' : 'flex-start')};
  flex: 1;
  margin: 0 24px;
`;

const HomepageLink = styled(Link)`
  color: ${theme.colors.grey09};

  &:hover,
  &:focus {
    color: ${theme.colors.grey09};
    text-decoration: none;
  }
`;

const UnstyledSearchButton = styled('button')`
  margin: 0;
  padding: 8px;
  background: none;
  border: none;
`;

const DesktopHeaderRight = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const isPost = () => {
  const route = useRouter();
  if (route.query.slug) {
    return true;
  }
  return false;
};

interface ILayout {
  children: React.ReactNode;
  imageOrigin: string;
  searchData: { app: any; data: any[] };
}

const Layout: React.FC<ILayout> = ({ children, imageOrigin, searchData }) => {
  const { dispatch } = React.useContext(NavigationContext);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <StyledLayoutRoot>
      <Head>
        {/* <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}${location ? location.pathname : '/'}`} /> */}
      </Head>
      <Header fixed>
        <HeaderInner>
          {!isPost() && (
            <HeaderLogo>
              <Link href="/">
                <UnstyledAnchor>
                  <img
                    src={
                      imageOrigin === 'docs'
                        ? '/assets/images/logo-docs.svg'
                        : `/assets/images/products/${imageOrigin}-logo-docs.svg`
                    }
                  />
                </UnstyledAnchor>
              </Link>
            </HeaderLogo>
          )}
          <HeaderRight hideOnDesktop>
            {isPost() && (
              <NavButton
                icon="hamburger"
                fill={theme.colors.grey05}
                onClick={() => dispatch({ type: NavigationActionTypes.TOGGLE_DRAWER })}
              >
                Toggle Drawer
              </NavButton>
            )}
            <LogoWrapper isPost={isPost()}>
              <Link href="/">
                <UnstyledAnchor>
                  <img
                    src={
                      imageOrigin === 'docs'
                        ? '/assets/images/logo-docs.svg'
                        : `/assets/images/products/${imageOrigin}-logo-docs.svg`
                    }
                  />
                </UnstyledAnchor>
              </Link>
            </LogoWrapper>
            {isSearchOpen ? (
              <SearchBox layout="mobile" onSearchClear={() => setIsSearchOpen(false)} searchData={searchData} />
            ) : (
              <UnstyledSearchButton onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <SearchIcon />
              </UnstyledSearchButton>
            )}
          </HeaderRight>
          <HeaderRight contents="flex-end" hideOnMobile>
            <DesktopHeaderRight>
              <SearchBox layout="desktop" searchData={searchData} />
            </DesktopHeaderRight>
          </HeaderRight>
        </HeaderInner>
      </Header>
      {children}
    </StyledLayoutRoot>
  );
};

export default Layout;
