import React,{useRef} from 'react';
import { ReactComponent as Logo } from './assets/news.svg';

// burger
import Burger from '@animated-burgers/burger-slide';
import '@animated-burgers/burger-slide/dist/styles.css' ;




import "./style.scss";




const News = React.memo(({
    posts,
    searchByInputValue,
    value,
    filterBy,
    isOpenBurger,
    OpenCloseBurger,
    isLoading 
    }) => {


    const burgerRef = useRef(null);
    // if(!document.contains(burgerRef.current))
    
    

    
    let articles = posts.map( (post,id)=>(
        
        <div key={id} className={`${id%5?"col-6 col-md-4 ":"col-12 col-md-8 "}`}>
            <article  className={`article article-size-color `}>
                <div className="atricle__additional-info atricle__source ">{post.source.name}</div>
                <div className="atricle__additional-info atricle__publishedAt">{post.publishedAt}</div>
                <div className="atricle__title">{post.title}</div>
                <img src={post.urlToImage} alt="" className="article_img"/>
            </article>
        </div>
    ))
    return (
            <div className=" news news-margin">
                <div className="news__inner ">
                    <div className="news__menu_header">
                        <Logo className="news__menu_logo" />
                        <div className="news__filters">
                            <div onClick={() => filterBy("latest")} className="news__filter">Latest news</div>
                            <div onClick={() => filterBy("politics")} className="news__filter">Politics</div>
                            <div onClick={() => filterBy("sport")} className="news__filter">Sport</div>
                            <input type="text" 
                            className="news___input-search input-group-text"
                            value={value}
                            onChange={e => searchByInputValue(e.target.value)}
                            />
                        </div>
                        <Burger className="burger-icon"  onClick={(e) => OpenCloseBurger(e)}   isOpen={isOpenBurger}   />
                        {isOpenBurger && 
                        <div ref={burgerRef} className="burger-menu">
                            <div className="burger-menu_link">Politics</div>
                            <div className="burger-menu_link">Sport</div>
                            <div className="burger-menu_link">IT</div>
                            
                        </div>}

                    </div>
                    <div className="news__posts">
                        {isLoading ? loader():
                         articles}
                    </div>
                </div>
            </div>
    );
})

const loader = () =>(
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
)



export default News;
