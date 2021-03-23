import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFilterCategorys } from 'src/modules/feed';

const useReadFilterCategorys = () => {
  const { categorys } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readFilterCategorys());
  }, [dispatch]);

  return { categorys };
};

export default useReadFilterCategorys;
