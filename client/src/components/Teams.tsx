import React from 'react';

import { ITeam } from '../models/ITeam';
import Team from './Team';

interface TeamsProps {
  teams: ITeam[];
}

const Teams: React.FC<TeamsProps> = ({ teams }) => {
  return (
    <div className="mb-4">
      <div className="text-main-blue-300 italic font-extrabold text-xl">
        Больше о командах:
      </div>
      <div className="flex flex-row main-gradient h-16 p-3">
        {teams.map((team) => {
          return <Team team={team} />;
        })}
      </div>
    </div>
  );
};

export default Teams;
