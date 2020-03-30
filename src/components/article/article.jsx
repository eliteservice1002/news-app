import React,{useEffect,memo } from 'react';
import { useLocation } from "react-router-dom";
import "./style.scss";

const SingleNews =({article}) => {
    const { pathname } = useLocation();

    const {urlToImage,title,content} = article
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname])
    
    
    return (
        
            <div className="single-news ">
                    <div className="single-news_img-inner col-12 pl-0 col-xl-7" style={{background:`url(${urlToImage}) no-repeat center center / cover`}}/>
                    <div className="single-news__content_inner col-12 col-xl-5">
                        <div className="single-news_title">{title}</div>
                        <div className="single-news-content">{content}</div>
                    </div>
            </div>
    
    );
}



export default memo(SingleNews);
