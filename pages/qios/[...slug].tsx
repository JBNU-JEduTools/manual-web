import React from 'react';
import Head from 'next/head';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import { Text, UnstyledAnchor } from '@aksara-ui/react';

import { Page } from 'components/layout/Page';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { DocsHeader } from 'components/docs/DocsHeader';

import { FooterWrapper, Footer } from 'components/layout/Footer';
import { TocJsonWrapper } from 'components/docs/TableOfContents';
import remarkSlug from 'remark-slug';
import rehypeAutolinkHeadings from 'remark-autolink-headings';
import { BackToTopButton } from 'components/docs/BackToTopButton';
import { DocsHelpful } from 'components/docs/DocsHelpful';
import { useRouter } from 'next/router';
import { MarkdownContent } from 'components/page/Markdown';
import renderAst from 'utils/renderAst';
import { DocsContainer } from 'components/layout/Container';
import IndexLayout from 'components/layouts';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import { GetStaticPropsContext, PreviewData } from 'next';
import { getPageUrl } from 'utils/helpers';
import { PaginationDocs } from 'components/docs/Pagination';
import { SidebarLogo } from 'components/docs/DocsSidebar';
import Link from 'next/link';

interface QiosPageTemplateProps {
  post: any;
  toc: any;
  listToc: string[];
}

const QiosPageTemplate: React.FC<QiosPageTemplateProps> = ({ post, toc }) => {
  const frontMatter = post.frontMatter;
  const prevPage = getPageUrl(post.frontMatter.prev, 'qios');
  const nextPage = getPageUrl(post.frontMatter.next, 'qios');

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    router.push('/404');
  }

  const onTocSidebarClick = React.useCallback((e: any, url: string) => {
    e.preventDefault();
    router.push(url);
  }, []);

  const isItemSelected = React.useCallback(
    (url: string): boolean => {
      return url === router.asPath;
    },
    [router]
  );
  return (
    <Page docsPage>
      <Head>
        <title>{frontMatter.title} &middot; Qios Documentation</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={post.excerpt} />
      </Head>
      <IndexLayout navHidden>
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <DocsWrapper>
            {toc && (
              <div className="table-of-contents">
                <SidebarLogo>
                  <Link href="/qios">
                    <UnstyledAnchor>
                      <img src="/assets/images/products/qios-logo-docs.svg" />
                    </UnstyledAnchor>
                  </Link>
                </SidebarLogo>
                <TocJsonWrapper tree={toc} onClick={onTocSidebarClick} isItemSelected={isItemSelected} />
              </div>
            )}
            <DocsContainer>
              <Breadcrumb
                items={[
                  { url: '/', urlDisplay: 'Home' },
                  { url: '/qios', urlDisplay: 'Qios' },
                  { url: '#', urlDisplay: frontMatter.title },
                ]}
              />
              <DocsHeader title={frontMatter.title} />
              <MarkdownContent>{renderAst(post.mdx.renderedOutput)}</MarkdownContent>
              {(prevPage || nextPage) && <PaginationDocs prevPage={prevPage} nextPage={nextPage} />}
              <DocsHelpful />
              <FooterWrapper>
                <Footer version={'v3.1.1'} siteLastUpdated={'23 December 2021'} />
              </FooterWrapper>
            </DocsContainer>
            <BackToTopButton href="#" />
          </DocsWrapper>
        )}
      </IndexLayout>
    </Page>
  );
};

export default QiosPageTemplate;

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('qios'),
    fallback: false,
  };
}

export async function getStaticProps(context: string | GetStaticPropsContext<NodeJS.Dict<string[]>, PreviewData>) {
  const post = await getMdxNode('qios', context, {
    mdxOptions: {
      remarkPlugins: [remarkSlug, rehypeAutolinkHeadings],
    },
  });

  const toc = await import('docs/toc-qios.json');

  if (!toc) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      toc: toc.default,
    },
  };
}
