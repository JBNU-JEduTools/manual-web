import Container from '../components/container';
import Portal from '../components/portal/portal';
import Head from 'next/head';
import { Footer } from 'components/layout/Footer';
import Tutorials from 'components/portal/tutorials';
import VideoTutorial from 'components/portal/videotutorial';
import { TutorialWrapper } from 'components/portal/components';
import IndexLayout from 'components/layouts';
import { allTutorials, Tutorials as ITutorials } from 'contentlayer/generated';
import { MarkdownContent } from 'interfaces/next';

interface IIndex {
  tutorialPosts: ITutorials[];
}

const Index: React.FC<IIndex> = ({ tutorialPosts }) => {
  return (
    <IndexLayout navHidden>
      <Head>
        <title>Kata Product Documentations</title>
      </Head>
      <Container>
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
  const posts = allTutorials.slice(0, 6);
  return {
    props: {
      tutorialPosts: posts,
    },
  };
}
export default Index;
