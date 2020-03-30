import React,{useCallback} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {fiterBy,searchByInputValue,fiterBySource} from "redux/filter-reducers";
import Header from "./Header"
import {inputValueSelector,namesOfSources,isFullPosts} from "redux/news-selectors"
// import {}



const HeaderContainer = () => {

    const sources = useSelector(state =>namesOfSources(state));

    const isLoading = useSelector(state =>state.news.isLoading);
    const isFullPostsParent = useSelector(state =>isFullPosts(state));
    
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


      isLoading={isLoading}
      catOfFiltering={catOfFiltering}
      namesOfSource={sources}
      isFullPostsChildren = {isFullPostsParent}
       />

    );
}

export default HeaderContainer;

