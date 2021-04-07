import { useSelector, useDispatch } from 'react-redux';
import { setOrd } from 'src/modules/feed';

const useSetOrd = () => {
  const { ordType } = useSelector(({ feed }) => feed);
  const dispatch = useDispatch();

  const onSetOrd = ord => dispatch(setOrd(ord));

  return { ordType, onSetOrd };
};

export default useSetOrd;
