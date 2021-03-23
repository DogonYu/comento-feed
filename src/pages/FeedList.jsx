import React from 'react';
import Aside from 'src/components/FeedList/Aside';
import FeedListSection from 'src/components/FeedList/FeedListSection';

const FeedList = () => {
  return (
    <div className="feedlist-wrap">
      <Aside />
      <FeedListSection />
    </div>
  );
};

export default FeedList;
