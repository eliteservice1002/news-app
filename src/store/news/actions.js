import axios from 'axios';

export const setPosts = (articles) => {
  return{
    type: 'SET_POSTS',
    payload:articles
  }
};
export const loadPosts  = (country) => async (dispatch)=>{
  var url = `http://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=4365dc8abc9748608493215dcadbfceb`;
  try {
    const news = await axios.get(url)
    
    dispatch(setPosts(news.data.articles));
  } catch (error) {
    dispatch(setPosts([]));
  }

}


