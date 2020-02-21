import React,{useEffect,memo } from 'react';
import "./style.scss";
import { useLocation } from "react-router-dom";

const SingleNews =({mainImg,title,content}) => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
    
    return (
        
            <div className="single-news ">
                    <div className="single-news_img-inner col-12 pl-0 col-lg-7">
                        <img src={mainImg} alt="" className="single-news__img-main "/>
                    </div>
                    <div className="single-news__content_inner col-12 col-lg-5">
                        <div className="single-news_title">{title}</div>
                        <div className="single-news-content">{content}</div>
                    </div>
            </div>
    
    );
}



export default memo(SingleNews);
