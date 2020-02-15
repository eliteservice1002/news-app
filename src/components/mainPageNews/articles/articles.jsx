import React from 'react';
import {Link} from 'react-router-dom'
import "./style.scss";
import Error404 from "./../../erorr404"

// burger




const Articles = ({posts}) => {
    
    if(posts.length === 0){
        return <div className="not-founded-post">Not found a single post</div> 
    }

    let currentTime = new DataCue;
    console.log("TCL: currentTime", currentTime)

    let offset = new Date().getTimezoneOffset();
    console.log("TCL: offset", offset)
    
    // console.log("TCL: before", posts[1].publishedAt)

    //  let cleanDate = () =>{
    //     return posts[1].publishedAt.replace(/[-:A-Z]/g," " )
    // }
   

    // console.log("TCL: after",  cleanDate())
    // console.log(new Date());

    
    return (
        <>
            {
                posts.map( (post,id)=>(
                        <div key={id} className={`${id%5?"col-6 col-lg-4 ":"col-12 col-lg-8 "}`}>
                            <Link to={`/news/${id}`}>
                                <article  className={`article article-size-color `}>
                                    <div className="atricle__additional-info atricle__source ">{post.source.name}</div>
                                    <div className="atricle__additional-info atricle__publishedAt">{post.publishedAt.replace(/[-A-Z]/g," " )}</div>
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
