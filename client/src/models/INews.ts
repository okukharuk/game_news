import { ITag } from './ITag';

export interface INewsLatest {
  latest: INewsDiscipline;
}

export interface INewsDiscipline {
  [discipline: string]: INews[];
}

export interface INews {
  announce: string;
  characters: number;
  createdAt: string;
  game_slug: string;
  image: string;
  news_number: number;
  publishAt: string;
  slug: string;
  tags: ITag[];
  title: string;
  uid: string;
  username: string;
  userslug: string;
  views: number;
  _id: string;
}
