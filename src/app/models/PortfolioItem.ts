import { LinkItem } from './LinkItem';

export interface PortfolioItem {
  title: string;
  description: string;
  devicons: string[];
  links?: LinkItem[];
  images?: string[];
}