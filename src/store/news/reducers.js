

const initialState = {
    news:[],
    isLoading:true,
    IsLoadingMore:false,
    numberOfNewsItems:0,
    currentPageCntOfNews:0
    
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      
      case "SET_POSTS":
        return {    
          ...state,
          numberOfNewsItems:action.payload.numberOfNewsItems,
          news: action.payload.articles,
          isLoading:false,
          IsLoadingMore:false,
          currentPageCntOfNews:action.payload.articles.length

        };
      case "LOAD_MORE_POSTS":
        return {    
          ...state,
          news: [...action.payload],
          // news: [...state.news,...action.payload],
          IsLoadingMore:false
        };
      case "SET_IS_LOADING":
        return {    
          ...state,
          IsLoadingMore:true,
        };
      default:
        return state;
    }
  };

  