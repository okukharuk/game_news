import React from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { INews } from '../models/INews';
import LoadingIcon from '../public/svgs/LoadingIcon';
import { newsAPI } from '../services/NewsService';
import { PostsSlice } from '../store/reducers/PostsSlice';
import FilterNews from './FilterNews';
import MoreButton from './MoreButton';
import NewsGrid from './NewsGrid';

interface NewsListProps {
  handleNewsClick: (slug: string) => void;
}

const NewsList: React.FC<NewsListProps> = ({ handleNewsClick }) => {
  const { type, from, to, page } = useAppSelector((state) => state.NewsReducer);
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.PostsReducer);
  const {
    data: news,
    error,
    isLoading,
  } = newsAPI.useGetNewsQuery({ type: type, from: from, to: to, page: page });

  const [isMore, setIsMore] = React.useState(true);

  React.useEffect(() => {
    console.log(news);
    news &&
      dispatch(PostsSlice.actions.update_posts(news?.latest["counterstrike"]));
    if (news && news?.latest["counterstrike"].length < 13) setIsMore(false);
  }, [news]);

  return (
    <div className="flex flex-col bg-main-grey-400 px-3 h-fit pb-3 items-center justify-center min-h-[50vh] no-scrollbar">
      <FilterNews />
      {error ? (
        <div>Something went wrong, please reload the page</div>
      ) : isLoading ? (
        <div className="absolute">
          <LoadingIcon />
        </div>
      ) : (
        <div>
          {posts && posts.length != 0
            ? posts.map((news: INews) => {
                return (
                  <div
                    onClick={() => {
                      handleNewsClick(news.slug);
                    }}
                  >
                    <NewsGrid news={news} />
                  </div>
                );
              })
            : news &&
              news.latest["counterstrike"].map((news: INews) => {
                return (
                  <div
                    onClick={() => {
                      handleNewsClick(news.slug);
                    }}
                  >
                    <NewsGrid news={news} />
                  </div>
                );
              })}
        </div>
      )}
      {isMore && <MoreButton />}
    </div>
  );
};

export default NewsList;
