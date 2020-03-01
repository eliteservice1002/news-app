
import axios from 'axios';

const SET_POSTS = "news-app/news/SET_POSTS";
const SET_POSTS_FAILED = "news-app/news/SET_POSTS_FAILED";
const SET_IS_LOADING = "news-app/news/SET_IS_LOADING";


const NEWS_API_KEY = process.env.REACT_APP_API_KEY;



const initialState = {
    news:[],
    isLoading:true,
    isLoadingMore:false,
    numberOfNewsItems:0,
    currentPageCntOfNews:0,
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
          currentPageCntOfNews:action.payload.articles.length

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
export const setPostsFailed = (error) => {
  return{
    type: SET_POSTS_FAILED,
    payload:error
  }
};
export const setIsLoadingMore = () => {
  return{
    type: SET_IS_LOADING
  }
};


export const loadPosts  = (cnt) => async (dispatch)=>{
  var url = `http://newsapi.org/v2/top-headlines?country=us&pageSize=${cnt}&apiKey=${NEWS_API_KEY}`;
  try {
    const news = await axios.get(url)
    dispatch(setPosts(news.data.articles,news.data.totalResults));
  } catch (error) {
    dispatch(setPostsFailed(error));
  }

}




  