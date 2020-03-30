import useLoadingMore from 'hooks/useLoadingMore';
import React from 'react';
import {  useSelector } from 'react-redux';
import { getFilteredNews } from 'redux/news-selectors';
import Error404 from "components/erorr404"

import Articles from './articles';



const ArticlesContainer = () => {
    const isLoading = useSelector(state =>state.news.isLoading)
    const numberOfNewsItems = useSelector(state =>state.news.numberOfNewsItems)
    const posts = useSelector(state => getFilteredNews(state))
    const error = useSelector(state => state.news.error)
    
    const [isLoadingMore,isEnd] = useLoadingMore();

    if(error){
       return  <Error404/> 
    }
    

    return (
    <>
    
        {isLoading ? loader() : 
            <Articles
            posts={posts}
            numberOfNewsItems={numberOfNewsItems}
            isLoadingMore={isLoadingMore}
            isEnd={isEnd}
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

// import useLoadingMore from 'hooks/useLoadingMore';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadPosts, setIsLoadingMore } from 'redux/news-reducers';
// import { getFilteredNews } from 'redux/news-selectors';

// import Articles from './articles';



// const ArticlesContainer = () => {
//     const posts = useSelector(state => getFilteredNews(state))
//     const isLoading = useSelector(state =>state.news.isLoading)
    
//     const isLoadingMore = useSelector(state =>state.news.isLoadingMore)
//     const cntOfNews = useSelector(state =>state.news.numberOfNewsItems)

//     const dispatch = useDispatch();

//     const defaulCntOfNewsToLoad = 5;
//     useLoadingMore(loadMoreNews,isLoadingMore);


//     useEffect( () => {
//         dispatch(loadPosts(defaulCntOfNewsToLoad)) 
//     },[dispatch]);
    
    
//     const [currentPageCntOfNews, setCurrentPageCntOfNews] = useState(defaulCntOfNewsToLoad);

//       function loadMoreNews(){

//         let setLoadMoreNews = (cntToSetCurrentPageOfNews,cntOfNewsToLoad) =>{
//           setCurrentPageCntOfNews(cntToSetCurrentPageOfNews)
//           dispatch(setIsLoadingMore())
//           dispatch(loadPosts(cntOfNewsToLoad))
//         }
        
//           if(currentPageCntOfNews + defaulCntOfNewsToLoad < cntOfNews  ){

//             setLoadMoreNews(currentPageCntOfNews + defaulCntOfNewsToLoad,currentPageCntOfNews)

//           }else if((currentPageCntOfNews + defaulCntOfNewsToLoad) >= cntOfNews &&
//             currentPageCntOfNews !== cntOfNews ){
                
//             setLoadMoreNews(cntOfNews,cntOfNews)
//             return
//           }
          
//           return
//       }
//     //   function loadMoreNews(){
//     //     let setLoadMoreNews = (cntTosetCurrentPageOfNews,numberOfNewsItemsToLoad) =>{
//     //       setCurrentPageCntOfNews(cntTosetCurrentPageOfNews)
//     //       dispatch(loadPosts(numberOfNewsItemsToLoad))
//     //       dispatch(setIsLoadingMore())
//     //       setIsFetching(isLoadingMore);
//     //     }
          
//     //       if(currentPageCntOfNews + defaulCntOfNewsToLoad < numberOfNewsItems  && !isLoading){

//     //         setLoadMoreNews(currentPageCntOfNews + defaulCntOfNewsToLoad,currentPageCntOfNews)

//     //       }else if((currentPageCntOfNews + defaulCntOfNewsToLoad) >= numberOfNewsItems &&
//     //         currentPageCntOfNews !== numberOfNewsItems && !isLoading){

//     //         setLoadMoreNews(numberOfNewsItems,numberOfNewsItems)
//     //         return
//     //       }
          
//     //       return
          
        
//     //   }
    
//     return (
//     <>
//         {isLoading ? loader() : 
//             <Articles
//             posts={posts}
//             isLoadingMore={isLoadingMore}
//             numberOfNewsItems={cntOfNews}
//             isLoading={isLoading}
//             currentPageCntOfNews={currentPageCntOfNews}
//             />
//           }
//     </>
        
//     );
// }


// export default ArticlesContainer;

// const loader = () => (
//     <div className="news__loader">
//         <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
//     </div>
// )

