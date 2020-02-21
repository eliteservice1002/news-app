import React,{useCallback} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {fiterBy,searchByInputValue,fiterBySource} from "../../store/filter/actions";
import Header from "./Header"
import uniq from 'lodash/uniq';
import {mainNews,inputValueSelector} from "../../store/selectors/news"



const HeaderContainer = () => {

    const news = useSelector(state =>mainNews(state));
    const isLoading = useSelector(state =>state.news.isLoading);
    const inputValue = useSelector(state =>inputValueSelector(state));
    const dispatch = useDispatch();
    

    let catOfFiltering = ["latest","alphabetically"]
  
    return (
      
      
      <Header 
      searchByInputValue={useCallback((value) =>
        dispatch(searchByInputValue(value)),[dispatch]) }

      value={inputValue}
      filterBy={useCallback((type)=>
        dispatch(fiterBy(type)),[dispatch])}

      fiterBySource={useCallback((type)=>
        dispatch(fiterBySource(type)),[dispatch])}

      namesOfSource={uniq(news.map( art => art.source.name ))}
      isLoading={isLoading}
      catOfFiltering={catOfFiltering}
       />

    );
}

export default HeaderContainer;

