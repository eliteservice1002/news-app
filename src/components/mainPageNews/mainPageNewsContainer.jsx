import React,{useEffect,useState,useRef} from 'react';
import MainPageNews from "./mainPageNews"
import { connect } from 'react-redux';
import {loadPosts} from "./../../store/news/actions.js"
// import {getFilteredNews} from "./../../store/selectors/news"
import {getFilteredNews} from "./../../store/selectors/news"







const NewsContainer = ({filteredNews ,news,loadPosts,history}) => {

    
    
    useEffect( () => {
      loadPosts()
    }, []); 

    return (
      <MainPageNews

      posts={filteredNews} 
      isLoading={news.isLoading}
      history={history}
      />
    );
}

const putStateToProps = (store,props) => {
      return{
        news:store.news,
        filteredNews:getFilteredNews(store)
    }
  }

const putDispatchToProps =  {
  loadPosts,
}

export default connect(
  putStateToProps,
  putDispatchToProps,
)(NewsContainer);

