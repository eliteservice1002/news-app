import { useState, useEffect } from 'react';
import throttle from "lodash/throttle"
import { useCallback } from 'react';

const useLoadingMore = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  
  var handleScroll = useCallback(()=>{
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching ) return;
    setIsFetching(true);
  },[isFetching])

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll,500));
    return () => window.removeEventListener('scroll', throttle(handleScroll,500));
  }, [handleScroll]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching,callback]);

  
  


  

  return [ setIsFetching];
};

export default useLoadingMore;