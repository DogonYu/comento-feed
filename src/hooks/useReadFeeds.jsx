import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useInfiniteScroll from 'src/hooks/useInfiniteScroll';
import { readFeeds } from 'src/modules/feed';

const useReadFeeds = ({ target }) => {
  const { feeds, ordType, filterCategory } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  let page = 1;
  useEffect(() => {
    dispatch(readFeeds({ page, ord: ordType, category: filterCategory, limit: 10 }));
  }, [dispatch, ordType, filterCategory]);

  useInfiniteScroll({
    target: target.current,
    rootMargin: '0px 1000px',
    checkIntersect: ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          page += 1;
          dispatch(readFeeds({ page, ord: ordType, category: filterCategory, limit: 10 }));
        }, 100);
      }
    },
  });

  return { feeds };
};

export default useReadFeeds;
