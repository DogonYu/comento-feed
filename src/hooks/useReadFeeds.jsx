import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFeeds } from 'src/modules/feed';

const useReadFeeds = () => {
  const { feeds, ordType, filterCategory } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  useEffect(() => {
    const ord = ordType === 'asc' ? 'asc' : 'desc';
    dispatch(readFeeds({ page: 1, ord, category: filterCategory, limit: 10 }));
  }, [dispatch, ordType, filterCategory]);

  return { feeds };
};

export default useReadFeeds;
