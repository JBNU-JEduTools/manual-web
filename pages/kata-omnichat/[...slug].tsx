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
import { allKataOmnichats, KataOmnichat } from 'contentlayer/generated';
import Image from 'next/image';

interface OmnichatPageTemplateProps {
  post: KataOmnichat;
  toc: any;
  listToc: string[];
}

const OmnichatPageTemplate: React.FC<OmnichatPageTemplateProps> = ({ post, toc }) => {
  const prevPage = getPageUrl(post.prev, 'kata-omnichat');
  const nextPage = getPageUrl(post.next, 'kata-omnichat');

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
        <title>{post.title} &middot; Kata Omnichat Documentation</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
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
                  <Link href="/" passHref>
                    <UnstyledAnchor>
                      <Image
                        layout="fixed"
                        width={150}
                        height={40}
                        alt="Kata Omnichat Documentations"
                        src="/assets/images/products/kata-omnichat-logo-docs.svg"
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
                  { url: '/kata-omnichat', urlDisplay: 'Kata Omnichat' },
                  { urlDisplay: post.section },
                ]}
              />
              {post.id !== 'about' && <DocsHeader title={post.title} />}
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

export default OmnichatPageTemplate;

export async function getStaticPaths() {
  return {
    paths: await allKataOmnichats.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slugStringify = JSON.stringify(params.slug);
  const post = allKataOmnichats.find((post) => JSON.stringify(post.slug) === slugStringify);
  const toc = await import('docs/toc-kata-omnichat.json');

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
