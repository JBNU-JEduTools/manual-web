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
      <AccordionItem style={accordionItemStyle} key={item.title} value={item.title}>
        <AccordionHeader style={accordionHeaderStyle} size="lg">
          <TocText>{item.title}</TocText>
        </AccordionHeader>
        {item.items.map((itemChildren) => {
          return (
            <AccordionContent style={accordionContentStyle} key={itemChildren.title}>
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
                  // indicator={false}
                  style={actionListStyle(isActiveItem && isActiveItem(itemChildren.url))}
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
            <AccordionItem style={accordionItemStyle} key={item.title} value={item.title}>
              <AccordionHeader
                onClick={(e) => {
                  if (onClick && item.url) {
                    onClick(e, item.url);
                  }
                }}
                style={accordionHeaderStyle}
                size="lg"
              >
                <TocText>{item.title}</TocText>
              </AccordionHeader>
              {item.items.map((itemChildren) => {
                return (
                  <AccordionContent style={accordionContentStyle} key={itemChildren.title}>
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
                        // indicator={false}
                        style={actionListStyle(isActiveItem && isActiveItem(itemChildren.url))}
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
                // indicator={false}
                style={actionListStyle(isActiveItem && isActiveItem(item.url))}
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

const accordionItemStyle = {
  marginLeft: '-8px',
  marginTop: '8px',
};

const accordionHeaderStyle = {
  fontSize: '14px',
  marginBottom: '8px',
  color: theme.colors.greymed05,
};

const accordionContentStyle = {
  display: 'flex',
  marginLeft: '24px',
  borderLeft: `1px solid ${theme.colors.greylight03}`,
};

const actionListStyle = (isActive: boolean) => {
  return {
    width: '100%',
    display: 'block',
    padding: '8px 0 8px 16px',
    margin: '2px 0',
    borderRadius: '12px',
    color: isActive ? theme.colors.blue07 : theme.colors.greymed05,
    backgroundColor: isActive ? theme.colors.blue01 : theme.colors.white,
  };
};
