import React from 'react';

import { defaultURL } from '../consts/consts';
import { IMatchesList } from '../models/IMatches';

interface MatchProps {
  match: IMatchesList;
}

const Match: React.FC<MatchProps> = ({ match }) => {
  return (
    <div className="flex flex-row bg-main-blue-700 text-white mb-3 h-28">
      <div className="flex mr-auto w-1/5 justify-center items-center">
        {new Date(match.start_date).toLocaleDateString().toString()}
      </div>
      <div className="flex flex-col m-auto items-center w-1/5">
        <img
          className="w-12"
          src={defaultURL + match.home_team_logo}
          alt="home team logo"
        />
        <div>{match.home_team_name}</div>
      </div>
      <div className="flex m-auto w-1/5 items-center justify-center">
        {new Date(match.start_date)
          .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          .toString()}
      </div>
      <div className="flex flex-col m-auto items-center w-1/5">
        <img
          className="w-12"
          src={defaultURL + match.away_team_logo}
          alt="away team logo"
        />
        <div>{match.away_team_name}</div>
      </div>
      <div className="flex ml-auto w-1/5 justify-center items-center">
        {match.best_type}
      </div>
    </div>
  );
};

export default Match;
