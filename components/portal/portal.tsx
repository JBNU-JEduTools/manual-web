import { Box, Heading, theme, Text } from '@aksara-ui/react';
import Image from 'next/image';
import styled from 'styled-components';
import { PRODUCTS as productList } from 'utils/constants';
import { breakpoints, layerIndexes } from 'utils/variables';
import { Anchor, DocsCard, DocsCardWrapper, HeaderPortal, HeroWrapper } from './components';

const PortalWrapper = styled(Box)`
  display: flex;
  padding-bottom: 48px;
  background-color: ${theme.colors.blue07};
  @media only screen and (max-width: ${`${breakpoints.md - 1}px`}) {
    margin-bottom: 48px;
  }
  @media only screen and (min-width: ${`${breakpoints.md}px`}) {
    margin-bottom: 96px;
  }
`;

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
          <Heading fontWeight={700} fontSize={36} color={theme.colors.white}>
            Kata Product Documentations 👋
          </Heading>
          <Text fontWeight={400} fontSize={16} mt={12}>
            Find the comprehensive document and tutorials for our products
          </Text>
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
