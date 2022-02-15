import * as React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { space } from 'utils/variables';
import { theme, Text, Box, PlainButton } from '@aksara-ui/react';
import InputText from '../InputText';
import { ProductBadge } from 'components/badge';
import { PRODUCTS_DICT } from 'utils/constants';
import { IconOutgoing } from '@aksara-ui/icons';

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

const SearchResults = styled('div') <SearchPageProps>`
  padding: 0;
  background-color: ${theme.colors.white};

  ${(props) => props.layout === 'desktop' && SearchResultsDesktop}
  ${(props) => props.layout === 'mobile' && SearchResultsMobile}
`;

const SearchInputText = styled(InputText) <SearchPageProps>`
  width: 100%;
  input {
    color: ${theme.colors.grey05};
    border-radius: 32px;
    width: 100%;
    border: 1px solid ${theme.colors.greylight05};
  }
  ::-webkit-input-placeholder {
    color: ${theme.colors.grey05};
  }
  ::placeholder {
    color: ${theme.colors.grey05};
    opacity: 1;
  }
`;

const RootDesktop = css`
  position: relative;

  &:not(:last-child) {
    margin-right: ${space.md}px;
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

const Root = styled('div') <SearchPageProps>`
  ${(props) => props.layout === 'desktop' && RootDesktop}
  ${(props) => props.layout === 'mobile' && RootMobile}
`;

const SearchResultBoxDesktop = css`
  position: absolute;
  width: 500px;
  top: -30px;
  right: -30px;
  left: auto;
  padding: 16px;

`

const SearchResultBox = styled('div') <{ layout: string }>`
  border-radius: 12px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 8px 16px 0px ${theme.colors.greydark01};
  ${(props) => props.layout === 'desktop' && SearchResultBoxDesktop}
`

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
    const { onSearchClear } = this.props;

    if (!event.target.value) {
      if (onSearchClear) {
        onSearchClear();
      }
    } else {
      const query = event.target.value;
      const results = this.getSearchResults(query);
      this.setState({ results, query });
    }
  };

  render() {
    const { layout, onSearchClear, fuseSearch, onSearchMore } = this.props;
    const { query, results, isInputFocused } = this.state;
    const ref = React.createRef<HTMLInputElement>();

    return (
      <Root
        layout={layout}
        onFocus={() => this.setState({ isInputFocused: true })}
        onBlur={() => this.setState({ isInputFocused: false })}
      >
        {isInputFocused ?
          <SearchResultBox layout={layout}>
            <div className="header">
              <SearchInputText
                layout={layout}
                placeholder={layout === 'default' ? "Type what you're looking for..." : 'Search...'}
                value={query}
                onChange={this.search}
                ref={ref}
                onSearchClear={() => {
                  // Don't even ask.
                  if (ref.current) {
                    ref.current.value = '';
                  }
                  this.setState({ results: [], query: '' });

                  if (onSearchClear) {
                    onSearchClear();
                  }
                }}
              />
            </div>
            {isInputFocused && results && results.length !== 0 && (
              <SearchResults layout={layout}>
                {PRODUCTS_DICT[fuseSearch.name] && (
                  <Box ml={12} my={8} width={'100%'}>
                    <ProductBadge>
                      <img src={`/assets/images/products/icon/${fuseSearch.name}-icon.svg`} />
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
          </SearchResultBox> :
          <div className="header">
            <SearchInputText
              layout={layout}
              placeholder={layout === 'default' ? "Type what you're looking for..." : 'Search...'}
              value={query}
              onChange={this.search}
              ref={ref}
              onSearchClear={() => {
                // Don't even ask.
                if (ref.current) {
                  ref.current.value = '';
                }
                this.setState({ results: [], query: '' });

                if (onSearchClear) {
                  onSearchClear();
                }
              }}
            />
          </div>}
      </Root>
    );
  }
}
