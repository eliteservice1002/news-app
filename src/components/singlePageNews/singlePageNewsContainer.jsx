import React,{useMemo} from 'react';
import {useSelector} from "react-redux"
import SinglePageNews from "./singlePageNews"
import Error404 from "../erorr404";
import {getSingleFilteredNews} from "../../store/selectors/news"



const SingleNews =({match}) => {
    const selectFilteredNews = useMemo(getSingleFilteredNews,[])
    const filteredNews = useSelector(state =>selectFilteredNews(state,match))
    const isLoading = useSelector(state =>state.news.isLoading)


   

    if(filteredNews === undefined ){
        return <Error404/>
    }
    
    
    
    return (
        <SinglePageNews
        isLoading={isLoading}
        mainImg={filteredNews.urlToImage}
        title={filteredNews.title}
        content={filteredNews.content}
        />
    );
}


export default SingleNews;
