import useLoadingMore from 'hooks/useLoadingMore';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts, setIsLoadingMore } from 'redux/news-reducers';
import { getFilteredNews } from 'redux/news-selectors';

import Articles from './articles';



const ArticlesContainer = () => {
    const posts = useSelector(state => getFilteredNews(state))
    const isLoading = useSelector(state =>state.news.isLoading)
    
    const isLoadingMore = useSelector(state =>state.news.isLoadingMore)
    const numberOfNewsItems = useSelector(state =>state.news.numberOfNewsItems)

    const dispatch = useDispatch();

    const defaulCntOfNewsToLoad = 5;
    const [] = useLoadingMore(loadMoreNews,isLoadingMore);

    useEffect( () => {
        dispatch(loadPosts(defaulCntOfNewsToLoad)) 
    },[dispatch]);
    


    const [currentPageCntOfNews, setCurrentPageCntOfNews] = useState(defaulCntOfNewsToLoad);



      function loadMoreNews(){
        let setLoadMoreNews = (cntToSetCurrentPageOfNews,numberOfNewsItemsToLoad) =>{
          setCurrentPageCntOfNews(cntToSetCurrentPageOfNews)
          dispatch(setIsLoadingMore())
          dispatch(loadPosts(numberOfNewsItemsToLoad))
        }
          if(currentPageCntOfNews + defaulCntOfNewsToLoad < numberOfNewsItems  ){

            setLoadMoreNews(currentPageCntOfNews + defaulCntOfNewsToLoad,currentPageCntOfNews)

          }else if((currentPageCntOfNews + defaulCntOfNewsToLoad) >= numberOfNewsItems &&
            currentPageCntOfNews !== numberOfNewsItems ){
                
            setLoadMoreNews(numberOfNewsItems,numberOfNewsItems)
            return
          }
          
          return
          
        
      }
    //   function loadMoreNews(){
    //     let setLoadMoreNews = (cntTosetCurrentPageOfNews,numberOfNewsItemsToLoad) =>{
    //       setCurrentPageCntOfNews(cntTosetCurrentPageOfNews)
    //       dispatch(loadPosts(numberOfNewsItemsToLoad))
    //       dispatch(setIsLoadingMore())
    //       setIsFetching(isLoadingMore);
    //     }
          
    //       if(currentPageCntOfNews + defaulCntOfNewsToLoad < numberOfNewsItems  && !isLoading){

    //         setLoadMoreNews(currentPageCntOfNews + defaulCntOfNewsToLoad,currentPageCntOfNews)

    //       }else if((currentPageCntOfNews + defaulCntOfNewsToLoad) >= numberOfNewsItems &&
    //         currentPageCntOfNews !== numberOfNewsItems && !isLoading){

    //         setLoadMoreNews(numberOfNewsItems,numberOfNewsItems)
    //         return
    //       }
          
    //       return
          
        
    //   }
    
    return (
    <>
        {isLoading ? loader() : 
            <Articles
            posts={posts}
            isLoadingMore={isLoadingMore}
            numberOfNewsItems={numberOfNewsItems}
            isLoading={isLoading}
            currentPageCntOfNews={currentPageCntOfNews}
            />
          }
    </>
        
    );
}


export default ArticlesContainer;

const loader = () => (
    <div className="news__loader">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
)

