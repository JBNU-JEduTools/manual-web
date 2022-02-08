import React from 'react';
import Container from '../../components/container';
import Head from 'next/head';
import { Footer } from 'components/layout/Footer';
import { Box, Heading, Text } from '@aksara-ui/react';
import { Cards, CardsWrapper } from 'components/tutorials/components';
import { PaginationWithDetails } from 'components/tutorials/pagination';
import { MarkdownContent } from 'interfaces/next';
import { TutorialCard } from 'components/tutorials/TutorialCard';
import { getAllNodes } from 'next-mdx/server';
import IndexLayout from 'components/layouts';

interface IIndex {
  tutorialPosts: MarkdownContent[];
}

const LIMIT = [6, 9, 12];

const Index: React.FC<IIndex> = ({ tutorialPosts }) => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(6);

  return (
    <IndexLayout navHidden>
      <Head>
        <title>Kata Product Documentations - Tutorials</title>
      </Head>
      <Container>
        <Box display="flex" py={32} mb={48} flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize={36} mb={14}>
            Tutorials 📚
          </Heading>
          <Text>Find the tutorials for our products</Text>
        </Box>
        <CardsWrapper>
          <Cards>
            {tutorialPosts?.slice((page - 1) * limit, limit * page).map((tutorial: MarkdownContent, idx: number) => {
              return <TutorialCard key={tutorial.frontMatter.id} index={idx} tutorial={tutorial} />;
            })}
          </Cards>
          <PaginationWithDetails
            current={page}
            setPage={setPage}
            totalPage={Math.floor(tutorialPosts.length / limit + 1)}
            limit={limit}
            setLimit={setLimit}
            limitList={LIMIT}
            totalItems={tutorialPosts.length}
          />
          <Footer version={'v3.1.1'} siteLastUpdated={'23 December 2021'} />
        </CardsWrapper>
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
