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
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import IndexLayout from 'components/layouts';
import { SidebarLogo } from 'components/docs/DocsSidebar';
import Link from 'next/link';

interface TutorialPageTemplateProps {
  post: any;
  toc: any;
  listToc: string[];
}

const TutorialPageTemplate: React.FC<TutorialPageTemplateProps> = ({ post, toc, listToc }) => {
  const frontMatter = post.frontMatter;

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    router.push('/404');
  }

  const onTocSidebarClick = React.useCallback((e: any, url: string) => {
    e.preventDefault();
    router.push(url);
  }, []);

  const isItemSelected = React.useCallback(
    (tag: string): boolean => {
      // because toc based on one file only, the comparison is after # tag only
      return router.asPath.indexOf(tag) !== -1;
    },
    [router]
  );

  return (
    <Page suppressHydrationWarning={true} docsPage>
      <Head>
        <title>{frontMatter.title} &middot; Kata Platform Documentation</title>
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
                  <Link href="/tutorials">
                    <UnstyledAnchor>
                      <img src="/assets/images/logo-docs.svg" />
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
                  { url: '/tutorials', urlDisplay: 'All Tutorials' },
                  { url: '#', urlDisplay: frontMatter.title },
                ]}
              />
              <DocsHeader title={frontMatter.title} />
              <MarkdownContent>{renderAst(post.mdx.renderedOutput)}</MarkdownContent>
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

export default TutorialPageTemplate;

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('tutorialPost'),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const post = await getMdxNode('tutorialPost', context, {
    mdxOptions: {
      remarkPlugins: [remarkSlug, rehypeAutolinkHeadings],
    },
  });

  const toc = await require(`docs/navigation/tutorials/${context.params?.slug[0]}.json`);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      toc,
    },
  };
}
