import { Card } from '@aksara-ui/react'
import styled from 'styled-components'

export const DocsCard = styled(Card)`
  padding: 37px 29px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #ffffff;
  width: 352px;
  height: fit-content;
  margin-right: 12px;
  margin-top: 12px;
  z-index: 3;
  img {
    margin-right: 24px;
  }
`

export const HeaderSegment = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`
