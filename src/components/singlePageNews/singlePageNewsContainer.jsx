import React from 'react';
import {connect} from "react-redux"
import { useRouteMatch } from "react-router-dom";
import SinglePageNews from "./singlePageNews"
import Error404 from "./../erorr404"


const SingleNews =({news,location}) => {
console.log("TCL: location", location)



   
const paramsUrl = useRouteMatch().params.url;

    if(news.filteredNews[paramsUrl] == undefined ){
        return <Error404/>
    }else if(news.filteredNews.length === 0){
        return(
            <div>Not found a single post</div>
        )
    }
    
    
    return (
        <SinglePageNews
        isLoading={news.isLoading}
        mainImg={news.filteredNews[paramsUrl].urlToImage}
        title={news.filteredNews[paramsUrl].title}
        content={news.filteredNews[paramsUrl].content}
        originalSource={news.filteredNews[paramsUrl].url}
        
        />
    );
}





const putStateToProps = ({news}) => {
    return{
     news
  }
}

const putDispatchToProps =  {

}

export default connect(
putStateToProps,
putDispatchToProps,
)(SingleNews);
