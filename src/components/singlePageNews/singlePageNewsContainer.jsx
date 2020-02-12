import React from 'react';
import {connect} from "react-redux"
import { useRouteMatch } from "react-router-dom";

import SinglePageNews from "./singlePageNews"

const SingleNews =({news}) => {
console.log("TCL: news", news)

   
const url = useRouteMatch().params.url;


    
    
    return (
        <SinglePageNews
        isLoading={news.isLoading}
        mainImg={news.filteredNews[url].urlToImage}
        url={url}
        />
    );
}





const putStateToProps = ({filter,news}) => {
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
