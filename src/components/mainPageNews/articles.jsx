import React,{useRef} from 'react';
import { ReactComponent as Logo } from './assets/news.svg';
import siglePageNews from "./../singlePageNews/singlePageNewsContainer";
import {Route,Link} from 'react-router-dom'

// burger
import Burger from '@animated-burgers/burger-slide';
import '@animated-burgers/burger-slide/dist/styles.css' ;




import "./style.scss";




const Articles = ({posts},url) => {
    
    return (
        <>
            {
                posts.map( (post,id)=>(
                        <div key={id} className={`${id%5?"col-6 col-md-4 ":"col-12 col-md-8 "}`}>
                            <Link to={`/news/${id}`}>
                                <article  className={`article article-size-color `}>
                                    <div className="atricle__additional-info atricle__source ">{post.source.name}</div>
                                    <div className="atricle__additional-info atricle__publishedAt">{post.publishedAt}</div>
                                    <div className="atricle__title">{post.title}</div>
                                    <img src={post.urlToImage} alt="" className="article_img"/>
                                </article>
                            </Link>
                        </div>
                     
                ))
            }
            </>
    );
}





export default Articles;
