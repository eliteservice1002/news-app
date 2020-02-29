const FILTER_BY_CAT = "news-app/filter/FILTER_BY_CAT";
const FILTER_BY_SOURCE = "news-app/filter/FILTER_BY_SOURCE";
const SEARCH_BY_INPUT_VALUE = "news-app/filter/SEARCH_BY_INPUT_VALUE";

const initialState = {
    inputValue:"",
    type:"",
    sourceToFilter:""
  };
  
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_BY_INPUT_VALUE:
        return {    
          ...state,
          inputValue: action.payload,
          sourceToFilter:""
        };
        case FILTER_BY_SOURCE:
          return{
            ...state,
            sourceToFilter:action.payload,
            inputValue:""
          }
        case FILTER_BY_CAT:
          return{
            ...state,
            type:action.payload,

          }
      default:
        return state;
    }
  };



  export const fiterBy = (type) =>({
    type:FILTER_BY_CAT,
    payload:type
  })
  
  export const fiterBySource = (type) =>({
    type:FILTER_BY_SOURCE,
    payload:type
  })
  
  export const searchByInputValue = (value) =>({
    type: SEARCH_BY_INPUT_VALUE,
      payload:value
  });
  
  
  
    
   

  