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
  const dispatch = useAppDispatch();
  const { slug, type, from, to, page } = useAppSelector(
    (state) => state.NewsReducer
  );
  const { posts } = useAppSelector((state) => state.PostsReducer);
  const {
    data: news,
    error,
    isLoading,
  } = newsAPI.useGetNewsQuery({
    slug: slug,
    type: type,
    from: from,
    to: to,
    page: page,
  });

  const [isMore, setIsMore] = React.useState(true);

  React.useEffect(() => {
    news && dispatch(PostsSlice.actions.update_posts(news?.latest[slug]));
    if (news && news?.latest[slug].length < 13) setIsMore(false);
  }, [news]);

  return (
    <div className="flex flex-col bg-main-grey-400 px-3 h-fit pb-3 items-center justify-center min-h-[50vh] no-scrollbar relative">
      <FilterNews />
      {error ? (
        <div>Something went wrong, please reload the page</div>
      ) : isLoading ? (
        <div className="absolute">
          <LoadingIcon />
        </div>
      ) : (
        <div className="w-full min-h-[50vh] relative">
          {posts && posts.length !== 0 ? (
            posts.map((news: INews) => {
              return (
                <div
                  key={news._id}
                  onClick={() => {
                    handleNewsClick(news.slug);
                  }}
                >
                  <NewsGrid news={news} />
                </div>
              );
            })
          ) : news && news.latest[slug] && news.latest[slug].length !== 0 ? (
            news.latest[slug].map((news: INews) => {
              return (
                <div
                  key={news._id}
                  onClick={() => {
                    handleNewsClick(news.slug);
                  }}
                >
                  <NewsGrid news={news} />
                </div>
              );
            })
          ) : (
            <div className="h-full w-full flex items-center justify-center my-auto absolute">
              There is nothing here, try another time
            </div>
          )}
        </div>
      )}
      {isMore && <MoreButton />}
    </div>
  );
};

export default NewsList;
