import React from 'react';

import NewsList from '../components/NewsList';
import Post from '../components/Post';

const HomePage = () => {
  const [postOpen, setPostOpen] = React.useState(false);
  const [slug, setSlug] = React.useState("");

  const handleNewsClick = (slug: string) => {
    setSlug(slug);
    setPostOpen(true);
  };

  const handleBackClick = () => {
    setPostOpen(false);
    setSlug("");
  };

  return (
    <div className="w-full h-fit p-8">
      {postOpen ? (
        <Post slug={slug} handleBackClick={handleBackClick} />
      ) : (
        <NewsList handleNewsClick={handleNewsClick} />
      )}
    </div>
  );
};

export default HomePage;
