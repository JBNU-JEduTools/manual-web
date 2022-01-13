import React from 'react';
import { TableOfContents } from "next-mdx-toc";
import styled from 'styled-components';
import { theme, UnstyledAnchor } from '@aksara-ui/react';

function TocWrapper({ tree }: { tree: TableOfContents }) {
  return tree?.items.length ? (
    <ul>
      {tree.items.map((item) => {
        return (
          <li key={item.title}>
            <TocAnchor href={item.url}>{item.title}</TocAnchor>
            {item.items?.length ? <TocWrapper tree={item} /> : null}
          </li>
        )
      })}
    </ul>
  ) : null
}

export default TocWrapper;


const TocAnchor = styled(UnstyledAnchor)`
  width: inherit;
  color: ${theme.colors.grey09};
  &:active {
    border-radius: 12px;
    background-color: ${theme.colors.blue01};
    color: ${theme.colors.blue07};
  }
  &:hover {
    border-radius: 12px;
    background-color: ${theme.colors.blue01};
    color: ${theme.colors.blue07};
  }
`
