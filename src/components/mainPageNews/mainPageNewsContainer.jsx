import React,{useEffect,useState} from 'react';
import MainPageNews from "./mainPageNews"
import axios from 'axios';
import { connect } from 'react-redux';

import {useDispatch,useSelector } from 'react-redux';
// import {searchByInputValue} from "./../../store/filter/actions.js"
import {loadPosts,fiterBy,searchByInputValue} from "./../../store/news/actions.js"







const NewsContainer = ({news ,filter,loadPosts,searchByInputValue,fiterBy}) => {
    
    const [isBurger, openCloseBurger] = useState(false);
    
    useEffect( () => {
     loadPosts()
    }, []); 

    const isOpenBurger = (e) =>{
      
      openCloseBurger(!isBurger)

    }
    
    
    
    
    
    return (
      
      <div>
      
      <MainPageNews 
      searchByInputValue={searchByInputValue}
      value={news.inputValue}
      posts={news.filteredNews} 
      filterBy={fiterBy}
      isLoading={news.isLoading}
      isOpenBurger={isBurger}
      OpenCloseBurger={isOpenBurger}
      />
     
      </div>
    );
}

const putStateToProps = ({filter,news}) => {
      return{
        filter,
        news
    }
  }

const putDispatchToProps =  {
  searchByInputValue,
  loadPosts,
  fiterBy,
}

export default connect(
  putStateToProps,
  putDispatchToProps,
)(NewsContainer);

