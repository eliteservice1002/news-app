import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';

const initialState = {
    news:null,
    filteredNews:null,
    isLoading:true,
    inputValue:""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_POSTS":
        return {    
          ...state,
          news: action.payload,
          filteredNews: action.payload,
          isLoading:false,
        };
      case "SEARCH_BY_INPUT_VALUE":
        return {    
          ...state,
          inputValue: action.payload,
          filteredNews:state.news.filter(
              o =>
                o.title.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0 
            )
        };
      case "FILTER_BY":
        switch (action.payload) {
          case "latest":
            return {
              ...state,
              news:orderBy(state.news,"publishedAt","asc")
            };
          case "politics":
            return {
              ...state,
              news:orderBy(state.news,"title","asc")
            };
          case "sport":
            return {
              ...state,
              news:orderBy(state.news,"source.id","asc")
            };
            
        
          default:
            break;
        }
      default:
        return state;
    }
  };