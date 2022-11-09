import React from 'react';

import { INews } from '../models/INews';
import eyeSVG from '../public/svgs/eye.svg';
import { getFormattedTime } from '../utils/utils';
import Tag from './Tag';

interface NewsGridProps {
  news: INews;
}

const NewsGrid: React.FC<NewsGridProps> = ({ news }) => {
  return (
    <div
      key={news._id}
      className="flex flex-col bg-main-grey-300 mt-3 pl-5 py-1 shadow-xl relative text-main-grey-900 last:mb-3 cursor-pointer"
    >
      <div className="flex flex-row">
        {news.tags &&
          news.tags.map((tag) => {
            return <Tag tag={tag} />;
          })}
      </div>
      <div className="w-[65%]">
        <div className="text-xs font-bold text-black mb-2">{news.title}</div>
        <div className="font-light">{news.announce}</div>
      </div>
      <div className="flex flex-col absolute right-2 bottom-2">
        <div>{getFormattedTime(news.publishAt)}</div>
        <div className="flex flex-row font-light ml-auto">
          <div className="mr-2">{news.views}</div>
          <img src={eyeSVG} className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
