

const initialState = {
    news:[],
    isLoading:true,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_POSTS":
        return {    
          ...state,
          news: action.payload,
          isLoading:false,
        };
      default:
        return state;
    }
  };

  
// export const getFilteredNews = (state, searchValue = "", typeForFilter = "") => {
//   return state.news.filter(
//      o => o.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 
//   )
// }