import React, { useState } from 'react';
import useSetOrd from 'src/hooks/useSetOrd';
import useSetFilter from 'src/hooks/useSetFilter';
import useSetHideAds from 'src/hooks/useSetHideAds';

const FeedListOption = ({ categorys }) => {
  const [filterModalShow, setFilterModalShow] = useState(false);
  const [filtering, setFiltering] = useState([1, 2, 3]);
  const { filterCategory, onSetFilter } = useSetFilter();
  const { ordType, onSetOrd } = useSetOrd();
  const { isHideAds, onSetHideAds } = useSetHideAds();
  const currentCategory = categorys.category.map(category => category);
  const onClickAsc = () => onSetOrd('asc');
  const onClickDesc = () => onSetOrd('desc');
  const onFilterModalShow = () => setFilterModalShow(true);
  const onFilterModalClose = () => setFilterModalShow(false);
  const onChangeFilter = e => {
    const value = parseInt(e.target.value, 10);
    if (!e.target.checked) setFiltering(prev => prev.filter(id => id !== value));
    else setFiltering(prev => prev.concat(value));
  };
  const onFilterSave = () => {
    if (!filtering.length) {
      window.alert('필터를 1개 이상 선택해주세요.');
      return;
    }
    onSetFilter(filtering);
    onFilterModalClose();
  };
  return (
    <div className="feedlist-option-wrap">
      <div className="option-ord-wrap">
        <div className={ordType === 'asc' ? 'option-ord-btn active' : 'option-ord-btn'} onClick={onClickAsc}>
          <div className="option-ord-circle" />
          오름차순
        </div>
        <div className={ordType === 'desc' ? 'option-ord-btn active' : 'option-ord-btn'} onClick={onClickDesc}>
          <div className="option-ord-circle" />
          내림차순
        </div>
      </div>
      <div className="option-filter-wrap">
        <button
          className={
            !isHideAds ? 'option-filter-btn option-ads-hide-btn' : 'option-filter-btn option-ads-hide-btn active-hide'
          }
          type="button"
          onClick={onSetHideAds}
        >
          {!isHideAds ? '광고 가리기' : '광고 보기'}
        </button>
        <button className="option-filter-btn" type="button" onClick={onFilterModalShow}>
          필터:
          {currentCategory.map(category =>
            filterCategory.includes(category.id) ? (
              <span key={category.id} className="current-filter">
                {category.name}
              </span>
            ) : null,
          )}
        </button>
        {filterModalShow && categorys ? (
          <>
            <div className="modal-overlay" onClick={onFilterModalClose} />
            <div className="option-filter-modal">
              <div className="modal-close" onClick={onFilterModalClose} />
              <h2>필터</h2>
              <div className="modal-filter-category-wrap">
                {categorys.category.map(category => (
                  <div key={category.id} className="modal-filter-category">
                    <input
                      type="checkbox"
                      id={category.id}
                      checked={filtering.includes(category.id)}
                      onChange={onChangeFilter}
                      value={category.id}
                    />
                    <label htmlFor={category.id}>{category.name}</label>
                  </div>
                ))}
              </div>
              <div className="modal-btn-wrap">
                <button className="modal-save-btn" type="button" onClick={onFilterSave}>
                  저장하기
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FeedListOption;
