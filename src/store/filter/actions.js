export const fiterBy = (type) =>({
  type:"FILTER_BY_CAT",
  payload:{
    type,
    
  }
})

export const fiterBySource = (type) =>({
  type:"FILTER_BY_SOURCE",
  payload:{
    type,
    
  }
})

export const searchByInputValue = (value) =>({
  type: 'SEARCH_BY_INPUT_VALUE',
    payload:value
});



  
 