import React,{useState,useRef,useEffect} from 'react';
import { connect } from 'react-redux';
import {fiterBy,searchByInputValue} from "./../../../store/news/actions.js";
import Header from "./Header"
import uniq from 'lodash/uniq';
import { withRouter } from "react-router";







const HeaderContainer = ({news ,fiterBy,history,searchByInputValue}) => {

    
    // const [isBurger, openCloseBurger] = useState(false);
    // const [className, addClass] = useState("");
    // let burgerRefParent= useRef(null);
    const [inputValue, onSearch] = useState("");
    
    // const isOpenBurger = () => openCloseBurger(!isBurger);

    let namesOfSources =  () =>{
      return uniq(news.news.map( art => art.source.name ))
    }
    
    // let  handleClickOutside = (event) => {
    //   if (burgerRefParent.current && !burgerRefParent.current.contains(event.target)) {
    //     openCloseBurger(false)
    //   }
    // }
    // useEffect(() => {
      
    //   document.addEventListener("mousedown", handleClickOutside);
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // });
    
  
    return (
      
      
      <Header 
      // searchByInputValue={onSearch}
      searchByInputValue={searchByInputValue}
      value={news.inputValue}
      // value={inputValue}
      filterBy={fiterBy}
      namesOfSource={namesOfSources()}
      isLoading={news.isLoading}
       />

    );
}

const putStateToProps = ({news}) => {
      return{
        news
    }
  }

const putDispatchToProps =  {
  searchByInputValue,
  fiterBy,
}

  export default connect(
    putStateToProps,
    putDispatchToProps,
  )(HeaderContainer)

