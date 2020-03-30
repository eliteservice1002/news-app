
// export default  loadMoreNews = (currentPageCntOfNews,) => {

//     let setLoadMoreNews = (a,cntOfNewsToLoad) =>{
//       dispatch(loadPosts(cntOfNewsToLoad))
//     }
    
//       if(currentPageCntOfNews + defaulCntOfNewsToLoad < cntOfNews  ){

//         setLoadMoreNews(currentPageCntOfNews + defaulCntOfNewsToLoad,currentPageCntOfNews)

//       }else if((currentPageCntOfNews + defaulCntOfNewsToLoad) >= cntOfNews &&
//         currentPageCntOfNews !== cntOfNews ){
//         setLoadMoreNews(cntOfNews,cntOfNews)
//       }else{
//         setIsEnd(true)
//         window.removeEventListener('scroll', handleScroll);
//       }
//   }