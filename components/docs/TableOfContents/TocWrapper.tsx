import React from 'react';
import { TableOfContents } from 'next-mdx-toc';
import { TocAnchor } from './styled';

function TocWrapper({ tree }: { tree: TableOfContents }) {
  return tree?.items.length ? (
    <ul>
      {tree.items.map((item) => {
        return (
          <li key={item.title}>
            <TocAnchor href={item.url}>{item.title}</TocAnchor>
            {item.items?.length ? <TocWrapper tree={item} /> : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default TocWrapper;
