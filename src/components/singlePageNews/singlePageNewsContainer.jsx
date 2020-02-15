import React from 'react';
import {connect} from "react-redux"
import { useRouteMatch } from "react-router-dom";
import SinglePageNews from "./singlePageNews"
import Error404 from "./../erorr404";
import {getFilteredNews} from "./../../store/selectors/news"



const SingleNews =({filteredNews,isLoading}) => {



   
const paramsUrl = useRouteMatch().params.url;

    if(filteredNews[paramsUrl] == undefined ){
        return <Error404/>
    }else if(filteredNews.length === 0){
        return(
            <div>Not found a single post</div>
        )
    }
    
    
    return (
        <SinglePageNews
        isLoading={isLoading}
        mainImg={filteredNews[paramsUrl].urlToImage}
        title={filteredNews[paramsUrl].title}
        content={filteredNews[paramsUrl].content}
        originalSource={filteredNews[paramsUrl].url}
        
        />
    );
}





const putStateToProps = (state,{match}) => {
    return{
    isLoading:state.news.loading,
    filteredNews:getFilteredNews(state)
  }
}

const putDispatchToProps =  {

}

export default connect(
putStateToProps,
putDispatchToProps,
)(SingleNews);
