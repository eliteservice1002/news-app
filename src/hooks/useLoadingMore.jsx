import { useEffect } from 'react';
import throttle from "lodash/throttle"
import { useCallback } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { loadPosts,loadMorePosts, removePosts } from 'redux/news-reducers';
import {isLoadingMore_s } from 'redux/news-selectors';


const useLoadingMore = () => {

  const isLoadingMore = useSelector(s=>isLoadingMore_s(s) )
  const isEnd = useSelector(s=>s.news.isEnd )

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadPosts()) 
    window.addEventListener('scroll', handleScroll);
    return () =>{
      window.removeEventListener('scroll', handleScroll)
      dispatch(removePosts()) 

    };
    // eslint-disable-next-line
  },[]);
  

  useEffect(()=>{
    isEnd && window.removeEventListener('scroll', handleScroll);
      // eslint-disable-next-line
  },[isEnd,handleScroll])
  
  useEffect(()=>{
    isLoadingMore ? window.removeEventListener('scroll', handleScroll) : window.addEventListener('scroll', handleScroll);
      // eslint-disable-next-line
  },[isLoadingMore,handleScroll])


  var handleScroll = useCallback( throttle((e)=>{
    if (window.innerHeight + Math.floor(document.documentElement.scrollTop) + 250  >=  document.documentElement.offsetHeight && !isLoadingMore ){
      dispatch(loadMorePosts(false))
    }
     // eslint-disable-next-line
  },500),[])




  return [isLoadingMore,isEnd];
};

export default useLoadingMore;
