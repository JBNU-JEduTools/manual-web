import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem as AccordionItemAksara,
  Box,
  theme,
} from '@aksara-ui/react';

import { TocAnchor, TocHeader, TocText } from './styled';
import { Edge, MenuNode } from 'interfaces/nodes';
import styled from 'styled-components';

interface TocJsonWrapperProps {
  tree: Edge<MenuNode> | MenuNode;
  onClick?: Function;
}

function NestedTocJsonWrapper({ item, onClick }: { item: MenuNode; onClick: Function }) {
  return (
    <Accordion type="multiple">
      <AccordionItem
        style={{
          marginLeft: '-8px',
          marginTop: '8px',
          marginBottom: '-16px !important',
        }}
        key={item.title}
        value={item.title}
      >
        <AccordionHeader style={{ fontSize: '14px' }} size="lg">
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
              {itemChildren.items?.length ? (
                <>
                  <NestedTocJsonWrapper item={itemChildren} onClick={onClick} />
                </>
              ) : (
                <TocAnchor onClick={onClick ? () => onClick() : null} href={itemChildren.url}>
                  {itemChildren.title}
                </TocAnchor>
              )}
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
}

function TocJsonWrapper({ tree, onClick }: TocJsonWrapperProps) {
  return tree?.items.length ? (
    <Accordion type="multiple">
      {tree.items.map((item) => {
        // if using accordion
        if (item.useAccordion) {
          return item.items.length ? (
            <AccordionItem
              style={{
                marginLeft: '-8px',
                marginTop: '8px',
                marginBottom: '-16px !important',
              }}
              key={item.title}
              value={item.title}
            >
              <AccordionHeader style={{ fontSize: '14px' }} size="lg">
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
                    {itemChildren.items?.length ? (
                      <>
                        <NestedTocJsonWrapper item={itemChildren} onClick={onClick} />
                      </>
                    ) : (
                      <TocAnchor onClick={onClick ? () => onClick() : null} href={itemChildren.url}>
                        {itemChildren.title}
                      </TocAnchor>
                    )}
                  </AccordionContent>
                );
              })}
            </AccordionItem>
          ) : null;
        }

        // This is section title without url
        else if (!item.url) {
          return (
            <Box mt={12}>
              <AccordionItem value={item.title} key={item.title}>
                <TocHeader>{item.title}</TocHeader>
                {item.items?.length ? <TocJsonWrapper tree={item} /> : null}
              </AccordionItem>
            </Box>
          );
        }

        // Item with url
        return (
          <Box mt={12}>
            <AccordionItem value={item.title} key={item.title}>
              <TocAnchor onClick={onClick ? () => onClick() : null} href={item.url}>
                {item.title}
              </TocAnchor>
              {item.items?.length ? <TocJsonWrapper tree={item} /> : null}
            </AccordionItem>
          </Box>
        );
      })}
    </Accordion>
  ) : null;
}

export default TocJsonWrapper;

const AccordionItem = styled(AccordionItemAksara)`
  div {
    display: flex;
  }
`;
