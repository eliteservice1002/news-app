
import axios from 'axios';

const SET_POSTS = "news-app/news/SET_POSTS";
const SET_POSTS_FAILED = "news-app/news/SET_POSTS_FAILED";
const SET_IS_LOADING = "news-app/news/SET_IS_LOADING";
const SET_IS_END = "news-app/news/SET_IS_END";
const REMOVE_POSTS = "news-app/news/REMOVE_POSTS";

const NEWS_API_KEY = process.env.REACT_APP_API_KEY;



const initialState = {
    news:[],
    isLoading:true,
    isLoadingMore:false,
    numberOfNewsItems:0,
    currentPageCntOfNews:5,
    isEnd:false,
    error:null
    
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      
      case SET_POSTS:
        return {    
          ...state,
          numberOfNewsItems:action.payload.numberOfNewsItems,
          news: action.payload.articles,
          isLoading:false,
          isLoadingMore:false,

        };
      case REMOVE_POSTS:
        return {    
          news:[],
          isLoading:true,
          isLoadingMore:false,
          isEnd:false,
          error:null

        };
        
      case SET_POSTS_FAILED:
        return {    
          ...state,
          error:action.payload,
          isLoading:false,

        } ;
      case SET_IS_LOADING:
        return {    
          ...state,
          isLoadingMore:true,
          currentPageCntOfNews:state.currentPageCntOfNews + 5
        };
      case SET_IS_END:
        return {    
          ...state,
          isEnd:true,
        };
      default:
        return state;
    }
  };




export const setPosts = (articles,numberOfNewsItems) => {
  return{
    type: SET_POSTS,
    payload:{
      articles,
      numberOfNewsItems
    }
  }
};
export const removePosts = () => {
  return{
    type: REMOVE_POSTS,
  }
};
export const setPostsFailed = (error) => {
  return{
    type: SET_POSTS_FAILED,
    payload:error
  }
};
export const setIsLoadingMore = (cntToload) => {
  return{
    type: SET_IS_LOADING,
    payload:cntToload
  }
};
export const setIsEnd = () => {
  return{
    type: SET_IS_END
  }
};



export const loadMorePosts  = (initital) =>  (dispatch,state)=>{

  let {currentPageCntOfNews,numberOfNewsItems} = state().news
  
  if(initital){
    dispatch(loadPosts())
  }

  if(currentPageCntOfNews  < numberOfNewsItems && !initital ){
    dispatch(setIsLoadingMore(5))
    dispatch(loadPosts())
  }else{
    dispatch(setIsEnd())
  }

}

export let loadPosts = () => async (dispatch,state) =>  {
  let {currentPageCntOfNews} = state().news
  let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${currentPageCntOfNews}&apiKey=${NEWS_API_KEY}`
    try {
      const news = await axios.get(url)
      dispatch(setPosts(news.data.articles,news.data.totalResults))
    } catch (error) {
      dispatch(setPostsFailed(error))
    }
  }
  
  














  

// export const loadPosts  = (initital) =>  (dispatch,state)=>{

//   let {currentPageCntOfNews,numberOfNewsItems} = state().news
//   console.log("loadPosts -> currentPageCntOfNews", currentPageCntOfNews)
//   console.log("loadPosts -> numberOfNewsItems", numberOfNewsItems)

// // i'd beteer use pagination api but it bot provide so i have to use that 
// let load = async () =>  {
//   let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${currentPageCntOfNews}&apiKey=${NEWS_API_KEY}`
//     try {
//       const news = await axios.get(url)
//       dispatch(setPosts(news.data.articles,news.data.totalResults))
//     } catch (error) {
//       dispatch(setPostsFailed(error))
//     }
//   }
  
//   if(!initital){
//     dispatch(setIsLoadingMore(5))
//   }else{
//     load()
//   }

//   if(currentPageCntOfNews  <= numberOfNewsItems  ){
//     load()
//   }else{
//     dispatch(setIsEnd())
//   }

// }




  