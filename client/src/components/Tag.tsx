import React from 'react';

import { defaultURL } from '../consts/consts';
import { ITag } from '../models/ITag';

interface TagProps {
  tag: ITag;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className="flex flex-row bg-main-grey-800 mr-1 px-2 rounded-3xl font-light items-center my-1 h-6 hover:submain-gradient hover:text-white cursor-pointer min-w-fit">
      <img src={defaultURL + tag.image} className="h-5 mr-1" alt="" />
      <div className="min-w-fit">{tag.title}</div>
    </div>
  );
};

export default Tag;
