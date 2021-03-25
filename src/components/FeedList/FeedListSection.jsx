import React from 'react';
import { Link } from 'react-router-dom';
import FeedListOption from 'src/components/FeedList/FeedListOption';
import useSetFilter from 'src/hooks/useSetFilter';
import useSetHideAds from 'src/hooks/useSetHideAds';
import useReadFeeds from 'src/hooks/useReadFeeds';
import useReadFilterCategorys from 'src/hooks/useReadFilterCategorys';
import useReadAds from 'src/hooks/useReadAds';
import replaceDateFormat from 'src/api/replaceDateFormat';

const FeedListSection = () => {
  const { filterCategory } = useSetFilter();
  const { isHideAds } = useSetHideAds();
  const { feeds, feedsLoading, onReadFeeds } = useReadFeeds();
  const { categorys } = useReadFilterCategorys({ category: filterCategory });
  const { ads } = useReadAds();

  const FEED_PER_ADS = 10;

  return (
    <section className="feedlist-section">
      {categorys && <FeedListOption categorys={categorys} />}

      <div className="feed-wrap">
        {feeds.data.length > 0 &&
          ads.data.length > 0 &&
          categorys &&
          feeds.data.map((feed, index) => {
            const createdAt = replaceDateFormat(feed.created_at);
            return (
              <div className="feed" key={`feeds-${feed.id}`}>
                <div className="feed-link">
                  <Link to={`/view/${feed.id}`}>
                    <div className="feed-item">
                      <div className="feed-item-category">
                        <div className="feed-item-category-name">
                          {categorys.category.filter(category => category.id === feed.category_id)[0].name}
                        </div>
                        <div className="feed-item-category-id">글 번호: {feed.id}</div>
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

                {(index + 1) % FEED_PER_ADS === 0 && !isHideAds && (
                  <div key={`ads-${ads.data[index].id}`} className="feed-ads">
                    <div className="feed-ads-category">sponsored</div>
                    <div className="feed-ads-content">
                      <div className="feed-ads-image-wrap">
                        <img
                          className="feed-ads-image"
                          src={`https://cdn.comento.kr/assignment/${ads.data[index].img}`}
                          alt=""
                        />
                      </div>
                      <div className="feed-ads-text">
                        <div className="feed-ads-title">{ads.data[index].title}</div>
                        <div className="feed-ads-description">{ads.data[index].contents}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        {feedsLoading && !feeds.data.length && <div className="loader" />}
      </div>

      <div className="more-btn-wrap">
        {feeds && feeds.total !== feeds.to && (
          <button className="more-btn" type="button" onClick={() => onReadFeeds(feeds.current_page + 1)}>
            더 보기
          </button>
        )}
      </div>
    </section>
  );
};

export default FeedListSection;
