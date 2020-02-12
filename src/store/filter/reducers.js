const initialState = {
    inputValue:""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SEARCH_BY_INPUT_VALUE":
        return {    
          ...state,
          inputValue: action.payload,
        };
      
      default:
        return state;
    }
  };