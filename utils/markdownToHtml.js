var string = require("string");

function legacySlugify(s) {
  return string(s).slugify().toString();
}

const anchor = require('markdown-it-anchor');

const md = require('markdown-it')({
  html: true
}).use(require('markdown-it-anchor'), {
  level: 1,
  slugify: legacySlugify,
}).use(require("markdown-it-toc-done-right"), {
  listType: 'ul',
  slugify: legacySlugify
}).use(anchor, {
  permalink: anchor.permalink.ariaHidden({
    placement: 'after',
    symbol: '🔗',
    safariReaderFix: true
  })
});

export default async function markdownToHtml(markdown) {
  const result = await md.render(markdown);
  return result;
}
