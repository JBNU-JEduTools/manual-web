import { Text, Box, Heading, theme, UnstyledAnchor } from '@aksara-ui/react'
import { IconArrowRight } from '@aksara-ui/icons';
import { Anchor, Card, Cards, ProductBadge } from 'components/tutorials/components'
import { MarkdownContent } from 'interfaces/next'
import Link from 'next/link';
import React from 'react'
import { HeaderSegment } from './components'

interface TutorialsProps {
  tutorials?: MarkdownContent[];
}

const Tutorials: React.FC<TutorialsProps> = ({ tutorials }) => {
  return (
    <Box>
      <HeaderSegment>
        <Heading scale={700} fontSize={24}>
          Tutorials
        </Heading>
        <UnstyledAnchor
          fontSize={16}
          href="/tutorials"
          cursor="pointer" color={theme.colors.blue07}
          _hover={{ 'textDecoration': 'underline', 'color': theme.colors.blue09, 'fontWeight': 500 }} fontWeight={500}
        >
          See all
        </UnstyledAnchor>
      </HeaderSegment>
      <Cards>
        {tutorials?.slice(0, 6).map((tutorial) => {
          return (
          <Card key={tutorial.title}>
            <img src={tutorial.imgSpot} />
            <Box p={32}>
              <ProductBadge>
                <img src="/assets/images/products/icon/kata-platform-icon.svg" />
                <Text fontSize={12} fontWeight={600} color={theme.colors.blue06}>Kata Platform</Text>
              </ProductBadge>
              <Box maxHeight={84} height={84}>
                <Heading scale={700} fontSize={20}>{tutorial.title}</Heading>
              </Box>
              <Link href={`/tutorials/${tutorial.id}`}><Anchor>View Article <IconArrowRight width={14} /></Anchor></Link>
            </Box>
          </Card>
          )
        })}
      </Cards>
    </Box>
  )
}

export default Tutorials;
