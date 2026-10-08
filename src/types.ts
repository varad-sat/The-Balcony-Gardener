export type Category = 'All' | 'Basics' | 'Herbs' | 'Vegetables' | 'Flowers' | 'Care & Problems';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  avatarImage?: string;
  bio: string;
}

export interface QuickTip {
  title: string;
  text: string;
}

export interface PostSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  steps?: { title: string; detail: string }[];
  highlightQuote?: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Basics' | 'Herbs' | 'Vegetables' | 'Flowers' | 'Care & Problems';
  excerpt: string;
  author: Author;
  date: string;
  publishedTimestamp: string;
  readTimeMinutes: number;
  featured?: boolean;
  imageUrl: string;
  imageAlt: string;
  coverStyle: {
    gradient: string;
    darkGradient: string;
    accentColor: string;
    badgeBg: string;
    illustrationType:
      | 'starter-balcony'
      | 'herb-pots'
      | 'cherry-tomatoes'
      | 'sunlight-compass'
      | 'pot-selection'
      | 'apartment-compost'
      | 'watering-can'
      | 'leafy-greens'
      | 'pollinator-flowers'
      | 'pest-control';
  };
  tags: string[];
  quickTip: QuickTip;
  keyTakeaways: string[];
  sections: PostSection[];
  conclusion: string;
}
