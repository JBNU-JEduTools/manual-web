import React from 'react';
import { IconChevronDown } from '@aksara-ui/icons';
import {
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigerer,
  Pagination,
  PaginationDetail,
  PaginationFilter,
  Text,
} from '@aksara-ui/react';
import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

interface PaginationDetailsProps {
  current: number;
  totalPage: number;
  totalItems: number;
  setLimit: Function;
  setPage: (page: number) => void;
  limitList: number[];
  limit: number;
}

export const PaginationWithDetails: React.FC<PaginationDetailsProps> = ({
  current,
  totalPage,
  limit,
  limitList,
  totalItems,
  setLimit,
  setPage
}) => {
  return (
    <PaginationWrapper alignItems="center" justifyContent="space-between" pb={24}>
      <PaginationDetail page={current} limit={limit} length={totalItems} />
      <Pagination onSelect={setPage} current={current} total={totalPage} />
      <PaginationFilter selectedItem={limit} items={limitList} onChange={changes => { setLimit(changes) }} />
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: ${`${breakpoints.lg}px`}) {
    line-height: 64px;
    flex-direction: column;
  };
`
