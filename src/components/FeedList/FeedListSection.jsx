import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import FeedListOption from 'src/components/FeedList/FeedListOption';
import useSetFilter from 'src/hooks/useSetFilter';
import useReadFeeds from 'src/hooks/useReadFeeds';
import useReadFilterCategorys from 'src/hooks/useReadFilterCategorys';
import useReadAds from 'src/hooks/useReadAds';
import replaceDateFormat from 'src/api/replaceDateFormat';

const FeedListSection = () => {
  const target = useRef();
  const { filterCategory } = useSetFilter();
  const { feeds } = useReadFeeds({ target });
  const { categorys } = useReadFilterCategorys({ category: filterCategory });
  const { ads } = useReadAds();
  return (
    <section className="feedlist-section">
      {categorys && <FeedListOption categorys={categorys} />}

      {ads && (
        <div className="feed-ads">
          <div className="feed-ads-category">sponsored</div>
          <div className="feed-ads-content">
            <img className="feed-ads-image" src={`https://cdn.comento.kr/assignment/${ads.data[0].img}`} alt="" />
            <div className="feed-ads-text">
              <div className="feed-ads-title">{ads.data[0].title}</div>
              <div className="feed-ads-description">{ads.data[0].contents}</div>
            </div>
          </div>
        </div>
      )}

      {feeds &&
        categorys &&
        feeds.data.map(feed => {
          const createdAt = replaceDateFormat(feed.created_at);
          return (
            <div key={feed.id} className="feed-link">
              <Link to={`/view/${feed.id}`}>
                <div className="feed-item">
                  <div className="feed-item-category">
                    <div className="feed-item-category-name">
                      {categorys.category.filter(category => category.id === feed.category_id)[0].name}
                    </div>
                    <div className="feed-item-category-id">{feed.id}</div>
                  </div>
                  <div className="feed-item-info">
                    <div className="feed-item-info-userId">{feed.user_id}</div>
                    <div className="separator" />
                    <div className="feed-item-info-create">{createdAt}</div>
                  </div>
                  <div className="feed-item-content">
                    <div className="feed-item-title">{feed.title}</div>
                    <div className="feed-item-description">{feed.contents}</div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      {feeds.data.length && <div className="infinite-scroll-target" ref={target} />}
    </section>
  );
};

export default FeedListSection;
