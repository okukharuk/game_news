import React from 'react';

import { IArticle } from '../models/IPost';
import down from '../public/svgs/thumbs-down.svg';
import up from '../public/svgs/thumbs-up.svg';

interface FeedbackProps {
  article: IArticle | undefined;
}

const Feedback: React.FC<FeedbackProps> = ({ article }) => {
  return (
    <div className="w-full my-4">
      {article && (
        <div className="flex flex-row w-full">
          <div className="flex items-center justify-center w-1/2 text-main-blue-500 border-2 border-main-blue-500 italic font-extrabold hover:submain-gradient hover:text-white text-xl">
            ПРОКОММЕНТИРОВАТЬ
          </div>
          <div className="flex items-center justify-center w-1/4 text-main-blue-300 italic font-extrabold text-lg">
            Понравилась статья?
          </div>
          <div className="flex flex-col items-center justify-center m-auto text-main-green-500 w-1/8">
            <div>{article.winrate.home}</div>
            <img
              className="mt-2 w-12 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out"
              src={up}
            />
          </div>
          <div className="flex flex-col items-center justify-center m-auto text-main-red-500 w-1/8">
            <div>{article.winrate.away}</div>
            <img
              className="mt-2 w-12 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out"
              src={down}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
