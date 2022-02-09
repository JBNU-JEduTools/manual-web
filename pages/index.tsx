import Container from '../components/container';
import Portal from '../components/portal/portal';
import Head from 'next/head';
import { Footer } from 'components/layout/Footer';
import Tutorials from 'components/portal/tutorials';
import VideoTutorial from 'components/portal/videotutorial';
import { getAllNodes } from 'next-mdx/server';
import { TutorialWrapper } from 'components/portal/components';
import IndexLayout from 'components/layouts';
/* INFO: This line for InputSearchbox */
import { InputSearchbox } from '@aksara-ui/react';

interface IIndex {
  tutorialPosts: any;
}

const Index: React.FC<IIndex> = ({ tutorialPosts }) => {
  return (
    <IndexLayout navHidden>
      <Head>
        <title>Kata Product Documentations</title>
      </Head>
      <Container>
        {/* INFO: This line for InputSearchbox */}
        <InputSearchbox></InputSearchbox>
        <Portal />
        <TutorialWrapper>
          <Tutorials tutorials={tutorialPosts} />
          <VideoTutorial />
          <Footer version={'v3.1.1'} siteLastUpdated={'23 December 2021'} />
        </TutorialWrapper>
      </Container>
    </IndexLayout>
  );
};

export async function getStaticProps() {
  const post = await getAllNodes('tutorialPost');

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tutorialPosts: post,
    },
  };
}
export default Index;
