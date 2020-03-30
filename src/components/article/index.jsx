import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import SinglePageNews from "./article"
import Error404 from "components/erorr404";
import {loadArticle,getArticle,removeArticle} from "redux/article-reducer"



const SingleNews =({match}) => {
    const dispath = useDispatch()

    useEffect(() => {
        dispath(loadArticle(match.params.url))
        return () => dispath(removeArticle())
        // eslint-disable-next-line
    }, []);
    
    const isLoading = useSelector(state =>state.article.isLoading)
    const isError = useSelector(state =>state.article.error)

    const article = useSelector(state =>getArticle(state) )


    if(isError || !article){
        return <Error404 />
    }
    
    return (
        <>
            { isLoading ?loader():
            <SinglePageNews
            article={article}
            /> }
        </>
    );
}

export default SingleNews;

const loader = () => (
    <div className="news__loader">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
)
