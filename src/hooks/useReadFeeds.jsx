import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFeeds, initialize } from 'src/modules/feed';

const useReadFeeds = () => {
  const { feeds, ordType, filterCategory } = useSelector(({ feed }) => feed, []);
  const { feedsLoading } = useSelector(({ loading }) => ({ feedsLoading: loading['feed/READ_FEEDS'] }), []);
  const dispatch = useDispatch();

  const LIMIT = 20;
  useEffect(() => {
    dispatch(readFeeds({ page: 1, ord: ordType, category: filterCategory, limit: LIMIT }));
    return () => dispatch(initialize());
  }, [dispatch, ordType, filterCategory]);

  const onReadFeeds = page => dispatch(readFeeds({ page, ord: ordType, category: filterCategory, limit: LIMIT }));

  return { feeds, feedsLoading, onReadFeeds };
};

export default useReadFeeds;
