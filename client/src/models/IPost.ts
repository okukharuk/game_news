import { IAuthor } from './IAuthor';
import { IEventData } from './IEventData';
import { IJsonBreadcrumb } from './IJsonBreadcrumb';
import { IJsonLd } from './IJsonLd';
import { ILinkTag } from './ILinkTag';
import { IMatches } from './IMatches';
import { IMetaTag } from './IMetaTag';
import { INeighbor } from './INeighbor';
import { INews } from './INews';
import { IPlayer } from './IPlayer';
import { ITag } from './ITag';
import { ITeam } from './ITeam';

export interface IPostResponse {
  latest: INews[];
  similar: INews[];
  eventsData: IEventData[];
  brackets: {};
  eventMatches: { [matches: string]: IMatches };
  matchData: {};
  comments: null;
  commentsTopTotal: null;
  commentsTotal: null;
  teams: ITeam[];
  players: IPlayer[];
  seo: IPost;
  neighbor: INeighbor;
  article: IArticle;
}

export interface IArticle {
  _id: string;
  announce: string;
  author: IAuthor;
  characters: number;
  contentArr: string[];
  createdAt: string;
  game_slug: string;
  image: string;
  organizations: [];
  publishAt: string;
  slug: string;
  source: string;
  sourceHost: string;
  sourceLink: string;
  tags: ITag[];
  title: string;
  tournaments: string[];
  twit: string;
  views: number;
  winrate: { home: number; away: number };
}

export interface IPost {
  _id: string;
  title: string;
  description: string;
  h1: string;
  content: string;
  metaTags: IMetaTag[];
  linkTags: ILinkTag[];
  lang: string;
  json_content: {};
  faq: [];
  breadcrumb2: string;
  navigation: string;
  breadcrumb: string;
  image: string;
  url: string;
  jsonBreadcrumb: IJsonBreadcrumb[];
  dateTime: string;
  jsonLd: IJsonLd;
}
