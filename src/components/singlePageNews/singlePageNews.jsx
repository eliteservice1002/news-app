import React from 'react';
import "./style.scss";
import {Loader} from "./../loader"

const SingleNews =({mainImg,title,content,isLoading}) => {
    
    
    return (
        <>
           
                <div className="single-news">
                <div className="sigle-news__inner">
                    <img src={mainImg} alt="" className="single-news__img-main"/>
                    <div className="single-news__content_inner">
                        <div className="single-news_title">{title}</div>
                        <div className="single-news-content">{content}</div>
                    </div>
                </div>
            </div>
        </>
    
    );
}



export default SingleNews;
