type Product = ['Platform', 'Business Dashboard', 'Qios', 'CLI', 'Omnichat'];

export interface MarkdownContent {
  title: string;
  id: string;
  imgSpot: string;
  content: string;
  product: Product;
  next?: string;
  prev?: string;
  date: string;
}

export interface BreadcrumbContent {
  url: string;
  urlDisplay: string;
}

export interface SiteMetadata {
  title: string;
  sidebarTitle: string;
  sidebarSubtext: string;
  siteLastUpdated: string;
  description: string;
  version: string;
  siteUrl: string;
  keywords: string;
  socials: SocialMedia[];
}

export interface SocialMedia {
  name: string;
  imgpath: string;
  url: string;
}

export interface UpdatePost {
  id: string;
  fields: {
    slug: string;
    layout: string;
  };
  frontmatter: {
    title: string;
    subtitle?: string;
    category: string;
    version: string;
    header_image?: {
      childImageSharp: {
        fluid: {
          [key: string]: any;
        };
      };
    };
    date: string;
    date_formatted: string;
  };
  excerpt: string;
  html: string;
}
