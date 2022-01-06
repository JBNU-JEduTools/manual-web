import React from 'react';
import { IconChevronDown } from '@aksara-ui/icons';
import styled from 'styled-components';
import {
  Box,
  Button,
  DropdownMenu,
  DropdownMenuItem,
  Pagination,
  Text,
  UnstyledButton
} from '@aksara-ui/react';

interface PaginationDetailsProps {
  current: number;
  totalPage: number;
  totalItems: number;
  setLimit: Function;
  dataShown: any;
  setPage: (page: number) => void;
  limit: number;
}

const LIMIT = [
  10,
  20,
  30,
]

export const PaginationWithDetails: React.FC<PaginationDetailsProps> = ({
  current,
  totalPage,
  limit,
  totalItems,
  setLimit,
  dataShown,
  setPage
}) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" pb={24}>
      {/* <PaginationDetail page={current} limit={limit} total={totalItems} length={limit} /> */}
      {`Showing ${current * limit - limit + 1}-${dataShown.length < current * limit ? dataShown.length : current * limit} of ${
        dataShown.length
      } data`}
      <Pagination onSelect={setPage} current={current} total={totalPage} />
      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Text scale={300} mr={10}>
          Show rows
        </Text>
        <Button variant="outline" size={"sm"} icon={IconChevronDown} iconPosition="right">
          {limit}
        </Button>
        {/* <DropdownMenu>
          {LIMIT.map(item => {
            return (
              <UnstyledButton onClick={() => setLimit(item)} display="flex" p={0} border={"0px"}>
                <DropdownMenuItem
                  key={item}
                  isActive={item === limit}
                >
                  {item}
                </DropdownMenuItem>
              </UnstyledButton>
            );
          })}
        </DropdownMenu> */}
      </Box>
    </Box>
  )
}
