import { TSlug } from './TSlug';

export interface INewsQuery {
  slug: TSlug;
  type?: string;
  from?: string;
  to?: string;
  page?: number;
}
