const initialState = {
    inputValue:"",
    type:"",
    // arrOfSources:[]
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SEARCH_BY_INPUT_VALUE":
        return {    
          ...state,
          inputValue: action.payload,
        };
        case "FILTER_BY_CAT":
          return{
            ...state,
            type:action.payload.type,
            // arrOfSources:action.payload.arrOfSources,
          }
      default:
        return state;
    }
  };

  