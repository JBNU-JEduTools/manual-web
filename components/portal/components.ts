import { Card, theme, UnstyledAnchor, Box } from '@aksara-ui/react';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

export const DocsCard = styled(Card)`
  padding: 37px 29px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #ffffff;
  height: fit-content;
  margin-right: 12px;
  margin-top: 12px;
  max-width: auto;
  z-index: 3;
  @media only screen and (width: ${`${breakpoints.lg}px`}) {
    width: 355px;
    max-width: 255px;
  }
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    width: 355px;
    max-width: 100% !important;
  }
  @media only screen and (min-width: ${`${breakpoints.lg + 1}px`}) {
    width: 30%;
  }
  img {
    margin-right: 24px;
  }
  &:hover {
    box-shadow: 0px 8px 16px 0px ${theme.colors.greydark01};
  }
`;

export const HeaderPortal = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.white};
  margin-top: 48px;

  @media only screen and (max-width: ${`${breakpoints.lg}px`}) {
    text-align: center;
    padding: 48px 36px;
  }
`;

export const DocsCardWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  width: 70%;
  flex-direction: row;
  font-weight: 700;
  flex-wrap: wrap;
  align-items: center;
  @media only screen and (width: ${`${breakpoints.lg}px`}) {
    width: 100%;
  }
  @media only screen and (min-width: ${`${breakpoints.lg + 1}px`}) {
    margin-top: 48px;
  }
`;

export const TutorialWrapper = styled(Box)`
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
  @media only screen and (min-width: ${`${breakpoints.xl}px`}) {
    padding-left: 20vw;
    padding-right: 20vw;
  }
`;

export const HeroWrapper = styled('div')`
  position: absolute;
  @media only screen and (max-width: ${breakpoints.lg - 1}px) {
    width: 240px !important;
  }
`;
export const Anchor = styled(UnstyledAnchor)`
  font-weight: 700;
  color: ${theme.colors.grey08};

  @media only screen and (max-width: ${`${breakpoints.lg}px`}) {
    font-size: 14px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg + 1}px`}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.colors.grey08};
  }
`;

export const HeaderSegment = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  @media only screen and (max-width: ${breakpoints.lg - 1}px) {
    margin-bottom: 24px;
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    margin-bottom: 32px;
  }
`;
