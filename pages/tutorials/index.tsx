import React from 'react'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { getAllPosts } from '../../utils/api'
import Head from 'next/head'
import { Footer } from 'components/layout/Footer'
import { Box, Heading, Text } from '@aksara-ui/react'
import { Cards } from 'components/tutorials/components'
import { PaginationWithDetails } from 'components/tutorials/pagination'
import { MarkdownContent } from 'interfaces/next'
import { TutorialCard } from 'components/tutorials/TutorialCard'

interface IIndex {
  tutorialPosts: MarkdownContent[];
}

const LIMIT = [
  6,
  9,
  12,
]

const Index: React.FC<IIndex> = ({ tutorialPosts }) => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(6);

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
          {tutorialPosts?.slice((page - 1) * limit, limit).map((tutorial: MarkdownContent) => {
            return (
              <TutorialCard tutorial={tutorial} />
              )
            })}
          </Cards>
          <PaginationWithDetails
            current={page}
            setPage={setPage}
            totalPage={tutorialPosts.length / limit + 1}
            limit={limit}
            setLimit={setLimit}
            limitList={LIMIT}
            dataShown={tutorialPosts?.slice((page - 1) * limit, limit)}
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
