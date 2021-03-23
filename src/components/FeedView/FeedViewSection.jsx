import React from 'react';
import { withRouter } from 'react-router-dom';
import useReadDetailFeed from 'src/hooks/useReadDetailFeed';
import replaceDateFormat from 'src/api/replaceDateFormat';

const FeedViewSection = ({ match }) => {
  const { id } = match.params;
  const { detailFeed } = useReadDetailFeed({ id });
  const feedCreatedAt = detailFeed && replaceDateFormat(detailFeed.created_at);
  return (
    <>
      {detailFeed && (
        <section className="feedview-section">
          <div className="feed-item main-feed">
            <div className="feed-item-content">
              <div className="feed-item-title">{detailFeed.title}</div>
              <div className="feed-item-description">{detailFeed.contents}</div>
            </div>
            <div className="feed-item-info">
              <div className="feed-item-info-create">{feedCreatedAt}</div>
            </div>
          </div>

          <div className="feedview-comment-wrap">
            <div className="comment-head">
              답변 <span className="comment-length">{detailFeed.reply.length}</span>
            </div>

            {detailFeed.reply.map(reply => {
              const replyCreatedAt = replaceDateFormat(reply.created_at);
              return (
                <div key={reply.id} className="feedview-item-wrap">
                  <div className="feed-item">
                    <div className="feed-item-user-name">{reply.user.name}</div>
                    <div className="feed-item-content">
                      <div className="feed-item-description">{reply.contents}</div>
                    </div>
                    <div className="feed-item-info">
                      <div className="feed-item-info-create">{replyCreatedAt}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default withRouter(FeedViewSection);
