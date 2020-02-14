import React,{useEffect,useState,useRef} from 'react';
import MainPageNews from "./mainPageNews"
import { connect } from 'react-redux';
import {loadPosts} from "./../../store/news/actions.js"







const NewsContainer = ({news ,loadPosts,history}) => {

    
    
    useEffect( () => {
     loadPosts()

    }, []); 

    

    return (
      <MainPageNews
      posts={news.filteredNews} 
      isLoading={news.isLoading}
      history={history}
      />
    );
}

const putStateToProps = ({news}) => {
      return{
        news
    }
  }

const putDispatchToProps =  {
  loadPosts,
}

export default connect(
  putStateToProps,
  putDispatchToProps,
)(NewsContainer);

