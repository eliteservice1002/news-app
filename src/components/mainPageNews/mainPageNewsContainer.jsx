import React,{useState,useEffect,useMemo} from 'react';
import MainPageNews from "./mainPageNews"
import {useDispatch,useSelector} from 'react-redux';
import {loadPosts,setIsLoadingMore} from "../../store/news/actions.js"
import {getFilteredNews} from "../../store/selectors/news"
import useLoadingMore from "../../hooks/useLoadingMore"
import { useLocation } from "react-router-dom";



const NewsContainer = ({history}) => {
    const selectFilteredNews = useMemo(getFilteredNews,[]);
    const filteredNews = useSelector(state => selectFilteredNews(state))
    const isLoading = useSelector(state =>state.news.isLoading)
    const numberOfNewsItems = useSelector(state => state.news.numberOfNewsItems)
    const dispatch = useDispatch();

    const defaulCntOfNewsToLoad = 5;
    const [setIsFetching] = useLoadingMore(loadMoreNews);
    const [currentPageCntOfNews, setCurrentPageCntOfNews] = useState(defaulCntOfNewsToLoad + 3);
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    useEffect( () => {
        dispatch(loadPosts(defaulCntOfNewsToLoad)) 
    },[dispatch]);

      function loadMoreNews(){
        let setLoadMoreNews = (cntTosetCurrentPageCntOfNews,numberOfNewsItemsToLoad) =>{
          setCurrentPageCntOfNews(cntTosetCurrentPageCntOfNews)
          dispatch(loadPosts(numberOfNewsItemsToLoad))
          dispatch(setIsLoadingMore())
          setIsFetching(false);
        }
        if(!isLoading){
          if(currentPageCntOfNews + defaulCntOfNewsToLoad < numberOfNewsItems  && !isLoading){
            setLoadMoreNews(currentPageCntOfNews + defaulCntOfNewsToLoad,currentPageCntOfNews)
            // setCurrentPageCntOfNews(currentPageCntOfNews + defaulCntOfNewsToLoad)
            // dispatch(loadPosts(currentPageCntOfNews))
            // dispatch(setIsLoadingMore())
            // setIsFetching(false);
          }else if((currentPageCntOfNews + defaulCntOfNewsToLoad) >= numberOfNewsItems &&
          currentPageCntOfNews !== numberOfNewsItems && !isLoading){
            setLoadMoreNews(numberOfNewsItems,numberOfNewsItems)
            // setCurrentPageCntOfNews(numberOfNewsItems)
            // dispatch(loadPosts(numberOfNewsItems))
            // dispatch(setIsLoadingMore())
            // setIsFetching(false);
          }else {
            return null;
          }
        }else{
          return null
        }
        
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

