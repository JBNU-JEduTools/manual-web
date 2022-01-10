import { IconArrowRight } from '@aksara-ui/icons';
import { Box, Heading, theme, Text } from '@aksara-ui/react';
import { MarkdownContent } from 'interfaces/next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Anchor, Card, ProductBadge } from './components';

interface TutorialCardProps {
  tutorial: MarkdownContent;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial }) => {
  return (
    <Card key={tutorial.title}>
      <img src={tutorial.imgSpot} />
      <CardContent p={32}>
        <ProductBadge>
          <img src="/assets/images/products/icon/kata-platform-icon.svg" />
          <Text fontSize={12} fontWeight={600} color={theme.colors.blue06}>Kata Platform</Text>
        </ProductBadge>
        <CardTitle>
          <Heading scale={700} fontSize={20} overflow="hidden">{tutorial.title}</Heading>
        </CardTitle>
        <Link href={`/tutorials/${tutorial.id}`}><Anchor>View Article <IconArrowRight width={14} /></Anchor></Link>
      </CardContent>
    </Card>
  )
}

const CardContent = styled(Box)`
  height: 285px;
`

const CardTitle = styled(Box)`
  overflow: hidden;
  max-height: 125px;
  height: 125px;
  @media only screen and (max-width: 1024px) {
    max-height: 125px;
  }
`
