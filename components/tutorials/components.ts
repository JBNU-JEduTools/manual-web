import { Box, Card as CardAksara, theme, UnstyledAnchor } from '@aksara-ui/react';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

export const Cards = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 32px;

  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    flex-direction: column;
    iframe {
      width: 100% !important;
      height: 35vh !important;
      margin-top: 24px;
    }
  }

  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    iframe {
      width: 39vw;
      height: 35vh;
    }
  }

  @media only screen and (min-width: ${`${breakpoints.xl}px`}) {
    iframe {
      width: 29vw;
      height: 35vh;
    }
  }
`;

export const ProductBadge = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 12px;
  height: 32px;
  border-radius: 8px;
  width: fit-content;
  align-items: center;
  border: 1px solid ${theme.colors.grey03};
  padding: 12px 8px;
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
export const Anchor = styled(UnstyledAnchor)`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: ${theme.colors.blue06};
  cursor: pointer;
  :hover {
    color: ${theme.colors.blue08};
    text-decoration: underline;
  }
  svg {
    margin-left: 8px;
  }
  path {
    :hover {
      fill: ${theme.colors.blue08};
    }
    fill: ${theme.colors.blue06};
  }
`;

export const CardsWrapper = styled(Box)`
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

export const Card = styled(CardAksara)<{index?: number}>`
  border-radius: 8px;
  border: 1px solid ${theme.colors.grey03};
  background-color: ${theme.colors.white};
  cursor: default;
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    max-width: 100% !important;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    width: 32%;
  }
  margin-top: ${props => props.index > 2 ? '32px' : '0px'};

  &:hover {
    box-shadow: 0px 8px 16px 0px #89949f52;
  }
`;
