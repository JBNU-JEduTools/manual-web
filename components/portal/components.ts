import { Card, theme, UnstyledAnchor } from '@aksara-ui/react'
import styled from 'styled-components'

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
  @media only screen and (min-width: 1920px) {
    width: 352px;
  }
  @media only screen and (max-width: 1440px) {
    width: 288px;
  }
  @media only screen and (max-width: 1024px) {
    width: 352px !important;
  }
  img {
    margin-right: 24px;
  }
`

export const HeroWrapper = styled('div')`
  position: absolute;
  @media only screen and (max-width: 1024px) {
    width: 352px !important;
  }
`
export const Anchor = styled(UnstyledAnchor)`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.grey08};

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.colors.grey08};
  }
`

export const HeaderSegment = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`
