export interface IMatches {
  event: IEvent;
  list: IMatchesList[];
}

export interface IEvent {
  logo: string;
  short_name: string;
  slug: string;
  status: string;
  title: string;
}

export interface IMatchesList {
  away_team_logo: string;
  away_team_name: string;
  away_team_score: string;
  best_type: string;
  game_slug: string;
  home_team_logo: string;
  home_team_name: string;
  home_team_score: string;
  slug: string;
  start_date: string;
  status: string;
  _id: string;
}
