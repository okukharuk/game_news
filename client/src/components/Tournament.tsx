import React from 'react';

import { defaultURL } from '../consts/consts';
import { IEventData } from '../models/IEventData';

interface TournamentProps {
  tournament: IEventData;
}

const Tournament: React.FC<TournamentProps> = ({ tournament }) => {
  return (
    <div className="flex flex-row h-full text-white items-center justify-center font-bold cursor-pointer hover:main-url">
      <img src={defaultURL + tournament.logo} className="h-8 mr-3" alt="" />
      <div>{tournament.title}</div>
    </div>
  );
};

export default Tournament;
