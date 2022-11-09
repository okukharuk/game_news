import React from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { TSlug } from '../models/TSlug';
import { NewsSlice } from '../store/reducers/NewsSlice';
import { PostsSlice } from '../store/reducers/PostsSlice';

interface NavItemProps {
  item: [string, TSlug];
  index: number;
  handleItemClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, index, handleItemClick }) => {
  const dispatch = useAppDispatch();
  const { slug } = useAppSelector((state) => state.NewsReducer);

  const handleClick = () => {
    handleItemClick();
    dispatch(NewsSlice.actions.update_page(1));
    dispatch(NewsSlice.actions.update_slug(item[1]));
    dispatch(PostsSlice.actions.reset_posts());
  };

  return (
    <div
      onClick={handleClick}
      className={
        "p-2 flex items-center justify-center cursor-pointer hover:bg-main-blue-500 duration-300 " +
        (item[1] === slug
          ? "bg-main-blue-500"
          : index % 2 === 0
          ? "bg-main-blue-700"
          : "bg-main-blue-900")
      }
    >
      <img
        src={item[0]}
        alt={item[1]}
        className="w-6 hover:scale-125 duration-100 transition ease-in-out"
      />
    </div>
  );
};

export default NavItem;
