import React from 'react'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllPosts } from '../../utils/api'
import Head from 'next/head'
import { Footer } from 'components/layout/Footer'
import { Box, Heading, theme, Text, Pagination } from '@aksara-ui/react'
import { Anchor, Card, Cards, ProductBadge } from 'components/tutorials/components'
import { IconArrowRight } from '@aksara-ui/icons'
import Link from 'next/link'
import { PaginationWithDetails } from 'components/tutorials/pagination'

interface IIndex {
  tutorialPosts: any;
}

const Index: React.FC<IIndex> = ({ tutorialPosts }) => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  return (
    <Layout>
      <Head>
        <title>Kata Product Documentations - Tutorials</title>
      </Head>
      <Container>
        <Box display="flex" py={32} mb={48} flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize={36} mb={14}>
            Tutorials 📚
          </Heading>
          <Text>
            Find the tutorials for our products
          </Text>
        </Box>
        <Box px="20vw">
          <Cards>
          {tutorialPosts?.slice(page - 1 * limit, limit).map((tutorial: any) => {
            return (
              <Card key={tutorial.title}>
                <img src={tutorial.imgSpot} />
                <Box p={32}>
                  <ProductBadge>
                    <img src="/assets/images/products/icon/kata-platform-icon.svg" />
                    <Text fontSize={12} fontWeight={600} color={theme.colors.blue06}>Kata Platform</Text>
                  </ProductBadge>
                  <Box maxHeight={84} height={84}>
                      <Heading fontWeight={700} fontSize={20}>{tutorial.title}</Heading>
                  </Box>
                  <Link href={`/tutorials/${tutorial.id}`}><Anchor>View Article <IconArrowRight width={14} /></Anchor></Link>
                </Box>
              </Card>
              )
            })}
          </Cards>
          <PaginationWithDetails
            current={page}
            setPage={setPage}
            totalPage={1}
            limit={limit}
            setLimit={setLimit}
            dataShown={tutorialPosts?.slice(page - 1 * limit, limit)}
            totalItems={tutorialPosts.length} />
          <Footer version={"v3.1.1"} siteLastUpdated={"23 December 2021"} />
        </Box>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const tutorialPosts = getAllPosts([
    'title',
    'id',
    'imgSpot',
    'date'
  ], 'tutorials')

  return {
    props: { tutorialPosts },
  }
}

export default Index;
