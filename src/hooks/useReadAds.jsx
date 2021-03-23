import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readAds } from 'src/modules/feed';

const useReadAds = () => {
  const { ads } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readAds({ page: 1, limit: 100 }));
  }, [dispatch]);

  return { ads };
};

export default useReadAds;
