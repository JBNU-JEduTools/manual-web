import * as React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph } from 'components/foundations';
import { space, textSizes, colors } from 'utils/variables';

const UnorderedList = styled('ul')`
  margin: ${space.sm}px 0;
`;

const HorizontalRule = styled('hr')`
  margin: ${space.xl}px 0;
  border: none;
  border-top: 1px solid ${colors.grey02};
`;

const TableDefault = styled('table')`
  width: 100%;
  margin: ${space.lg}px 0;
  font-size: ${textSizes[400].fontSize}px;
  line-height: ${textSizes[400].lineHeight}px;
  border-collapse: collapse;

  thead {
    border: 1px solid ${colors.grey02};

    th {
      border: 1px solid ${colors.grey02};
      padding: ${space.xs}px ${space.sm}px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: left;
      color: ${colors.grey09};
    }
  }

  tfoot {
    tr {
      border: 1px solid ${colors.grey02};
      td {
        padding: ${space.xs}px ${space.sm}px;
        border: 1px solid ${colors.grey02};
        vertical-align: top;
        font-style: normal;
        font-stretch: normal;
        font-weight: 700;
        letter-spacing: -0.01em;
        text-transform: uppercase;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: ${space.xs}px ${space.sm}px;
        border: 1px solid ${colors.grey02};
        min-width: 15vw;
        vertical-align: top;
        font-size: ${textSizes[400].fontSize}px;
        line-height: ${textSizes[400].lineHeight}px;
        color: ${colors.grey07};
        overflow-wrap: anywhere;
      }
    }
  }
`;

const TableBordered = styled('table')`
  width: 100%;
  margin: ${space.lg}px 0;
  font-size: ${textSizes[300].fontSize}px;
  line-height: ${textSizes[300].lineHeight}px;
  border-collapse: collapse;
  border: 2px solid ${colors.grey11};

  thead {
    border-bottom: 1px solid ${colors.grey02};
    th {
      padding: 14px 16px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      text-align: center;
      color: ${colors.grey12};
    }
  }

  tbody {
    tr {
      td {
        padding: 14px 16px;
        min-width: 15vw;
        vertical-align: top;
        font-size: ${textSizes[400].fontSize}px;
        line-height: ${textSizes[400].lineHeight}px;
        color: ${colors.grey12};
        overflow-wrap: anywhere;
      }
      &:not(:last-child) {
        border-bottom: 1px solid ${colors.grey11};
      }
    }
  }
`;

export const h1 = (props: JSX.IntrinsicAttributes) => (
  <Heading fontSize={36} fontWeight={700} as="h1" color="grey09" {...props} />
);
export const h2 = (props: JSX.IntrinsicAttributes) => (
  <Heading fontSize={30} fontWeight={700} as="h2" mt="xl" color="grey09" {...props} />
);
export const h3 = (props: JSX.IntrinsicAttributes) => (
  <Heading fontSize={24} fontWeight={700} as="h3" mt="xl" color="grey09" {...props} />
);
export const h4 = (props: JSX.IntrinsicAttributes) => <Heading size={400} as="h4" mt="xl" color="grey09" {...props} />;
export const h5 = (props: JSX.IntrinsicAttributes) => (
  <Heading fontSize={14} fontWeight={700} as="h5" mt="xl" color="grey09" {...props} />
);
export const h6 = (props: JSX.IntrinsicAttributes) => <Heading size={400} as="h6" mt="xl" color="grey09" {...props} />;
export const p = (props: JSX.IntrinsicAttributes) => <Paragraph size={400} mt="sm" color="grey07" {...props} />;
export const hr = (props: JSX.IntrinsicAttributes) => <HorizontalRule {...props} />;
export const ul = (props: JSX.IntrinsicAttributes) => <UnorderedList {...props} />;
export const ol = (props: JSX.IntrinsicAttributes) => <UnorderedList as="ol" color="grey07" {...props} />;
export const li = (props: JSX.IntrinsicAttributes) => (
  <Paragraph size={400} as="li" color="grey07" my="xxs" {...props} />
);

interface TableAttributes extends JSX.IntrinsicAttributes {
  className?: string;
}
export const table = (props: TableAttributes) => {
  const { className, ...rest } = props;
  if (className?.includes('bordered')) {
    return <TableBordered {...rest} />;
  }
  return <TableDefault {...rest} />;
};
