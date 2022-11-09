import React from 'react';

interface PaginationProps {
  handleNewsClick: () => void;
  title: string;
  slug: string;
}

const Pagination: React.FC<PaginationProps> = ({
  handleNewsClick,
  title,
  slug,
}) => {
  return (
    <div className="flex flex-row absolute top-[-2rem] text-sm font-light left-0 lg:left-auto max-w-[100vw]">
      <div className="mr-1 underline cursor-pointer ">Главная</div>
      <div> / </div>
      <div className="mr-1 underline cursor-pointer" onClick={handleNewsClick}>
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </div>
      <div> / </div>
      <div className="mr-1 underline cursor-pointer" onClick={handleNewsClick}>
        Новости
      </div>
      <div> / </div>
      <div className="mr-1 underline from-black bg-gradient-to-r text-transparent bg-clip-text truncate">
        {title}
      </div>
    </div>
  );
};

export default Pagination;
