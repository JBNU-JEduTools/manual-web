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
import rehypePrism from '@mapbox/rehype-prism';
import rehypeAutolinkHeadings from 'remark-autolink-headings';
import { BackToTopButton } from 'components/docs/BackToTopButton';
import { DocsHelpful } from 'components/docs/DocsHelpful';
import { useRouter } from 'next/router';
import { MarkdownContent } from 'components/page/Markdown';
import renderAst from 'utils/renderAst';
import { DocsContainer } from 'components/layout/Container';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import { GetStaticPropsContext, PreviewData } from 'next';
import IndexLayout from 'components/layouts';
import { PaginationDocs } from 'components/docs/Pagination';
import { getPageUrl } from 'utils/helpers';
import { MarkdownContent as IMarkdownContent } from 'interfaces/next';
import { SidebarLogo } from 'components/docs/DocsSidebar';
import Link from 'next/link';

interface PlatformPageTemplateProps {
  post: IMarkdownContent;
  toc: any;
  listToc: string[];
}

const PlatformPageTemplate: React.FC<PlatformPageTemplateProps> = ({ post, toc }) => {
  const frontMatter = post.frontMatter;
  const prevPage = getPageUrl(post.frontMatter.prev, 'kata-platform');
  const nextPage = getPageUrl(post.frontMatter.next, 'kata-platform');

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

  const isAccordionHeaderActive = React.useCallback(
    (url: string): boolean => {
      const [baseUrl] = router.asPath.split('#');
      return url === baseUrl;
    },
    [router]
  );
  return (
    <Page docsPage>
      <Head>
        <title>{frontMatter.title} &middot; Kata Platform Documentation</title>
        <meta property="og:title" content={frontMatter.title} />
      </Head>
      <IndexLayout navHidden>
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <DocsWrapper>
            {toc && (
              <div className="table-of-contents">
                <SidebarLogo>
                  <Link href="/kata-platform">
                    <UnstyledAnchor>
                      <img src="/assets/images/products/kata-platform-logo-docs.svg" />
                    </UnstyledAnchor>
                  </Link>
                </SidebarLogo>
                <TocJsonWrapper
                  tree={toc}
                  onClick={onTocSidebarClick}
                  isItemSelected={isItemSelected}
                  isAccordionHeaderActive={isAccordionHeaderActive}
                />
              </div>
            )}
            <DocsContainer>
              <Breadcrumb
                items={[
                  { url: '/', urlDisplay: 'Home' },
                  { url: '/kata-platform', urlDisplay: 'Kata Platform' },
                  { urlDisplay: frontMatter.title },
                ]}
              />
              {frontMatter.id !== 'about' && <DocsHeader title={frontMatter.title} />}
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

export default PlatformPageTemplate;

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('kata-platform'),
    fallback: false,
  };
}

export async function getStaticProps(context: string | GetStaticPropsContext<NodeJS.Dict<string[]>, PreviewData>) {
  const post = await getMdxNode('kata-platform', context, {
    mdxOptions: {
      remarkPlugins: [remarkSlug],
      rehypePlugins: [rehypeAutolinkHeadings, rehypePrism],
    },
  });

  const toc = await import('docs/toc-kata-platform.json');

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
