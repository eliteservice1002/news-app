import React,{useEffect,useMemo} from 'react';
import MainPageNews from "./mainPageNews"
import {useDispatch,useSelector} from 'react-redux';
import {loadPosts} from "../../store/news/actions.js"
import {getFilteredNews} from "../../store/selectors/news"



const NewsContainer = ({history}) => {
    const selectFilteredNews = useMemo(getFilteredNews,[]);
    const filteredNews = useSelector(state => selectFilteredNews(state))
    const isLoading = useSelector(state =>state.news.isLoading)
    const dispatch = useDispatch();



    
    useEffect( () => {
      dispatch(loadPosts())
      
    }, [dispatch]); 

    return (
      <MainPageNews
      posts={filteredNews} 
      isLoading={isLoading}
      history={history}
      />
    );
}

export default NewsContainer

