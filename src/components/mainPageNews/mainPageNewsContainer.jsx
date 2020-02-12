import React,{useEffect,useState} from 'react';
import MainPageNews from "./mainPageNews"
import axios from 'axios';
import { connect } from 'react-redux';
import siglePageNews from "./../singlePageNews/singlePageNewsContainer";
import {Route} from 'react-router-dom'

import {useDispatch,useSelector } from 'react-redux';
// import {searchByInputValue} from "./../../store/filter/actions.js"
import {loadPosts,fiterBy,searchByInputValue} from "./../../store/news/actions.js"







const NewsContainer = ({news ,filter,loadPosts,searchByInputValue,fiterBy,location}) => {

    
    const [isBurger, openCloseBurger] = useState(false);
    
    useEffect( () => {
     loadPosts()
    }, []); 

    const isOpenBurger = (e) =>{
      
      openCloseBurger(!isBurger)

    }
    
    
    
    
  
    return (
      
      <>
      
      <MainPageNews 
      searchByInputValue={searchByInputValue}
      value={news.inputValue}
      posts={news.filteredNews} 
      filterBy={fiterBy}
      isLoading={news.isLoading}
      isOpenBurger={isBurger}
      OpenCloseBurger={isOpenBurger}
      location={location}
      />
     
     
      </>
    );
}

const putStateToProps = ({news}) => {
      return{
       
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

