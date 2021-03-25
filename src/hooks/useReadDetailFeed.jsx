import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readDetailFeed } from 'src/modules/feed';

const useReadDetailFeed = ({ id }) => {
  const { detailFeed } = useSelector(({ feed }) => feed, []);
  const { detailFeedLoading } = useSelector(
    ({ loading }) => ({ detailFeedLoading: loading['feed/READ_DETAIL_FEED'] }),
    [],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readDetailFeed({ id }));
  }, [dispatch]);

  return { detailFeed, detailFeedLoading };
};

export default useReadDetailFeed;
