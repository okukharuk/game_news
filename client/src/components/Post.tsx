import parse from 'html-react-parser';
import React from 'react';

import { useAppSelector } from '../hooks/redux';
import { IEventData } from '../models/IEventData';
import eyeSVG from '../public/svgs/eye.svg';
import LoadingIcon from '../public/svgs/LoadingIcon';
import down from '../public/svgs/thumbs-down.svg';
import up from '../public/svgs/thumbs-up.svg';
import { newsAPI } from '../services/NewsService';
import Feedback from './Feedback';
import Matches from './Matches';
import Pagination from './Pagination';
import Players from './Players';
import Tag from './Tag';
import Teams from './Teams';
import Tournaments from './Tournaments';
import URLWidget from './URLWidget';

interface PostProps {
  postSlug: string;
  handleBackClick: () => void;
}

const Post: React.FC<PostProps> = ({ postSlug, handleBackClick }) => {
  const { slug } = useAppSelector((state) => state.NewsReducer);
  const {
    data: post,
    error,
    isLoading,
  } = newsAPI.useGetNewsPageQuery({ slug, postSlug });

  const checkMatches = (text: string) => {
    return post?.article.tournaments.filter(
      (tournament) =>
        text.toUpperCase() === "MATCHES_" + tournament.toUpperCase()
    );
  };

  const getTournaments = () => {
    return (
      post?.article.tournaments &&
      post?.article.tournaments
        .map((tournament) => {
          return post.eventsData.find((event) => event._id === tournament);
        })
        .filter((item): item is IEventData => !!item)
    );
  };

  return (
    <div className="flex flex-col min-w-full h-fit shadow-xl bg-main-grey-400 lg:p-8 p-2 relative min-h-[50vh] mt-4">
      <div
        className="absolute top-[-2rem] cursor-pointer"
        onClick={handleBackClick}
      ></div>
      {error ? (
        <div>Something Went Wrong</div>
      ) : !isLoading ? (
        <div>
          <Pagination
            slug={slug}
            title={post?.article.title || ""}
            handleNewsClick={handleBackClick}
          />
          <div className="flex flex-row">
            <img src={"/news" + post?.article.image} alt="article img" />
            <div className="flex flex-col items-center w-full pl-8">
              <div className="underline cursor-pointer border-y-2 border-main-grey-700 w-full text-center py-2">
                {post?.article.author.username}
              </div>
              <div className="flex flex-row mt-2 text-main-grey-900 text-lg">
                <div className="mr-2">{post?.article.views}</div>
                <img src={eyeSVG} className="w-5" alt="eye" />
              </div>
              <div className="text-main-blue-500 text-lg mt-1 border-b-2 border-main-grey-700 w-full text-center">
                {new Date(post?.article.publishAt || "")
                  .toLocaleString()
                  .replace(",", "")}
              </div>
              <div className="flex flex-row mt-auto w-full text-center text-xl">
                <div className="flex flex-col m-auto text-main-green-500">
                  <div>
                    {post && post.article.winrate
                      ? post?.article.winrate.home
                      : 0}
                  </div>
                  <img
                    className="mt-2 w-12 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out"
                    alt="thumbs up"
                    src={up}
                  />
                </div>
                <div className="flex flex-col m-auto text-main-red-500">
                  <div>
                    {post && post.article.winrate
                      ? post?.article.winrate.away
                      : 0}
                  </div>
                  <img
                    className="mt-2 w-12 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out"
                    alt="thumbs down"
                    src={down}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-main-blue-700">
            {post?.article.tournaments.length !== 0 && (
              <Tournaments tournaments={getTournaments() || []} />
            )}
            <div className="text-3xl font-bold my-3">{post?.article.title}</div>
            <div className="flex flex-row my-3">
              {post?.article.tags &&
                post?.article.tags.map((tag) => {
                  return <Tag tag={tag} />;
                })}
            </div>
            <div className="text-lg">
              {post?.article.contentArr.map((text) => {
                const tournament = text.includes("MATCHES_")
                  ? checkMatches(text)
                  : [];
                return tournament && tournament?.length !== 0 ? (
                  <Matches
                    matches={post.eventMatches["matches_" + tournament[0]]}
                  />
                ) : (
                  parse(text)
                );
              })}
            </div>
            <Feedback article={post?.article} />
            {post?.teams && <Teams teams={post.teams} />}
            {post?.players && <Players players={post.players} />}
            <URLWidget sourceHost={post?.article.sourceHost} />
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full my-auto items-center justify-center">
          <LoadingIcon />
        </div>
      )}
    </div>
  );
};

export default Post;
