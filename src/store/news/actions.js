import axios from 'axios';

export const setPosts = (articles,numberOfNewsItems) => {
  return{
    type: 'SET_POSTS',
    payload:{
      articles,
      numberOfNewsItems
    }
  }
};
// export const addMorePosts = (articles) => {
//   return{
//     type: 'LOAD_MORE_POSTS',
//     payload:articles,
//   }
// };
export const setIsLoadingMore = () => {
  return{
    type: 'SET_IS_LOADING'
  }
};


export const loadPosts  = (cnt) => async (dispatch)=>{
  var url = `http://newsapi.org/v2/top-headlines?country=us&pageSize=${cnt}&apiKey=4365dc8abc9748608493215dcadbfceb`;
  try {
    const news = await axios.get(url)
    
    dispatch(setPosts(news.data.articles,news.data.totalResults));
  } catch (error) {
    dispatch(setPosts([]));
  }

}

// export const loadMorePosts  = (cnt) => async (dispatch)=>{
//   var url = `http://newsapi.org/v2/top-headlines?pageSize=${cnt}&country=us&category=business&apiKey=4365dc8abc9748608493215dcadbfceb`;
//   try {
//     const news = await axios.get(url)
//     dispatch(addMorePosts(news.data.articles));
//   } catch (error) {
//     dispatch(addMorePosts([]));
//   }

// }


