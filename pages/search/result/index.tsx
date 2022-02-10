import React from 'react';
import Container from 'components/container';
import Head from 'next/head';
import { Footer } from 'components/layout/Footer';
import { Box, Heading, Text, theme } from '@aksara-ui/react';
import { CardsWrapper } from 'components/tutorials/components';
import { PaginationWithDetails } from 'components/tutorials/pagination';
import IndexLayout from 'components/layouts';
import { useRouter } from 'next/router';
import { FUSE_SEARCH } from 'utils/search';
import { PRODUCTS_DICT } from 'utils/constants';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import { breakpoints } from 'utils/variables';
import { BreadcrumbContent } from 'interfaces/next';

const LIMIT = [5, 10, 15];

const ResultTitle = styled('h3')`
  font-size: 24px;
  line-height: 32px;
  color: ${theme.colors.greydark02}
  margin-top: 0;
  margin-bottom: 0;
`;

const ResultExcerpt = styled(Text)`
  font-style: normal;
  font-weight: normal;
  color: ${theme.colors.greymed04};
  font-size: 16px;
  line-height: 28px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchResult = styled('div')`
  border-bottom: 1px solid ${theme.colors.grey02};

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const SearchResultLink = styled(Link)`
  color: inherit;

  ${SearchResult} {
    border-bottom: 1px solid ${theme.colors.grey02};
  }

  &:last-child {
    ${SearchResult} {
      border-bottom: none;
    }
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    ${ResultTitle} {
      text-decoration: underline;
    }

    ${SearchResult} {
      background-color: ${theme.colors.grey05};
    }
  }
`;

const Wrapper = styled(Box)`
  @media only screen and (min-width: ${`${breakpoints.xl}px`}) {
    margin-left: 160px;
    margin-right: 160px;
  }
`;

const InnerWrapper = styled(Box)`
  background-color: ${theme.colors.greylight01};
  @media only screen and (max-width: ${`${breakpoints.lg - 1}px`}) {
    padding: 16px 16px 24px 16px;
  }
  @media only screen and (min-width: ${`${breakpoints.lg}px`}) {
    padding: 32px 32px 48px 32px;
  }
  @media only screen and (min-width: ${`${breakpoints.xl}px`}) {
    padding: 32px 32px 48px 32px;
    margin-bottom: 48px;
  }
`;

const PaginationWrapper = styled(Box)`
  @media only screen and (min-width: ${`${breakpoints.xl}px`}) {
    margin-top: 48px;
    margin-bottom: 96px;
  }
`;

const Index: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);

  const [results, setResults] = React.useState([]);
  const router = useRouter();
  const { query, product } = router.query;

  console.log(
    router,
    query,
    product,
    FUSE_SEARCH[product],
    typeof query === 'undefined',
    typeof product === 'undefined',
    typeof FUSE_SEARCH[product] === 'undefined'
  );
  React.useEffect(() => {
    if (typeof query !== 'undefined' && typeof product !== 'undefined' && typeof FUSE_SEARCH[product] !== 'undefined') {
      const fuse = FUSE_SEARCH[product];
      setResults(fuse.search(query));
    }
  }, [product, query, router]);

  return (
    <IndexLayout navHidden>
      <Head>
        <title>Search result</title>
      </Head>
      <Container>
        <Box display="flex" my={48} justifyContent="center" alignItems="center">
          <Heading fontSize={36} mb={14}>
            Search result for “{query}” {PRODUCTS_DICT[product] && `in ${PRODUCTS_DICT[product]}`} 🔎
          </Heading>
        </Box>
        <Wrapper>
          <InnerWrapper>
            {results.slice((page - 1) * limit, limit * page).map(({ item: page }) => {
              let breadcrumbItems: BreadcrumbContent[] = [{ url: `/`, urlDisplay: `Home` }];
              if (product === 'global') {
                if (page.isTutorial) {
                  breadcrumbItems = [
                    ...breadcrumbItems,
                    { url: `/tutorials`, urlDisplay: `Tutorial` },
                    { urlDisplay: `${PRODUCTS_DICT[page.product]} Tutorial` },
                  ];
                } else {
                  breadcrumbItems = [
                    ...breadcrumbItems,
                    { url: `/${page.product}`, urlDisplay: `${PRODUCTS_DICT[page.product]}` },
                    { urlDisplay: `${page.section}` },
                  ];
                }
              } else {
                breadcrumbItems = [
                  ...breadcrumbItems,
                  { url: `/${page.product}`, urlDisplay: `${PRODUCTS_DICT[page.product]}` },
                  { urlDisplay: `Documentation Contents` },
                ];
              }

              return (
                <SearchResultLink href={page.meta.absolutePath} key={page.title}>
                  <SearchResult>
                    <ResultTitle>{page.title}</ResultTitle>
                    <Box my={14}>
                      <Breadcrumb items={breadcrumbItems} />
                    </Box>
                    {page.excerpt && <ResultExcerpt>{page.excerpt}</ResultExcerpt>}
                  </SearchResult>
                </SearchResultLink>
              );
            })}
          </InnerWrapper>
          <PaginationWrapper>
            <PaginationWithDetails
              current={page}
              setPage={setPage}
              totalPage={Math.floor(results.length / limit + 1)}
              limit={limit}
              setLimit={setLimit}
              limitList={LIMIT}
              totalItems={results.length}
            />
          </PaginationWrapper>
          <Footer version={'v3.1.1'} siteLastUpdated={'23 December 2021'} />
        </Wrapper>
      </Container>
    </IndexLayout>
  );
};

export default Index;
