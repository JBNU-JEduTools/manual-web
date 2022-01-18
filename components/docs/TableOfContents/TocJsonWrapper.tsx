import React from 'react';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, Box } from '@aksara-ui/react';

import { TocAnchor, TocHeader, TocText } from './styled';

interface Items {
  title: string;
  url?: string;
  items?: Items[];
  useAccordion?: boolean;
}

interface TableOfContents extends Items {}

function TocJsonWrapper({ tree }: { tree: TableOfContents }) {
  return tree?.items.length ? (
    <ul>
      {tree.items.map((item) => {
        // if using accordion
        if (item.useAccordion) {
          return item.items.length ? (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionHeader size="lg">
                <TocText>{item.title}</TocText>
              </AccordionHeader>
              {item.items.map((itemChildern) => {
                return (
                  <AccordionContent key={itemChildern.title}>
                    <TocAnchor href={itemChildern.url}>{itemChildern.title}</TocAnchor>
                    {itemChildern.items?.length ? <TocJsonWrapper tree={itemChildern} /> : null}
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
    </ul>
  ) : null;
}

export default TocJsonWrapper;
