import { Box, Heading, theme, Text } from '@aksara-ui/react';
import Image from 'next/image';
import { PRODUCTS as productList } from 'utils/constants';
import { layerIndexes } from 'utils/variables';
import { Anchor, DocsCard, DocsCardWrapper, HeaderPortal, HeroWrapper } from './components';

export default function Portal() {
  return (
    <Box backgroundColor={theme.colors.blue07} mb={96} display="flex" paddingBottom={48}>
      <HeroWrapper>
        <Image layout="fill" src="/assets/images/portal-hero.svg" alt="Portal Hero" />
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
                    <Image width={32} height={32} src={product.imgPath} alt={product.name} />
                  </Box>
                  {product.name}
                </Box>
              </Anchor>
            </DocsCard>
          ))}
        </DocsCardWrapper>
      </Box>
    </Box>
  );
}
