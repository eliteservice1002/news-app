import React from 'react';
import "./style.scss";

const SingleNews =({mainImg,title,content,originalSource}) => {
    
    
    return (
        <>
           
            <div className="single-news ">
                    <div className="single-news_img-inner col-12 pl-0 col-md-7">
                        <img src={mainImg} alt="" className="single-news__img-main "/>
                    </div>
                    <div className="single-news__content_inner col-12 col-md-5">
                        <div className="single-news_title">{title}</div>
                        <div className="single-news-content">{content}</div>
                    </div>
                    {/* <div className="single-news__original-source">{originalSource}</div> */}
            </div>
        </>
    
    );
}



export default SingleNews;
