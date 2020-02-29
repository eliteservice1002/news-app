import React,{useState,useEffect} from 'react';
import MainPageNews from "./mainPageNews"
import {useDispatch,useSelector} from 'react-redux';
import {loadPosts,setIsLoadingMore} from "../../redux/news-reducers"
import useLoadingMore from "../../hooks/useLoadingMore"
import { useLocation } from "react-router-dom";



const NewsContainer = ({location}) => {
    const isLoading = useSelector(state =>state.news.isLoading)
    const isLoadingMore = useSelector(state =>state.news.isLoadingMore)
    const numberOfNewsItems = useSelector(state => state.news.numberOfNewsItems)
    const error = useSelector(state => state.news.error)
    const dispatch = useDispatch();

    const defaulCntOfNewsToLoad = 5;
    const [setIsFetching] = useLoadingMore(loadMoreNews);
    
    const [currentPageCntOfNews, setCurrentPageCntOfNews] = useState(defaulCntOfNewsToLoad + defaulCntOfNewsToLoad);
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);


    useEffect( () => {
        dispatch(loadPosts(defaulCntOfNewsToLoad)) 
    },[dispatch]);


      function loadMoreNews(){
        
        let setLoadMoreNews = (cntTosetCurrentPageOfNews,numberOfNewsItemsToLoad) =>{
          setCurrentPageCntOfNews(cntTosetCurrentPageOfNews)
          dispatch(loadPosts(numberOfNewsItemsToLoad))
          dispatch(setIsLoadingMore())

          setIsFetching(isLoadingMore);
        }
        if(!isLoading && location.pathname === "/"){
          if(currentPageCntOfNews + defaulCntOfNewsToLoad < numberOfNewsItems  && !isLoading){

            setLoadMoreNews(currentPageCntOfNews + defaulCntOfNewsToLoad,currentPageCntOfNews)

          }else if((currentPageCntOfNews + defaulCntOfNewsToLoad) >= numberOfNewsItems &&
          currentPageCntOfNews !== numberOfNewsItems && !isLoading){

            setLoadMoreNews(numberOfNewsItems,numberOfNewsItems)
            return
          }
          
          return
          
        }
        
      }


    return (
      <MainPageNews
      isLoading={isLoading}
      error={error}
      />
    );
}

export default NewsContainer

