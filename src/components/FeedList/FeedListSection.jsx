import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeedListSection = () => {
  const [filterModalShow, setFilterModalShow] = useState(false);
  const [isActive, setIsActive] = useState({ asc: true, desc: false });
  const onClickAsc = () => setIsActive({ asc: true, desc: false });
  const onClickDesc = () => setIsActive({ asc: false, desc: true });
  const onFilterModalShow = () => setFilterModalShow(true);
  const onFilterModalClose = () => setFilterModalShow(false);
  return (
    <section className="feedlist-section">
      <div className="feedlist-option-wrap">
        <div className="option-ord-wrap">
          <div className={isActive.asc ? `option-ord-btn active` : 'option-ord-btn'} onClick={onClickAsc}>
            <div className="option-ord-circle" />
            오름차순
          </div>
          <div className={isActive.desc ? `option-ord-btn active` : 'option-ord-btn'} onClick={onClickDesc}>
            <div className="option-ord-circle" />
            내림차순
          </div>
        </div>
        <div className="option-filter-wrap">
          <button className="option-filter-btn" type="button" onClick={onFilterModalShow}>
            필터
          </button>
          {filterModalShow ? (
            <>
              <div className="modal-overlay" onClick={onFilterModalClose} />
              <div className="option-filter-modal">
                <div className="modal-inner">
                  <div className="modal-close" onClick={onFilterModalClose} />
                  <h2>필터</h2>
                  <div className="modal-filter-category">
                    <input type="checkbox" id="category1" />
                    <label htmlFor="category1">category_name</label>
                  </div>
                  <div className="modal-filter-category">
                    <input type="checkbox" id="category2" />
                    <label htmlFor="category2">category_name</label>
                  </div>
                  <div className="modal-filter-category">
                    <input type="checkbox" id="category3" />
                    <label htmlFor="category3">category_name</label>
                  </div>
                  <div className="modal-btn-wrap">
                    <button className="modal-save-btn" type="button" onClick={onFilterModalClose}>
                      저장하기
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="feed-item">
        <div className="feed-item-category">
          <div className="feed-item-category-name">category_name</div>
          <div className="feed-item-category-id">id</div>
        </div>
        <div className="feed-item-info">
          <div className="feed-item-info-userId">user_id</div>
          <div className="separator" />
          <div className="feed-item-info-create">created_at(2020-02-02)</div>
        </div>
        <Link to="/view/1">
          <div className="feed-item-content">
            <div className="feed-item-title">
              Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
              Title Title Title Title Title Title Title
            </div>
            <div className="feed-item-description">
              contents contents contents contents contents contents contents contents contents contents contents
              contents contents contents contents contents contents contents contents contents contents contents
            </div>
          </div>
        </Link>
      </div>

      <div className="feed-ads">
        <div className="feed-ads-category">sponsored</div>
        <div className="feed-ads-content">
          <img className="feed-ads-image" src="" alt="" />
          <div className="feed-ads-text">
            <div className="feed-ads-title">
              Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title
              Title Title Title Title Title Title Title
            </div>
            <div className="feed-ads-description">
              contents contents contents contents contents contents contents contents contents contents contents
              contents contents contents contents contents contents contents contents contents contents contents
              contents contents contents contents contents contents contents contents contents contents contents
              contents contents contents contents contents contents contents contents contents contents contents
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedListSection;
