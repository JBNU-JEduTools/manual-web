import { theme, UnstyledAnchor } from '@aksara-ui/react'
import { breakpoints } from 'utils/variables';
import { Header, HeaderInner, HeaderLogo, HeaderRight } from './layout/Header'
import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import SearchBox from './search/SearchBox';
import SearchIcon from './layout/Header/SearchIcon';
import Head from 'next/head';
import { NavButton } from './layout/Navigation';

const StyledLayoutRoot = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  min-height: 100vh;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

const LogoWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
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

interface ILayout {
  children: React.ReactNode;
}

const Layout:React.FC<ILayout> = ({ children }) => {
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
          <HeaderLogo>
            <Link href="/">
              <UnstyledAnchor>
                <img src="/assets/images/logo-docs.svg" />
              </UnstyledAnchor>
            </Link>
          </HeaderLogo>
          <HeaderRight hideOnDesktop>
            <NavButton
              icon="hamburger"
              fill={theme.colors.grey05}
            >
              Toggle Drawer
            </NavButton>
            <LogoWrapper>
              <Link href="/">
                <UnstyledAnchor>
                  <img src="/assets/images/logo-docs.svg" />
                </UnstyledAnchor>
              </Link>
            </LogoWrapper>
            {isSearchOpen ? (
              <SearchBox layout="mobile" onSearchClear={() => setIsSearchOpen(false)} />
            ) : (
              <UnstyledSearchButton onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <SearchIcon />
              </UnstyledSearchButton>
            )}
          </HeaderRight>
          <HeaderRight contents="flex-end" hideOnMobile>
            <DesktopHeaderRight>
              <SearchBox layout="desktop" />
            </DesktopHeaderRight>
          </HeaderRight>
        </HeaderInner>
      </Header>
      {children}
    </StyledLayoutRoot>
  );
};

export default Layout;
