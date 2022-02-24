import * as React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { space } from 'utils/variables';
import { theme, Text, Box, PlainButton, InputSearchbox, Overlay } from '@aksara-ui/react';
import InputText from '../InputText';
import { ProductBadge } from 'components/badge';
import { PRODUCTS_DICT } from 'utils/constants';
import { IconOutgoing } from '@aksara-ui/icons';
import Image from 'next/image';

interface SearchPageProps {
  lng?: string;
  layout?: string;
  fuseSearch?: { fuse: any; name: string };
  onSearchClear?: () => void;
  onSearchMore?: (product: string, query: string) => void;
}

interface SearchPageState {
  query: string;
  results: any[];
  isInputFocused: boolean;
}

const ResultTitle = styled('h4')`
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
`;

const ResultExcerpt = styled('p')`
  font-family: 'SF Pro Text' !important;
  font-style: normal;
  font-weight: normal;
  color: ${theme.colors.greymed04};
  font-size: 10px;
  line-height: 16px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchResult = styled('div')`
  padding: 12px 8px;
  border-bottom: 1px solid ${theme.colors.grey02};
`;

const SearchResultLink = styled(Link)`
  color: inherit;
  cursor: pointer;

  ${SearchResult} {
    border-bottom: 1px solid ${theme.colors.grey02};
  }

  &:last-child {
    ${SearchResult} {
      border-bottom: none;
    }
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    ${ResultTitle} {
      text-decoration: underline;
    }

    ${SearchResult} {
      background-color: ${theme.colors.grey05};
    }
  }
`;

const SearchResultsDesktop = css`
  width: 100%;
  height: 400px;
  overflow-y: auto;
  z-index: 50;
`;

const SearchResultsMobile = css`
  position: relative;
  height: 315px;
  margin-top: 0;
  overflow-y: auto;
  z-index: 50;
  padding-left: 24px;
  padding-right: 24px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SearchResults = styled('div')<SearchPageProps>`
  padding: 0;
  background-color: ${theme.colors.white};

  ${(props) => props.layout === 'desktop' && SearchResultsDesktop}
  ${(props) => props.layout === 'mobile' && SearchResultsMobile}
`;

const RootDesktop = css`
  position: relative;

  &:not(:last-child) {
    margin-right: ${space.md}px;
  }
  #input-searchbox-active {
    max-width: none !important;
  }
`;

const RootMobile = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  .header {
    display: flex;
    align-items: center;
    height: 63px;
    padding: 16px;
    background-color: ${theme.colors.white};
    justify-content: center;

    #input-searchbox-active {
      max-width: none !important;
    }
    > div {
      display: block;
      width: 100%;
      margin-right: 0;
    }
  }
`;

const SearchResultButton = styled(PlainButton)`
  padding: 8px 16px;
  width: 100%;
`;

const Root = styled('div')<SearchPageProps>`
  ${(props) => props.layout === 'desktop' && RootDesktop}
  ${(props) => props.layout === 'mobile' && RootMobile}
`;

const SearchResultBoxDesktop = css`
  position: absolute;
  width: 560px;
  top: -30px;
  right: -45px;
  left: auto;
  padding: 16px 24px;
  z-index: 1011;
`;

const SearchResultBox = styled('div')<{ layout: string }>`
  border-radius: 12px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 8px 16px 0px ${theme.colors.greydark01};
  ${(props) => props.layout === 'desktop' && SearchResultBoxDesktop}
`;

export default class SearchBox extends React.Component<SearchPageProps, SearchPageState> {
  static defaultProps = {
    lng: 'en',
    layout: 'default',
  };

  constructor(props: SearchPageProps) {
    super(props);

    this.state = {
      query: '',
      results: [],
      isInputFocused: false,
    };

    this.onEscKeypress = this.onEscKeypress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscKeypress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscKeypress, false);
  }

  onEscKeypress(event: KeyboardEvent) {
    const { onSearchClear } = this.props;

    if (event.keyCode === 27) {
      if (onSearchClear) {
        onSearchClear();
      }
    }
  }

  getSearchResults(query?: string) {
    if (!query) {
      return [];
    }
    const {
      fuseSearch: { fuse },
    } = this.props;
    return fuse.search(query, { limit: 5 });
  }

  search = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const query = event.target.value;
      const results = this.getSearchResults(query);
      this.setState({ results, query });
    }
  };

  render() {
    const { layout, fuseSearch, onSearchMore } = this.props;
    const { query, results, isInputFocused } = this.state;

    return (
      <Root
        layout={layout}
        onFocus={() => {
          this.setState({ isInputFocused: true });
        }}
      >
        {isInputFocused ? (
          <>
            <Overlay backdropBlur={false} onClick={() => this.setState({ isInputFocused: false })} />
            <SearchResultBox layout={layout}>
              <Box className="header" marginBottom={12}>
                <InputSearchbox
                  placeholder={layout === 'default' ? "Type what you're looking for..." : 'Search...'}
                  onChange={this.search}
                  groupId={'input-searchbox-active'}
                  height={40}
                  width={'100%'}
                  autoFocus
                />
              </Box>
              {results && results.length !== 0 && (
                <SearchResults layout={layout}>
                  {PRODUCTS_DICT[fuseSearch.name] && (
                    <Box ml={12} my={8} width={'100%'}>
                      <ProductBadge>
                        <Image alt="icon-product" src={`/assets/images/products/icon/${fuseSearch.name}-icon.svg`} />
                        <Text fontSize={12} fontWeight={600} color={theme.colors.greydark02}>
                          {PRODUCTS_DICT[fuseSearch.name]}
                        </Text>
                      </ProductBadge>
                    </Box>
                  )}
                  {results.map(({ item: page }) => {
                    return (
                      <SearchResultLink href={page.meta.absolutePath} key={page.title}>
                        <SearchResult>
                          <ResultTitle>{page.title}</ResultTitle>
                          {page.excerpt && <ResultExcerpt>{page.excerpt}</ResultExcerpt>}
                        </SearchResult>
                      </SearchResultLink>
                    );
                  })}
                  {results && results.length === 5 && (
                    <SearchResultButton
                      icon={IconOutgoing}
                      iconPosition="left"
                      onClick={() => {
                        onSearchMore(fuseSearch.name, query);
                      }}
                      size="sm"
                      type="button"
                      variant="primary"
                    >
                      See all “{query}” result
                    </SearchResultButton>
                  )}
                </SearchResults>
              )}
            </SearchResultBox>
          </>
        ) : (
          <Box className="header">
            <InputSearchbox
              placeholder={layout === 'default' ? "Type what you're looking for..." : 'Search...'}
              height={40}
              width={'100%'}
            />
          </Box>
        )}
      </Root>
    );
  }
}
