import { useEffect } from 'react';

const useInfiniteScroll = ({ root = null, target, checkIntersect, threshold = 0.5, rootMargin = '0px' }) => {
  const options = {
    root,
    rootMargin,
    threshold,
  };
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(checkIntersect, options);
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);
};

export default useInfiniteScroll;
