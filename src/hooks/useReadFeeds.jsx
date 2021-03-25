import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFeeds, initialize } from 'src/modules/feed';

const useReadFeeds = () => {
  const { feeds, ordType, filterCategory } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  const limit = 20;
  useEffect(() => {
    dispatch(readFeeds({ page: 1, ord: ordType, category: filterCategory, limit }));
    return () => dispatch(initialize());
  }, [dispatch, ordType, filterCategory]);

  const onReadFeeds = page => dispatch(readFeeds({ page, ord: ordType, category: filterCategory, limit }));

  return { feeds, onReadFeeds };
};

export default useReadFeeds;
