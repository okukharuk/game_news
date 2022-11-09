import React from 'react';

import facebookSVG from '../public/svgs/facebook-square.svg';
import linkSVG from '../public/svgs/link.svg';
import redditSVG from '../public/svgs/reddit.svg';
import twitterSVG from '../public/svgs/twitter.svg';

interface URLWidgetProps {
  sourceHost: string | undefined;
}

const URLWidget: React.FC<URLWidgetProps> = ({ sourceHost }) => {
  return (
    <div className="flex flex-row mt-6">
      {sourceHost && (
        <div className="flex flex-col w-1/2">
          <div className="text-main-blue-300 font-extrabold italic my-4 text-xl">
            Источник:
          </div>
          <div className="main-url text-xl">{sourceHost}</div>
        </div>
      )}
      <div className="flex flex-col w-1/4">
        <div className="text-main-blue-300 font-extrabold italic my-4 text-xl">
          Поделиться:
        </div>
        <div className="flex flex-row">
          <img className="w-12" src={twitterSVG} alt="twitter" />
          <img className="w-12" src={facebookSVG} alt="facebook" />
          <img className="w-12" src={redditSVG} alt="reddit" />
        </div>
      </div>
      <div className="flex flex-row w-1/4">
        <div className="text-main-grey-200 font-bold italic text-base mt-auto">
          Копировать адрес ссылки
        </div>
        <img className="w-12 mt-auto" src={linkSVG} alt="link" />
      </div>
    </div>
  );
};

export default URLWidget;
