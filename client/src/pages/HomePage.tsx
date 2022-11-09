import React from 'react';

import Navbar from '../components/Navbar';
import NewsList from '../components/NewsList';
import Post from '../components/Post';

const HomePage = () => {
  const [postOpen, setPostOpen] = React.useState(false);
  const [postSlug, setPostSlug] = React.useState("");

  const handleNewsClick = (postSlug: string) => {
    setPostSlug(postSlug);
    setPostOpen(true);
  };

  const handleBackClick = () => {
    setPostOpen(false);
    setPostSlug("");
  };

  return (
    <div className="w-full h-fit lg:p-8 py-8">
      <Navbar handleClick={handleBackClick} />
      {postOpen ? (
        <Post postSlug={postSlug} handleBackClick={handleBackClick} />
      ) : (
        <NewsList handleNewsClick={handleNewsClick} />
      )}
    </div>
  );
};

export default HomePage;
