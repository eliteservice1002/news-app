import React from 'react';
import siglePageNews from "./../singlePageNews/singlePageNewsContainer";
import {Route,Switch} from 'react-router-dom'
import Header from "./header/HeaderContainer"
import Error404 from "./../erorr404"

// burger
import Articles from "./articles/articles"



import "./style.scss";




const News = React.memo(({
    posts,
    isLoading 
    }) => {
    
    
    
   
    return (
            <div className=" news news-margin">
                <div className="news__inner ">
                    <Header/>
                    <div className="news__posts">
                        {isLoading ? loader():
                        <>
                            <Switch>
                                <Route exact path="/" ><Articles posts={posts} /></Route>
                                <Route exact path="/news/:url" component={siglePageNews} />
                                <Route exact path="**" component={Error404} />
                            </Switch>
                         </>}
                         
                         
                    </div>
                </div>
            </div>
    );
})

const loader = () =>(
    <div className="news__loader">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
)



export default News;
