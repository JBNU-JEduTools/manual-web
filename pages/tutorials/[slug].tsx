import { getPostBySlug, getAllPosts } from '../../utils/api'
import React from 'react';
import Head from 'next/head'
import { Text, theme, Pagination } from '@aksara-ui/react';
import markdownToHtml from 'utils/markdownToHtml';

import { Page } from 'components/layout/Page';
import { DocsWrapper } from 'components/docs/DocsWrapper';
import { DocsHeader } from 'components/docs/DocsHeader';

import { FooterWrapper, Footer } from 'components/layout/Footer';
import { TocWrapper } from 'components/docs/TableOfContents';
import { BackToTopButton } from 'components/docs/BackToTopButton';
import { DocsHelpful } from 'components/docs/DocsHelpful';
import { useRouter } from 'next/router';
import { MarkdownContent } from 'components/page/Markdown';
import renderAst from 'utils/renderAst';
import { DocsContainer } from 'components/layout/Container';
import Layout from 'components/layout';
import Breadcrumb from 'components/breadcrumb/breadcrumb';

interface TutorialPageTemplateProps {
  post: any;
}

const TutorialPageTemplate: React.FC<TutorialPageTemplateProps> = ({ post }) => {
  const [tocIsOpen, setTocIsOpen] = React.useState(false);
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    router.push('/404');
  }

  return (
    <Page docsPage>
      <Head>
        <title>
          {post.title} &middot; Kata Platform Documentation
        </title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Head>
      <Layout>
      {router.isFallback ? (
        <Text>Loading…</Text>
      ) : (
        <DocsWrapper hasToc={!!post.tableOfContents}>
          {post.tableOfContents && (
            <TocWrapper
              isOpen={tocIsOpen}
              onClick={() => setTocIsOpen(!tocIsOpen)}
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
            />
          )}
          <DocsContainer>
            <Breadcrumb items={[
              { url: '/', urlDisplay: 'Home' },
              { url: '/tutorials', urlDisplay: 'All Tutorials' },
              { url: '#', urlDisplay: post.title }
              ]}
                />
            <div id="toc-aksara" />
            <DocsHeader title={post.title} subtitle={post.description} />
            <MarkdownContent>{renderAst(post.content)}</MarkdownContent>
            <DocsHelpful />
            <FooterWrapper>
              <Footer version={"v3.1.1"} siteLastUpdated={"23 December 2021"} />
            </FooterWrapper>
          </DocsContainer>
          <BackToTopButton href="#" />
        </DocsWrapper>
        )}
      </Layout>
    </Page>
  );
};

export default TutorialPageTemplate;

export async function getStaticProps({ params }: any) {
  const post: any = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ], 'tutorials')
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        contentPrimitive: post.content,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts: any = getAllPosts(['slug'], 'tutorials');

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
