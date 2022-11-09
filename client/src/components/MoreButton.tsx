import React from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { NewsSlice } from '../store/reducers/NewsSlice';

const MoreButton = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.NewsReducer);

  const handleClick = () => {
    console.log(page);
    if (page) dispatch(NewsSlice.actions.update_page(page + 1));
  };

  return (
    <div
      onClick={handleClick}
      className="w-full h-20 text-xl flex items-center justify-center border-2 border-blue-600 italic font-extrabold text-2xl mb-2 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer mt-auto"
    >
      ЕЩЁ
    </div>
  );
};

export default MoreButton;
