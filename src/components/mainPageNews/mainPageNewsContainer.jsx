import React,{useState,useEffect,useMemo} from 'react';
import MainPageNews from "./mainPageNews"
import {useDispatch,useSelector} from 'react-redux';
import {loadPosts} from "../../store/news/actions.js"
import {getFilteredNews} from "../../store/selectors/news"



const NewsContainer = ({history}) => {
    const selectFilteredNews = useMemo(getFilteredNews,[]);
    const filteredNews = useSelector(state => selectFilteredNews(state))
    const isLoading = useSelector(state =>state.news.isLoading)
    const dispatch = useDispatch();

    const [isFetching, setIsFetching] = useState(false);

    useEffect( () => {
      dispatch(loadPosts("us")) 

      window.addEventListener('scroll', handleScroll);

      return () => (
      window.removeEventListener('scroll', handleScroll),
      loadPosts
      );
      
    }, [dispatch]); 

  let handleScroll = () => {
    window.innerHeight + document.documentElement.scrollTop == document.documentElement.offsetHeight && setIsFetching(true)
    
  }

    return (
      <MainPageNews
      posts={filteredNews} 
      isLoading={isLoading}
      history={history}
      />
    );
}

export default NewsContainer

