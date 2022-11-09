import React from 'react';

import { IEventData } from '../models/IEventData';
import Tournament from './Tournament';

interface TournamentsProps {
  tournaments: IEventData[];
}

const Tournaments: React.FC<TournamentsProps> = ({ tournaments }) => {
  return (
    <div className="my-4">
      <div className="text-main-blue-300 italic font-extrabold text-xl">
        Больше про турниры:
      </div>
      <div className="flex flex-row main-gradient h-16 p-3">
        {tournaments.map((tournament) => {
          return <Tournament tournament={tournament} />;
        })}
      </div>
    </div>
  );
};

export default Tournaments;
