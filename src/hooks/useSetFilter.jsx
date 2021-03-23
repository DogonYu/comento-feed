import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'src/modules/feed';

const useSetFilter = () => {
  const { filterCategory } = useSelector(({ feed }) => feed, []);
  const dispatch = useDispatch();

  const onSetFilter = filter => dispatch(setFilter(filter));

  return { filterCategory, onSetFilter };
};

export default useSetFilter;
