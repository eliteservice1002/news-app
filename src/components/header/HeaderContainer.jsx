import React,{useCallback,useMemo} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {fiterBy,searchByInputValue,fiterBySource} from "../../store/filter/actions";
import Header from "./Header"
import {inputValueSelector,namesOfSources,isFullPosts} from "../../store/selectors/news"



const HeaderContainer = () => {

    const slcNamesOfSources = useMemo(namesOfSources,[])
    const sources = useSelector(state =>slcNamesOfSources(state));

    const isLoading = useSelector(state =>state.news.isLoading);
    const isFullPostsParent = useSelector(state =>isFullPosts(state));
    
    const slcInputValueSelector = useMemo(inputValueSelector,[])
    const inputValue = useSelector(state =>slcInputValueSelector(state));
    

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

