export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class PageModel {
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    junior: number;
    middle: number;
    senior: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
