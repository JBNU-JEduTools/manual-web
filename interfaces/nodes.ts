export interface HeaderMenuItem {
  id: string;
  label: string;
  href: string;
  exact?: boolean;
  new?: boolean;
  external: boolean;
}

export interface MenuNode {
  title: string;
  url?: string;
  items?: MenuNode[];
}

export interface Edge<T> {
  items: T[];
}
