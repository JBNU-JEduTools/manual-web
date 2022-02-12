import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import { remarkMdxImages } from 'remark-mdx-images';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1),
  },
};

const BusinessDashboard = defineDocumentType(() => ({
  name: 'BusinessDashboard',
  filePathPattern: 'business-dashboard/**/*.md',
  bodyType: 'md',
  fields: {
    id: { type: 'string', required: true },
    section: { type: 'string', required: true },
    title: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const KataOmnichat = defineDocumentType(() => ({
  name: 'KataOmnichat',
  filePathPattern: 'kata-omnichat/**/*.md',
  bodyType: 'md',
  fields: {
    id: { type: 'string', required: true },
    section: { type: 'string', required: true },
    title: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const KataPlatform = defineDocumentType(() => ({
  name: 'KataPlatform',
  filePathPattern: 'kata-platform/**/*.md',
  bodyType: 'md',
  fields: {
    id: { type: 'string', required: true },
    section: { type: 'string', required: true },
    title: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const Qios = defineDocumentType(() => ({
  name: 'Qios',
  filePathPattern: 'qios/**/*.md',
  bodyType: 'md',
  fields: {
    id: { type: 'string', required: true },
    section: { type: 'string', required: true },
    title: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const Tutorials = defineDocumentType(() => ({
  name: 'Tutorials',
  filePathPattern: 'tutorials/**/*.md',
  bodyType: 'md',
  fields: {
    layout: { type: 'string' },
    id: { type: 'string', required: true },
    imgSpot: { type: 'string', required: true },
    product: { type: 'string', required: true },
    title: { type: 'string', required: true },
    date: { type: 'string' },
    prev: { type: 'string' },
    next: { type: 'string' },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'docs',
  documentTypes: [BusinessDashboard, KataOmnichat, KataPlatform, Qios, Tutorials],
  markdown: {
    remarkPlugins: [remarkMdxImages],
    rehypePlugins: [
      rehypeSlug,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
