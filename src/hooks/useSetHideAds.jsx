import { useSelector, useDispatch } from 'react-redux';
import { setHideAds } from 'src/modules/feed';

const useSetHideAds = () => {
  const { isHideAds } = useSelector(({ feed }) => feed);
  const dispatch = useDispatch();

  const onSetHideAds = () => dispatch(setHideAds(!isHideAds));

  return { isHideAds, onSetHideAds };
};

export default useSetHideAds;
