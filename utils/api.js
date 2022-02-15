import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const docsDirectory = join(process.cwd(), 'docs');

export function getPostSlugs(directory) {
  if (directory !== 'docs') {
    return fs.readdirSync(join(docsDirectory, directory));
  }
  return fs.readdirSync(docsDirectory);
}

export function getPostBySlug(slug, fields = [], directory) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(join(docsDirectory, directory), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = [], directory) {
  const slugs = getPostSlugs(directory);
  const posts = slugs
    .filter((post) => post.split('.').includes('md'))
    .map((slug) => getPostBySlug(slug, fields, directory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date < post2.date ? -1 : 1));
  return posts;
}

export function getTutorialPosts() {}
