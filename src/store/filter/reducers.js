const initialState = {
    inputValue:"",
    type:"",
    sourceToFilter:""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SEARCH_BY_INPUT_VALUE":
        return {    
          ...state,
          inputValue: action.payload,
          sourceToFilter:""
        };
        case "FILTER_BY_SOURCE":
          return{
            ...state,
            sourceToFilter:action.payload.type,
            inputValue:""
          }
        case "FILTER_BY_CAT":
          return{
            ...state,
            type:action.payload.type,

          }
      default:
        return state;
    }
  };

  