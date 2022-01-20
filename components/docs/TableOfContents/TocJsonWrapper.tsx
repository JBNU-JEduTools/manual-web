import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem as AccordionItemAksara,
  ActionListItem,
  Box,
  theme,
} from '@aksara-ui/react';

import { TocHeader, TocText } from './styled';
import { Edge, MenuNode } from 'interfaces/nodes';
import styled from 'styled-components';

interface TocJsonWrapperProps {
  tree: Edge<MenuNode> | MenuNode;
  onClick: (e: any, url: string) => void;
  isActiveItem: (url: string) => boolean;
}

function NestedTocJsonWrapper({
  item,
  onClick,
  isActiveItem,
}: {
  item: MenuNode;
  onClick: (e: any, url: string) => void;
  isActiveItem: (url: string) => boolean;
}) {
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
                  <NestedTocJsonWrapper item={itemChildren} onClick={onClick} isActiveItem={isActiveItem} />
                </>
              ) : (
                <ActionListItem
                  onClick={(e) => {
                    if (onClick) {
                      onClick(e, itemChildren.url);
                    }
                  }}
                  isActive={isActiveItem && isActiveItem(itemChildren.url)}
                >
                  {itemChildren.title}
                </ActionListItem>
              )}
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
}

function TocJsonWrapper({ tree, onClick, isActiveItem }: TocJsonWrapperProps) {
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
                        <NestedTocJsonWrapper item={itemChildren} onClick={onClick} isActiveItem={isActiveItem} />
                      </>
                    ) : (
                      <ActionListItem
                        onClick={(e) => {
                          if (onClick) {
                            onClick(e, itemChildren.url);
                          }
                        }}
                        isActive={isActiveItem && isActiveItem(itemChildren.url)}
                      >
                        {itemChildren.title}
                      </ActionListItem>
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
            <Box mt={12} key={item.title}>
              <AccordionItem value={item.title}>
                <TocHeader>{item.title}</TocHeader>
                {item.items?.length ? (
                  <TocJsonWrapper tree={item} onClick={onClick} isActiveItem={isActiveItem} />
                ) : null}
              </AccordionItem>
            </Box>
          );
        }

        // Item with url
        return (
          <Box mt={12} key={item.title}>
            <AccordionItem value={item.title} key={item.title}>
              <ActionListItem
                onClick={(e) => {
                  if (onClick) {
                    onClick(e, item.url);
                  }
                }}
                isActive={isActiveItem && isActiveItem(item.url)}
              >
                {item.title}
              </ActionListItem>
              {item.items?.length ? <TocJsonWrapper tree={item} onClick={onClick} isActiveItem={isActiveItem} /> : null}
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
