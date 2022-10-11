export interface Post {
  _id: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  excerpt: string;
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  slug: {
    current: string;
  };
  body: [object];
  categories: [string];
  comments?: [object];
}
