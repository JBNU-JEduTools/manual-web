import { Box, Heading, theme, Text } from '@aksara-ui/react';
import Image from 'next/image';
import { PRODUCTS as productList } from 'utils/constants';
import { layerIndexes } from 'utils/variables';
import {
  Anchor,
  DocsCard,
  DocsCardWrapper,
  HeaderPortal,
  HeroWrapper,
  PortalDescription,
  PortalTitle,
  PortalWrapper,
} from './components';

export default function Portal() {
  return (
    <PortalWrapper>
      <HeroWrapper>
        <Image width={385} height={335} layout="responsive" src="/assets/images/portal-hero.svg" alt="Portal Hero" />
      </HeroWrapper>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        zIndex={layerIndexes.flat}
      >
        <HeaderPortal>
          <PortalTitle>Kata Product Documentations 👋</PortalTitle>
          <PortalDescription>Find the comprehensive document and tutorials for our products</PortalDescription>
        </HeaderPortal>
        <DocsCardWrapper>
          {productList.map((product, idx) => (
            <DocsCard key={`${idx}-${product.name}`}>
              <Anchor href={product.url} target={product.externalUrl ? '_blank' : ''}>
                <Box display="flex" alignItems="center">
                  <Box display="flex" mr={24}>
                    <Image layout="fixed" width={32} height={32} src={product.imgPath} alt={product.name} />
                  </Box>
                  {product.name}
                </Box>
              </Anchor>
            </DocsCard>
          ))}
        </DocsCardWrapper>
      </Box>
    </PortalWrapper>
  );
}
