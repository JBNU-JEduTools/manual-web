import React from 'react';
import Head from 'next/head';
import { Text, UnstyledAnchor } from '@aksara-ui/react';

import { Page } from 'components/layout/Page';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { DocsHeader } from 'components/docs/DocsHeader';

import { FooterWrapper, Footer } from 'components/layout/Footer';
import { TocJsonWrapper } from 'components/docs/TableOfContents';
import { BackToTopButton } from 'components/docs/BackToTopButton';
import { DocsHelpful } from 'components/docs/DocsHelpful';
import { useRouter } from 'next/router';
import { MarkdownContent } from 'components/page/Markdown';
import renderAst from 'utils/renderAst';
import { DocsContainer } from 'components/layout/Container';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import IndexLayout from 'components/layouts';
import { PaginationDocs } from 'components/docs/Pagination';
import { getPageUrl } from 'utils/helpers';
import { MarkdownContent as IMarkdownContent } from 'interfaces/next';
import { SidebarLogo } from 'components/docs/DocsSidebar';
import Link from 'next/link';
import { allKataPlatforms } from 'contentlayer/generated';
import Image from 'next/image';

interface PlatformPageTemplateProps {
  post: any;
  toc: any;
  listToc: string[];
}

const PlatformPageTemplate: React.FC<PlatformPageTemplateProps> = ({ post, toc }) => {
  const frontMatter = post;
  const prevPage = getPageUrl(post.prev, 'kata-platform');
  const nextPage = getPageUrl(post.next, 'kata-platform');

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
                  <Link href="/" passHref>
                    <UnstyledAnchor>
                      <Image
                        alt="Kata Platform Documentations"
                        src="/assets/images/products/kata-platform-logo-docs.svg"
                      />
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
                  { urlDisplay: frontMatter.section },
                ]}
              />
              {frontMatter.id !== 'about' && <DocsHeader title={frontMatter.title} />}
              <MarkdownContent>{renderAst(post.body.html)}</MarkdownContent>
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
    paths: await allKataPlatforms.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slugStringify = JSON.stringify(params.slug);
  const post = allKataPlatforms.find((post) => JSON.stringify(post.slug) === slugStringify);
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
