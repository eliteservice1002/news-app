import React,{useRef} from 'react';
import { ReactComponent as Logo } from './assets/news.svg';
import siglePageNews from "./../singlePageNews/singlePageNewsContainer";
import {Route,Link} from 'react-router-dom'

// burger
import Burger from '@animated-burgers/burger-slide';
import '@animated-burgers/burger-slide/dist/styles.css' ;
import Articles from "./articles"



import "./style.scss";




const News = React.memo(({
    posts,
    searchByInputValue,
    value,
    filterBy,
    isOpenBurger,
    OpenCloseBurger,
    isLoading ,
    location
    }) => {
    
   


    // const burgerRef = useRef(null);
    // if(!document.contains(burgerRef.current))
    
    

    
   
    return (
            <div className=" news news-margin">
                <div className="news__inner ">
                    <div className="news__menu_header">
                    <Link to="/" >
                        <Logo className="news__menu_logo" />
                    </Link>
                        
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
                        <div className="burger-menu">
                            <div className="burger-menu_link">Politics</div>
                            <div className="burger-menu_link">Sport</div>
                            <div className="burger-menu_link">IT</div>
                            
                        </div>}

                    </div>
                    <div className="news__posts">
                        {isLoading ? loader():
                        <>
                         <Route exact path="/" ><Articles posts={posts} /></Route>
                         <Route exact path="/news/:url" component={siglePageNews} ></Route>
                         </>}
                         
                         
                    </div>
                </div>
            </div>
    );
})

const loader = () =>(
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
)



export default News;
