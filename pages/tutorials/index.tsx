import React from 'react';
import Container from '../../components/container';
import Head from 'next/head';
import { Footer } from 'components/layout/Footer';
import { Box, Heading, Text, theme } from '@aksara-ui/react';
import { Cards, CardsWrapper } from 'components/tutorials/components';
import { PaginationWithDetails } from 'components/tutorials/pagination';
import { TutorialCard } from 'components/tutorials/TutorialCard';
import IndexLayout from 'components/layouts';
import { allTutorials, Tutorials } from 'contentlayer/generated';

interface IIndex {
  tutorialPosts: Tutorials[];
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
          <Heading fontSize={36} mb={14} color={theme.colors.greydark02}>
            Tutorials 📚
          </Heading>
          <Text color={theme.colors.greydark02}>Find the tutorials for our products</Text>
        </Box>
        {tutorialPosts.length > 0 && (
          <CardsWrapper>
            <Cards>
              {tutorialPosts.slice((page - 1) * limit, limit * page).map((tutorial: any, idx: number) => {
                return <TutorialCard key={tutorial.id} index={idx} tutorial={tutorial} />;
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
        )}
      </Container>
    </IndexLayout>
  );
};

export async function getStaticProps() {
  const posts = [...allTutorials];

  return {
    props: {
      tutorialPosts: posts,
    },
  };
}

export default Index;
