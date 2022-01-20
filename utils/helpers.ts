import clsx from 'clsx';
import { Edge, MenuNode } from 'interfaces/nodes';
import { Color, themeProps, Space } from '../components/Theme';

export const getColor = (colorKey: Color) => themeProps.colors[colorKey];

function dfs(tocNav: MenuNode, id: string) {
  if (tocNav.id !== undefined && tocNav.id === id) {
    return tocNav;
  }
  if (tocNav.items) {
    for (let item of tocNav.items) {
      let check = dfs(item, id);
      if (check) {
        return check;
      }
    }
  }
  return null;
}

function findObject(tocNav: MenuNode, id: string) {
  let result: MenuNode;
  for (let obj of tocNav.items) {
    result = dfs(obj, id);
    if (result) {
      break;
    }
  }
  return result;
}

export const getPageUrl = (id: string, origin: string) => {
  const tocNav = require(`docs/toc-${origin}`);
  const tocObject = findObject(tocNav, id);
  if (tocObject && tocObject.url) {
    return tocObject;
  }
  return undefined;
};

export const getSpacing = (spaceKey: Space) => themeProps.space[spaceKey];

function isDocsPath(location: any) {
  const { pathname } = location;
  return (
    pathname.includes('/overview/') ||
    pathname.includes('/concepts/') ||
    pathname.includes('/kata-ml/') ||
    pathname.includes('/nl-studio/') ||
    pathname.includes('/cms-studio/') ||
    pathname.includes('/deployment-guide/') ||
    pathname.includes('/channels/') ||
    pathname.includes('/modules/')
  );
}

/** Workaround for activeClassName: https://github.com/gatsbyjs/gatsby/issues/7737 */
export const isActive =
  (exact = false, additionalClassnames?: string) =>
  ({ isPartiallyCurrent, isCurrent, location }: any) => {
    if (exact) {
      return isCurrent || isDocsPath(location) ? { className: clsx(additionalClassnames, 'active') } : {};
    }

    return isPartiallyCurrent ? { className: clsx(additionalClassnames, 'active') } : {};
  };
