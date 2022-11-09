import React from 'react';

import { IPlayer } from '../models/IPlayer';
import Player from './Player';

interface PlayersProps {
  players: IPlayer[];
}

const Players: React.FC<PlayersProps> = ({ players }) => {
  return (
    <div className="mb-4">
      <div className="text-main-blue-300 italic font-extrabold text-xl">
        Больше о игроках:
      </div>
      <div className="flex flex-row main-gradient h-16 p-3">
        {players.map((player) => {
          return <Player player={player} />;
        })}
      </div>
    </div>
  );
};

export default Players;
