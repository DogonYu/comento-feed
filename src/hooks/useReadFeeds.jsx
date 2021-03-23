import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useInfiniteScroll from 'src/hooks/useInfiniteScroll';
import { readFeeds, initialize } from 'src/modules/feed';

const useReadFeeds = ({ target }) => {
  const { feeds, ordType, filterCategory } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  const limit = 10;
  let page = 1;
  useEffect(() => {
    dispatch(readFeeds({ page, ord: ordType, category: filterCategory, limit }));
    return () => dispatch(initialize());
  }, [dispatch, ordType, filterCategory]);

  if (feeds.data.length > 0)
    useInfiniteScroll({
      target: target.current,
      rootMargin: '0px 1000px',
      checkIntersect: ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            page += 1;
            dispatch(readFeeds({ page, ord: ordType, category: filterCategory, limit }));
          }, 100);
        }
      },
    });
  else
    useInfiniteScroll({
      rootMargin: '0px 1000px',
      checkIntersect: () => {
        return null;
      },
    });

  return { feeds };
};

export default useReadFeeds;
