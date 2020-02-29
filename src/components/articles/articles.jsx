import React,{memo} from 'react';
import {Link, withRouter} from 'react-router-dom'
import "./style.scss";





const Articles = ({posts,isLoadingMore,isLoading,numberOfNewsItems,currentPageCntOfNews,location}) => {
    if(posts.length === 0){
        return <div className="not-founded-post">No posts were found for the specified criteria</div> 
    }
    
    
    
    return (
        <>
        {!isLoading && <div className="news__articles-state">
            <div className="news__artiles-state_total">{numberOfNewsItems} news found</div>
        </div>}
            {
                posts.map( (post,id)=>(
                        <div key={id} className={`${id%5?"col-12 col-sm-6 col-lg-4 ":"col-12 col-lg-8"}`}>
                            <Link to={`/news/${id}`}>
                                <article  className="article article-size-color ">
                                    <div className="atricle__additional-info atricle__additional-info-source ">{post.source.name}</div>
                                    <div className="atricle__title">{post.title}</div>
                                    <img src={post.urlToImage} alt="" className="article_img"/>
                                </article>
                            </Link>
                        </div>
                     
                ))
            }
            {isLoadingMore && <div className="more-loading">Loading more news...</div>}
            {(currentPageCntOfNews === numberOfNewsItems && location.pathname === '/') && <div className="more-loading">We found only {numberOfNewsItems} news</div>}
           
            </>
    );
}





export default withRouter(memo(Articles));
