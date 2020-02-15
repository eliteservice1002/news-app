import React from 'react';
import { connect } from 'react-redux';
import {fiterBy,searchByInputValue} from "./../../../store/filter/actions.js";
import Header from "./Header"
import uniq from 'lodash/uniq';
import {mainNews} from "./../../../store/selectors/news"







const HeaderContainer = ({isLoading,news,fiterBy,inputValue,searchByInputValue}) => {

    
    

    let namesOfSources =  () =>{
      return uniq(news.map( art => art.source.name ))
    }
    
    let catOfFiltering = ["latest","alphabetically"]
  
    return (
      
      
      <Header 
      searchByInputValue={searchByInputValue}
      value={inputValue}
      filterBy={fiterBy}
      namesOfSource={namesOfSources()}
      isLoading={isLoading}
      catOfFiltering={catOfFiltering}
       />

    );
}

const putStateToProps = (state) => {
      return{
        isLoading:state.news.isLoading,
        inputValue:state.filter.inputValue,
        news:mainNews(state)
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

