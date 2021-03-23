import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readDetailFeed } from 'src/modules/feed';

const useReadDetailFeed = ({ id }) => {
  const { detailFeed } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readDetailFeed({ id }));
  }, [dispatch]);

  return { detailFeed };
};

export default useReadDetailFeed;
