import { theme, UnstyledAnchor } from '@aksara-ui/react'
import { breakpoints } from 'utils/variables';
import { Header, HeaderInner, HeaderLogo, HeaderRight } from './layout/Header'
import MainLogo from 'public/assets/images/logo-docs.svg';
import styled from 'styled-components';
import Meta from './meta'
import Link from 'next/link';
import React from 'react';
import SearchBox from './search/SearchBox';
import SearchIcon from './layout/Header/SearchIcon';

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
  const [logo, setLogo] = React.useState(MainLogo);

  return (
    <StyledLayoutRoot>
      <Header fixed>
        <HeaderInner>
          <HeaderLogo>
            <HomepageLink href="/">
            <UnstyledAnchor cursor="pointer"><MainLogo /></UnstyledAnchor>
            </HomepageLink>
          </HeaderLogo>
          <HeaderRight hideOnDesktop>
            <LogoWrapper>
              <HomepageLink href="/">
                <UnstyledAnchor cursor="pointer"><MainLogo /></UnstyledAnchor>
              </HomepageLink>
            </LogoWrapper>
            <SearchBox layout="mobile" />
            <UnstyledSearchButton>
              <SearchIcon />
            </UnstyledSearchButton>
          </HeaderRight>
          <HeaderRight contents="flex-end" hideOnMobile>
            <DesktopHeaderRight>
              <SearchBox layout="desktop" />
            </DesktopHeaderRight>
          </HeaderRight>
        </HeaderInner>
      </Header>
      <Meta />
      {children}
    </StyledLayoutRoot>
  )
}

export default Layout;
