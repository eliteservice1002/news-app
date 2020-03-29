import { useState, useEffect } from 'react';
import throttle from "lodash/throttle"
import { useCallback } from 'react';

const useLoadingMore = (callback,isLoading) => {
  // const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  },[]);
  
  var handleScroll = useCallback(throttle((e)=>{
    if (window.innerHeight + Math.floor(document.documentElement.scrollTop)  ==  document.documentElement.offsetHeight && !isLoading ){
      callback();
    }
  },500),[isLoading])

  

  // useEffect(() => {
  //   if (!isFetching) return;
  //   callback();
    
  // }, [isFetching,callback]);


  return [];
};

export default useLoadingMore;
// import { useState, useEffect } from 'react';
// import throttle from "lodash/throttle"
// import { useCallback } from 'react';

// const useLoadingMore = (callback,cntOFnews = 0  ) => {
//   const [isFetching, setIsFetching] = useState(false);
//   console.log("useLoadingMore -> isFetching", isFetching)

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//     // eslint-disable-next-line
//   },[]);
  
//   var handleScroll = useCallback(throttle((e)=>{
//     if (window.innerHeight + Math.floor(document.documentElement.scrollTop)  ===  document.documentElement.offsetHeight ?? !isFetching ){
//       setIsFetching(true);
//     }
//   },500),[isFetching])

  

//   useEffect(() => {
//     if (!isFetching) return;
//     callback();
    
//   }, [isFetching,callback]);


//   return [ setIsFetching];
// };

// export default useLoadingMore;