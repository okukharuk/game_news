import React from 'react';

import { defaultURL } from '../consts/consts';
import { IPlayer } from '../models/IPlayer';

interface PlayerProps {
  player: IPlayer;
}

const Player: React.FC<PlayerProps> = ({ player }) => {
  return (
    <div className="flex flex-row w-24 h-full bg-main-blue-700 text-white items-center justify-center font-bold hover:bg-main-blue-400 cursor-pointer">
      <img src={defaultURL + player.photo} className="h-8 mr-1" />
      <div>{player.name}</div>
    </div>
  );
};

export default Player;
