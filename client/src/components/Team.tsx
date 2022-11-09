import React from 'react';

import { defaultURL } from '../consts/consts';
import { ITeam } from '../models/ITeam';

interface TeamProps {
  team: ITeam;
}

const Team: React.FC<TeamProps> = ({ team }) => {
  return (
    <div className="flex flex-row text-sm w-28 h-full bg-main-blue-700 text-white items-center justify-center font-bold hover:bg-main-blue-400 cursor-pointer mr-2">
      <img src={defaultURL + team.logo} className="h-8 mr-1" alt="" />
      <div>{team.name}</div>
    </div>
  );
};

export default Team;
