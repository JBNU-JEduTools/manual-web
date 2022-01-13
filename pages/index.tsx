import Container from '../components/container'
import Portal from '../components/portal/portal'
import Layout from '../components/layout'
import Head from 'next/head'
import { Footer } from 'components/layout/Footer'
import Tutorials from 'components/portal/tutorials'
import { Box } from '@aksara-ui/react'
import VideoTutorial from 'components/portal/videotutorial'
import { getAllNodes } from 'next-mdx/server'
import { TutorialWrapper } from 'components/portal/components'

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
        <TutorialWrapper>
          <Tutorials tutorials={tutorialPosts} />
          <VideoTutorial />
          <Footer version={"v3.1.1"} siteLastUpdated={"23 December 2021"} />
        </TutorialWrapper>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const post = await getAllNodes("tutorialPost")

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tutorialPosts: post,
    },
  }
}
export default Index;
