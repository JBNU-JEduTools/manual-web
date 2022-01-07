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
  Text,
} from '@aksara-ui/react';

interface PaginationDetailsProps {
  current: number;
  totalPage: number;
  totalItems: number;
  setLimit: Function;
  dataShown: any;
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
  dataShown,
  setPage
}) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" pb={24}>
      {`Showing ${current * limit - limit + 1}-${dataShown.length < current * limit ? dataShown.length : current * limit} of ${
        totalItems
      } data`}
      <Pagination onSelect={setPage} current={current} total={totalPage} />
      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Text scale={300} mr={10}>
          Show rows
        </Text>
        <DropdownMenu>
          <DropdownMenuTrigerer>
            <Button variant="secondary" size="md" icon={IconChevronDown} iconPosition="right">
              {limit}
            </Button>
          </DropdownMenuTrigerer>
          <DropdownMenuContent align="start" side="top">
            {limitList.map(item => {
              return (
                <DropdownMenuItem
                  key={item}
                  isActive={item === limit}
                  onClick={() => setLimit(item)}
                >
                  {item}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
    </Box>
  )
}
