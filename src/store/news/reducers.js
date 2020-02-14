import orderBy from 'lodash/orderBy';

const initialState = {
    news:[],
    filteredNews:[],
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
         
      case "FILTER_BY_CAT":
        if(action.payload.type === "latest"){
          return {
            ...state,
            filteredNews:orderBy(state.filteredNews,"publishedAt","desc")
          };
        }else if(action.payload.type === "alphabetically"){
          return {
            ...state,
            filteredNews:orderBy(state.filteredNews,"title","asc")
          };
        }else if(action.payload.arrOfSources.some(s=> s == action.payload.type)) {
          return{
            ...state,
            filteredNews:state.news.filter(
              o =>
                o.source.name.toLowerCase().indexOf(action.payload.type.toLowerCase()) >= 0 
            )
          }
        }
        
        else if(action.payload.type == "home"){
          return{
            ...state,
            filteredNews:state.news
          }
        }
        
      default:
        return state;
    }
  };

  
// export const getFilteredNews = (state, searchValue = "", typeForFilter = "") => {
//   return state.news.filter(
//      o => o.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 
//   )
// }