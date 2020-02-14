import axios from 'axios';

export const setPosts = (articles) => {
  return{
    type: 'SET_POSTS',
    payload:articles
  }
};
export const loadPosts  = () => async (dispatch,state)=>{
  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=4365dc8abc9748608493215dcadbfceb';
  try {
    const news = await axios.get(url)
    
    dispatch(setPosts(news.data.articles));
  } catch (error) {
    console.error(error);
  }

}

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

