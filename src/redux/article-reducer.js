
import axios from 'axios';
import { createSelector } from "reselect";

const SET_ARTICLE = "news-app/news/SET_ARTICLE";
const SET_ARTICLE_FAILED = "news-app/news/SET_ARTICLE_FAILED";
const REMOVE_ARTICLE = "news-app/news/REMOVE_ARTICLE";

const NEWS_API_KEY = process.env.REACT_APP_API_KEY;

// SELECTORS

const article = state => state.article.article

export const getArticle = createSelector(
    [article],
    article => article
)


const initialState = {
    article:{},
    isLoading:true,
    error:false
    
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      
      case SET_ARTICLE:
        return {    
          ...state,
          article:action.payload,
          isLoading:false

        };
      case SET_ARTICLE_FAILED:
        return { 
          ...state,   
          error:true

        };
      case REMOVE_ARTICLE:
        return {    
          article:{},
          isLoading:true,
          error:false
        };
        
      default:
        return state;
    }
  };




export const setArticle = (article) => {
    return{
      type: SET_ARTICLE,
      payload:article
    }
  };
export const setArticleFailed = (error) => {
    return{
      type: SET_ARTICLE_FAILED
    }
  };
export const removeArticle = () => {
    return{
      type: REMOVE_ARTICLE
    }
  };


export let loadArticle = (title) => async (dispatch) =>  {


  let url = `https://newsapi.org/v2/everything?q=${title}&apiKey=${NEWS_API_KEY}`
    try {
      const response = await axios.get(url)
      console.log("loadArticle -> response", response)
      dispatch(setArticle(response.data.articles[0]))
    } catch (error) {
      dispatch(setArticleFailed(error))
    }
  }
  
  


  