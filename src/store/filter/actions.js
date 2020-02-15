export const fiterBy = (type,arrOfSources = []) =>({
  type:"FILTER_BY_CAT",
  payload:{
    type,
    arrOfSources
  }
})

export const searchByInputValue = (value) =>({
  type: 'SEARCH_BY_INPUT_VALUE',
    payload:value
});



  
 