import React from 'react';

const FeedViewSection = () => {
  return (
    <section className="feedview-section">
      <div className="feed-item main-feed">
        <div className="feed-item-content">
          <div className="feed-item-title">
            Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
            Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
            Title Title Title Title Title Title Title Title Title Title Title Title Title
          </div>
          <div className="feed-item-description">
            contents contents contents contents contents contents contents contents contents contents contents contents
            contents contents contents contents contents contents contents contents contents contents contents contents
            contents contents contents contents contents contents contents contents contents contents contents contents
            contents contents contents contents contents contents contents contents contents contents contents contents
            contents contents contents contents
          </div>
        </div>
        <div className="feed-item-info">
          <div className="feed-item-info-create">created_at(2020-02-02)</div>
        </div>
      </div>

      <div className="feedview-comment-wrap">
        <div className="comment-head">
          답변 <span className="comment-length">2</span>
        </div>

        <div className="feedview-item-wrap">
          <div className="feed-item">
            <div className="feed-item-user-name">reply_user_name</div>
            <div className="feed-item-content">
              <div className="feed-item-description">
                contents contents contents contents contents contents contents contents contents contents contents
                contents contents contents contents contents contents contents contents contents contents contents
                contents contents contents contents contents contents contents contents contents contents contents
                contents contents contents contents contents contents contents contents contents contents contents
                contents contents contents contents contents contents contents contents
              </div>
            </div>
            <div className="feed-item-info">
              <div className="feed-item-info-create">created_at(2020-02-02)</div>
            </div>
          </div>

          <div className="feed-item">
            <div className="feed-item-user-name">reply_user_name</div>
            <div className="feed-item-content">
              <div className="feed-item-description">
                contents contents contents contents contents contents contents contents contents contents contents
                contents contents contents contents contents contents contents contents contents contents contents
                contents contents contents contents contents contents contents contents contents contents contents
                contents contents contents contents contents contents contents contents contents contents contents
                contents contents contents contents contents contents contents contents
              </div>
            </div>
            <div className="feed-item-info">
              <div className="feed-item-info-create">created_at(2020-02-02)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedViewSection;
