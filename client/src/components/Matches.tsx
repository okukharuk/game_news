import React from 'react';

import { defaultURL } from '../consts/consts';
import { IMatches, IMatchesList } from '../models/IMatches';
import Match from './Match';

interface MatchesProps {
  matches: IMatches;
}

const Matches: React.FC<MatchesProps> = ({ matches }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-main-blue-300 font-extrabold italic my-4 text-xl">
        Матчи:
      </div>
      <div className="flex flex-col p-3 main-gradient mb-4">
        <div className="flex flex-row text-white h-12 mb-2 items-center font-bold">
          <img
            src={defaultURL + matches.event.logo}
            className="h-8 mr-4"
            alt="event logo"
          />
          <div>{matches.event.title}</div>
        </div>
        {matches.list.map((match: IMatchesList) => (
          <Match match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
