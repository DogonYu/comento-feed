import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readFilterCategory } from 'src/modules/feed';

const useReadBooks = () => {
  const { categorys } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readFilterCategory());
  }, [dispatch]);

  return { categorys };
};

export default useReadBooks;
