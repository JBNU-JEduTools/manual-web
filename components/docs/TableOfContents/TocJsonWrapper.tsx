import React from 'react';
import { AccordionContent, AccordionHeader, AccordionItem, Box, theme } from '@aksara-ui/react';

import { TocAnchor, TocHeader, TocText } from './styled';
import { Edge, MenuNode } from 'interfaces/nodes';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

function TocJsonWrapper({ tree }: { tree: Edge<MenuNode> | MenuNode }) {
  return tree?.items.length ? (
    <UnorderedList>
      {tree.items.map((item) => {
        // if using accordion
        if (item.useAccordion) {
          return item.items.length ? (
            <AccordionItem
              style={{
                marginLeft: '-8px',
                marginTop: '12px',
              }}
              key={item.title}
              value={item.title}
            >
              <AccordionHeader size="lg">
                <TocText>{item.title}</TocText>
              </AccordionHeader>
              {item.items.map((itemChildren) => {
                return (
                  <AccordionContent
                    style={{
                      display: 'flex',
                      marginLeft: '24px',
                      padding: '8px 16px',
                      borderLeft: `1px solid ${theme.colors.greylight03}`,
                    }}
                    key={itemChildren.title}
                  >
                    <TocAnchor href={itemChildren.url}>{itemChildren.title}</TocAnchor>
                    {itemChildren.items?.length ? <TocJsonWrapper tree={itemChildren} /> : null}
                  </AccordionContent>
                );
              })}
            </AccordionItem>
          ) : null;
        }

        // This is section title without url
        if (!item.url) {
          return (
            <li key={item.title}>
              <TocHeader>{item.title}</TocHeader>
              {item.items?.length ? <TocJsonWrapper tree={item} /> : null}
            </li>
          );
        }

        // Item with url
        return (
          <li key={item.title}>
            <TocAnchor href={item.url}>{item.title}</TocAnchor>
            {item.items?.length ? <TocJsonWrapper tree={item} /> : null}
          </li>
        );
      })}
    </UnorderedList>
  ) : null;
}

export default TocJsonWrapper;

const UnorderedList = styled('ul')`
  list-style-type: none;
  @media only screen and (max-width: ${breakpoints.lg}px) {
    padding-inline-start: 10px !important;
    padding-inline-end: 10px !important;
  }
`;
