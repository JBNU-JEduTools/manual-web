import * as React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { space } from 'utils/variables';
import { theme } from '@aksara-ui/react';
import InputText from '../InputText';
import Fuse from 'fuse.js';

interface SearchPageProps {
  lng?: string;
  layout?: string;
  searchData?: { app: any; data: any[] };
  onSearchClear?: () => void;
}

interface SearchPageState {
  query: string;
  results: any[];
}

const ResultTitle = styled('h4')`
  margin-top: 0;
`;

const ResultExcerpt = styled('p')`
  font-size: 14px;
  line-height: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchResult = styled('div')`
  padding: 16px;
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
  position: absolute;
  right: -69px;
  width: 430px;
  height: 315px;
  overflow-y: auto;
  z-index: 50;
  margin-top: 11px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SearchResultsMobile = css`
  position: absolute;
  right: 16px;
  width: calc(100vw - 32px);
  height: 315px;
  margin-top: 0;
  overflow-y: auto;
  z-index: 50;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SearchResults = styled('div')<SearchPageProps>`
  padding: 0;
  border: 1px solid ${theme.colors.greylight05};
  background-color: ${theme.colors.white};

  ${(props) => props.layout === 'desktop' && SearchResultsDesktop}
  ${(props) => props.layout === 'mobile' && SearchResultsMobile}
`;

const SearchInputText = styled(InputText)`
  input {
    color: ${theme.colors.grey05};
    border-radius: 32px;
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

const Root = styled('div')<SearchPageProps>`
  ${(props) => props.layout === 'desktop' && RootDesktop}
  ${(props) => props.layout === 'mobile' && RootMobile}
`;

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ['title', 'content'],
};

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
    const { searchData } = this.props;
    const fuse = new Fuse(searchData.data, options);
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
    const { layout, onSearchClear, searchData } = this.props;
    const { query, results } = this.state;
    const ref = React.createRef<HTMLInputElement>();

    return (
      <Root layout={layout}>
        <div className="header">
          <SearchInputText
            placeholder={layout === 'default' ? "Type what you're looking for..." : 'Search...'}
            value={query}
            onChange={this.search}
            ref={ref}
            clearable={layout === 'mobile'}
            onClearButtonClick={() => {
              // Don't even ask.
              if (ref.current) {
                ref.current.value = '';
              }
              this.setState({ results: [], query: '' });

              if (onSearchClear) {
                onSearchClear();
              }
            }}
            block={layout === 'default'}
          />
        </div>
        {results && results.length !== 0 && (
          <SearchResults layout={layout}>
            {results.map(({ item: page }) => {
              let url = page.meta.relativePath.replace('.html', '').replaceAll('\\', '/');
              if (searchData && searchData.app.name === 'global') {
                url = `/${url}`;
              } else {
                // path for products
                url = `/${searchData.app.name}/${url}`;
              }
              return (
                <SearchResultLink href={url}>
                  <SearchResult>
                    <ResultTitle>{page.title}</ResultTitle>
                    {page.excerpt && <ResultExcerpt dangerouslySetInnerHTML={{ __html: page.excerpt }}></ResultExcerpt>}
                  </SearchResult>
                </SearchResultLink>
              );
            })}
          </SearchResults>
        )}
      </Root>
    );
  }
}
