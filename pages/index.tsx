import Container from '../components/container'
import Portal from '../components/portal/portal'
import Layout from '../components/layout'
import { getAllPosts } from '../utils/api'
import Head from 'next/head'
import { Footer } from 'components/layout/Footer'
import Tutorials from 'components/portal/tutorials'
import { Box } from '@aksara-ui/react'

interface IIndex {
  tutorialPosts: any;
}

const Index:React.FC<IIndex> = ({ tutorialPosts }) => {
  return (
    <Layout>
      <Head>
        <title>Kata Product Documentations</title>
      </Head>
      <Container>
        <Portal />
        <Box px="20vw">
          <Tutorials tutorials={tutorialPosts} />
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
